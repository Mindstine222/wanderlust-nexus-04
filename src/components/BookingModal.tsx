import { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { toast } from 'sonner@2.0.3';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultPackage?: string;
}

export function BookingModal({ isOpen, onClose, defaultService = '', defaultPackage = '' }: BookingModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    packageName: defaultPackage,
    travelDate: '',
    numberOfPeople: '1',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Prepare email content
      const emailContent = `
New Booking Request from Fly Zone Elite Travels

Customer Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Service Details:
- Service Type: ${formData.service}
- Package: ${formData.packageName}
- Travel Date: ${formData.travelDate}
- Number of People: ${formData.numberOfPeople}

Additional Message:
${formData.message || 'No additional message'}

---
This request was submitted through the Fly Zone Elite Travels website.
      `.trim();

      /**
       * TO INTEGRATE REAL EMAIL FUNCTIONALITY:
       * 
       * Option 1 - Use EmailJS (Frontend only):
       * 1. Sign up at emailjs.com
       * 2. Install: npm install @emailjs/browser
       * 3. Replace the simulation code below with:
       *    
       *    import emailjs from '@emailjs/browser';
       *    
       *    await emailjs.send(
       *      'YOUR_SERVICE_ID',
       *      'YOUR_TEMPLATE_ID',
       *      {
       *        to_email: 'flyzonesmc@gmail.com',
       *        customer_email: formData.email,
       *        customer_name: formData.name,
       *        customer_phone: formData.phone,
       *        service_type: formData.service,
       *        package_name: formData.packageName,
       *        travel_date: formData.travelDate,
       *        number_of_people: formData.numberOfPeople,
       *        message: formData.message
       *      },
       *      'YOUR_PUBLIC_KEY'
       *    );
       * 
       * Option 2 - Use Backend API:
       * Create a backend endpoint (Node.js/Express with nodemailer) and call it:
       *    
       *    await fetch('/api/send-booking', {
       *      method: 'POST',
       *      headers: { 'Content-Type': 'application/json' },
       *      body: JSON.stringify(formData)
       *    });
       */

      // Simulate email sending (REMOVE THIS IN PRODUCTION)
      console.log('Email would be sent to: flyzonesmc@gmail.com');
      console.log('Copy to customer: ', formData.email);
      console.log('Email content:', emailContent);

      // Simulate API call delay (REMOVE THIS IN PRODUCTION)
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitted(true);
      toast.success('Booking Request Sent!', {
        description: 'We will contact you shortly with more details.'
      });

      // Reset form after 2 seconds and close modal
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          packageName: '',
          travelDate: '',
          numberOfPeople: '1',
          message: ''
        });
        setSubmitted(false);
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Error sending booking request:', error);
      toast.error('Failed to send booking request', {
        description: 'Please try again or contact us directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
     <DialogContent
      className="fixed left-1/2 top-1/2 z-50 w-[95%] sm:max-w-2xl max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-white p-6 shadow-xl focus:outline-none"
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-[#0B1220]">Request a Quote</DialogTitle>
              <DialogDescription>
                Fill out the form below and we'll get back to you with pricing and availability
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-[#0B1220]">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+92 300 1234567"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-4">
                <h3 className="text-[#0B1220]">Service Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="service">Service Type *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleChange('service', value)}
                      required
                    >
                      <SelectTrigger id="service" className="mt-1">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Visas">Visa Services</SelectItem>
                        <SelectItem value="Flights">Flight Booking</SelectItem>
                        <SelectItem value="Umrah">Umrah Packages</SelectItem>
                        <SelectItem value="Tours">Tour Packages</SelectItem>
                        <SelectItem value="Other">Other Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="packageName">Package/Destination</Label>
                    <Input
                      id="packageName"
                      value={formData.packageName}
                      onChange={(e) => handleChange('packageName', e.target.value)}
                      placeholder="e.g., Dubai Tour, UK Visa"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="travelDate">Preferred Travel Date</Label>
                    <Input
                      id="travelDate"
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => handleChange('travelDate', e.target.value)}
                      className="mt-1"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <Label htmlFor="numberOfPeople">Number of People</Label>
                    <Select
                      value={formData.numberOfPeople}
                      onValueChange={(value) => handleChange('numberOfPeople', value)}
                    >
                      <SelectTrigger id="numberOfPeople" className="mt-1">
                        <SelectValue placeholder="Select number" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Person</SelectItem>
                        <SelectItem value="2">2 People</SelectItem>
                        <SelectItem value="3">3 People</SelectItem>
                        <SelectItem value="4">4 People</SelectItem>
                        <SelectItem value="5">5 People</SelectItem>
                        <SelectItem value="6+">6+ People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell us more about your requirements, special requests, or questions..."
                  className="mt-1 min-h-24"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                  disabled={loading}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-[#007CFF] hover:bg-[#0066CC]"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Request
                    </>
                  )}
                </Button>
              </div>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to be contacted by Fly Zone Elite Travels
              </p>
            </form>
          </>
        ) : (
          <div className="py-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl text-[#0B1220] mb-2">Request Sent Successfully!</h3>
            <p className="text-gray-600 mb-4">
              Thank you for your interest. We will review your request and contact you shortly with pricing and availability.
            </p>
            <p className="text-sm text-gray-500">
              A confirmation has been sent to {formData.email}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
