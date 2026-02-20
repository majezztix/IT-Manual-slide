'use client';

import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

interface SlideDeckProps {
  children: React.ReactNode;
}

export default function SlideDeck({ children }: SlideDeckProps) {
  const deckRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current && !revealRef.current) {
      const deck = new Reveal(deckRef.current, {
        hash: true,
        controls: true,
        progress: true,
        center: true,
        transition: 'slide',
      });

      deck.initialize().then(() => {
        revealRef.current = deck;
      });
    }

    return () => {
      if (revealRef.current) {
        revealRef.current.destroy();
        revealRef.current = null;
      }
    };
  }, []);

  return (
    <div className="reveal" ref={deckRef}>
      <div className="slides">
        {children}
      </div>
    </div>
  );
}
