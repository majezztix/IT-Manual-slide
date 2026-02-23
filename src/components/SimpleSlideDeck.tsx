'use client';

import React, { useMemo, useState } from 'react';

interface SimpleSlideDeckProps {
  children: React.ReactNode;
}

export default function SimpleSlideDeck({ children }: SimpleSlideDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isThai, setIsThai] = useState(false);

  const allSlides = useMemo(() => React.Children.toArray(children), [children]);
  const thaiSlides = allSlides.filter((_, index) => index % 2 === 1);
  const englishSlides = allSlides.filter((_, index) => index % 2 === 0);

  const slides = (isThai ? thaiSlides : englishSlides) || [];
  const safeCurrent = slides.length ? currentSlide % slides.length : 0;
  const progress = slides.length ? ((safeCurrent + 1) / slides.length) * 100 : 0;

  const nextSlide = () => {
    if (slides.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (slides.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  const toggleLanguage = () => {
    setIsThai(!isThai);
    setCurrentSlide(0);
  };

  const ui = isThai
    ? { prev: '← ก่อนหน้า', next: 'ถัดไป →', hint: 'ใช้ลูกศร ← → หรือ Space', lang: '🇬🇧 EN', slide: 'สไลด์' }
    : { prev: '← Prev', next: 'Next →', hint: 'Arrow keys or Space to navigate', lang: '🇹🇭 TH', slide: 'Slide' };

  const dotColors = [
    '#6366f1', '#8b5cf6', '#a78bfa', '#38bdf8', '#34d399',
    '#fbbf24', '#f87171', '#fb923c', '#e879f9', '#22d3ee'
  ];

  return (
    <div
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #0a0a1a 0%, #0f0f2e 50%, #0a0a1a 100%)',
        color: '#fff',
        fontFamily: "var(--font-noto-sans), var(--font-noto-sans-thai), 'Segoe UI', Arial, sans-serif",
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      {/* Decorative background orbs */}
      <div style={{
        position: 'absolute', top: '-150px', left: '-150px',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-100px', right: '-100px',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />

      {/* Progress bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'rgba(255,255,255,0.08)', zIndex: 10 }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #6366f1, #a78bfa, #38bdf8)',
          transition: 'width 0.4s ease',
          borderRadius: '0 2px 2px 0'
        }} />
      </div>

      {/* Top bar */}
      <div style={{
        position: 'absolute', top: '12px', left: 0, right: 0,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0 24px', zIndex: 10
      }}>
        {/* Slide counter */}
        <div style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '999px',
          padding: '5px 14px',
          fontSize: '13px',
          color: '#94a3b8',
          backdropFilter: 'blur(10px)'
        }}>
          {ui.slide} <span style={{ color: '#a78bfa', fontWeight: 700 }}>{slides.length ? safeCurrent + 1 : 0}</span>
          <span style={{ color: '#475569' }}> / {slides.length}</span>
        </div>

        {/* Right controls */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: '#475569' }}>{ui.hint}</span>
          <button
            onClick={toggleLanguage}
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: '#fff',
              border: 'none',
              padding: '7px 16px',
              borderRadius: '999px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.5px',
              boxShadow: '0 2px 12px rgba(99,102,241,0.4)',
              transition: 'transform 0.15s ease'
            }}
          >
            {ui.lang}
          </button>
        </div>
      </div>

      {/* Slide content area */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 60px 100px',
        overflow: 'hidden'
      }}>
        {slides.length > 0 ? slides[safeCurrent] : (
          <div style={{ color: '#475569', fontSize: '1.2rem' }}>No slides available</div>
        )}
      </div>

      {/* Bottom navigation */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(to top, rgba(10,10,26,0.95), transparent)',
        zIndex: 10
      }}>
        {/* Prev button */}
        <button
          onClick={prevSlide}
          disabled={safeCurrent === 0}
          style={{
            background: safeCurrent === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.08)',
            color: safeCurrent === 0 ? '#334155' : '#e2e8f0',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '10px 22px',
            borderRadius: '999px',
            cursor: safeCurrent === 0 ? 'not-allowed' : 'pointer',
            fontSize: '14px',
            fontWeight: 600,
            backdropFilter: 'blur(10px)',
            transition: 'all 0.2s ease'
          }}
        >
          {ui.prev}
        </button>

        {/* Dot indicators */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              style={{
                width: i === safeCurrent ? '24px' : '8px',
                height: '8px',
                borderRadius: '999px',
                background: i === safeCurrent
                  ? dotColors[i % dotColors.length]
                  : 'rgba(255,255,255,0.2)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          disabled={safeCurrent === slides.length - 1}
          style={{
            background: safeCurrent === slides.length - 1
              ? 'rgba(255,255,255,0.03)'
              : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: safeCurrent === slides.length - 1 ? '#334155' : '#fff',
            border: 'none',
            padding: '10px 22px',
            borderRadius: '999px',
            cursor: safeCurrent === slides.length - 1 ? 'not-allowed' : 'pointer',
            fontSize: '14px',
            fontWeight: 600,
            boxShadow: safeCurrent === slides.length - 1 ? 'none' : '0 2px 16px rgba(99,102,241,0.4)',
            transition: 'all 0.2s ease'
          }}
        >
          {ui.next}
        </button>
      </div>
    </div>
  );
}
