import SlideDeck from '@/components/SlideDeck';
import ITManualSlides from '@/components/ITManualSlides';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <SlideDeck>
        <ITManualSlides />
      </SlideDeck>
    </div>
  );
}
