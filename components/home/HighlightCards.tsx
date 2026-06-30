import { homeHighlights } from "@/lib/mock-data";
import { Card } from "@/components/ui/Card";

export function HighlightCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {homeHighlights.map((item, index) => (
        <Card
          key={item.title}
          className="group h-full bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 border-t-2 border-t-gold"
        >
          <div className="mb-6 flex items-center justify-end">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              0{index + 1}
            </span>
          </div>
          <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-steel">{item.description}</p>
        </Card>
      ))}
    </div>
  );
}
