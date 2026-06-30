type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl flex flex-col items-center text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <div className="mb-4 flex items-center gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-haitiBlue">
            {eyebrow}
          </p>
          <div className="h-[1px] w-12 bg-haitiBlue/30" />
        </div>
      ) : null}
      <h2 className="font-display text-3xl font-semibold leading-tight text-navy md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
