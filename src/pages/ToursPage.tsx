import { useState } from 'react';
import { MapPin, Calendar, Users, Star, Plane } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BookingModal } from '../components/BookingModal';

const tourCategories = ['All Tours', 'Popular', 'Adventure', 'Cultural', 'Beach', 'City Tours'];

const tourPackages = [
  {
    id: 1,
    name: 'Dubai Extravaganza',
    destination: 'Dubai, UAE',
    duration: '5 Days / 4 Nights',
    category: 'City Tours',
    rating: 4.8,
    reviews: 342,
    price: 89999,
    originalPrice: 119999,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600',
    includes: ['Flights', 'Hotel', 'Breakfast', 'City Tour', 'Desert Safari'],
    groupSize: '10-15 people',
    popular: true
  },
  {
    id: 2,
    name: 'Turkey Grand Tour',
    destination: 'Istanbul & Cappadocia',
    duration: '7 Days / 6 Nights',
    category: 'Cultural',
    rating: 4.7,
    reviews: 289,
    price: 95000,
    originalPrice: 115000,
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600',
    includes: ['Flights', 'Hotel', 'Half Board', 'All Tours', 'Hot Air Balloon'],
    groupSize: '12-20 people',
    popular: true
  },
  {
    id: 3,
    name: 'Thailand Paradise',
    destination: 'Bangkok & Phuket',
    duration: '6 Days / 5 Nights',
    category: 'Beach',
    rating: 4.6,
    reviews: 256,
    price: 75000,
    originalPrice: 95000,
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600',
    includes: ['Flights', 'Hotel', 'Breakfast', 'Island Tours', 'Water Activities'],
    groupSize: '8-12 people',
    popular: true
  },
  {
    id: 4,
    name: 'Malaysia Delight',
    destination: 'Kuala Lumpur & Langkawi',
    duration: '5 Days / 4 Nights',
    category: 'Popular',
    rating: 4.5,
    reviews: 187,
    price: 68000,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600',
    includes: ['Flights', 'Hotel', 'Breakfast', 'City Tours', 'Cable Car'],
    groupSize: '10-15 people',
    popular: false
  },
  {
    id: 5,
    name: 'Egypt Historical Tour',
    destination: 'Cairo & Luxor',
    duration: '8 Days / 7 Nights',
    category: 'Cultural',
    rating: 4.9,
    reviews: 421,
    price: 125000,
    originalPrice: 145000,
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600',
    includes: ['Flights', 'Hotel', 'All Meals', 'Pyramids Tour', 'Nile Cruise'],
    groupSize: '15-20 people',
    popular: true
  },
  {
    id: 6,
    name: 'Bali Adventure',
    destination: 'Bali, Indonesia',
    duration: '6 Days / 5 Nights',
    category: 'Adventure',
    rating: 4.7,
    reviews: 312,
    price: 82000,
    originalPrice: 98000,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600',
    includes: ['Flights', 'Villa Stay', 'Breakfast', 'Temple Tours', 'Water Sports'],
    groupSize: '8-12 people',
    popular: false
  },
  {
    id: 7,
    name: 'Singapore Stopover',
    destination: 'Singapore',
    duration: '4 Days / 3 Nights',
    category: 'City Tours',
    rating: 4.6,
    reviews: 245,
    price: 65000,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600',
    includes: ['Flights', 'Hotel', 'Breakfast', 'City Tour', 'Gardens by the Bay'],
    groupSize: '10-15 people',
    popular: false
  },
  {
    id: 8,
    name: 'Morocco Explorer',
    destination: 'Marrakech & Casablanca',
    duration: '7 Days / 6 Nights',
    category: 'Adventure',
    rating: 4.8,
    reviews: 198,
    price: 115000,
    originalPrice: 135000,
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600',
    includes: ['Flights', 'Riad Stay', 'Half Board', 'Desert Tour', 'Medina Tours'],
    groupSize: '12-16 people',
    popular: true
  },
  {
    id: 9,
    name: 'Maldives Luxury',
    destination: 'Maldives',
    duration: '5 Days / 4 Nights',
    category: 'Beach',
    rating: 4.9,
    reviews: 567,
    price: 195000,
    originalPrice: 225000,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600',
    includes: ['Flights', 'Water Villa', 'All Inclusive', 'Spa', 'Water Activities'],
    groupSize: 'Private',
    popular: true
  }
];

export function ToursPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Tours');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<string>('');

  const filteredTours = selectedCategory === 'All Tours' 
    ? tourPackages 
    : tourPackages.filter(tour => tour.category === selectedCategory || (selectedCategory === 'Popular' && tour.popular));

  const handleBookTour = (tourName: string) => {
    setSelectedTour(tourName);
    setBookingModalOpen(true);
  };

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Tour Packages' }]} />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4">Tour Packages</h1>
            <p className="text-xl text-purple-100">
              Explore the world with our carefully curated tour packages
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {tourCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-purple-600 hover:bg-purple-700' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {tour.popular && (
                    <Badge className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600">
                      Popular
                    </Badge>
                  )}
                  {tour.originalPrice && (
                    <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                      {Math.round((1 - tour.price / tour.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-2">{tour.name}</h3>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-1">
                    <MapPin className="h-4 w-4 mr-1 text-purple-600" />
                    {tour.destination}
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-1 text-purple-600" />
                    {tour.duration}
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-700">{tour.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm ml-2">({tour.reviews} reviews)</span>
                  </div>

                  <div className="mb-4 pb-4 border-b">
                    <div className="flex flex-wrap gap-1">
                      {tour.includes.map((item, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Users className="h-4 w-4 mr-1" />
                    Group: {tour.groupSize}
                  </div>

                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => handleBookTour(tour.name)}
                  >
                    <Plane className="h-4 w-4 mr-2" />
                    Request Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No tours found in this category</p>
            </div>
          )}
        </div>
      </section>

      <BookingModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService="Tours"
        defaultPackage={selectedTour}
      />
    </div>
  );
}
