import { ContactForm } from "@/components/ui/ContactForm";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { contactInfo } from "@/lib/mock-data";

export default function ContactPage() {
  return (
    <div className="pb-16">
      {/* Sub-page Hero Banner */}
      <div className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Site Officiel</p>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel">
            Pour toute demande officielle, médiatique ou institutionnelle, veuillez utiliser les coordonnées ou le formulaire ci-dessous.
          </p>
          <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
            <span>Accueil</span>
            <span>›</span>
            <span className="text-navy font-medium">Contact</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="font-display text-2xl text-navy mb-6">Envoyer un message</h2>
<ContactForm />
          </div>

          <div className="grid gap-6">
            <div className="border border-slate-200 bg-slate-50 p-8">
              <h2 className="font-display text-2xl text-navy">Coordonnées</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-steel">
                <p>
                  <strong className="text-navy">Contact général :</strong>{" "}
                  <br />
                  <a href={`mailto:${contactInfo.generalEmail}`} className="text-gold hover:underline">
                    {contactInfo.generalEmail}
                  </a>
                </p>
                <p>
                  <strong className="text-navy">Presse :</strong>{" "}
                  <br />
                  <a href={`mailto:${contactInfo.pressEmail}`} className="text-gold hover:underline">
                    {contactInfo.pressEmail}
                  </a>
                </p>
                <p>
                  <strong className="text-navy">Bureau :</strong>{" "}
                  <br />
                  {contactInfo.office}
                </p>
              </div>
            </div>

            <div className="border border-slate-200 bg-white p-8">
              <h2 className="font-display text-2xl text-navy">Réseaux sociaux</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {contactInfo.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center justify-center rounded-none border border-slate-200 px-4 py-2 text-xs font-bold uppercase tracking-wider text-steel transition-colors hover:border-gold hover:text-gold"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
