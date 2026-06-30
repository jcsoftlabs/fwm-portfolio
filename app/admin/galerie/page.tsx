import Link from "next/link";
import prisma from "@/lib/prisma";

export default async function AdminGaleriePage() {
  const albums = await prisma.album.findMany({
    include: { _count: { select: { photos: true } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-semibold text-navy">Galerie Média</h1>
          <p className="text-sm text-steel mt-1">Gérez vos albums photos et médias institutionnels.</p>
        </div>
        <Link
          href="/admin/galerie/nouveau"
          className="bg-gold text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-goldLight transition-colors"
        >
          Créer un album
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.length === 0 ? (
          <div className="col-span-full py-12 text-center border border-slate-200 bg-white">
            <p className="text-slate-400">Aucun album pour le moment.</p>
          </div>
        ) : (
          albums.map((album: any) => (
            <Link key={album.id} href={`/admin/galerie/${album.id}`} className="group block">
              <div className="bg-white border border-slate-200 shadow-sm overflow-hidden transition-all hover:shadow-strong hover:-translate-y-1">
                {album.coverImage ? (
                  <div className="h-48 w-full bg-slate-100 overflow-hidden">
                    <img src={album.coverImage} alt={album.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                ) : (
                  <div className="h-48 w-full bg-slate-100 flex items-center justify-center">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Sans couverture</span>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-navy line-clamp-1">{album.title}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-steel bg-slate-100 px-2 py-1">
                      {album._count.photos} photo(s)
                    </span>
                    <span className="text-gold text-sm font-medium">Gérer →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
