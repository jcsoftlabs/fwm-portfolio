import { VisionAxis } from "@/types";
import { Card } from "@/components/ui/Card";

type VisionCardProps = {
  axis: VisionAxis;
};

const iconMap: Record<string, string> = {
  Shield: "⬡",
  Landmark: "⬛",
  Messages: "◎",
  GraduationCap: "△",
  TrendingUp: "↗",
  FileCheck: "☑",
};

const iconBg: Record<string, string> = {
  Shield: "bg-gold",
  Landmark: "bg-gold",
  Messages: "bg-gold",
  GraduationCap: "bg-gold",
  TrendingUp: "bg-gold",
  FileCheck: "bg-gold",
};

export function VisionCard({ axis }: VisionCardProps) {
  return (
    <div className="group flex flex-col border-y border-r border-l-[3px] border-slate-200 border-l-gold bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-strong hover:bg-gold/5">
      <div className="flex-1 p-6">
        <div className={`flex h-11 w-11 items-center justify-center text-lg text-white ${iconBg[axis.icon] ?? "bg-gold"}`}>
          {iconMap[axis.icon] ?? "•"}
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-navy">{axis.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-steel">{axis.description}</p>
        <div className="mt-6 space-y-2">
          {axis.objectives.map((objective) => (
            <div
              key={objective}
              className="flex items-start gap-3 text-sm text-steel"
            >
              <span className="mt-1.5 h-1 w-4 shrink-0 bg-gold/40" />
              {objective}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
