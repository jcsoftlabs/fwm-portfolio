import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { contactInfo } from "@/lib/mock-data";

export default function ContactPage() {
  return (
    <div className="pb-32">
      <PageHero title="Contact" accent="direct" description="Pour toute demande officielle, médiatique ou institutionnelle, veuillez utiliser les coordonnées ou le formulaire ci-dessous." />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="glass gold-border rounded-[2rem] p-8 sm:p-10">
            <h2 className="font-display text-4xl leading-tight text-white mb-6">Envoyer un message</h2>
<ContactForm />
          </div>

          <div className="grid gap-5">
            <div className="gold-border rounded-3xl bg-gradient-to-br from-gold/10 to-onyx p-8">
              <h2 className="font-display text-4xl leading-tight text-white">Coordonnées</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-white/55">
                <p>
                  <strong className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Contact général :</strong>{" "}
                  <br />
                  <a href={`mailto:${contactInfo.generalEmail}`} className="text-goldLight hover:text-white">
                    {contactInfo.generalEmail}
                  </a>
                </p>
                <p>
                  <strong className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Presse :</strong>{" "}
                  <br />
                  <a href={`mailto:${contactInfo.pressEmail}`} className="text-goldLight hover:text-white">
                    {contactInfo.pressEmail}
                  </a>
                </p>
                <p>
                  <strong className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Bureau :</strong>{" "}
                  <br />
                  {contactInfo.office}
                </p>
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h2 className="font-display text-4xl leading-tight text-white">Réseaux sociaux</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {contactInfo.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-goldLight hover:shadow-glow"
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
