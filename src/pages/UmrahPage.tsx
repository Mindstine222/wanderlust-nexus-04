import { useState } from 'react';
import { Star, Calendar, Hotel, Utensils, Bus, CheckCircle } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BookingModal } from '../components/BookingModal';

const umrahPackages = [
  {
    id: 1,
    name: 'Economy Umrah Package',
    duration: '10 Days',
    rating: 4.2,
    reviews: 156,
    price: 125000,
    originalPrice: 145000,
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600',
    features: [
      '3-star hotel in Makkah',
      '3-star hotel in Madinah',
      'Group transportation',
      'Breakfast included',
      'Visa processing'
    ],
    popular: false
  },
  {
    id: 2,
    name: 'Premium Umrah Package',
    duration: '14 Days',
    rating: 4.7,
    reviews: 289,
    price: 185000,
    originalPrice: 210000,
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600',
    features: [
      '4-star hotel in Makkah (walking distance)',
      '4-star hotel in Madinah',
      'Private transportation',
      'Half-board meals',
      'Visa processing',
      'Ziyarat tours included'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'VIP Umrah Package',
    duration: '15 Days',
    rating: 4.9,
    reviews: 421,
    price: 295000,
    originalPrice: 340000,
    image: 'https://images.unsplash.com/photo-1609320839500-91e1e1157d4b?w=600',
    features: [
      '5-star hotel in Makkah (Haram view)',
      '5-star hotel in Madinah',
      'Private luxury transportation',
      'Full-board meals',
      'Fast-track visa processing',
      'Exclusive Ziyarat tours',
      'Personal guide'
    ],
    popular: true
  },
  {
    id: 4,
    name: 'Family Umrah Package',
    duration: '12 Days',
    rating: 4.5,
    reviews: 198,
    price: 450000,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=600',
    features: [
      'Family rooms (4 persons)',
      '4-star hotels',
      'Family-friendly transportation',
      'All meals included',
      'Visa for all family members',
      'Kids-friendly activities'
    ],
    popular: false
  },
  {
    id: 5,
    name: 'Ramadan Umrah Special',
    duration: '21 Days',
    rating: 4.8,
    reviews: 534,
    price: 265000,
    originalPrice: 295000,
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=600',
    features: [
      '4-star hotel in Makkah',
      '4-star hotel in Madinah',
      'Iftar & Suhoor included',
      'Special Ramadan prayers access',
      'Extended stay during Ramadan',
      'Visa processing'
    ],
    popular: true
  },
  {
    id: 6,
    name: 'Budget Umrah Package',
    duration: '7 Days',
    rating: 3.9,
    reviews: 87,
    price: 95000,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600',
    features: [
      '2-star hotel in Makkah',
      '2-star hotel in Madinah',
      'Shared transportation',
      'Basic meals',
      'Visa processing'
    ],
    popular: false
  }
];

export function UmrahPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Umrah Packages' }]} />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4">Umrah Packages</h1>
            <p className="text-xl text-green-100 mb-2">
              Perform your spiritual journey with complete peace of mind
            </p>
            <p className="text-green-100">
              All-inclusive packages with visa, accommodation, and transportation
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {umrahPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  {pkg.popular && (
                    <Badge className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600">
                      Popular Choice
                    </Badge>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center text-white text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {pkg.duration}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-2">{pkg.name}</h3>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-700">{pkg.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm ml-2">({pkg.reviews} reviews)</span>
                  </div>

                  <div className="space-y-2 mb-4 pb-4 border-b">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => {
                      setSelectedPackage(pkg.name);
                      setBookingModalOpen(true);
                    }}
                  >
                    Book Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">What's Included in Our Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Hotel className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2">Accommodation</h3>
              <p className="text-gray-600">Comfortable hotels near Haram</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Bus className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2">Transportation</h3>
              <p className="text-gray-600">Airport transfers & local transport</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Utensils className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2">Meals</h3>
              <p className="text-gray-600">Daily meals as per package</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2">Visa Processing</h3>
              <p className="text-gray-600">Complete visa assistance</p>
            </div>
          </div>
        </div>
      </section>

      <BookingModal 
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        defaultServiceType="umrah"
        defaultPackage={selectedPackage}
      />
    </div>
  );
}
