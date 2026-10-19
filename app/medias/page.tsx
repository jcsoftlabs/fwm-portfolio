import { PageHero } from "@/components/ui/PageHero";
import { MediaGallery } from "@/components/medias/MediaGallery";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
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
    <div>
      <PageHero title="Médias" accent="& presse" description="Ressources médias, portrait officiel, et éléments de communication à destination de la presse." />

      <section className="section">
        <div className="page-shell">
          <SectionTitle
            eyebrow="Galerie"
            title="Ressources officielles"
            description="Les visuels et documents présents dans cette section sont mis à la disposition de la presse dans le cadre de communications officielles."
          />
          <div className="mt-14">
            {allPhotos.length > 0 ? (
              <MediaGallery items={allPhotos.map((p) => ({ id: p.id, type: "photo", imagePath: p.url, title: p.title || "Photo" })) as any} />
            ) : (
              <div className="neu p-12 text-center text-body">Aucun média disponible pour le moment.</div>
            )}
          </div>
        </div>
      </section>

      <section className="section border-b-0">
        <div className="page-shell grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <Card>
            <span className="label !text-xs">Presse</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-heading">Pour la presse</h2>
            <div className="mt-6 grid gap-4 text-[15px] leading-8 text-body">
              <p>
                {profile.name} est présenté ici comme un profil combinant expérience publique, gestion financière, direction administrative et responsabilités exécutives.
              </p>
              <p>
                Le kit média inclut une biographie officielle, le portrait officiel en haute définition, ainsi qu&apos;une sélection de prises de parole validées.
              </p>
              <p>
                Toute demande médiatique, interview ou besoin de validation de citation doit être orientée vers notre service de presse dédié.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/contact">
                Contacter le service presse
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          <Card>
            <span className="label !text-xs">Contenu du kit</span>
            <ul className="mt-6 space-y-4">
              {mediaKitItems.map((item) => (
                <li key={item} className="flex items-center gap-4 rounded-md bg-paper px-5 py-4 text-[15px] text-heading shadow-neu">
                  <Icon name="check" className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}
