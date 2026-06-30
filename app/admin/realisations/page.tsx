import Link from "next/link";
import prisma from "@/lib/prisma";
import { deleteAchievement } from "./actions";

export default async function AdminRealisationsPage() {
  const achievements = await prisma.achievement.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-semibold text-navy">Réalisations</h1>
          <p className="text-sm text-steel mt-1">Gérez vos accomplissements et responsabilités clés.</p>
        </div>
        <Link
          href="/admin/realisations/nouveau"
          className="bg-gold text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-goldLight transition-colors"
        >
          Nouvelle Réalisation
        </Link>
      </div>

      <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm text-steel">
          <thead className="bg-slate-50 text-xs uppercase tracking-widest text-navy border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 font-bold">Domaine</th>
              <th className="px-6 py-4 font-bold">Titre</th>
              <th className="px-6 py-4 font-bold">Statut</th>
              <th className="px-6 py-4 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {achievements.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-8 text-center text-slate-500">Aucune réalisation trouvée</td>
              </tr>
            ) : (
              achievements.map((item: any) => (
                <tr key={item.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                  <td className="px-6 py-4">
                    <span className="inline-block bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-steel border border-slate-200">
                      {item.domain}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-navy">{item.title}</td>
                  <td className="px-6 py-4">
                    {item.status === "verified" ? (
                      <span className="text-green-600 font-bold uppercase text-[10px] tracking-widest">Vérifié</span>
                    ) : item.status === "document-required" ? (
                      <span className="text-orange-600 font-bold uppercase text-[10px] tracking-widest">En attente</span>
                    ) : (
                      <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">En cours</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <form action={deleteAchievement.bind(null, item.id)}>
                      <button className="text-red-600 hover:text-red-800 font-medium text-xs tracking-wide">
                        SUPPRIMER
                      </button>
                    </form>
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
