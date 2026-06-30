import { TimelineItem } from "@/types";

type TimelineProps = {
  items: TimelineItem[];
};

const categoryColor: Record<string, string> = {
  Formation: "text-gold bg-gold/10",
  Administration: "text-navy bg-slate-100",
  "Service public": "text-gold bg-amber-50",
  Leadership: "text-gold bg-gold/10",
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-0 border-l-2 border-slate-200 pl-8">
      {items.map((item) => (
        <div key={item.id} className="relative pb-10 last:pb-0">
          {/* Dot */}
          <div className="absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center border-2 border-gold bg-white">
            <div className="h-2 w-2 bg-gold" />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{item.period}</p>
          <div className="mt-3 border border-slate-200 bg-white px-6 py-5 shadow-soft transition-shadow duration-200 hover:shadow-strong">
            <span className={`inline-block px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest ${categoryColor[item.category] ?? "text-steel bg-slate-100"}`}>
              {item.category}
            </span>
            <h3 className="mt-3 font-display text-xl font-semibold text-navy">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
