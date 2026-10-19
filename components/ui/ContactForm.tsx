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
        <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-sm text-emerald-300">
          {message}
        </div>
      )}
      {status === "error" && (
        <div className="rounded-xl border border-rose-400/25 bg-rose-500/10 p-4 text-sm text-rose-300">
          {message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
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
        <label htmlFor="email" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
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
        <label htmlFor="subject" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
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
        <label htmlFor="message" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
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
      <button type="submit" className="btn-gold mt-2 w-full sm:w-fit disabled:opacity-50" disabled={status === "loading"}>
        {status === "loading" ? "Envoi en cours..." : "Envoyer la demande →"}
      </button>
    </form>
  );
}
