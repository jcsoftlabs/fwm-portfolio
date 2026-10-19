import { homeHighlights } from "@/lib/mock-data";

export function HighlightCards() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {homeHighlights.map((item, index) => (
        <div key={item.title} className="neu-card h-full p-8">
          <span className="label !text-xs">0{index + 1}</span>
          <h3 className="mt-5 font-display text-xl font-semibold text-heading">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-body">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
