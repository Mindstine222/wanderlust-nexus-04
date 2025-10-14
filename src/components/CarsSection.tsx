import { useState } from 'react';
import { Users, Settings, Car } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RequestCarModal } from './RequestCarModal';

const cars = [
  {
    id: 1,
    name: 'Toyota Corolla',
    category: 'Sedan',
    price: 4500,
    seats: 5,
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1658662160331-62f7e52e63de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NjAzNzg4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    available: true
  },
  {
    id: 2,
    name: 'Honda Civic',
    category: 'Sedan',
    price: 5000,
    seats: 5,
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400',
    available: true
  },
  {
    id: 3,
    name: 'Toyota Land Cruiser',
    category: 'SUV',
    price: 12000,
    seats: 7,
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1758217209786-95458c5d30a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjB2ZWhpY2xlfGVufDF8fHx8MTc2MDM1NzYzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    available: true
  },
  {
    id: 4,
    name: 'Suzuki Alto',
    category: 'Economy',
    price: 3000,
    seats: 4,
    transmission: 'Manual',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
    available: true
  },
  {
    id: 5,
    name: 'Honda BRV',
    category: 'SUV',
    price: 8000,
    seats: 7,
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400',
    available: true
  },
  {
    id: 6,
    name: 'Toyota Camry',
    category: 'Sedan',
    price: 6500,
    seats: 5,
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400',
    available: false
  },
  {
    id: 7,
    name: 'Hyundai Tucson',
    category: 'SUV',
    price: 9500,
    seats: 5,
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400',
    available: true
  },
  {
    id: 8,
    name: 'Suzuki Cultus',
    category: 'Economy',
    price: 3500,
    seats: 5,
    transmission: 'Manual',
    image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=400',
    available: true
  }
];

const categories = ['All', 'Sedan', 'SUV', 'Economy'];

export function CarsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<typeof cars[0] | null>(null);

  const filteredCars = selectedCategory === 'All' 
    ? cars 
    : cars.filter(car => car.category === selectedCategory);

  const handleRequestCar = (car: typeof cars[0]) => {
    setSelectedCar(car);
    setModalOpen(true);
  };

  return (
    <section id="cars" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Car Rental Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide selection of vehicles for your travel needs
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'bg-blue-600 hover:bg-blue-700' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <Card
              key={car.id}
              className="overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {!car.available && (
                  <Badge className="absolute top-4 right-4 bg-gray-500">
                    Not Available
                  </Badge>
                )}
              </div>
              <CardContent className="p-5">
                <div className="mb-3">
                  <Badge variant="outline" className="mb-2">
                    {car.category}
                  </Badge>
                  <h3 className="text-gray-900">{car.name}</h3>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4 pb-4 border-b">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {car.seats} Seats
                  </div>
                  <div className="flex items-center">
                    <Settings className="h-4 w-4 mr-1" />
                    {car.transmission}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-blue-600 text-xl">
                      PKR {car.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500 text-sm"> /day</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={!car.available}
                  onClick={() => handleRequestCar(car)}
                >
                  <Car className="h-4 w-4 mr-2" />
                  {car.available ? 'Request Booking' : 'Unavailable'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No cars found in this category</p>
          </div>
        )}
      </div>

      <RequestCarModal 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
        car={selectedCar}
      />
    </section>
  );
}
