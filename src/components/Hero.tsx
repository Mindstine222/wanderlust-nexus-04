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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful tropical destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl pt-16 md:pt-24">
          {/* Main heading */}
          <div className="space-y-4 animate-fade-in mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
              Reliable Visas &<br />Pilgrimage Services
            </h1>
            <p className="text-2xl md:text-3xl text-secondary drop-shadow-md font-arabic">
              قابل اعتماد ویزا اور حج خدمات
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 h-12">
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 h-12">
              Check Requirements
            </Button>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
            {[
              { icon: "💼", title: "Work Permit", subtitle: "ورک پرمٹ" },
              { icon: "🌍", title: "Visit Visa", subtitle: "ویزٹ ویزا" },
              { icon: "🕌", title: "Umrah", subtitle: "عمرہ" },
              { icon: "🕋", title: "Hajj", subtitle: "حج" },
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 shadow-medium hover:shadow-large transition-smooth text-center">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-foreground text-base mb-1">{service.title}</h3>
                <p className="text-xs text-muted-foreground font-arabic">{service.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
