import { Achievement } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type AchievementCardProps = {
  achievement: Achievement;
};

const labels = {
  verified: { text: "Vérifié", variant: "success" as const },
  "to-complete": { text: "À compléter", variant: "gold" as const },
  "document-required": { text: "Document requis", variant: "red" as const },
};

export function AchievementCard({ achievement }: AchievementCardProps) {
  const status = labels[achievement.status];

  return (
    <div className="group flex flex-col border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-strong hover:border-gold/30">
      <div className="h-[3px] w-full bg-gradient-to-r from-ink to-steel" />
      <div className="flex-1 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
              {achievement.domain}
            </p>
            <h3 className="mt-3 font-display text-xl font-semibold text-navy leading-snug">{achievement.title}</h3>
          </div>
          <Badge variant={status.variant}>{status.text}</Badge>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-steel">{achievement.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
          <span className="border border-slate-200 bg-slate-50 px-3 py-1 font-medium text-steel">
            {achievement.period}
          </span>
          {achievement.needsVerification ? (
            <span className="border border-red-200 bg-red-50 px-3 py-1 text-red-700">
              Vérification documentaire requise
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
