import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      location: "New York, USA",
      rating: 5,
      text: "The Umrah package was perfectly organized! From visa to accommodation, everything was seamless. The team's attention to detail made our spiritual journey truly memorable.",
      package: "Hajj & Umrah Package",
    },
    {
      name: "Michael Chen",
      location: "London, UK",
      rating: 5,
      text: "Our honeymoon in Maldives was beyond amazing! The resort was stunning and every detail was taken care of. Best travel agency experience we've ever had.",
      package: "Honeymoon Package",
    },
    {
      name: "Fatima Hassan",
      location: "Dubai, UAE",
      rating: 5,
      text: "Excellent visa processing service! Got my Schengen visa approved in just 5 days. Professional, efficient, and always kept me updated throughout the process.",
      package: "Visa Services",
    },
    {
      name: "David Martinez",
      location: "Toronto, Canada",
      rating: 5,
      text: "The European tour was absolutely fantastic! Great hotels, knowledgeable guides, and perfect itinerary. Highly recommend for anyone wanting to explore Europe.",
      package: "European Tours",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our Clients
            <span className="block gradient-sunset bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied travelers who trusted us with their journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="hover:shadow-medium transition-smooth">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-sm text-primary mt-1">{testimonial.package}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
