import Image from "next/image";
import { MediaItem } from "@/types";
import { Badge } from "@/components/ui/Badge";

type MediaGalleryProps = {
  items: MediaItem[];
};

const variantByType = {
  photo: "blue",
  video: "red",
  press: "gold",
  quote: "gray",
} as const;

const labelByType = {
  photo: "Photo",
  video: "Vidéo",
  press: "Presse",
  quote: "Citation",
};

export function MediaGallery({ items }: MediaGalleryProps) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
      {items.map((item, i) => (
        <div
          key={item.id}
          className="group relative break-inside-avoid overflow-hidden rounded-3xl border border-white/[0.08] bg-onyx transition-all duration-500 hover:border-gold/40 hover:shadow-glow"
        >
          {item.imagePath ? (
            <div className={`relative overflow-hidden ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
              <Image
                src={item.imagePath}
                alt={item.title}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ) : (
            <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-gold/20 via-graphite to-onyx">
              <div className="bg-grid absolute inset-0" />
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition-transform duration-500 group-hover:translate-y-0">
            {item.type && labelByType[item.type] ? (
              <Badge variant={variantByType[item.type]}>{labelByType[item.type]}</Badge>
            ) : null}
            {item.placeholder ? (
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-goldLight">{item.placeholder}</p>
            ) : null}
            <p className="mt-2 font-display text-2xl leading-tight text-white">{item.title}</p>
            {item.description ? (
              <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
