import Link from "next/link";
import Image from "next/image";
import { NewsArticle } from "@/types";
import { formatLongDate } from "@/lib/utils";

type NewsCardProps = {
  article: NewsArticle;
};

export function NewsCard({ article }: NewsCardProps) {
  const categoryColors: Record<string, string> = {
    Gouvernance: "bg-[#A8872A]",
    Dialogue: "bg-[#4A7FA5]",
    "Prise de parole": "bg-[#1a1a2e]",
    "Communiqué": "bg-[#6B8C6B]",
  };
  const categoryTextColors: Record<string, string> = {
    Gouvernance: "text-[#A8872A]",
    Dialogue: "text-[#4A7FA5]",
    "Prise de parole": "text-[#1a1a2e]",
    "Communiqué": "text-[#6B8C6B]",
  };
  const colorBg = categoryColors[article.category] || "bg-gold";
  const colorText = categoryTextColors[article.category] || "text-gold";

  return (
    <div className="group flex flex-col border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-strong hover:border-gold/30 overflow-hidden">
      {/* Top accent bar */}
      <div className={`h-[4px] w-full ${colorBg}`} />
      
      {/* Image if available */}
      {article.imagePath && (
        <div className="relative h-48 w-full overflow-hidden border-b border-slate-100">
          <Image 
            src={article.imagePath} 
            alt={article.title} 
            fill 
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-4">
          <span className={`inline-block bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${colorText} border border-slate-200`}>
            {article.category}
          </span>
          <span className="text-xs text-slate-400">{formatLongDate(article.date)}</span>
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-navy leading-snug">{article.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{article.excerpt}</p>
        <Link
          href={`/actualites/${article.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-haitiBlue transition-colors hover:text-navy"
        >
          Lire l&apos;article
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
