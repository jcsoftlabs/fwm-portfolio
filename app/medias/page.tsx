import { PageHero } from "@/components/ui/PageHero";
import { MediaGallery } from "@/components/medias/MediaGallery";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { mediaKitItems, profile } from "@/lib/mock-data";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function MediasPage() {
  const albums = await prisma.album.findMany({
    include: { photos: true },
    orderBy: { createdAt: "desc" },
  });

  const allPhotos = albums.flatMap((album) => album.photos);

  return (
    <div className="pb-32">
      <PageHero title="Médias" accent="& presse" description="Ressources médias, portrait officiel, et éléments de communication à destination de la presse." />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Galerie"
          title="Ressources officielles"
          description="Les visuels et documents présents dans cette section sont mis à la disposition de la presse dans le cadre de communications officielles."
        />

        <div className="mt-12">
          {allPhotos.length > 0 ? (
            <MediaGallery items={allPhotos.map((p) => ({ id: p.id, type: "photo", imagePath: p.url, title: p.title || "Photo" })) as any} />
          ) : (
            <div className="glass rounded-3xl p-12 text-center">
              <p className="text-white/55">Aucun média disponible pour le moment.</p>
            </div>
          )}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="glass rounded-3xl p-8">
            <h2 className="font-display text-4xl text-white">Pour la presse</h2>
            <div className="mt-6 grid gap-4 text-sm leading-7 text-white/55">
              <p>
                {profile.name} est présenté ici comme un profil combinant expérience
                publique, gestion financière, direction administrative et responsabilités
                exécutives.
              </p>
              <p>
                Le kit média inclut une biographie officielle, le portrait officiel en haute définition, ainsi qu'une sélection de prises de parole validées.
              </p>
              <p>
                Toute demande médiatique, interview ou besoin de validation de citation doit être orientée vers notre service de presse dédié.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/contact">Contacter le service presse →</Button>
            </div>
          </div>

          <div className="gold-border rounded-3xl bg-gradient-to-br from-gold/10 to-onyx p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
              Contenu du Kit
            </p>
            <div className="mt-5 space-y-3">
              {mediaKitItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 text-sm font-medium text-white/70 transition-colors hover:border-gold/40 hover:text-white"
                >
                  <span className="text-gold">✦</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
