"use server";

import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/zod-schemas";
import { sendContactEmail } from "@/lib/nodemailer";

export async function submitContact(prevState: any, formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    brandModel: formData.get("brandModel"),
    fuelType: formData.get("fuelType"),
    registrationDate: formData.get("registrationDate"),
    message: formData.get("message"),
  };

  const validated = contactSchema.safeParse(rawData);

  if (!validated.success) {
    return { 
      success: false, 
      errors: validated.error.flatten().fieldErrors 
    };
  }

  try {
    // 1. Save to Database
    await prisma.contactSubmission.create({
      data: validated.data,
    });

    // 2. Send Email
    await sendContactEmail(validated.data);

    return { success: true, message: "Votre message a été envoyé avec succès !" };
  } catch (error) {
    console.error("Contact Error:", error);
    return { success: false, message: "Une erreur est survenue lors de l'envoi." };
  }
}