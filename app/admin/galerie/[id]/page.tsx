import prisma from "@/lib/prisma";
import Link from "next/link";
import { uploadPhotoToAlbum } from "../actions";

export default async function AdminAlbumDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const album = await prisma.album.findUnique({
    where: { id: resolvedParams.id },
    include: { photos: true },
  });

  if (!album) {
    return <div className="p-8">Album introuvable.</div>;
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 uppercase tracking-widest font-bold">
          <Link href="/admin/galerie" className="hover:text-navy">Galerie</Link>
          <span>/</span>
          <span className="text-gold">{album.title}</span>
        </div>
        <h1 className="font-display text-3xl font-semibold text-navy">{album.title}</h1>
        <p className="text-sm text-steel mt-2 max-w-2xl">{album.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upload Form */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 border border-slate-200 shadow-sm border-t-2 border-t-gold sticky top-8">
            <h2 className="font-display text-lg font-semibold text-navy mb-4">Ajouter une photo</h2>
            <form action={uploadPhotoToAlbum} className="space-y-4">
              <input type="hidden" name="albumId" value={album.id} />
              <div>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  required
                  className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-bold file:uppercase file:tracking-widest file:bg-navy file:text-white hover:file:bg-gold transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-goldLight transition-colors mt-2"
              >
                Uploader
              </button>
            </form>
          </div>
        </div>

        {/* Photos Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {album.photos.length === 0 ? (
              <div className="col-span-full py-12 text-center border border-slate-200 bg-white">
                <p className="text-slate-400">Aucune photo dans cet album.</p>
              </div>
            ) : (
              (album.photos as any[]).map((photo: any) => (
                <div key={photo.id} className="relative group bg-slate-100 aspect-square overflow-hidden border border-slate-200">
                  <img src={photo.url} alt={photo.title || ""} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="text-white bg-red-600 px-3 py-1.5 text-xs font-bold uppercase tracking-widest hover:bg-red-700">
                      Supprimer
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
