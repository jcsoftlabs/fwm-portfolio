"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Identifiants incorrects");
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="max-w-md w-full p-8 bg-white shadow-strong border border-slate-200">
        <div className="text-center mb-8">
          <div className="inline-flex h-12 w-16 items-center justify-center bg-navy text-white font-bold tracking-widest text-sm mb-4">
            FWM
          </div>
          <h1 className="font-display text-2xl font-semibold text-navy">Administration</h1>
          <p className="text-sm text-steel mt-2">Accès restreint à l'espace de gestion</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-gold text-white font-bold uppercase tracking-widest text-xs py-3 hover:bg-goldLight transition-colors disabled:opacity-50"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
