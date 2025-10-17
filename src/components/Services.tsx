import { FileText, Plane, Home, MapPin, Car } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

const services = [
  {
    id: 'visas',
    title: 'Visas',
    description: 'Fast & reliable visa processing for all countries',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1655722725332-9925c96dd627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzcG9ydCUyMHZpc2F8ZW58MXx8fHwxNzYwMzg4MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'flights',
    title: 'Flights',
    description: 'Book flights at competitive prices worldwide',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1559268950-2d7ceb2efa3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhaXJwbGFuZSUyMGRlc3RpbmF0aW9ufGVufDF8fHx8MTc2MDM4ODIwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'umrah',
    title: 'Umrah',
    description: 'Complete Umrah packages with accommodation',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bXJhaCUyMG1lY2NhJTIwcGlsZ3JpbWFnZXxlbnwxfHx8fDE3NjAzODgyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'tours',
    title: 'Tours',
    description: 'Exciting tour packages to amazing destinations',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1731898531557-bdc22b7d2595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyJTIwZ3JvdXAlMjB2YWNhdGlvbnxlbnwxfHx8fDE3NjAzODgyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'cars',
    title: 'Car Rental',
    description: 'Wide range of vehicles for every need',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1721994234246-45087e5aca16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzYwMzIwMDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  }
];

export function Services() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of travel services designed to make your journey seamless
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.filter(service => service.id !== 'cars').map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer group rounded-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div className="bg-background p-2 rounded-full shadow-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-white font-heading font-semibold">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {services.filter(service => service.id !== 'cars').map((service) => {
                const Icon = service.icon;
                return (
                  <CarouselItem key={service.id} className="pl-4 basis-[280px]">
                    <Card className="overflow-hidden hover:shadow-card-hover transition-all duration-300 cursor-pointer group rounded-xl">
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                          <div className="bg-background p-2 rounded-full shadow-lg">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-white font-heading font-semibold">{service.title}</h3>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
