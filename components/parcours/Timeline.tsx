import { TimelineItem } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

type TimelineProps = {
  items: TimelineItem[];
};

const categoryColor: Record<string, string> = {
  Formation: "text-sky-300 border-sky-300/25 bg-sky-400/10",
  Administration: "text-white/80 border-white/15 bg-white/[0.06]",
  "Service public": "text-goldLight border-gold/30 bg-gold/10",
  Leadership: "text-violet-300 border-violet-300/25 bg-violet-400/10",
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Ligne centrale dorée */}
      <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent md:left-1/2" />

      <div className="space-y-12">
        {items.map((item, i) => {
          const right = i % 2 === 1;
          return (
            <Reveal key={item.id} animation="blur" delay={60}>
              <div className={`relative grid gap-6 pl-12 md:grid-cols-2 md:gap-16 md:pl-0`}>
                {/* Point lumineux */}
                <div className="absolute left-4 top-8 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                  <span className="absolute h-4 w-4 animate-ping rounded-full bg-gold/40" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-goldLight shadow-glow" />
                </div>

                <div className={right ? "md:col-start-2" : "md:text-right"}>
                  <p className="font-display text-3xl italic text-gold-metal">{item.period}</p>
                  <div className="glass mt-4 rounded-3xl p-7 text-left transition-all duration-500 hover:-translate-y-1 hover:border-gold/30">
                    <span className={`inline-block rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${categoryColor[item.category] ?? "text-white/60 border-white/10 bg-white/[0.04]"}`}>
                      {item.category}
                    </span>
                    <h3 className="mt-4 font-display text-2xl leading-snug text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/50">{item.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
