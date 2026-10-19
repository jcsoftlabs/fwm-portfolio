import { homeHighlights } from "@/lib/mock-data";
import { Card } from "@/components/ui/Card";

export function HighlightCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {homeHighlights.map((item, index) => (
        <Card
          key={item.title}
          className="group h-full hover:-translate-y-1"
        >
          <div className="mb-6 flex items-center justify-end">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              0{index + 1}
            </span>
          </div>
          <h3 className="font-display text-2xl text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/55">{item.description}</p>
        </Card>
      ))}
    </div>
  );
}
