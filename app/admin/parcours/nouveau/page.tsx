import { createExperience } from "../actions";
import Link from "next/link";

export default function NewExperiencePage() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 uppercase tracking-widest font-bold">
          <Link href="/admin/parcours" className="hover:text-navy">Parcours</Link>
          <span>/</span>
          <span className="text-gold">Nouveau</span>
        </div>
        <h1 className="font-display text-3xl font-semibold text-navy">Ajouter une expérience</h1>
      </div>

      <div className="bg-white p-8 border border-slate-200 shadow-sm border-t-2 border-t-gold">
        <form action={createExperience} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
                Poste ou Titre
              </label>
              <input
                type="text"
                name="title"
                required
                className="w-full px-4 py-2.5 border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                placeholder="Ex: Ministre de l'Économie et des Finances..."
              />
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
                Période
              </label>
              <input
                type="text"
                name="period"
                required
                className="w-full px-4 py-2.5 border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                placeholder="Ex: 2024 - Présent"
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
                <option value="Administration Publique">Administration Publique</option>
                <option value="Secteur Privé">Secteur Privé</option>
                <option value="Formation">Formation</option>
                <option value="Engagement">Engagement civique</option>
              </select>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-3">
              <input type="checkbox" name="isCurrent" className="w-5 h-5 accent-gold" />
              <span className="text-sm font-semibold text-navy">Ceci est mon poste actuel</span>
            </label>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
              Description de l'expérience
            </label>
            <textarea
              name="description"
              required
              rows={4}
              className="w-full px-4 py-2.5 border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t border-slate-100">
            <Link
              href="/admin/parcours"
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-steel hover:text-navy transition-colors"
            >
              Annuler
            </Link>
            <button
              type="submit"
              className="bg-navy text-white px-8 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
