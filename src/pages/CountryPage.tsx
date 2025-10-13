import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, FileText, Clock, DollarSign, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";
import { Helmet } from "react-helmet";

const CountryPage = () => {
  const { countryName } = useParams<{ countryName: string }>();
  const formattedCountry = countryName?.split("-").map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ") || "";

  // Mock data - in a real app, this would come from an API
  const countryData = {
    visaInfo: {
      types: ["Tourist Visa", "Business Visa", "Transit Visa"],
      processingTime: "5-7 business days",
      cost: "$150 - $300",
      requirements: [
        "Valid passport (6 months validity)",
        "Recent passport-size photographs",
        "Completed visa application form",
        "Proof of accommodation",
        "Return flight tickets",
        "Bank statements (last 3 months)"
      ]
    },
    packages: [
      {
        title: `${formattedCountry} Explorer`,
        location: formattedCountry,
        duration: "7 Days",
        price: 2999,
        rating: 4.8,
        reviews: 124,
        image: heroImage,
        description: "Explore top attractions, guided tours, 4-star hotels"
      },
      {
        title: `${formattedCountry} Luxury Tour`,
        location: formattedCountry,
        duration: "10 Days",
        price: 4999,
        rating: 4.9,
        reviews: 89,
        image: heroImage,
        description: "Premium experience with 5-star amenities"
      }
    ],
    offers: [
      {
        title: "Early Bird Special",
        discount: "30% off",
        validUntil: "End of month"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{formattedCountry} - Visa, Packages & Travel Guide | Fly Zone</title>
        <meta name="description" content={`Complete travel guide for ${formattedCountry}. Find visa information, tour packages, flight tickets, and special offers.`} />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt={formattedCountry} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-background/95" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
              {formattedCountry}
            </h1>
            <p className="text-xl text-white/90 drop-shadow-md">
              Your complete travel guide
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Visa Information */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Visa Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Visa Types
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {countryData.visaInfo.types.map((type, index) => (
                      <Badge key={index} variant="secondary" className="mr-2">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Processing Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{countryData.visaInfo.processingTime}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Visa Cost
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{countryData.visaInfo.cost}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {countryData.visaInfo.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" variant="hero">
                Apply for Visa Now
              </Button>
            </div>
          </section>

          {/* Available Packages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Available Packages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {countryData.packages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </section>

          {/* Ticketing Options */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Flight Tickets</h2>
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Plane className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-2xl font-semibold">Book Your Flight</h3>
                    <p className="text-muted-foreground">
                      Find the best deals on flights to {formattedCountry}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button size="lg" variant="hero">
                    Search Flights
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Special Offers */}
          {countryData.offers.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-8">Special Offers</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {countryData.offers.map((offer, index) => (
                  <Card key={index} className="border-primary/50">
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">
                        Limited Time
                      </Badge>
                      <CardTitle>{offer.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {offer.discount}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Valid until: {offer.validUntil}
                      </p>
                      <Button className="mt-4" variant="hero">
                        Explore Packages
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default CountryPage;
