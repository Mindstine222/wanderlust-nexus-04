import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import honeymoonImage from "@/assets/honeymoon.jpg";
import { Helmet } from "react-helmet";

const HoneymoonPage = () => {
  const honeymoonPackages = [
    {
      title: "Maldives Paradise",
      location: "Maldives",
      duration: "7 Days",
      price: 4999,
      rating: 5,
      reviews: 78,
      image: honeymoonImage,
      description: "Overwater villa, private beaches, couple spa treatments"
    },
    {
      title: "Bali Romance",
      location: "Bali, Indonesia",
      duration: "8 Days",
      price: 3499,
      rating: 4.9,
      reviews: 92,
      image: honeymoonImage,
      description: "Luxury resort, romantic dinners, cultural experiences"
    },
    {
      title: "Paris Love Story",
      location: "Paris, France",
      duration: "6 Days",
      price: 5499,
      rating: 4.8,
      reviews: 65,
      image: honeymoonImage,
      description: "Eiffel Tower views, Seine river cruise, fine dining"
    },
    {
      title: "Santorini Dreams",
      location: "Santorini, Greece",
      duration: "7 Days",
      price: 4799,
      rating: 5,
      reviews: 88,
      image: honeymoonImage,
      description: "Caldera views, sunset tours, romantic cave hotels"
    },
    {
      title: "Dubai Luxury",
      location: "Dubai, UAE",
      duration: "5 Days",
      price: 3999,
      rating: 4.7,
      reviews: 71,
      image: honeymoonImage,
      description: "5-star hotels, desert safari, yacht cruise"
    },
    {
      title: "Swiss Alps Retreat",
      location: "Switzerland",
      duration: "9 Days",
      price: 6499,
      rating: 4.9,
      reviews: 54,
      image: honeymoonImage,
      description: "Mountain chalets, scenic train rides, chocolate tours"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Honeymoon Packages - Gerry's Travel</title>
        <meta name="description" content="Romantic honeymoon packages to exotic destinations. Create unforgettable memories with our couple-friendly curated experiences." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Honeymoon Packages</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Celebrate your love story with romantic getaways to the world's most beautiful destinations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {honeymoonPackages.map((pkg, index) => (
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

export default HoneymoonPage;
