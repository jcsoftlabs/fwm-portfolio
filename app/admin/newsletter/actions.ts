"use server";

import { Resend } from "resend";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendNewsletterBlast(formData: FormData) {
  const subject = formData.get("subject") as string;
  const content = formData.get("content") as string;

  if (!subject || !content) return { error: "Veuillez remplir tous les champs." };

  const subscribers = await prisma.subscriber.findMany({
    select: { email: true }
  });

  if (subscribers.length === 0) {
    return { error: "Aucun abonné enregistré." };
  }

  // Format content with line breaks
  const htmlContent = `
    <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; color: #1a1a2e;">
      ${content.replace(/\n/g, "<br/>")}
      <hr style="margin-top: 30px; border: 0; border-top: 1px solid #e2e8f0;" />
      <p style="font-size: 12px; color: #64748b;">
        Vous recevez cet email car vous êtes inscrit à la newsletter de Fritz William Michel.
      </p>
    </div>
  `;

  try {
    const emailsToSend = subscribers.map(sub => ({
      from: "Fritz William Michel <onboarding@resend.dev>", // Replace with verified domain
      to: [sub.email],
      subject: subject,
      html: htmlContent,
    }));

    // @ts-ignore - Resend batch send
    await resend.batch.send(emailsToSend);
    
  } catch (error) {
    console.error("Erreur envoi newsletter:", error);
    return { error: "L'envoi de la newsletter a échoué." };
  }

  redirect("/admin/newsletter");
}
