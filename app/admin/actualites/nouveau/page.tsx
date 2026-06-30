import { createArticle } from "../actions";
import Link from "next/link";

export default function NewArticlePage() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 uppercase tracking-widest font-bold">
          <Link href="/admin/actualites" className="hover:text-navy">Actualités</Link>
          <span>/</span>
          <span className="text-gold">Nouveau</span>
        </div>
        <h1 className="font-display text-3xl font-semibold text-navy">Créer un article</h1>
      </div>

      <div className="bg-white p-8 border border-slate-200 shadow-sm border-t-2 border-t-gold">
        <form action={createArticle} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
                Titre de l'article
              </label>
              <input
                type="text"
                name="title"
                required
                className="w-full px-4 py-2.5 border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                placeholder="Ex: Conférence sur la stabilité économique..."
              />
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
                Catégorie
              </label>
              <select
                name="category"
                className="w-full px-4 py-2.5 border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white"
              >
                <option value="Gouvernance">Gouvernance</option>
                <option value="Dialogue">Dialogue</option>
                <option value="Prise de parole">Prise de parole</option>
                <option value="Communiqué">Communiqué</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
              Extrait (Résumé court)
            </label>
            <textarea
              name="excerpt"
              required
              rows={2}
              className="w-full px-4 py-2.5 border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
              Contenu (Paragraphes séparés par un saut de ligne)
            </label>
            <textarea
              name="content"
              required
              rows={10}
              className="w-full px-4 py-2.5 border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t border-slate-100">
            <Link
              href="/admin/actualites"
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-steel hover:text-navy transition-colors"
            >
              Annuler
            </Link>
            <button
              type="submit"
              className="bg-navy text-white px-8 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors"
            >
              Publier l'article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
