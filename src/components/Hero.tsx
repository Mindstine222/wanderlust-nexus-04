import { useState } from "react";
import { Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-beach.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination.trim()) {
      const formattedDestination = destination.toLowerCase().trim().replace(/\s+/g, "-");
      navigate(`/countries/${formattedDestination}`);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful tropical destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
              Discover Your Next
              <span className="block bg-gradient-sunset bg-clip-text text-transparent">
                Adventure
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
              Expert travel services for visas, tickets, and unforgettable packages worldwide
            </p>
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="bg-card/95 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-large max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Where to? (e.g., Saudi Arabia)"
                  className="pl-10 h-12 bg-background"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="date"
                  placeholder="When?"
                  className="pl-10 h-12 bg-background"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="h-12">
                <Search className="mr-2 h-5 w-5" />
                Search Packages
              </Button>
            </div>
          </form>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-8">
            {[
              { number: "150+", label: "Destinations" },
              { number: "50K+", label: "Happy Travelers" },
              { number: "98%", label: "Success Rate" },
              { number: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
