import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import hajjImage from "@/assets/hajj-umrah.jpg";
import { Helmet } from "react-helmet";

const HajjUmrahPage = () => {
  const hajjPackages = [
    {
      title: "Premium Hajj Package",
      location: "Makkah & Madinah",
      duration: "21 Days",
      price: 8999,
      rating: 5,
      reviews: 89,
      image: hajjImage,
      description: "Luxurious accommodation near Haram, guided tours, meals included"
    },
    {
      title: "Economy Hajj Package",
      location: "Makkah & Madinah",
      duration: "18 Days",
      price: 5999,
      rating: 4.8,
      reviews: 124,
      image: hajjImage,
      description: "Comfortable stay, all essential services, group arrangement"
    },
    {
      title: "Deluxe Umrah Package",
      location: "Makkah & Madinah",
      duration: "10 Days",
      price: 3499,
      rating: 4.9,
      reviews: 156,
      image: hajjImage,
      description: "5-star hotels near Haram, premium transport, guided ziyarat"
    },
    {
      title: "Quick Umrah Package",
      location: "Makkah & Madinah",
      duration: "7 Days",
      price: 2299,
      rating: 4.7,
      reviews: 98,
      image: hajjImage,
      description: "Perfect for short visits, all-inclusive package"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hajj & Umrah Packages - Fly Zone</title>
        <meta name="description" content="Affordable and premium Hajj & Umrah packages with visa assistance, accommodation near Haram, and guided tours." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Hajj & Umrah Packages</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fulfill your spiritual journey with our carefully curated Hajj and Umrah packages
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hajjPackages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HajjUmrahPage;
