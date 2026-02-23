'use client';

import PptxGenJS from 'pptxgenjs';

interface SlideContent {
  type: 'title' | 'text' | 'list' | 'steps' | 'grid' | 'warning' | 'image';
  content?: string;
  items?: string[];
  title?: string;
  emoji?: string;
  color?: string;
}

interface SlideData {
  title: string;
  subtitle?: string;
  sections: SlideContent[];
}

export default function ExportToPPTX({ slides }: { slides: SlideData[] }) {
  const exportToPPTX = () => {
    const pptx = new PptxGenJS();

    slides.forEach((slide, index) => {
      const pptSlide = pptx.addSlide();

      // Title
      pptSlide.addText(slide.title, {
        x: 0.5,
        y: 0.5,
        w: 9,
        h: 0.8,
        fontSize: 32,
        bold: true,
        color: 'FFFFFF',
        align: 'center',
        fill: { color: '4F46E5' }
      });

      // Subtitle
      if (slide.subtitle) {
        pptSlide.addText(slide.subtitle, {
          x: 0.5,
          y: 1.4,
          w: 9,
          h: 0.5,
          fontSize: 18,
          color: '94A3B8',
          align: 'center'
        });
      }

      // Content
      let yPosition = 2.2;

      slide.sections.forEach((section) => {
        switch (section.type) {
          case 'text':
            pptSlide.addText(`${section.emoji || ''} ${section.content}`, {
              x: 0.5,
              y: yPosition,
              w: 9,
              h: 0.6,
              fontSize: 14,
              color: 'E2E8F0',
              align: 'left'
            });
            yPosition += 0.8;
            break;

          case 'list':
            if (section.title) {
              pptSlide.addText(`${section.emoji || ''} ${section.title}`, {
                x: 0.5,
                y: yPosition,
                w: 9,
                h: 0.5,
                fontSize: 16,
                bold: true,
                color: 'A78BFA'
              });
              yPosition += 0.6;
            }
            section.items?.forEach((item) => {
              pptSlide.addText(`• ${item}`, {
                x: 0.7,
                y: yPosition,
                w: 8.8,
                h: 0.5,
                fontSize: 13,
                color: 'CBD5E1'
              });
              yPosition += 0.5;
            });
            yPosition += 0.3;
            break;

          case 'steps':
            if (section.title) {
              pptSlide.addText(`${section.emoji || ''} ${section.title}`, {
                x: 0.5,
                y: yPosition,
                w: 9,
                h: 0.5,
                fontSize: 16,
                bold: true,
                color: 'A78BFA'
              });
              yPosition += 0.6;
            }
            section.items?.forEach((item) => {
              pptSlide.addText(item, {
                x: 0.7,
                y: yPosition,
                w: 8.8,
                h: 0.5,
                fontSize: 13,
                color: 'CBD5E1'
              });
              yPosition += 0.5;
            });
            yPosition += 0.3;
            break;

          case 'grid':
            if (section.title) {
              pptSlide.addText(`${section.emoji || ''} ${section.title}`, {
                x: 0.5,
                y: yPosition,
                w: 9,
                h: 0.5,
                fontSize: 16,
                bold: true,
                color: 'A78BFA'
              });
              yPosition += 0.6;
            }
            section.items?.forEach((item) => {
              pptSlide.addText(item, {
                x: 0.7,
                y: yPosition,
                w: 8.8,
                h: 0.5,
                fontSize: 13,
                color: 'CBD5E1'
              });
              yPosition += 0.5;
            });
            yPosition += 0.3;
            break;

          case 'warning':
            pptSlide.addText(`⚠️ ${section.content}`, {
              x: 0.5,
              y: yPosition,
              w: 9,
              h: 0.6,
              fontSize: 14,
              bold: true,
              color: section.color || 'FF9800',
              fill: { color: `${section.color || 'FF9800'}15` }
            });
            yPosition += 0.8;
            break;

          case 'image':
            pptSlide.addText(`${section.emoji || '📷'} ${section.content}`, {
              x: 0.5,
              y: yPosition,
              w: 9,
              h: 1.5,
              fontSize: 12,
              color: 'A78BFA',
              align: 'center',
              valign: 'middle',
              fill: { color: '1E1E28' }
            });
            yPosition += 1.7;
            break;

          default:
            break;
        }
      });
    });

    pptx.writeFile({ fileName: 'IT-Manual-Slides.pptx' });
  };

  return (
    <button
      onClick={exportToPPTX}
      style={{
        background: 'linear-gradient(135deg, #D97706, #F59E0B)',
        color: '#fff',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '999px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: '0 4px 12px rgba(217, 119, 6, 0.3)'
      }}
    >
      <span>📊</span>
      Export to PowerPoint
    </button>
  );
}
