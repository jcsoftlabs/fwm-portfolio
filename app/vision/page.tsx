import { VisionCard } from "@/components/vision/VisionCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { visionAxes } from "@/lib/mock-data";

export default function VisionPage() {
  return (
    <div className="pb-16">
      {/* Sub-page Hero Banner */}
      <div className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Site Officiel</p>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Vision & Cadre d'Action
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel">
            Principes directeurs, engagements institutionnels et perspectives de développement.
          </p>
          <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
            <span>Accueil</span>
            <span>›</span>
            <span className="text-navy font-medium">Vision</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Axes de vision"
          title="Une vision fondée sur la responsabilité et le service public"
          description="Six axes structurants pour une plateforme institutionnelle cohérente, ouverte et tournée vers le développement national."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visionAxes.map((axis) => (
            <VisionCard key={axis.id} axis={axis} />
          ))}
        </div>

        {/* Corporate closing banner */}
        <div className="mt-16 border-l-4 border-gold bg-navy px-8 py-10 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Cadre institutionnel</p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-snug">
            Une vision présentée avec mesure, clarté et sens du service public.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300 max-w-2xl">
            Ces axes de vision s'inscrivent dans une démarche de dialogue, de rigueur et de continuité institutionnelle, valeurs qui guident l'engagement public de Fritz William Michel depuis plus de vingt ans.
          </p>
        </div>
      </div>
    </div>
  );
}
