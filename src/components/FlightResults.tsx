import { useState } from 'react';
import { Plane, Clock, Calendar, Briefcase, ArrowRight, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { FlightResult } from '../data/flightData';

interface FlightResultsProps {
  results: FlightResult[];
  loading?: boolean;
}

export function FlightResults({ results, loading }: FlightResultsProps) {
  const [sortBy, setSortBy] = useState('price');
  const [expandedFlights, setExpandedFlights] = useState<string[]>([]);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-32 bg-gray-200 rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <Card>
        <CardContent className="p-12 text-center">
          <Plane className="h-16 w-16 mx-auto text-gray-300 mb-4" />
          <h3 className="text-gray-900 mb-2">No flights found</h3>
          <p className="text-gray-600">Try adjusting your search criteria</p>
        </CardContent>
      </Card>
    );
  }

  const sortedResults = [...results].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'duration') return parseInt(a.totalDuration) - parseInt(b.totalDuration);
    if (sortBy === 'departure') return a.outbound[0].departure.time.localeCompare(b.outbound[0].departure.time);
    return 0;
  });

  const toggleFlightDetails = (flightId: string) => {
    setExpandedFlights(prev =>
      prev.includes(flightId) ? prev.filter(id => id !== flightId) : [...prev, flightId]
    );
  };

  return (
    <div className="space-y-4">
      {/* Sort Options */}
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
        <div>
          <p className="text-gray-900">{results.length} flights found</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">Price (Low to High)</SelectItem>
              <SelectItem value="duration">Duration (Shortest)</SelectItem>
              <SelectItem value="departure">Departure Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Flight Results */}
      {sortedResults.map((flight) => (
        <Card key={flight.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            {/* Outbound Flight */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{flight.outbound[0].airlineLogo}</div>
                    <div>
                      <p className="text-gray-900">{flight.outbound[0].airline}</p>
                      <p className="text-sm text-gray-500">{flight.outbound[0].flightNumber}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl text-gray-900">{flight.outbound[0].departure.time}</p>
                    <p className="text-sm text-gray-500">{flight.outbound[0].departure.code}</p>
                  </div>
                  
                  <div className="mx-8 flex-1 flex flex-col items-center">
                    <p className="text-sm text-gray-500 mb-1">{flight.totalDuration}</p>
                    <div className="w-full border-t-2 border-gray-300 relative">
                      <Plane className="h-4 w-4 text-blue-600 absolute -top-2 left-1/2 -translate-x-1/2 rotate-90" />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-xl text-gray-900">{flight.outbound[flight.outbound.length - 1].arrival.time}</p>
                    <p className="text-sm text-gray-500">{flight.outbound[flight.outbound.length - 1].arrival.code}</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-end gap-2">
                  <div className="text-right">
                    <p className="text-2xl text-blue-600">{flight.currency} {flight.price.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">per person</p>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Select Flight
                  </Button>
                  {flight.seatsLeft <= 5 && (
                    <Badge variant="destructive" className="text-xs">
                      Only {flight.seatsLeft} seats left
                    </Badge>
                  )}
                </div>
              </div>

              {/* Return Flight Info */}
              {flight.inbound && (
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <ArrowRight className="h-4 w-4 rotate-180" />
                      <span>Return: {flight.inbound[0].departure.time} - {flight.inbound[flight.inbound.length - 1].arrival.time}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Flight Details Toggle */}
              <Collapsible
                open={expandedFlights.includes(flight.id)}
                onOpenChange={() => toggleFlightDetails(flight.id)}
              >
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-full">
                    {expandedFlights.includes(flight.id) ? (
                      <>
                        <ChevronUp className="h-4 w-4 mr-2" />
                        Hide Details
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 mr-2" />
                        View Details
                      </>
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 mt-4">
                  <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                    {/* Outbound Segments */}
                    <div>
                      <h4 className="text-sm text-gray-900 mb-3">Outbound Journey</h4>
                      {flight.outbound.map((segment, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-start gap-4">
                            <div className="text-2xl">{segment.airlineLogo}</div>
                            <div className="flex-1 space-y-2">
                              <div className="flex justify-between">
                                <div>
                                  <p className="text-gray-900">{segment.airline} {segment.flightNumber}</p>
                                  <p className="text-sm text-gray-500">{segment.aircraft} • {segment.class}</p>
                                </div>
                                <p className="text-sm text-gray-500">{segment.duration}</p>
                              </div>
                              <div className="flex justify-between text-sm">
                                <div>
                                  <p className="text-gray-900">{segment.departure.time}</p>
                                  <p className="text-gray-500">{segment.departure.code} - {segment.departure.airport}</p>
                                </div>
                                <ArrowRight className="h-4 w-4 text-gray-400 mt-1" />
                                <div className="text-right">
                                  <p className="text-gray-900">{segment.arrival.time}</p>
                                  <p className="text-gray-500">{segment.arrival.code} - {segment.arrival.airport}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {index < flight.outbound.length - 1 && (
                            <div className="ml-12 py-2 text-sm text-orange-600">
                              <Clock className="h-3 w-3 inline mr-1" />
                              Layover
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Return Segments */}
                    {flight.inbound && (
                      <div className="border-t pt-4">
                        <h4 className="text-sm text-gray-900 mb-3">Return Journey</h4>
                        {flight.inbound.map((segment, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-start gap-4">
                              <div className="text-2xl">{segment.airlineLogo}</div>
                              <div className="flex-1 space-y-2">
                                <div className="flex justify-between">
                                  <div>
                                    <p className="text-gray-900">{segment.airline} {segment.flightNumber}</p>
                                    <p className="text-sm text-gray-500">{segment.aircraft} • {segment.class}</p>
                                  </div>
                                  <p className="text-sm text-gray-500">{segment.duration}</p>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <div>
                                    <p className="text-gray-900">{segment.departure.time}</p>
                                    <p className="text-gray-500">{segment.departure.code} - {segment.departure.airport}</p>
                                  </div>
                                  <ArrowRight className="h-4 w-4 text-gray-400 mt-1" />
                                  <div className="text-right">
                                    <p className="text-gray-900">{segment.arrival.time}</p>
                                    <p className="text-gray-500">{segment.arrival.code} - {segment.arrival.airport}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {index < flight.inbound.length - 1 && (
                              <div className="ml-12 py-2 text-sm text-orange-600">
                                <Clock className="h-3 w-3 inline mr-1" />
                                Layover
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Baggage and Policies */}
                    <div className="border-t pt-4 grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Baggage</p>
                        <p className="text-gray-900">Cabin: {flight.baggage.cabin}</p>
                        <p className="text-gray-900">Checked: {flight.baggage.checked}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Refund Policy</p>
                        <p className="text-gray-900">{flight.refundable ? 'Refundable' : 'Non-refundable'}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Availability</p>
                        <p className="text-gray-900">{flight.seatsLeft} seats remaining</p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Quick Info Badges */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">
                  <Briefcase className="h-3 w-3 mr-1" />
                  {flight.baggage.checked}
                </Badge>
                {flight.refundable && (
                  <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                    Refundable
                  </Badge>
                )}
                {flight.stops === 0 && (
                  <Badge variant="outline" className="text-xs text-blue-600 border-blue-600">
                    Direct Flight
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
