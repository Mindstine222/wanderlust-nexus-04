import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import specialOffersImage from "@/assets/special-offers.jpg";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";

const OffersPage = () => {
  const specialOffers = [
    {
      title: "Early Bird Thailand",
      location: "Bangkok & Phuket",
      duration: "7 Days",
      price: 1999,
      rating: 4.8,
      reviews: 145,
      image: specialOffersImage,
      description: "Book now and save 40%! Limited time offer"
    },
    {
      title: "Last Minute Turkey",
      location: "Istanbul & Cappadocia",
      duration: "6 Days",
      price: 2299,
      rating: 4.9,
      reviews: 98,
      image: specialOffersImage,
      description: "Exclusive 35% discount for immediate booking"
    },
    {
      title: "Group Deal Egypt",
      location: "Cairo & Luxor",
      duration: "8 Days",
      price: 2599,
      rating: 4.7,
      reviews: 112,
      image: specialOffersImage,
      description: "Book for 4+ people and get 30% off"
    },
    {
      title: "Flash Sale Malaysia",
      location: "Kuala Lumpur & Langkawi",
      duration: "5 Days",
      price: 1599,
      rating: 4.6,
      reviews: 87,
      image: specialOffersImage,
      description: "48-hour flash sale - 45% discount!"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Special Offers - Fly Zone</title>
        <meta name="description" content="Limited-time travel deals and special offers. Save big on your dream vacation with our exclusive packages." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
                Limited Time Only
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Offers</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Grab these exclusive deals before they're gone! Unbeatable prices on amazing destinations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialOffers.map((pkg, index) => (
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

export default OffersPage;
