import { createAchievement } from "../actions";
import Link from "next/link";

export default function NewAchievementPage() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 uppercase tracking-widest font-bold">
          <Link href="/admin/realisations" className="hover:text-navy">Réalisations</Link>
          <span>/</span>
          <span className="text-gold">Nouvelle</span>
        </div>
        <h1 className="font-display text-3xl font-semibold text-navy">Ajouter une réalisation</h1>
      </div>

      <div className="bg-white p-8 border border-slate-200 shadow-sm border-t-2 border-t-gold">
        <form action={createAchievement} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
                Titre de la réalisation
              </label>
              <input
                type="text"
                name="title"
                required
                className="w-full px-4 py-2.5 border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                placeholder="Ex: Restructuration du budget de l'État..."
              />
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
                Domaine
              </label>
              <select
                name="domain"
                className="w-full px-4 py-2.5 border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white"
              >
                <option value="Finances Publiques">Finances Publiques</option>
                <option value="Administration">Administration</option>
                <option value="Secteur Privé">Secteur Privé</option>
                <option value="Politique">Politique</option>
              </select>
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
                Statut
              </label>
              <select
                name="status"
                className="w-full px-4 py-2.5 border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white"
              >
                <option value="verified">Vérifié / Terminé</option>
                <option value="to-complete">En cours</option>
                <option value="document-required">En attente de document</option>
              </select>
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
                placeholder="Ex: 2019 - 2020"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
              Description détaillée
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
              href="/admin/realisations"
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
