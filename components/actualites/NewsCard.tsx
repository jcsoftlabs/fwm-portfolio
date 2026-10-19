import Link from "next/link";
import Image from "next/image";
import { NewsArticle } from "@/types";
import { formatLongDate } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";

type NewsCardProps = {
  article: NewsArticle;
};

const categoryTone: Record<string, string> = {
  Gouvernance: "text-goldLight border-gold/30 bg-gold/10",
  Dialogue: "text-sky-300 border-sky-300/25 bg-sky-400/10",
  "Prise de parole": "text-violet-300 border-violet-300/25 bg-violet-400/10",
  "Communiqué": "text-emerald-300 border-emerald-300/25 bg-emerald-400/10",
};

export function NewsCard({ article }: NewsCardProps) {
  const tone = categoryTone[article.category] || categoryTone.Gouvernance;

  return (
    <Link href={`/actualites/${article.slug}`} className="block h-full">
      <Spotlight className="flex h-full flex-col">
        <div className="relative h-52 w-full overflow-hidden">
          {article.imagePath ? (
            <Image
              src={article.imagePath}
              alt={article.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gold/25 via-graphite to-onyx">
              <div className="bg-grid absolute inset-0" />
              <span className="absolute bottom-4 right-6 font-display text-8xl italic text-white/[0.06]">FWM</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent" />
          <span className={`absolute left-5 top-5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur ${tone}`}>
            {article.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-7">
          <span className="text-xs text-white/35">{formatLongDate(article.date)}</span>
          <h3 className="mt-3 font-display text-2xl leading-snug text-white transition-colors duration-300 group-hover:text-goldLight">
            {article.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">{article.excerpt}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Lire l&apos;article
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </span>
        </div>
      </Spotlight>
    </Link>
  );
}
