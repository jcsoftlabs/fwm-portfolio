"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  words: string[];
  className?: string;
};

// Écrit puis efface chaque mot en boucle, avec un curseur clignotant.
export function Typewriter({ words, className }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? 45 : 90;

    if (!deleting && text === word) delay = 1800;
    if (deleting && text === "") delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      {text}
      <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] animate-blink bg-accent align-baseline" />
    </span>
  );
}
