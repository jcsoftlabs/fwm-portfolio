import Link from "next/link";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  accent?: string;
  description: string;
};

// Bannière commune aux pages internes : halo aurora, grille, titre or.
export function PageHero({ eyebrow = "Site Officiel", title, accent, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] pb-20 pt-40 sm:pt-44">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-40 left-1/4 h-[480px] w-[480px] animate-aurora rounded-full bg-gold/20 blur-[120px]" />
        <div className="absolute -top-20 right-0 h-[380px] w-[380px] animate-aurora rounded-full bg-[#5b4bff]/10 blur-[120px] [animation-delay:-6s]" />
      </div>

      <div className="page-shell relative">
        <div className="reveal-blur">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-gold" />
            {eyebrow}
          </span>
          <h1 className="mt-8 font-display text-6xl leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            {title}
            {accent ? (
              <>
                {" "}
                <span className="text-gold-metal italic">{accent}</span>
              </>
            ) : null}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            {description}
          </p>
          <nav className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/35">
            <Link href="/" className="hover:text-goldLight">
              Accueil
            </Link>
            <span className="h-px w-6 bg-white/20" />
            <span className="text-goldLight">{title}</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
