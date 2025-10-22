import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Offers } from '../components/Offers';
import { Testimonials } from '../components/Testimonials';
import { CTABanner } from '../components/CTABanner';
import { FloatingActions } from '../components/FloatingActions';

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Offers />
      <Testimonials />
      <CTABanner />
      <FloatingActions />
    </>
  );
}
