import type { Metadata } from 'next';
import PrintableSlides from '@/components/PrintableSlides';
import ExportToPPTX from '@/components/ExportToPPTX';
import { englishSlides, thaiSlides } from '@/lib/slides';
import './print.css';

export const metadata: Metadata = {
  title: 'Print PDF - IT Manual',
  description: 'Printable version of IT Staff manual for MS Teams Planner.',
};

export default function PrintPage() {
  const allSlides = [...englishSlides, ...thaiSlides];

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '16px' }}>
        <ExportToPPTX slides={allSlides} />
      </div>
      <PrintableSlides />
    </div>
  );
}
