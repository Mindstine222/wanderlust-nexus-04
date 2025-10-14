import { MapPin, Clock, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-gray-900 mb-2">Special Offers & Packages</h2>
            <p className="text-gray-600">
              Discover our best deals on tours, visas, and travel packages
            </p>
          </div>
          <Button variant="outline" className="hidden md:block">
            View All Offers
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              className="overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {offer.discount && (
                  <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-600">
                    <Tag className="h-3 w-3 mr-1" />
                    {offer.discount}% OFF
                  </Badge>
                )}
              </div>
              <CardContent className="p-5">
                <h3 className="text-gray-900 mb-2">{offer.title}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {offer.location}
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  {offer.duration}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-blue-600 text-2xl">
                      PKR {offer.price.toLocaleString()}
                    </span>
                    {offer.originalPrice && (
                      <span className="text-gray-400 line-through ml-2">
                        PKR {offer.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline">View All Offers</Button>
        </div>
      </div>
    </section>
  );
}
