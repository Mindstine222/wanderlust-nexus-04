import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Packages from "@/components/Packages";
import { Helmet } from "react-helmet";

const PackagesPage = () => {
  return (
    <>
      <Helmet>
        <title>Travel Packages - Gerry's Travel</title>
        <meta name="description" content="Explore our curated travel packages for all types of travelers. From luxury tours to budget-friendly adventures." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Packages</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover handpicked travel packages designed for every type of traveler
              </p>
            </div>
            <Packages />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PackagesPage;
