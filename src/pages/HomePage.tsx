import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Services } from '../components/Services';
import { Offers } from '../components/Offers';
// import { CarsSection } from '../components/CarsSection'; // Hidden as requested

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Offers />
      {/* <CarsSection /> */}
    </>
  );
}
