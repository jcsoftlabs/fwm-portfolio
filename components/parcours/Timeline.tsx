import { TimelineItem } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

type TimelineProps = {
  items: TimelineItem[];
};

// Timeline verticale : ligne grise épaisse, pastille et carte en relief par étape.
export function Timeline({ items }: TimelineProps) {
  return (
    <div className="border-l-[5px] border-[#d9dee2]">
      {items.map((item) => (
        <Reveal key={item.id}>
          <div className="relative pb-10 pl-10 last:pb-0">
            <span className="absolute left-0 top-12 h-[5px] w-8 bg-[#d9dee2]" />
            <span className="absolute -left-[13px] top-[42px] h-5 w-5 rounded-full border-[5px] border-[#d9dee2] bg-paper" />

            <div className="neu-card p-8 sm:p-10">
              <div className="flex flex-col justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-start">
                <div>
                  <h3 className="font-display text-xl font-semibold text-heading sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.period}</p>
                </div>
                <span className="w-fit shrink-0 rounded-md bg-paper px-4 py-2 text-xs font-medium uppercase tracking-wide text-accent shadow-neu">
                  {item.category}
                </span>
              </div>
              <p className="mt-6 text-[15px] leading-7 text-body">{item.description}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
