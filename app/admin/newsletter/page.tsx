import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function AdminNewsletterPage() {
  const subscribers = await prisma.subscriber.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-semibold text-navy">Newsletter</h1>
          <p className="text-sm text-steel mt-1">Gérez la liste des abonnés à votre newsletter.</p>
        </div>
        <Link
          href="/admin/newsletter/nouveau"
          className="bg-gold text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-goldLight transition-colors"
        >
          Envoyer un email
        </Link>
      </div>

      <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm text-steel">
          <thead className="bg-slate-50 text-xs uppercase tracking-widest text-navy border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 font-bold">Email</th>
              <th className="px-6 py-4 font-bold">Date d'inscription</th>
              <th className="px-6 py-4 font-bold">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {subscribers.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-8 text-center text-slate-400">
                  Aucun abonné pour le moment.
                </td>
              </tr>
            ) : (
              subscribers.map((sub: any) => (
                <tr key={sub.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-navy">{sub.email}</td>
                  <td className="px-6 py-4">{sub.createdAt.toLocaleDateString("fr-FR")}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block bg-green-50 text-green-700 px-2 py-1 text-[10px] font-bold uppercase tracking-widest border border-green-200">
                      Actif
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
