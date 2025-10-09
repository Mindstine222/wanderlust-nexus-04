import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import VisaSection from "@/components/VisaSection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Packages />
      <VisaSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
