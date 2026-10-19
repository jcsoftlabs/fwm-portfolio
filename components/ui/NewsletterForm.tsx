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
      <form onSubmit={handleSubmit} className="mt-5 flex max-w-sm items-center rounded-full border border-white/10 bg-white/[0.04] p-1 transition focus-within:border-gold/50">
        <input
          type="email"
          name="email"
          required
          placeholder="Votre adresse email"
          className="w-full min-w-0 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-gold shrink-0 !px-4 !py-2.5 !text-[10px] disabled:opacity-50"
        >
          {status === "loading" ? "..." : "S'inscrire"}
        </button>
      </form>
      {status === "success" && <p className="text-green-400 text-xs mt-2">{message}</p>}
      {status === "error" && <p className="text-red-400 text-xs mt-2">{message}</p>}
    </div>
  );
}
