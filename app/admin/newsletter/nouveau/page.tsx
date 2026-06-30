import { sendNewsletterBlast } from "../actions";
import Link from "next/link";

export default function ComposeNewsletterPage() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 uppercase tracking-widest font-bold">
          <Link href="/admin/newsletter" className="hover:text-navy">Newsletter</Link>
          <span>/</span>
          <span className="text-gold">Envoyer</span>
        </div>
        <h1 className="font-display text-3xl font-semibold text-navy">Nouvelle campagne</h1>
        <p className="text-sm text-steel mt-2">Envoyez un email à tous vos abonnés simultanément.</p>
      </div>

      <div className="bg-white p-8 border border-slate-200 shadow-sm border-t-2 border-t-gold">
        <form action={async (formData) => { "use server"; await sendNewsletterBlast(formData); }} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
              Objet de l'email
            </label>
            <input
              type="text"
              name="subject"
              required
              className="w-full px-4 py-2.5 border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
              placeholder="Ex: Mes dernières actions pour l'administration..."
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
              Contenu du message
            </label>
            <textarea
              name="content"
              required
              rows={12}
              className="w-full px-4 py-2.5 border border-slate-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
              placeholder="Rédigez le contenu de votre email ici..."
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-sm text-sm text-blue-800">
            <strong>Attention :</strong> L'envoi de cet email est définitif et partira à tous vos abonnés actifs.
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t border-slate-100">
            <Link
              href="/admin/newsletter"
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-steel hover:text-navy transition-colors"
            >
              Annuler
            </Link>
            <button
              type="submit"
              className="bg-navy text-white px-8 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors"
            >
              Envoyer la campagne
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
