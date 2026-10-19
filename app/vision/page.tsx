import { PageHero } from "@/components/ui/PageHero";
import { VisionCard } from "@/components/vision/VisionCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { visionAxes } from "@/lib/mock-data";
import { Reveal } from "@/components/ui/Reveal";

export default function VisionPage() {
  return (
    <div className="pb-32">
      <PageHero title="Vision" accent="& Cadre d'Action" description="Principes directeurs, engagements institutionnels et perspectives de développement." />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Axes de vision"
          title="Une vision fondée sur la responsabilité et le service public"
          description="Six axes structurants pour une plateforme institutionnelle cohérente, ouverte et tournée vers le développement national."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visionAxes.map((axis, i) => (
            <Reveal key={axis.id} animation="blur" delay={(i % 3) * 100}>
              <VisionCard axis={axis} index={i} />
            </Reveal>
          ))}
        </div>

        {/* Bannière de clôture */}
        <Reveal animation="blur">
          <div className="gold-border relative mt-24 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gold/15 via-onyx to-onyx px-8 py-16 sm:px-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/25 blur-[120px]" />
            <span className="eyebrow">Cadre institutionnel</span>
            <h2 className="relative mt-8 max-w-4xl font-display text-4xl leading-[1.05] text-white sm:text-6xl">
              Une vision présentée avec mesure, clarté et{" "}
              <span className="text-gold-metal italic">sens du service public.</span>
            </h2>
            <p className="relative mt-8 max-w-2xl text-base leading-8 text-white/55">
              Ces axes de vision s&apos;inscrivent dans une démarche de dialogue, de rigueur et de continuité institutionnelle, valeurs qui guident l&apos;engagement public de Fritz William Michel depuis plus de vingt ans.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
