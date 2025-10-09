import PackageCard from "./PackageCard";
import hajjImage from "@/assets/hajj-umrah.jpg";
import honeymoonImage from "@/assets/honeymoon.jpg";
import tourImage from "@/assets/tour-package.jpg";
import specialImage from "@/assets/special-offers.jpg";

const Packages = () => {
  const packages = [
    {
      title: "Hajj & Umrah",
      description: "Complete pilgrimage packages with expert guidance, visa assistance, and premium accommodation near Haram.",
      price: "3,499",
      duration: "15 Days",
      groupSize: "Up to 30",
      rating: "4.9",
      image: hajjImage,
      badge: "Most Popular",
      variant: "luxury" as const,
    },
    {
      title: "Romantic Honeymoon",
      description: "Luxurious honeymoon escapes to the world's most romantic destinations with exclusive couple experiences.",
      price: "2,799",
      duration: "7-10 Days",
      groupSize: "Couples Only",
      rating: "5.0",
      image: honeymoonImage,
      badge: "Premium",
      variant: "luxury" as const,
    },
    {
      title: "European Tours",
      description: "Explore iconic European cities with guided tours, cultural experiences, and authentic local cuisine.",
      price: "1,999",
      duration: "12 Days",
      groupSize: "Up to 20",
      rating: "4.8",
      image: tourImage,
    },
    {
      title: "Special Offers",
      description: "Exclusive limited-time deals on tropical getaways, adventure tours, and luxury resort stays.",
      price: "1,299",
      duration: "5-7 Days",
      groupSize: "Flexible",
      rating: "4.7",
      image: specialImage,
      badge: "30% OFF",
    },
  ];

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Travel
            <span className="block gradient-hero bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked destinations and experiences designed to create memories that last a lifetime
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
