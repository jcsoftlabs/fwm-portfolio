"use server";

import { Resend } from "resend";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Veuillez remplir tous les champs obligatoires." };
  }

  try {
    await resend.emails.send({
      from: "Contact FWM <onboarding@resend.dev>", // Replace with your verified domain in production
      to: "admin@fritzwilliammichel.ht", // Replace with your actual email
      replyTo: email,
      subject: `Nouveau message: ${subject || "Sans objet"}`,
      html: `
        <h2>Nouveau message depuis le site officiel</h2>
        <p><strong>De:</strong> ${name} (${email})</p>
        <p><strong>Objet:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { error: "Une erreur est survenue lors de l'envoi du message." };
  }
}

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email) {
    return { error: "Veuillez entrer une adresse email." };
  }

  try {
    // Save to database
    await prisma.subscriber.upsert({
      where: { email },
      update: {},
      create: { email },
    });

    // Send welcome email
    await resend.emails.send({
      from: "Fritz William Michel <onboarding@resend.dev>", // Replace with verified domain
      to: email,
      subject: "Bienvenue à la newsletter de Fritz William Michel",
      html: `
        <h2>Merci de votre inscription</h2>
        <p>Vous êtes désormais inscrit à ma newsletter officielle.</p>
        <p>Vous recevrez mes prochains communiqués et actualités.</p>
      `,
    });

    revalidatePath("/admin/newsletter");
    return { success: true };
  } catch (error) {
    console.error("Newsletter error:", error);
    return { error: "Impossible de vous inscrire. Peut-être l'êtes-vous déjà ?" };
  }
}
