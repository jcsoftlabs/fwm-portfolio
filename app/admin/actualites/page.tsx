import Link from "next/link";
import prisma from "@/lib/prisma";
import { deleteArticle } from "./actions";

export default async function AdminActualitesPage() {
  const articles = await prisma.newsArticle.findMany({
    orderBy: { date: "desc" },
  });

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-semibold text-navy">Actualités</h1>
          <p className="text-sm text-steel mt-1">Gérez vos articles, communiqués et prises de parole.</p>
        </div>
        <Link
          href="/admin/actualites/nouveau"
          className="bg-gold text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-goldLight transition-colors"
        >
          Nouvel Article
        </Link>
      </div>

      <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm text-steel">
          <thead className="bg-slate-50 text-xs uppercase tracking-widest text-navy border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 font-bold">Titre</th>
              <th className="px-6 py-4 font-bold">Catégorie</th>
              <th className="px-6 py-4 font-bold">Date</th>
              <th className="px-6 py-4 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {articles.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-slate-400">
                  Aucune actualité pour le moment.
                </td>
              </tr>
            ) : (
              articles.map((article) => (
                <tr key={article.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-navy">{article.title}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-steel border border-slate-200">
                      {article.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">{new Date(article.date).toLocaleDateString("fr-FR")}</td>
                  <td className="px-6 py-4 text-right">
                    <form action={deleteArticle.bind(null, article.id)}>
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
