import Link from "next/link";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  accent?: string;
  description: string;
};

// Bannière commune aux pages internes.
export function PageHero({ eyebrow = "Site Officiel", title, accent, description }: PageHeroProps) {
  return (
    <section className="border-b border-line py-20 lg:py-24">
      <div className="page-shell reveal-up">
        <span className="label">{eyebrow}</span>
        <h1 className="mt-5 font-display text-5xl font-bold leading-tight text-heading sm:text-6xl">
          {title}
          {accent ? <span className="text-accent"> {accent}</span> : null}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-[1.9] text-body sm:text-lg">{description}</p>
        <nav className="mt-8 flex items-center gap-3 text-[13px] uppercase tracking-wide text-muted">
          <Link href="/" className="hover:text-accent">
            Accueil
          </Link>
          <span>/</span>
          <span className="text-heading">{title}</span>
        </nav>
      </div>
    </section>
  );
}
