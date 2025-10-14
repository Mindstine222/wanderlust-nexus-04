// Mock data for the travel service website

export const services = [
  {
    id: 'visas',
    title: 'Visas',
    description: 'Fast & reliable visa processing for all countries',
    icon: 'FileText',
    image: 'https://images.unsplash.com/photo-1655722725332-9925c96dd627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzcG9ydCUyMHZpc2F8ZW58MXx8fHwxNzYwMzg4MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: '/visas'
  },
  {
    id: 'flights',
    title: 'Flights',
    description: 'Book flights at competitive prices worldwide',
    icon: 'Plane',
    image: 'https://images.unsplash.com/photo-1559268950-2d7ceb2efa3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhaXJwbGFuZSUyMGRlc3RpbmF0aW9ufGVufDF8fHx8MTc2MDM4ODIwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: '/flights'
  },
  {
    id: 'umrah',
    title: 'Umrah',
    description: 'Complete Umrah packages with accommodation',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bXJhaCUyMG1lY2NhJTIwcGlsZ3JpbWFnZXxlbnwxfHx8fDE3NjAzODgyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: '/umrah'
  },
  {
    id: 'tours',
    title: 'Tours',
    description: 'Exciting tour packages to amazing destinations',
    icon: 'MapPin',
    image: 'https://images.unsplash.com/photo-1731898531557-bdc22b7d2595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyJTIwZ3JvdXAlMjB2YWNhdGlvbnxlbnwxfHx8fDE3NjAzODgyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: '/tours'
  },
  {
    id: 'cars',
    title: 'Car Rental',
    description: 'Wide range of vehicles for every need',
    icon: 'Car',
    image: 'https://images.unsplash.com/photo-1721994234246-45087e5aca16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzYwMzIwMDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: '/cars'
  }
];

export const features = [
  {
    icon: 'Zap',
    title: 'Fast Processing',
    description: 'Quick turnaround time for all services'
  },
  {
    icon: 'HeadphonesIcon',
    title: '24/7 Support',
    description: 'Round-the-clock customer assistance'
  },
  {
    icon: 'DollarSign',
    title: 'Best Prices',
    description: 'Competitive rates guaranteed'
  },
  {
    icon: 'Shield',
    title: 'Secure Booking',
    description: 'Safe and protected transactions'
  }
];

export const offers = [
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

export const cars = [
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

export const visaCountries = [
  { name: 'United Kingdom', processingTime: '15 Days', price: 15500 },
  { name: 'United States', processingTime: '30 Days', price: 22000 },
  { name: 'Canada', processingTime: '20 Days', price: 18000 },
  { name: 'Australia', processingTime: '25 Days', price: 19500 },
  { name: 'Schengen', processingTime: '15 Days', price: 16000 },
  { name: 'Dubai', processingTime: '7 Days', price: 8500 }
];
