import { Achievement } from "@/types";
import { Badge } from "@/components/ui/Badge";

type AchievementCardProps = {
  achievement: Achievement;
};

const labels = {
  verified: { text: "Vérifié", variant: "success" as const },
  "to-complete": { text: "À compléter", variant: "gold" as const },
  "document-required": { text: "Document requis", variant: "red" as const },
};

export function AchievementCard({ achievement }: AchievementCardProps) {
  const status = labels[achievement.status] ?? labels.verified;

  return (
    <div className="neu-card flex h-full flex-col p-9">
      <div className="flex items-start justify-between gap-4">
        <span className="label !text-xs">{achievement.domain}</span>
        <Badge variant={status.variant}>{status.text}</Badge>
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold leading-snug text-heading">{achievement.title}</h3>
      <p className="mt-4 text-[15px] leading-7 text-body">{achievement.description}</p>
      <div className="mt-auto flex flex-wrap items-center gap-3 pt-7 text-xs">
        <span className="rounded-md bg-paper px-4 py-2 font-medium text-heading shadow-neu">{achievement.period}</span>
        {achievement.needsVerification ? (
          <span className="rounded-md bg-rose-50 px-4 py-2 text-rose-700">Vérification documentaire requise</span>
        ) : null}
      </div>
    </div>
  );
}
