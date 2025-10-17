import { MapPin, Clock, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

const offers = [
  {
    id: 1,
    title: 'Dubai Tour Package',
    location: 'Dubai, UAE',
    price: 89999,
    originalPrice: 119999,
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1537132766573-55e8b870c5d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NjAzNTIyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
    discount: 25
  },
  {
    id: 2,
    title: 'UK Visit Visa',
    location: 'United Kingdom',
    price: 15500,
    originalPrice: null,
    duration: 'Processing: 15 Days',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400',
    featured: false
  },
  {
    id: 3,
    title: 'Umrah Package',
    location: 'Makkah & Madinah',
    price: 125000,
    originalPrice: 145000,
    duration: '10 Days',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bXJhaCUyMG1lY2NhJTIwcGlsZ3JpbWFnZXxlbnwxfHx8fDE3NjAzODgyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
    discount: 14
  },
  {
    id: 4,
    title: 'Turkey Tour Package',
    location: 'Istanbul, Turkey',
    price: 95000,
    originalPrice: 115000,
    duration: '7 Days / 6 Nights',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400',
    featured: false,
    discount: 17
  },
  {
    id: 5,
    title: 'USA B1/B2 Visa',
    location: 'United States',
    price: 22000,
    originalPrice: null,
    duration: 'Processing: 30 Days',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400',
    featured: false
  },
  {
    id: 6,
    title: 'Thailand Package',
    location: 'Bangkok & Phuket',
    price: 75000,
    originalPrice: 95000,
    duration: '6 Days / 5 Nights',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400',
    featured: true,
    discount: 21
  }
];

export function Offers() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-2">Special Offers & Packages</h2>
            <p className="text-muted-foreground text-lg">
              Discover our best deals on tours, visas, and travel packages
            </p>
          </div>
          <Button variant="outline" className="hidden md:block hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View All Offers
          </Button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              className="overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group rounded-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {offer.discount && (
                  <Badge className="absolute top-4 right-4 bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                    <Tag className="h-3 w-3 mr-1" />
                    {offer.discount}% OFF
                  </Badge>
                )}
              </div>
              <CardContent className="p-5">
                <h3 className="font-heading font-semibold text-foreground mb-2">{offer.title}</h3>
                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1 text-primary" />
                  {offer.location}
                </div>
                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <Clock className="h-4 w-4 mr-1 text-primary" />
                  {offer.duration}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-primary text-2xl font-semibold">
                      PKR {offer.price.toLocaleString()}
                    </span>
                    {offer.originalPrice && (
                      <span className="text-muted-foreground line-through ml-2 text-sm">
                        PKR {offer.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
                <Button className="w-full group-hover:shadow-lg transition-all duration-300">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tablet/Mobile Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto">
          <div className="flex gap-6 pb-4" style={{ minWidth: 'min-content' }}>
            {offers.map((offer, index) => (
              <Card
                key={offer.id}
                className="overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group rounded-xl flex-shrink-0 w-[320px] animate-[fade-in_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {offer.discount && (
                    <Badge className="absolute top-4 right-4 bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                      <Tag className="h-3 w-3 mr-1" />
                      {offer.discount}% OFF
                    </Badge>
                  )}
                </div>
                <CardContent className="p-5">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{offer.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1 text-primary" />
                    {offer.location}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <Clock className="h-4 w-4 mr-1 text-primary" />
                    {offer.duration}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-primary text-2xl font-semibold">
                        PKR {offer.price.toLocaleString()}
                      </span>
                      {offer.originalPrice && (
                        <span className="text-muted-foreground line-through ml-2 text-sm">
                          PKR {offer.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button className="w-full group-hover:shadow-lg transition-all duration-300">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline">View All Offers</Button>
        </div>
      </div>
    </section>
  );
}
