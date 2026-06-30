import Image from "next/image";
import { profile } from "@/lib/mock-data";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative reveal-fade overflow-hidden rounded-2xl bg-hero-light px-6 py-20 text-navy shadow-premium sm:px-10 lg:px-16 lg:py-28 border border-white/50">
      <div className="relative z-10 grid gap-16 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
        <div className="reveal-up">
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-gold/70" />
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-gold">
              Fritz William Michel
            </p>
          </div>
          
          <h1 className="mt-8 max-w-4xl font-display text-4xl font-bold leading-[1.15] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Une trajectoire au service de l’administration publique et du développement national.
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg text-steel leading-relaxed">
            Découvrez un parcours marqué par le sens de l’État, la gestion institutionnelle et une vision de responsabilité publique tournée vers la stabilité, la modernisation et le service.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-[6px] border border-gold/20 bg-white/60 backdrop-blur-sm px-5 py-3 shadow-sm">
              <p className="text-sm text-steel">
                <span className="font-bold text-navy text-lg">20+</span> ans d&apos;expérience
              </p>
            </div>
            <div className="rounded-[6px] border border-gold/20 bg-white/60 backdrop-blur-sm px-5 py-3 shadow-sm">
              <p className="text-sm text-steel">
                <span className="font-bold text-navy text-lg">3</span> entreprises dirigées
              </p>
            </div>
            <div className="rounded-[6px] border border-gold/20 bg-white/60 backdrop-blur-sm px-5 py-3 shadow-sm">
              <p className="text-sm text-steel">
                <span className="font-bold text-navy text-lg">MEF</span> Cabinet ministériel
              </p>
            </div>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/parcours" variant="secondary" className="bg-navy text-white hover:bg-gold border-none px-8 transition-colors">
              Découvrir le parcours
            </Button>
            <Button
              href="/vision"
              variant="ghost"
              className="border border-slate-300 text-navy hover:bg-slate-50 px-8 transition-colors bg-white/80"
            >
              Vision & Axes
            </Button>
          </div>
        </div>

        <div className="relative reveal-up lg:ml-auto">
          {/* Accent block for structural framing */}
          <div className="absolute -right-6 -top-6 h-32 w-32 border-r-2 border-t-2 border-gold/40" />
          <div className="absolute -bottom-6 -left-6 h-32 w-32 border-b-2 border-l-2 border-navy/20" />
          
          <div className="relative bg-white p-3 shadow-premium border border-slate-100 rounded-lg">
            <div className="relative overflow-hidden bg-navy">
              <Image
                src="/id.jpeg"
                alt={`Portrait de ${profile.name}`}
                width={720}
                height={900}
                className="h-[28rem] w-full max-w-md object-cover object-top grayscale-[20%] contrast-125"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/80 to-transparent px-6 py-6 rounded-b-lg">
                <p className="font-display text-2xl font-semibold text-white">{profile.name}</p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-[1px] w-6 bg-gold" />
                  <p className="text-xs uppercase tracking-widest text-gold font-bold">
                    Portrait Officiel
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 text-sm text-steel px-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Titre</p>
                <p className="font-medium text-navy">{profile.title}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Localisation</p>
                <p className="font-medium text-navy">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
