import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Card, CardContent } from '../components/ui/card';
import { FlightSearch, SearchParams } from '../components/FlightSearch';
import { FlightResults } from '../components/FlightResults';
import { generateFlightResults, FlightResult } from '../data/flightData';

export function FlightsPage() {
  const [searchResults, setSearchResults] = useState<FlightResult[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (params: SearchParams) => {
    setIsSearching(true);
    setSearchResults(null);

    // Simulate API delay
    setTimeout(() => {
      const totalPassengers = params.passengers.adults + params.passengers.children + params.passengers.infants;
      const results = generateFlightResults(
        params.from,
        params.to,
        params.departureDate,
        params.returnDate,
        totalPassengers
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 1500);
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

      {/* Flight Search Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FlightSearch onSearch={handleSearch} />
        </div>
      </section>

      {/* Flight Results */}
      {(searchResults || isSearching) && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FlightResults results={searchResults || []} loading={isSearching} />
          </div>
        </section>
      )}

      {/* Popular Routes */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">Popular Flight Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRoutes.map((route) => (
              <Card key={route.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
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
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">{route.airline}</span>
                      <span className="text-blue-600 text-xl">
                        PKR {route.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Only show when no search results */}
      {!searchResults && !isSearching && (
        <>
          {/* Popular Routes */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-center text-gray-900 mb-12">Popular Flight Routes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularRoutes.map((route) => (
                  <Card key={route.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
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
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-sm">{route.airline}</span>
                          <span className="text-blue-600 text-xl">
                            PKR {route.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
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
