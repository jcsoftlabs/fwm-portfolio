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
      {eyebrow ? <span className="label mb-4">{eyebrow}</span> : null}
      <h2 className="font-display text-4xl font-bold leading-tight text-heading md:text-[3.25rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-body">{description}</p>
      ) : null}
    </div>
  );
}
