import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.orange.fr",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || "kevin.bertrand734@orange.fr",
    pass: process.env.SMTP_PASS || "Zenith512!",
  },
});

export async function sendContactEmail(data: any) {
  const recipient = process.env.EMAIL_RECIPIENT || "kbertrand512@gmail.com";
  
  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px;">
      <h2 style="color: #1e40af;">Nouveau message de contact</h2>
      <p><strong>Nom:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Téléphone:</strong> ${data.phone || 'Non renseigné'}</p>
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
      <p><strong>Véhicule:</strong> ${data.brandModel || 'Non renseigné'}</p>
      <p><strong>Carburant:</strong> ${data.fuelType || 'Non renseigné'}</p>
      <p><strong>Date MEC:</strong> ${data.registrationDate ? new Date(data.registrationDate).toLocaleDateString() : 'Non renseigné'}</p>
      <div style="background: #f8fafc; padding: 15px; border-radius: 4px; margin-top: 20px;">
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      </div>
    </div>
  `;

  return transporter.sendMail({
    from: process.env.SMTP_USER || "kevin.bertrand734@orange.fr",
    to: recipient,
    subject: `Nouveau message de ${data.name} - BoiteMini`,
    html: htmlContent,
  });
}