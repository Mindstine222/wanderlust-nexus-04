import { FileCheck, Plane, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VisaSection = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Visa Processing",
      description: "Fast and reliable visa services for over 100 countries with document verification",
      color: "text-primary",
    },
    {
      icon: Plane,
      title: "Flight Tickets",
      description: "Best deals on domestic and international flights with flexible booking options",
      color: "text-accent",
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance coverage for peace of mind during your journey",
      color: "text-secondary",
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Urgent visa processing available with 24-48 hour turnaround for select countries",
      color: "text-luxury",
    },
  ];

  return (
    <section id="visa" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Visa & Travel
            <span className="block gradient-ocean bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hassle-free visa processing and flight bookings with expert assistance every step of the way
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className={`h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4 ${service.color}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center border border-primary/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Help with Your Visa Application?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our visa experts are ready to assist you with document preparation, application submission, and tracking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Apply for Visa
            </Button>
            <Button variant="outline" size="lg">
              Book Flight Tickets
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaSection;
