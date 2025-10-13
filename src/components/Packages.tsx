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
    <section id="packages" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Special Packages and Deals
            </h2>
            <p className="text-lg text-muted-foreground font-arabic">
              خصوصی پیکجز اور ڈیلز
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6 py-3 rounded-full transition-smooth">
            View Packages
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {packages.slice(0, 2).map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3 rounded-full transition-smooth">
            View Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
