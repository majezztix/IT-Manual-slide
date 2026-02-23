import type { Metadata } from 'next';
import ITManualSlides from '@/components/ITManualSlides';
import PrintButton from '@/components/PrintButton';

export const metadata: Metadata = {
  title: 'IT Manual - MS Teams Planner Guide',
  description: 'IT Staff manual for MS Teams Planner task management, coordinating with Sales & Accounting departments.',
};

export default function Home() {
  return (
    <main style={{ margin: 0, padding: 0, height: '100vh', overflow: 'hidden' }}>
      <ITManualSlides />
      <PrintButton />
    </main>
  );
}
