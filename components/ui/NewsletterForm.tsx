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
      <form onSubmit={handleSubmit} className="mt-5 flex max-w-sm gap-3">
        <input
          type="email"
          name="email"
          required
          placeholder="Votre adresse email"
          className="field min-w-0 !py-3"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="neu-btn shrink-0 !px-4 !py-3 !text-accent disabled:opacity-50"
        >
          {status === "loading" ? "..." : "S'inscrire"}
        </button>
      </form>
      {status === "success" && <p className="text-emerald-700 text-xs mt-2">{message}</p>}
      {status === "error" && <p className="text-rose-700 text-xs mt-2">{message}</p>}
    </div>
  );
}
