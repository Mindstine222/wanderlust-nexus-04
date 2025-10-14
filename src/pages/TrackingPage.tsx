import { useState } from 'react';
import { Search, Package, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';

export function TrackingPage() {
  const [bookingId, setBookingId] = useState('');
  const [email, setEmail] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock tracking result
    setTrackingResult({
      bookingId: bookingId || 'FZ-2024-12345',
      type: 'Visa Application',
      country: 'United Kingdom',
      status: 'In Progress',
      submittedDate: '2024-10-01',
      estimatedCompletion: '2024-10-15',
      timeline: [
        { stage: 'Application Submitted', date: '2024-10-01', status: 'completed' },
        { stage: 'Documents Verified', date: '2024-10-03', status: 'completed' },
        { stage: 'Processing at Embassy', date: '2024-10-05', status: 'current' },
        { stage: 'Visa Decision', date: 'Pending', status: 'pending' },
        { stage: 'Ready for Collection', date: 'Pending', status: 'pending' }
      ]
    });
  };

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Track Booking' }]} />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4">Track Your Booking</h1>
            <p className="text-xl text-blue-100">
              Enter your booking details to check the status
            </p>
          </div>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2 text-blue-600" />
                Enter Booking Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTrack} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bookingId">Booking ID / Reference Number</Label>
                  <Input
                    id="bookingId"
                    placeholder="e.g., FZ-2024-12345"
                    value={bookingId}
                    onChange={(e) => setBookingId(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Search className="mr-2 h-4 w-4" />
                  Track Booking
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Tracking Result */}
          {trackingResult && (
            <Card className="mt-8 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Booking Status</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">
                      Booking ID: {trackingResult.bookingId}
                    </p>
                  </div>
                  <Badge className="bg-blue-600">
                    {trackingResult.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Booking Info */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">Service Type</p>
                    <p className="text-gray-900">{trackingResult.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Country</p>
                    <p className="text-gray-900">{trackingResult.country}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Submitted Date</p>
                    <p className="text-gray-900">{trackingResult.submittedDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Est. Completion</p>
                    <p className="text-gray-900">{trackingResult.estimatedCompletion}</p>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="text-gray-900 mb-4">Processing Timeline</h3>
                  <div className="space-y-4">
                    {trackingResult.timeline.map((item: any, index: number) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          {item.status === 'completed' && (
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          )}
                          {item.status === 'current' && (
                            <Clock className="h-6 w-6 text-blue-600 animate-pulse" />
                          )}
                          {item.status === 'pending' && (
                            <div className="h-6 w-6 border-2 border-gray-300 rounded-full" />
                          )}
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className={`${item.status === 'pending' ? 'text-gray-500' : 'text-gray-900'}`}>
                                {item.stage}
                              </p>
                              <p className="text-sm text-gray-500 mt-1">
                                {item.date}
                              </p>
                            </div>
                            {item.status === 'completed' && (
                              <Badge variant="outline" className="text-green-600 border-green-600">
                                Completed
                              </Badge>
                            )}
                            {item.status === 'current' && (
                              <Badge variant="outline" className="text-blue-600 border-blue-600">
                                In Progress
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t">
                  <Button variant="outline" className="flex-1">
                    Contact Support
                  </Button>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-8">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2">Lost Booking ID?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Check your email for booking confirmation
                </p>
                <Button variant="outline" size="sm">
                  Contact Us
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2">Processing Times</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn about typical processing durations
                </p>
                <Button variant="outline" size="sm">
                  View Guide
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2">Update Request</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Need to modify your booking details?
                </p>
                <Button variant="outline" size="sm">
                  Submit Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
