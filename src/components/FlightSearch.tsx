import { useState } from 'react';
import { Plane, Calendar, MapPin, Users, ArrowRight, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';
import { airports } from '../data/flightData';

interface FlightSearchProps {
  onSearch: (searchParams: SearchParams) => void;
}

export interface SearchParams {
  tripType: 'roundtrip' | 'oneway' | 'multicity';
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  passengers: {
    adults: number;
    children: number;
    infants: number;
  };
  class: string;
}

export function FlightSearch({ onSearch }: FlightSearchProps) {
  const [tripType, setTripType] = useState<'roundtrip' | 'oneway' | 'multicity'>('roundtrip');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengerOpen, setPassengerOpen] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [flightClass, setFlightClass] = useState('economy');

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

  const handleSearch = () => {
    if (!from || !to || !departureDate) {
      alert('Please fill in all required fields');
      return;
    }

    onSearch({
      tripType,
      from,
      to,
      departureDate,
      returnDate: tripType === 'roundtrip' ? returnDate : undefined,
      passengers,
      class: flightClass,
    });
  };

  const swapAirports = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const updatePassengers = (type: 'adults' | 'children' | 'infants', increment: boolean) => {
    setPassengers(prev => {
      const newValue = increment ? prev[type] + 1 : Math.max(0, prev[type] - 1);
      if (type === 'adults' && newValue < 1) return prev;
      return { ...prev, [type]: newValue };
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Trip Type Selection */}
      <RadioGroup value={tripType} onValueChange={(value: any) => setTripType(value)} className="flex gap-6 mb-6">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="roundtrip" id="roundtrip" />
          <Label htmlFor="roundtrip" className="cursor-pointer">Round Trip</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="oneway" id="oneway" />
          <Label htmlFor="oneway" className="cursor-pointer">One Way</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="multicity" id="multicity" />
          <Label htmlFor="multicity" className="cursor-pointer">Multi-City</Label>
        </div>
      </RadioGroup>

      {/* Flight Search Fields */}
      <div className="space-y-4">
        {/* From and To */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
          {/* From Airport */}
          <div className="space-y-2">
            <Label>From</Label>
            <Popover open={fromOpen} onOpenChange={setFromOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={fromOpen}
                  className="w-full justify-between h-12"
                >
                  {from ? (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-gray-900">
                        {airports.find(a => a.code === from)?.code} - {airports.find(a => a.code === from)?.city}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      Select departure city
                    </div>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[400px] p-0">
                <Command>
                  <CommandInput placeholder="Search airports..." />
                  <CommandList>
                    <CommandEmpty>No airport found.</CommandEmpty>
                    <CommandGroup>
                      {airports.map((airport) => (
                        <CommandItem
                          key={airport.code}
                          value={`${airport.code} ${airport.city} ${airport.name}`}
                          onSelect={() => {
                            setFrom(airport.code);
                            setFromOpen(false);
                          }}
                        >
                          <div className="flex flex-col">
                            <div className="flex items-center">
                              <span className="text-blue-600 mr-2">{airport.code}</span>
                              <span>{airport.city}, {airport.country}</span>
                            </div>
                            <span className="text-sm text-gray-500">{airport.name}</span>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Swap Button */}
          <div className="hidden md:flex justify-center items-end pb-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={swapAirports}
              className="rounded-full hover:bg-blue-50"
            >
              <ArrowRight className="h-5 w-5 text-blue-600" />
            </Button>
          </div>

          {/* To Airport */}
          <div className="space-y-2 md:col-start-2">
            <Label>To</Label>
            <Popover open={toOpen} onOpenChange={setToOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={toOpen}
                  className="w-full justify-between h-12"
                >
                  {to ? (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-gray-900">
                        {airports.find(a => a.code === to)?.code} - {airports.find(a => a.code === to)?.city}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      Select arrival city
                    </div>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[400px] p-0">
                <Command>
                  <CommandInput placeholder="Search airports..." />
                  <CommandList>
                    <CommandEmpty>No airport found.</CommandEmpty>
                    <CommandGroup>
                      {airports.map((airport) => (
                        <CommandItem
                          key={airport.code}
                          value={`${airport.code} ${airport.city} ${airport.name}`}
                          onSelect={() => {
                            setTo(airport.code);
                            setToOpen(false);
                          }}
                        >
                          <div className="flex flex-col">
                            <div className="flex items-center">
                              <span className="text-blue-600 mr-2">{airport.code}</span>
                              <span>{airport.city}, {airport.country}</span>
                            </div>
                            <span className="text-sm text-gray-500">{airport.name}</span>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Dates and Passengers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Departure Date */}
          <div className="space-y-2">
            <Label htmlFor="departure">Departure Date</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              <Input
                id="departure"
                type="date"
                className="pl-10 h-12"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          {/* Return Date */}
          {tripType === 'roundtrip' && (
            <div className="space-y-2">
              <Label htmlFor="return">Return Date</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                <Input
                  id="return"
                  type="date"
                  className="pl-10 h-12"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  min={departureDate || new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
          )}

          {/* Passengers */}
          <div className="space-y-2">
            <Label>Passengers & Class</Label>
            <Popover open={passengerOpen} onOpenChange={setPassengerOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-between h-12">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{totalPassengers} Passenger{totalPassengers > 1 ? 's' : ''}</span>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">Adults</p>
                      <p className="text-xs text-gray-500">12+ years</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updatePassengers('adults', false)}
                        disabled={passengers.adults <= 1}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{passengers.adults}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updatePassengers('adults', true)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">Children</p>
                      <p className="text-xs text-gray-500">2-11 years</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updatePassengers('children', false)}
                        disabled={passengers.children <= 0}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{passengers.children}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updatePassengers('children', true)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">Infants</p>
                      <p className="text-xs text-gray-500">Under 2 years</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updatePassengers('infants', false)}
                        disabled={passengers.infants <= 0}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{passengers.infants}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updatePassengers('infants', true)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <Label className="text-sm mb-2 block">Travel Class</Label>
                    <RadioGroup value={flightClass} onValueChange={setFlightClass}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="economy" id="economy" />
                        <Label htmlFor="economy" className="cursor-pointer">Economy</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="business" id="business" />
                        <Label htmlFor="business" className="cursor-pointer">Business</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="first" id="first" />
                        <Label htmlFor="first" className="cursor-pointer">First Class</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    className="w-full"
                    onClick={() => setPassengerOpen(false)}
                  >
                    Done
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Search Button */}
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg"
          onClick={handleSearch}
        >
          <Search className="mr-2 h-5 w-5" />
          Search Flights
        </Button>
      </div>
    </div>
  );
}
