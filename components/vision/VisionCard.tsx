import { VisionAxis } from "@/types";
import { Spotlight } from "@/components/ui/Spotlight";

type VisionCardProps = {
  axis: VisionAxis;
  index?: number;
};

const iconMap: Record<string, string> = {
  Shield: "⬡",
  Landmark: "◆",
  Messages: "◎",
  GraduationCap: "△",
  TrendingUp: "↗",
  FileCheck: "✓",
};

export function VisionCard({ axis, index = 0 }: VisionCardProps) {
  return (
    <Spotlight className="flex h-full flex-col p-9">
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-metal bg-[length:200%_auto] text-xl text-night shadow-glow transition-all duration-700 group-hover:rotate-6 group-hover:bg-right">
          {iconMap[axis.icon] ?? "✦"}
        </div>
        <span className="font-display text-5xl italic text-white/[0.08] transition-colors duration-500 group-hover:text-gold/30">
          0{index + 1}
        </span>
      </div>
      <h3 className="mt-8 font-display text-3xl leading-tight text-white">{axis.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-white/50">{axis.description}</p>
      <div className="mt-8 space-y-3 border-t border-white/[0.07] pt-6">
        {axis.objectives.map((objective) => (
          <div key={objective} className="flex items-start gap-3 text-sm text-white/60">
            <span className="mt-0.5 text-xs text-gold">✦</span>
            {objective}
          </div>
        ))}
      </div>
    </Spotlight>
  );
}
