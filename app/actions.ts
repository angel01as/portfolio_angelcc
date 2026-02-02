"use server"
import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
  const nombre = formData.get('nombre');
  const email = formData.get('email');
  const mensaje = formData.get('mensaje');

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com", // Para Outlook
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Te llega a ti mismo
      subject: `Nuevo contacto de ${nombre}`,
      text: `Email: ${email}\nMensaje: ${mensaje}`,
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}