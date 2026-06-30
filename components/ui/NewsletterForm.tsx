"use client";

import { useState } from "react";
import { subscribeNewsletter } from "@/app/actions";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await subscribeNewsletter(formData);

    if (result.error) {
      setStatus("error");
      setMessage(result.error);
    } else {
      setStatus("success");
      setMessage("Merci de votre inscription !");
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex max-w-sm mt-4">
        <input
          type="email"
          name="email"
          required
          placeholder="Votre adresse email"
          className="w-full bg-white/5 border border-white/20 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-gold focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-gold px-4 py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-goldLight transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "..." : "S'inscrire"}
        </button>
      </form>
      {status === "success" && <p className="text-green-400 text-xs mt-2">{message}</p>}
      {status === "error" && <p className="text-red-400 text-xs mt-2">{message}</p>}
    </div>
  );
}
