type ResumeColumnProps = {
  eyebrow: string;
  title: string;
  entries: string[];
};

// Colonne « CV » façon timeline : chaque entrée « période : intitulé » devient une carte.
export function ResumeColumn({ eyebrow, title, entries }: ResumeColumnProps) {
  return (
    <div>
      <span className="text-sm text-accent">{eyebrow}</span>
      <h3 className="mt-2 font-display text-3xl font-bold text-heading">{title}</h3>

      <div className="mt-10 border-l-[5px] border-[#d9dee2]">
        {entries.map((entry) => {
          const [period, ...rest] = entry.split(" : ");
          const raw = rest.join(" : ");
          const text = raw.charAt(0).toUpperCase() + raw.slice(1);
          return (
            <div key={entry} className="relative pb-10 pl-10 last:pb-0">
              {/* Trait + pastille reliant la carte à la ligne */}
              <span className="absolute left-0 top-12 h-[5px] w-8 bg-[#d9dee2]" />
              <span className="absolute -left-[13px] top-[42px] h-5 w-5 rounded-full border-[5px] border-[#d9dee2] bg-paper" />

              <div className="neu-card p-8">
                <p className="font-display text-lg font-semibold text-heading">{text || period}</p>
                {text ? <p className="mt-2 text-sm text-muted">{period}</p> : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
