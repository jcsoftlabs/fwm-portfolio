import Image from "next/image";
import { MediaItem } from "@/types";

type MediaGalleryProps = {
  items: MediaItem[];
};

const labelByType = {
  photo: "Photo",
  video: "Vidéo",
  press: "Presse",
  quote: "Citation",
};

// Grille façon « portfolio » : image dans une carte en relief, légende dessous.
export function MediaGallery({ items }: MediaGalleryProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.id} className="neu-card group flex flex-col p-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-line">
            {item.imagePath ? (
              <Image
                src={item.imagePath}
                alt={item.title}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : null}
          </div>
          <div className="mt-6 flex items-center justify-between text-[13px]">
            <span className="font-medium uppercase tracking-wide text-accent">
              {item.placeholder || labelByType[item.type] || "Média"}
            </span>
          </div>
          <h3 className="mt-3 font-display text-xl font-semibold text-heading transition-colors group-hover:text-accent">
            {item.title}
          </h3>
          {item.description ? <p className="mt-3 text-sm leading-relaxed text-body">{item.description}</p> : null}
        </div>
      ))}
    </div>
  );
}
