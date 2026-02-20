import React from 'react';

interface SlideProps {
  children: React.ReactNode;
  background?: string;
}

export default function Slide({ children, background }: SlideProps) {
  const sectionProps: React.HTMLAttributes<HTMLElement> = {};
  
  if (background) {
    sectionProps['data-background'] = background;
  }

  return (
    <section {...sectionProps}>
      {children}
    </section>
  );
}
