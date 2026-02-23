'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a1a',
        color: '#fff',
        fontFamily: 'var(--font-noto-sans), sans-serif',
        gap: '16px',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', color: '#f87171' }}>
        ⚠️ Something went wrong
      </h2>
      <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
        {error.message || 'An unexpected error occurred.'}
      </p>
      <button
        onClick={reset}
        style={{
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          color: '#fff',
          border: 'none',
          padding: '10px 24px',
          borderRadius: '999px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 600,
        }}
      >
        Try again
      </button>
    </div>
  );
}
