import type { Metadata } from 'next';
import PrintableSlides from '@/components/PrintableSlides';
import './print.css';

export const metadata: Metadata = {
  title: 'Print PDF - IT Manual',
  description: 'Printable version of IT Staff manual for MS Teams Planner.',
};

export default function PrintPage() {
  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <PrintableSlides />
    </div>
  );
}
