import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/ui/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { contactInfo } from "@/lib/mock-data";

const socialIcons: Record<string, string> = {
  "X (Twitter)": "twitter",
  Facebook: "facebook",
  LinkedIn: "linkedin",
  YouTube: "youtube",
};

export default function ContactPage() {
  const details = [
    { icon: "mail", label: "Contact général", value: contactInfo.generalEmail, href: `mailto:${contactInfo.generalEmail}` },
    { icon: "messages", label: "Presse", value: contactInfo.pressEmail, href: `mailto:${contactInfo.pressEmail}` },
    { icon: "pin", label: "Bureau", value: contactInfo.office },
  ];

  return (
    <div>
      <PageHero title="Contact" accent="direct" description="Pour toute demande officielle, médiatique ou institutionnelle, veuillez utiliser les coordonnées ou le formulaire ci-dessous." />

      <section className="section border-b-0">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.8fr,1.2fr]">
          <div className="neu h-full p-8 sm:p-10">
            <h2 className="font-display text-3xl font-bold text-heading">Coordonnées</h2>
            <ul className="mt-8 space-y-6">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-5">
                  <span className="neu-icon shrink-0 text-accent">
                    <Icon name={d.icon} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="mt-1 block break-all text-[15px] text-heading hover:text-accent">
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[15px] text-heading">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <p className="label-muted mt-12 !text-xs">Réseaux sociaux</p>
            <div className="mt-5 flex flex-wrap gap-4">
              {contactInfo.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="neu-icon"
                >
                  <Icon name={socialIcons[link.label] ?? "globe"} />
                </a>
              ))}
            </div>
          </div>

          <div className="neu p-8 sm:p-10">
            <h2 className="mb-8 font-display text-3xl font-bold text-heading">Envoyer un message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
