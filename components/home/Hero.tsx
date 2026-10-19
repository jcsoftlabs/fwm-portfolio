import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/mock-data";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { value: 20, suffix: "+", label: "Ans d'expérience" },
  { value: 3, suffix: "", label: "Entreprises dirigées" },
  { value: 15, suffix: "", label: "Années au MEF" },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-24 pt-36 lg:pt-32">
      {/* Fond : grille, aurora, faisceau */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -left-40 top-10 h-[620px] w-[620px] animate-aurora rounded-full bg-gold/25 blur-[140px]" />
        <div className="absolute right-[-10%] top-[-10%] h-[520px] w-[520px] animate-aurora rounded-full bg-[#5b4bff]/15 blur-[140px] [animation-delay:-9s]" />
        <div className="absolute bottom-[-20%] left-1/3 h-[420px] w-[420px] animate-aurora rounded-full bg-[#ff7a45]/10 blur-[140px] [animation-delay:-4s]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
      </div>

      <div className="page-shell grid w-full items-center gap-16 lg:grid-cols-[1.15fr,0.85fr] lg:gap-10">
        {/* Texte */}
        <div>
          <div className="reveal-blur">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-gold" />
              Site Officiel · Haïti
            </span>
          </div>

          <h1 className="reveal-blur mt-8 font-display text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.88] tracking-tight text-white [animation-delay:120ms]">
            Fritz William
            <br />
            <span className="text-gold-metal italic">Michel.</span>
          </h1>

          <p className="reveal-blur mt-8 max-w-xl text-lg leading-relaxed text-white/55 [animation-delay:240ms]">
            Ex-Directeur de Cabinet du Ministre de l&apos;Économie et des Finances d&apos;Haïti, PDG de 3 entreprises.{" "}
            <span className="text-white/85">Un parcours ancré dans la rigueur institutionnelle et le service public.</span>
          </p>

          <div className="reveal-blur mt-10 flex flex-wrap gap-4 [animation-delay:360ms]">
            <Link href="/parcours" className="btn-gold group">
              Découvrir le parcours
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link href="/contact" className="btn-ghost">
              Me contacter
            </Link>
          </div>

          {/* Stats */}
          <div className="reveal-blur mt-14 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] [animation-delay:480ms]">
            {stats.map((s) => (
              <div key={s.label} className="bg-night/90 px-5 py-5 backdrop-blur">
                <CountUp to={s.value} suffix={s.suffix} className="font-display text-4xl text-white sm:text-5xl" />
                <p className="mt-1 text-[10px] font-semibold uppercase leading-snug tracking-[0.18em] text-white/40">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait */}
        <div className="reveal-blur relative mx-auto w-full max-w-[440px] [animation-delay:200ms]">
          {/* Anneaux en rotation */}
          <div className="pointer-events-none absolute -inset-10 animate-spin-slower rounded-full border border-dashed border-gold/20" />
          <div className="pointer-events-none absolute -inset-4 animate-spin-slow rounded-full [background:conic-gradient(from_0deg,transparent_0deg,rgba(241,213,138,0.55)_60deg,transparent_120deg)] [mask:radial-gradient(farthest-side,transparent_calc(100%-1px),#000_calc(100%-1px))]" />

          <div className="animate-float">
            <div className="gold-border relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem] bg-onyx shadow-glow-lg">
              <Image
                src="/id.jpeg"
                alt={`Portrait de ${profile.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-top"
                style={{ filter: "grayscale(100%) contrast(1.15) brightness(0.9)" }}
              />
              {/* Teinte dorée */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/25 via-transparent to-transparent mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="font-display text-3xl text-white">{profile.name}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-goldLight">
                  Portrait Officiel
                </p>
              </div>
            </div>
          </div>

          {/* Badges flottants */}
          <div className="glass absolute -left-6 top-16 hidden animate-float rounded-2xl px-4 py-3 [animation-delay:-2s] sm:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Ministère</p>
            <p className="mt-0.5 text-sm font-semibold text-white">Économie &amp; Finances</p>
          </div>
          <div className="glass absolute -right-4 bottom-28 hidden animate-float rounded-2xl px-4 py-3 [animation-delay:-4s] sm:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Leadership</p>
            <p className="mt-0.5 text-sm font-semibold text-white">PDG · 3 entreprises</p>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">Défiler</span>
        <span className="relative h-12 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-hint bg-gold" />
        </span>
      </div>
    </section>
  );
}
