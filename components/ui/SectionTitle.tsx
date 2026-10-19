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
    <div className={align === "center" ? "mx-auto flex max-w-3xl flex-col items-center text-center" : "max-w-3xl"}>
      {eyebrow ? <span className="eyebrow mb-6">{eyebrow}</span> : null}
      <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
