'use client';

export default function PrintButton() {
  const handlePrint = () => {
    window.open('/print', '_blank');
  };

  return (
    <button
      onClick={handlePrint}
      style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        background: '#dc2626',
        color: '#fff',
        border: '1px solid #ef4444',
        padding: '10px 16px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        zIndex: 1000,
      }}
    >
      📄 Print PDF
    </button>
  );
}
