import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VisaSection from "@/components/VisaSection";
import { Helmet } from "react-helmet";

const VisaPage = () => {
  return (
    <>
      <Helmet>
        <title>Visa Services - Fly Zone</title>
        <meta name="description" content="Professional visa application services for all countries. Fast processing, expert guidance, and reliable support." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Visa Services</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Expert visa assistance for travelers worldwide. We handle the paperwork, you enjoy the journey.
              </p>
            </div>
            <VisaSection />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default VisaPage;
