'use client';

import Achievement from '@/components/Achievement';
import Superior from '@/components/Superior';
import Car from '@/components/Car';
import Fact from '@/components/FactSearch';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function HomePage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      <main className="overflow-x-hidden">
        {/* Hero dipindahkan ke ClientLayout */}
        <Achievement />
        <ScrollAnimation direction="up" delay={200}>
          <Superior />
        </ScrollAnimation>
        <ScrollAnimation direction="up" delay={100}>
          <Car />
        </ScrollAnimation>
        <ScrollAnimation direction="fade" delay={300}>
          <Fact />
        </ScrollAnimation>
      </main>
      <ScrollAnimation direction="up" delay={0}>
        <Footer />
      </ScrollAnimation>
    </div>
  );
}
