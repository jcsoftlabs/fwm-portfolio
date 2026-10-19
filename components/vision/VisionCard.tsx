import { VisionAxis } from "@/types";
import { Icon } from "@/components/ui/Icon";

type VisionCardProps = {
  axis: VisionAxis;
  showObjectives?: boolean;
};

const iconMap: Record<string, string> = {
  Shield: "shield",
  Landmark: "landmark",
  Messages: "messages",
  GraduationCap: "graduation",
  TrendingUp: "trending",
  FileCheck: "check",
};

export function VisionCard({ axis, showObjectives = false }: VisionCardProps) {
  return (
    <div className="neu-card group flex h-full flex-col px-9 py-12">
      <span className="text-accent">
        <Icon name={iconMap[axis.icon] ?? "check"} className="h-10 w-10" strokeWidth={1.2} />
      </span>
      <h3 className="mt-8 font-display text-2xl font-semibold text-heading">{axis.title}</h3>
      <p className="mt-4 text-[15px] leading-7 text-body">{axis.description}</p>

      {showObjectives ? (
        <ul className="mt-7 space-y-3 border-t border-line pt-6">
          {axis.objectives.map((objective) => (
            <li key={objective} className="flex items-start gap-3 text-sm text-body">
              <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {objective}
            </li>
          ))}
        </ul>
      ) : null}

      <span className="mt-auto pt-8 text-accent opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100">
        <Icon name="arrow" className="h-6 w-6" />
      </span>
    </div>
  );
}
