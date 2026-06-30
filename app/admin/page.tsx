import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [newsCount, subscriberCount, albumCount] = await Promise.all([
    prisma.newsArticle.count(),
    prisma.subscriber.count(),
    prisma.album.count(),
  ]);

  return (
    <div className="p-8">
      <h1 className="font-display text-3xl font-semibold text-navy mb-2">Tableau de bord</h1>
      <p className="text-steel mb-8">Bienvenue dans votre espace d'administration.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 border border-slate-200 shadow-sm border-t-2 border-t-gold">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Actualités publiées</p>
          <p className="text-3xl font-display font-semibold text-navy">{newsCount}</p>
        </div>
        <div className="bg-white p-6 border border-slate-200 shadow-sm border-t-2 border-t-gold">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Abonnés Newsletter</p>
          <p className="text-3xl font-display font-semibold text-navy">{subscriberCount}</p>
        </div>
        <div className="bg-white p-6 border border-slate-200 shadow-sm border-t-2 border-t-gold">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Albums Photos</p>
          <p className="text-3xl font-display font-semibold text-navy">{albumCount}</p>
        </div>
      </div>
    </div>
  );
}

