import { useState } from 'react';
import { Search, Globe, Clock, CheckCircle, FileText } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BookingModal } from '../components/BookingModal';

const visaCategories = ['All Countries', 'Europe', 'Asia', 'Middle East', 'Americas', 'Africa'];

const visaCountries = [
  {
    id: 1,
    country: 'United Kingdom',
    flag: '🇬🇧',
    type: 'Visit Visa',
    processingTime: '15 Days',
    price: 15500,
    description: 'Tourist, business, and family visit visas',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400',
    category: 'Europe',
    popular: true
  },
  {
    id: 2,
    country: 'United States',
    flag: '🇺🇸',
    type: 'B1/B2 Visa',
    processingTime: '30 Days',
    price: 22000,
    description: 'Business and tourist visa for USA',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400',
    category: 'Americas',
    popular: true
  },
  {
    id: 3,
    country: 'Canada',
    flag: '🇨🇦',
    type: 'Visit Visa',
    processingTime: '20 Days',
    price: 18000,
    description: 'Temporary resident visa for Canada',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400',
    category: 'Americas',
    popular: true
  },
  {
    id: 4,
    country: 'Dubai (UAE)',
    flag: '🇦🇪',
    type: 'Tourist Visa',
    processingTime: '7 Days',
    price: 8500,
    description: '30/60/90 days tourist visa available',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400',
    category: 'Middle East',
    popular: true
  },
  {
    id: 5,
    country: 'Australia',
    flag: '🇦🇺',
    type: 'Visit Visa',
    processingTime: '25 Days',
    price: 19500,
    description: 'Tourist and visitor visa for Australia',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400',
    category: 'Asia',
    popular: false
  },
  {
    id: 6,
    country: 'Schengen',
    flag: '🇪🇺',
    type: 'Tourist Visa',
    processingTime: '15 Days',
    price: 16000,
    description: 'Access to 26 European countries',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400',
    category: 'Europe',
    popular: true
  },
  {
    id: 7,
    country: 'Turkey',
    flag: '🇹🇷',
    type: 'E-Visa',
    processingTime: '3 Days',
    price: 6500,
    description: 'Electronic visa for Turkey',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400',
    category: 'Europe',
    popular: false
  },
  {
    id: 8,
    country: 'Malaysia',
    flag: '🇲🇾',
    type: 'Tourist Visa',
    processingTime: '5 Days',
    price: 7000,
    description: 'Tourist visa for Malaysia',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400',
    category: 'Asia',
    popular: false
  },
  {
    id: 9,
    country: 'Singapore',
    flag: '🇸🇬',
    type: 'Tourist Visa',
    processingTime: '7 Days',
    price: 9500,
    description: 'Electronic visa for Singapore',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400',
    category: 'Asia',
    popular: false
  },
  {
    id: 10,
    country: 'Thailand',
    flag: '🇹🇭',
    type: 'Tourist Visa',
    processingTime: '5 Days',
    price: 6000,
    description: 'Tourist visa for Thailand',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400',
    category: 'Asia',
    popular: true
  },
  {
    id: 11,
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    type: 'Visit Visa',
    processingTime: '10 Days',
    price: 12000,
    description: 'Family visit and business visa',
    image: 'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=400',
    category: 'Middle East',
    popular: false
  },
  {
    id: 12,
    country: 'Egypt',
    flag: '🇪🇬',
    type: 'Tourist Visa',
    processingTime: '7 Days',
    price: 8000,
    description: 'Tourist visa for Egypt',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400',
    category: 'Africa',
    popular: false
  }
];

export function VisasPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Countries');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState({ country: '', type: '' });

  const filteredVisas = visaCountries.filter(visa => {
    const matchesCategory = selectedCategory === 'All Countries' || visa.category === selectedCategory;
    const matchesSearch = visa.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Visa Services' }]} />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4">Visa Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Fast & reliable visa processing for destinations worldwide
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search for a country..."
                  className="pl-12 h-14 text-gray-900"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {visaCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-blue-600 hover:bg-blue-700' : ''}
              >
                <Globe className="h-4 w-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>

          {/* Visa Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVisas.map((visa) => (
              <Card key={visa.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={visa.image}
                    alt={visa.country}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {visa.popular && (
                    <Badge className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600">
                      Popular
                    </Badge>
                  )}
                  <div className="absolute top-4 left-4 text-4xl">{visa.flag}</div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-gray-900 mb-1">{visa.country}</h3>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {visa.type}
                    </Badge>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{visa.description}</p>

                  <div className="space-y-2 mb-4 pb-4 border-b">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      Processing: {visa.processingTime}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Documents assistance included
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => {
                      setSelectedVisa({ country: visa.country, type: visa.type });
                      setBookingModalOpen(true);
                    }}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredVisas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No visas found matching your criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">Why Choose Fly Zone for Visas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2">High Success Rate</h3>
              <p className="text-gray-600">98% visa approval rate</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2">Fast Processing</h3>
              <p className="text-gray-600">Quick turnaround time</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2">Document Support</h3>
              <p className="text-gray-600">Complete documentation help</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2">Worldwide Coverage</h3>
              <p className="text-gray-600">Visas for 100+ countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService="Visas"
        defaultPackage={`${selectedVisa.country} - ${selectedVisa.type}`}
      />
    </div>
  );
}
