"use client";

import { useState } from "react";
import { sendContactMessage } from "@/app/actions";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await sendContactMessage(formData);

    if (result.error) {
      setStatus("error");
      setMessage(result.error);
    } else {
      setStatus("success");
      setMessage("Votre message a été envoyé avec succès !");
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      {status === "success" && (
        <div className="rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
          {message}
        </div>
      )}
      {status === "error" && (
        <div className="rounded-md border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
          {message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="mb-3 block text-xs font-medium uppercase tracking-[0.12em] text-heading">
          Nom complet *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Votre nom"
          className="field"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-3 block text-xs font-medium uppercase tracking-[0.12em] text-heading">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="vous@exemple.com"
          className="field"
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-3 block text-xs font-medium uppercase tracking-[0.12em] text-heading">
          Objet
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Objet de votre message"
          className="field"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-3 block text-xs font-medium uppercase tracking-[0.12em] text-heading">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Votre demande"
          className="field"
        />
      </div>
      <button type="submit" className="neu-btn mt-2 w-full !text-accent disabled:opacity-50" disabled={status === "loading"}>
        {status === "loading" ? "Envoi en cours..." : "Envoyer la demande →"}
      </button>
    </form>
  );
}
