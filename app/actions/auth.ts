"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { signToken } from "@/lib/auth";
import { loginSchema } from "@/lib/zod-schemas";

export async function loginAction(prevState: any, formData: FormData) {
  const validatedFields = loginSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    return { error: "Identifiants invalides." };
  }

  const { username, password } = validatedFields.data;

  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return { error: "Identifiants incorrects." };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { error: "Identifiants incorrects." };
    }

    const token = await signToken({ userId: user.id, role: user.role });

    cookies().set("boitemini-session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 2, // 2 hours
    });
  } catch (error) {
    return { error: "Une erreur est survenue lors de la connexion." };
  }

  redirect("/admin");
}

export async function logoutAction() {
  cookies().delete("boitemini-session");
  redirect("/admin/login");
}