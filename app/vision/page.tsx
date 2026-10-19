import { PageHero } from "@/components/ui/PageHero";
import { VisionCard } from "@/components/vision/VisionCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { visionAxes } from "@/lib/mock-data";

export default function VisionPage() {
  return (
    <div>
      <PageHero title="Vision" accent="& cadre d'action" description="Principes directeurs, engagements institutionnels et perspectives de développement." />

      <section className="section">
        <div className="page-shell">
          <SectionTitle
            eyebrow="Axes de vision"
            title="Une vision fondée sur la responsabilité et le service public"
            description="Six axes structurants pour une plateforme institutionnelle cohérente, ouverte et tournée vers le développement national."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {visionAxes.map((axis, i) => (
              <Reveal key={axis.id} delay={(i % 3) * 100}>
                <VisionCard axis={axis} showObjectives />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-b-0">
        <div className="page-shell">
          <Reveal>
            <div className="neu px-8 py-14 text-center sm:px-16">
              <span className="label">Cadre institutionnel</span>
              <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-bold leading-tight text-heading sm:text-4xl">
                Une vision présentée avec mesure, clarté et <span className="text-accent">sens du service public.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-body">
                Ces axes de vision s&apos;inscrivent dans une démarche de dialogue, de rigueur et de continuité institutionnelle, valeurs qui guident l&apos;engagement public de Fritz William Michel depuis plus de vingt ans.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
