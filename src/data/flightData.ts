// Mock flight data - structured like real flight API responses
// In production, replace with actual API calls to Amadeus, Skyscanner, or similar

export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
}

export interface FlightSegment {
  airline: string;
  airlineLogo: string;
  flightNumber: string;
  departure: {
    airport: string;
    code: string;
    time: string;
    date: string;
  };
  arrival: {
    airport: string;
    code: string;
    time: string;
    date: string;
  };
  duration: string;
  aircraft: string;
  class: string;
}

export interface FlightResult {
  id: string;
  price: number;
  currency: string;
  outbound: FlightSegment[];
  inbound?: FlightSegment[];
  totalDuration: string;
  stops: number;
  baggage: {
    cabin: string;
    checked: string;
  };
  refundable: boolean;
  seatsLeft: number;
}

// Popular airports for autocomplete
export const airports: Airport[] = [
  { code: 'KHI', name: 'Jinnah International Airport', city: 'Karachi', country: 'Pakistan' },
  { code: 'LHE', name: 'Allama Iqbal International Airport', city: 'Lahore', country: 'Pakistan' },
  { code: 'ISB', name: 'Islamabad International Airport', city: 'Islamabad', country: 'Pakistan' },
  { code: 'DXB', name: 'Dubai International Airport', city: 'Dubai', country: 'UAE' },
  { code: 'AUH', name: 'Abu Dhabi International Airport', city: 'Abu Dhabi', country: 'UAE' },
  { code: 'JED', name: 'King Abdulaziz International Airport', city: 'Jeddah', country: 'Saudi Arabia' },
  { code: 'RUH', name: 'King Khalid International Airport', city: 'Riyadh', country: 'Saudi Arabia' },
  { code: 'LHR', name: 'London Heathrow Airport', city: 'London', country: 'United Kingdom' },
  { code: 'MAN', name: 'Manchester Airport', city: 'Manchester', country: 'United Kingdom' },
  { code: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York', country: 'USA' },
  { code: 'LAX', name: 'Los Angeles International Airport', city: 'Los Angeles', country: 'USA' },
  { code: 'YYZ', name: 'Toronto Pearson International Airport', city: 'Toronto', country: 'Canada' },
  { code: 'BKK', name: 'Suvarnabhumi Airport', city: 'Bangkok', country: 'Thailand' },
  { code: 'SIN', name: 'Singapore Changi Airport', city: 'Singapore', country: 'Singapore' },
  { code: 'KUL', name: 'Kuala Lumpur International Airport', city: 'Kuala Lumpur', country: 'Malaysia' },
  { code: 'IST', name: 'Istanbul Airport', city: 'Istanbul', country: 'Turkey' },
  { code: 'CAI', name: 'Cairo International Airport', city: 'Cairo', country: 'Egypt' },
  { code: 'DPS', name: 'Ngurah Rai International Airport', city: 'Bali', country: 'Indonesia' },
];

// Generate mock flight results based on search criteria
export function generateFlightResults(
  from: string,
  to: string,
  departureDate: string,
  returnDate?: string,
  passengers: number = 1
): FlightResult[] {
  const basePrice = 45000 + Math.random() * 80000;
  
  const airlines = [
    { name: 'Emirates', logo: '✈️', priceMultiplier: 1.3 },
    { name: 'PIA', logo: '🇵🇰', priceMultiplier: 0.8 },
    { name: 'Qatar Airways', logo: '🇶🇦', priceMultiplier: 1.2 },
    { name: 'Etihad', logo: '🇦🇪', priceMultiplier: 1.25 },
    { name: 'Turkish Airlines', logo: '🇹🇷', priceMultiplier: 1.1 },
    { name: 'Saudi Airlines', logo: '🇸🇦', priceMultiplier: 0.9 },
    { name: 'Fly Dubai', logo: '✈️', priceMultiplier: 0.85 },
  ];

  const results: FlightResult[] = [];

  // Generate direct flights
  airlines.slice(0, 4).forEach((airline, index) => {
    const price = Math.round(basePrice * airline.priceMultiplier * passengers);
    const departureTime = `${8 + index * 3}:${['00', '15', '30', '45'][Math.floor(Math.random() * 4)]}`;
    const duration = `${2 + Math.floor(Math.random() * 6)}h ${Math.floor(Math.random() * 60)}m`;
    
    const outboundSegment: FlightSegment = {
      airline: airline.name,
      airlineLogo: airline.logo,
      flightNumber: `${airline.name.substring(0, 2).toUpperCase()}${Math.floor(Math.random() * 900 + 100)}`,
      departure: {
        airport: from,
        code: from,
        time: departureTime,
        date: departureDate,
      },
      arrival: {
        airport: to,
        code: to,
        time: addHoursToTime(departureTime, parseInt(duration)),
        date: departureDate,
      },
      duration,
      aircraft: ['Boeing 777', 'Airbus A380', 'Boeing 787', 'Airbus A350'][Math.floor(Math.random() * 4)],
      class: 'Economy',
    };

    const flight: FlightResult = {
      id: `${airline.name}-${index}-direct`,
      price,
      currency: 'PKR',
      outbound: [outboundSegment],
      totalDuration: duration,
      stops: 0,
      baggage: {
        cabin: '7 kg',
        checked: index % 2 === 0 ? '30 kg' : '25 kg',
      },
      refundable: index % 3 === 0,
      seatsLeft: Math.floor(Math.random() * 15) + 1,
    };

    // Add return flight if round trip
    if (returnDate) {
      const returnTime = `${10 + index * 2}:${['00', '15', '30', '45'][Math.floor(Math.random() * 4)]}`;
      flight.inbound = [{
        ...outboundSegment,
        departure: {
          airport: to,
          code: to,
          time: returnTime,
          date: returnDate,
        },
        arrival: {
          airport: from,
          code: from,
          time: addHoursToTime(returnTime, parseInt(duration)),
          date: returnDate,
        },
      }];
    }

    results.push(flight);
  });

  // Generate flights with 1 stop
  airlines.slice(2, 6).forEach((airline, index) => {
    const price = Math.round(basePrice * airline.priceMultiplier * 0.85 * passengers);
    const departureTime = `${6 + index * 4}:${['00', '15', '30', '45'][Math.floor(Math.random() * 4)]}`;
    const stopover = ['DXB', 'DOH', 'AUH', 'IST'][index % 4];
    
    const leg1Duration = `${1 + Math.floor(Math.random() * 3)}h ${Math.floor(Math.random() * 60)}m`;
    const leg2Duration = `${2 + Math.floor(Math.random() * 4)}h ${Math.floor(Math.random() * 60)}m`;
    const layoverDuration = `${1 + Math.floor(Math.random() * 3)}h ${Math.floor(Math.random() * 60)}m`;

    const leg1ArrivalTime = addHoursToTime(departureTime, parseInt(leg1Duration));
    const leg2DepartureTime = addHoursToTime(leg1ArrivalTime, parseInt(layoverDuration));
    
    const outboundSegments: FlightSegment[] = [
      {
        airline: airline.name,
        airlineLogo: airline.logo,
        flightNumber: `${airline.name.substring(0, 2).toUpperCase()}${Math.floor(Math.random() * 900 + 100)}`,
        departure: {
          airport: from,
          code: from,
          time: departureTime,
          date: departureDate,
        },
        arrival: {
          airport: stopover,
          code: stopover,
          time: leg1ArrivalTime,
          date: departureDate,
        },
        duration: leg1Duration,
        aircraft: 'Boeing 777',
        class: 'Economy',
      },
      {
        airline: airline.name,
        airlineLogo: airline.logo,
        flightNumber: `${airline.name.substring(0, 2).toUpperCase()}${Math.floor(Math.random() * 900 + 100)}`,
        departure: {
          airport: stopover,
          code: stopover,
          time: leg2DepartureTime,
          date: departureDate,
        },
        arrival: {
          airport: to,
          code: to,
          time: addHoursToTime(leg2DepartureTime, parseInt(leg2Duration)),
          date: departureDate,
        },
        duration: leg2Duration,
        aircraft: 'Airbus A350',
        class: 'Economy',
      },
    ];

    const totalHours = parseInt(leg1Duration) + parseInt(leg2Duration) + parseInt(layoverDuration);
    
    const flight: FlightResult = {
      id: `${airline.name}-${index}-1stop`,
      price,
      currency: 'PKR',
      outbound: outboundSegments,
      totalDuration: `${totalHours}h ${Math.floor(Math.random() * 60)}m`,
      stops: 1,
      baggage: {
        cabin: '7 kg',
        checked: '25 kg',
      },
      refundable: false,
      seatsLeft: Math.floor(Math.random() * 20) + 5,
    };

    if (returnDate) {
      flight.inbound = outboundSegments.map(seg => ({
        ...seg,
        departure: {
          airport: seg.arrival.airport,
          code: seg.arrival.code,
          time: seg.arrival.time,
          date: returnDate,
        },
        arrival: {
          airport: seg.departure.airport,
          code: seg.departure.code,
          time: seg.departure.time,
          date: returnDate,
        },
      })).reverse();
    }

    results.push(flight);
  });

  return results.sort((a, b) => a.price - b.price);
}

function addHoursToTime(time: string, hours: number): string {
  const [h, m] = time.split(':').map(Number);
  const newHours = (h + hours) % 24;
  return `${String(newHours).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}
