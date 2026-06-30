import { createAlbum } from "../actions";
import Link from "next/link";

export default function NewAlbumPage() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 uppercase tracking-widest font-bold">
          <Link href="/admin/galerie" className="hover:text-navy">Galerie</Link>
          <span>/</span>
          <span className="text-gold">Nouvel Album</span>
        </div>
        <h1 className="font-display text-3xl font-semibold text-navy">Créer un album photo</h1>
      </div>

      <div className="bg-white p-8 border border-slate-200 shadow-sm border-t-2 border-t-gold">
        <form action={createAlbum} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
              Titre de l'album
            </label>
            <input
              type="text"
              name="title"
              required
              className="w-full px-4 py-2.5 border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
              placeholder="Ex: Conférence Internationale 2025"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
              Description courte
            </label>
            <textarea
              name="description"
              required
              rows={3}
              className="w-full px-4 py-2.5 border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
              Image de couverture (Optionnel)
            </label>
            <input
              type="file"
              name="coverImage"
              accept="image/*"
              className="w-full px-4 py-2 border border-slate-300 bg-slate-50"
            />
            <p className="mt-2 text-xs text-slate-500">
              Vous pourrez rajouter des photos à l'intérieur de l'album une fois créé.
            </p>
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t border-slate-100">
            <Link
              href="/admin/galerie"
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-steel hover:text-navy transition-colors"
            >
              Annuler
            </Link>
            <button
              type="submit"
              className="bg-navy text-white px-8 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors"
            >
              Créer l'album
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
