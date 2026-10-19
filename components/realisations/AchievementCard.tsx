import { Achievement } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Spotlight } from "@/components/ui/Spotlight";

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
    <Spotlight className="flex h-full flex-col">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="flex-1 p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">{achievement.domain}</p>
            <h3 className="mt-4 font-display text-3xl leading-tight text-white">{achievement.title}</h3>
          </div>
          <Badge variant={status.variant}>{status.text}</Badge>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-white/50">{achievement.description}</p>
        <div className="mt-7 flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-medium text-white/60">
            {achievement.period}
          </span>
          {achievement.needsVerification ? (
            <span className="rounded-full border border-rose-400/25 bg-rose-500/10 px-4 py-1.5 text-rose-300">
              Vérification documentaire requise
            </span>
          ) : null}
        </div>
      </div>
    </Spotlight>
  );
}
