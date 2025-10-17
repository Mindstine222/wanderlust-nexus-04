import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Services } from '../components/Services';
import { Offers } from '../components/Offers';
import { Testimonials } from '../components/Testimonials';
import { CTABanner } from '../components/CTABanner';
import { ScrollToTop } from '../components/ScrollToTop';
import { WhatsAppButton } from '../components/WhatsAppButton';

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Offers />
      <Testimonials />
      <CTABanner />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}
