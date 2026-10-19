type MarqueeProps = {
  items: string[];
};

// Bandeau défilant infini (liste dupliquée pour une boucle sans couture).
export function Marquee({ items }: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/[0.07] bg-onyx/60 py-6 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-12 hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-3xl italic text-white/70 sm:text-4xl">{item}</span>
            <span className="text-gold text-xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
