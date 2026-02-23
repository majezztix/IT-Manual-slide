import Link from 'next/link';

export default function NotFound() {
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
        gap: '16px',
      }}
    >
      <h2
        style={{
          fontSize: '4rem',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        404
      </h2>
      <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
        Page not found / ไม่พบหน้าที่ต้องการ
      </p>
      <Link
        href="/"
        style={{
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          color: '#fff',
          padding: '10px 24px',
          borderRadius: '999px',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: 600,
        }}
      >
        ← Back to Slides
      </Link>
    </div>
  );
}
