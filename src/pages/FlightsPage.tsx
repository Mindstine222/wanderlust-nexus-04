import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { BookingModal } from '../components/BookingModal';

export function FlightsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<{ from: string; to: string } | null>(null);

  const handleBookFlight = (route: typeof popularRoutes[0]) => {
    setSelectedRoute({ from: route.from, to: route.to });
    setBookingModalOpen(true);
  };

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Flight Booking' }]} />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4">Book Your Flight</h1>
            <p className="text-xl text-blue-100">
              Find the best deals on flights worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">Popular Flight Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRoutes.map((route) => (
              <Card key={route.id} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl mb-1">{route.fromFlag}</div>
                      <p className="text-gray-900">{route.from}</p>
                      <p className="text-gray-500 text-sm">{route.fromCode}</p>
                    </div>
                    <div className="flex-1 flex justify-center">
                      <ArrowRight className="h-6 w-6 text-blue-600 group-hover:translate-x-2 transition-transform" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl mb-1">{route.toFlag}</div>
                      <p className="text-gray-900">{route.to}</p>
                      <p className="text-gray-500 text-sm">{route.toCode}</p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-600 text-sm">{route.airline}</span>
                    </div>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleBookFlight(route)}
                    >
                      Request Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">Why Book Flights With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2">Best Prices</h3>
              <p className="text-gray-600">Get the most competitive fares from all major airlines</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-2">Secure Booking</h3>
              <p className="text-gray-600">Your payment information is safe and encrypted</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our team is always here to help you with your booking</p>
            </div>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService="Flights"
        defaultPackage={selectedRoute ? `${selectedRoute.from} to ${selectedRoute.to}` : ''}
      />
    </div>
  );
}

const popularRoutes = [
  {
    id: 1,
    from: 'Karachi',
    fromCode: 'KHI',
    fromFlag: '🇵🇰',
    to: 'Dubai',
    toCode: 'DXB',
    toFlag: '🇦🇪',
    airline: 'Emirates',
    price: 45000
  },
  {
    id: 2,
    from: 'Lahore',
    fromCode: 'LHE',
    fromFlag: '🇵🇰',
    to: 'Jeddah',
    toCode: 'JED',
    toFlag: '🇸🇦',
    airline: 'Saudi Airlines',
    price: 55000
  },
  {
    id: 3,
    from: 'Islamabad',
    fromCode: 'ISB',
    fromFlag: '🇵🇰',
    to: 'London',
    toCode: 'LHR',
    toFlag: '🇬🇧',
    airline: 'PIA',
    price: 125000
  },
  {
    id: 4,
    from: 'Karachi',
    fromCode: 'KHI',
    fromFlag: '🇵🇰',
    to: 'Bangkok',
    toCode: 'BKK',
    toFlag: '🇹🇭',
    airline: 'Thai Airways',
    price: 68000
  },
  {
    id: 5,
    from: 'Lahore',
    fromCode: 'LHE',
    fromFlag: '🇵🇰',
    to: 'Istanbul',
    toCode: 'IST',
    toFlag: '🇹🇷',
    airline: 'Turkish Airlines',
    price: 72000
  },
  {
    id: 6,
    from: 'Islamabad',
    fromCode: 'ISB',
    fromFlag: '🇵🇰',
    to: 'Toronto',
    toCode: 'YYZ',
    toFlag: '🇨🇦',
    airline: 'Air Canada',
    price: 145000
  }
];
