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
    <div className="pb-16">
      {/* Sub-page Hero Banner */}
      <div className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Site Officiel</p>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Médias
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel">
            Ressources médias, portrait officiel, et éléments de communication à destination de la presse.
          </p>
          <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
            <span>Accueil</span>
            <span>›</span>
            <span className="text-navy font-medium">Médias</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Galerie"
          title="Ressources officielles"
          description="Les visuels et documents présents dans cette section sont mis à la disposition de la presse dans le cadre de communications officielles."
        />

        <div className="mt-12">
          {allPhotos.length > 0 ? (
            <MediaGallery items={allPhotos.map(p => ({ id: p.id, type: "image", url: p.url, title: p.title || "Photo" })) as any} />
          ) : (
            <div className="bg-white p-12 text-center border border-slate-200">
              <p className="text-steel">Aucun média disponible pour le moment.</p>
            </div>
          )}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="font-display text-3xl text-navy">Pour la presse</h2>
            <div className="mt-6 grid gap-4 text-sm leading-7 text-steel">
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
              <Button>Contacter le service presse</Button>
            </div>
          </div>

          <div className="border border-slate-200 bg-slate-50 p-8 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
              Contenu du Kit
            </p>
            <div className="mt-5 space-y-3">
              {mediaKitItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-steel"
                >
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
