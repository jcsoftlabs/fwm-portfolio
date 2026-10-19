import Link from "next/link";
import Image from "next/image";
import { NewsArticle } from "@/types";
import { formatLongDate } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

type NewsCardProps = {
  article: NewsArticle;
};

export function NewsCard({ article }: NewsCardProps) {
  return (
    <Link href={`/actualites/${article.slug}`} className="neu-card group flex h-full flex-col p-6">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-line">
        {article.imagePath ? (
          <Image
            src={article.imagePath}
            alt={article.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center font-display text-4xl font-extrabold text-white/80">FWM</div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between text-[13px]">
        <span className="font-medium uppercase tracking-wide text-accent">{article.category}</span>
        <span className="text-muted">{formatLongDate(article.date)}</span>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-heading transition-colors group-hover:text-accent">
        {article.title}
        <Icon name="arrow" className="ml-2 inline h-5 w-5 -rotate-45 opacity-0 transition-all duration-300 group-hover:opacity-100" />
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-body">{article.excerpt}</p>
    </Link>
  );
}
