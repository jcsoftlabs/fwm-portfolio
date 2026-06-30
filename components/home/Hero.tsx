import Image from "next/image";
import { profile } from "@/lib/mock-data";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative reveal-fade overflow-hidden bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

        {/* LEFT — Text content */}
        <div className="reveal-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Site Officiel
            </p>
          </div>

          <h1 className="font-display text-6xl font-bold leading-[1.05] tracking-tight text-ink sm:text-7xl lg:text-8xl">
            Bonjour,<br />
            <span className="text-[#7B7B7B]">je suis Fritz.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-steel">
            Ex-Directeur de Cabinet du Ministre de l&apos;Économie et des Finances d&apos;Haïti, PDG de 3 entreprises. Un parcours ancré dans la rigueur institutionnelle et le service public.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-8 border-t border-slate-100 pt-8">
            <div>
              <p className="font-display text-4xl font-bold text-ink">20+</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-steel">Ans d&apos;expérience</p>
            </div>
            <div className="w-px bg-slate-200 self-stretch" />
            <div>
              <p className="font-display text-4xl font-bold text-ink">3</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-steel">Entreprises dirigées</p>
            </div>
            <div className="w-px bg-slate-200 self-stretch" />
            <div>
              <p className="font-display text-4xl font-bold text-ink">15</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-steel">Années au MEF</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              href="/parcours"
              variant="secondary"
              className="bg-ink text-white hover:bg-gold border-none px-8 py-3 transition-colors"
            >
              Découvrir le parcours
            </Button>
            <Button
              href="/contact"
              variant="ghost"
              className="border border-slate-200 text-ink hover:bg-slate-50 px-8 py-3 bg-white"
            >
              Me contacter
            </Button>
          </div>
        </div>

        {/* RIGHT — Laptop mockup with grayscale photo */}
        <div className="reveal-up flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">

            {/* Laptop Screen */}
            <div className="relative mx-auto" style={{ width: "100%" }}>
              {/* Screen bezel */}
              <div
                className="relative rounded-t-xl overflow-hidden shadow-2xl"
                style={{
                  background: "#1a1a1a",
                  padding: "10px 10px 0 10px",
                  borderRadius: "14px 14px 0 0",
                }}
              >
                {/* Camera dot */}
                <div className="flex justify-center mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#333]" />
                </div>

                {/* Screen content — photo in grayscale */}
                <div
                  className="relative overflow-hidden"
                  style={{ borderRadius: "6px 6px 0 0", aspectRatio: "16/10" }}
                >
                  <Image
                    src="/id.jpeg"
                    alt={`Portrait de ${profile.name}`}
                    fill
                    className="object-cover object-top"
                    style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.95)" }}
                    priority
                  />
                  {/* Subtle overlay with name */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <p className="font-display text-white text-xl font-semibold tracking-tight">
                      {profile.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-px w-4 bg-gold" />
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gold">
                        Portrait Officiel
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop base / hinge */}
              <div
                className="relative mx-auto"
                style={{
                  background: "linear-gradient(to bottom, #2a2a2a, #1a1a1a)",
                  height: "18px",
                  borderRadius: "0 0 4px 4px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                }}
              />

              {/* Laptop stand */}
              <div
                className="relative mx-auto"
                style={{
                  background: "linear-gradient(to bottom, #1a1a1a, #111)",
                  height: "12px",
                  width: "60%",
                  borderRadius: "0 0 8px 8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                }}
              />

              {/* Laptop foot */}
              <div
                className="mx-auto mt-0"
                style={{
                  background: "#0f0f0f",
                  height: "4px",
                  width: "80%",
                  borderRadius: "0 0 8px 8px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                }}
              />
            </div>

            {/* Decorative gold accent */}
            <div className="absolute -right-4 -top-4 h-24 w-24 border-r-2 border-t-2 border-gold/30 pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-slate-200 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
