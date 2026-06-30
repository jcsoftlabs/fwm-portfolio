import Link from "next/link";
import prisma from "@/lib/prisma";
import { deleteExperience } from "./actions";

export default async function AdminParcoursPage() {
  const experiences = await prisma.experience.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-semibold text-navy">Parcours</h1>
          <p className="text-sm text-steel mt-1">Gérez vos expériences professionnelles et institutionnelles.</p>
        </div>
        <Link
          href="/admin/parcours/nouveau"
          className="bg-gold text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-goldLight transition-colors"
        >
          Ajouter une expérience
        </Link>
      </div>

      <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm text-steel">
          <thead className="bg-slate-50 text-xs uppercase tracking-widest text-navy border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 font-bold">Période</th>
              <th className="px-6 py-4 font-bold">Titre</th>
              <th className="px-6 py-4 font-bold">Catégorie</th>
              <th className="px-6 py-4 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {experiences.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-slate-500">Aucune expérience trouvée</td>
              </tr>
            ) : (
              experiences.map((exp: any) => (
                <tr key={exp.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy">
                    {exp.period}
                    {exp.isCurrent && <span className="ml-2 text-[10px] bg-gold/10 text-gold px-2 py-0.5 uppercase tracking-widest border border-gold/20">En cours</span>}
                  </td>
                  <td className="px-6 py-4 font-medium text-navy">{exp.title}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-steel border border-slate-200">
                      {exp.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <form action={deleteExperience.bind(null, exp.id)}>
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
