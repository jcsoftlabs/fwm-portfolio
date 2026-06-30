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
        <div className="bg-green-50 text-green-700 p-4 border border-green-200 text-sm">
          {message}
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-50 text-red-700 p-4 border border-red-200 text-sm">
          {message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy">
          Nom complet *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Votre nom"
          className="w-full rounded-none border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-gold focus:bg-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="vous@exemple.com"
          className="w-full rounded-none border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-gold focus:bg-white"
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-navy">
          Objet
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Objet de votre message"
          className="w-full rounded-none border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-gold focus:bg-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Votre demande"
          className="w-full rounded-none border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-gold focus:bg-white"
        />
      </div>
      <button type="submit" className="w-full sm:w-fit mt-2 bg-navy px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gold text-white transition-colors disabled:opacity-50" disabled={status === "loading"}>
        {status === "loading" ? "Envoi en cours..." : "Envoyer la demande"}
      </button>
    </form>
  );
}
