import Image from "next/image";
import { MediaItem } from "@/types";
import { Card } from "@/components/ui/Card";
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
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <div key={item.id} className="group flex flex-col border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-strong hover:border-gold/30">
          {item.imagePath ? (
            <div className="relative h-64 overflow-hidden">
              <Image
                src={item.imagePath}
                alt={item.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
                  {item.placeholder}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold leading-tight">{item.title}</p>
              </div>
            </div>
          ) : (
            <div className="flex h-64 items-center justify-center bg-gradient-to-br from-ink to-steel text-center text-white">
              <div className="px-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
                  {item.placeholder}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold leading-tight">{item.title}</p>
              </div>
            </div>
          )}
          <div className="flex-1 p-6">
            <Badge variant={variantByType[item.type]}>{labelByType[item.type]}</Badge>
            <p className="mt-4 text-sm leading-relaxed text-steel">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
