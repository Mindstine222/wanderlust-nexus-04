import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import logoImage from '@/assets/fly-zone-logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 text-sm">Get the latest offers and travel updates</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 md:w-80"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoImage} alt="Fly Zone Elite Travel" className="h-12 w-12" />
              <span className="text-2xl text-white">Fly Zone</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted travel partner for visas, flights, tours, and car rentals across the globe.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-blue-500 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-blue-500 transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-blue-500 transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-blue-500 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-white mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#visas" className="hover:text-blue-500 transition-colors">
                  Visa Services
                </a>
              </li>
              <li>
                <a href="#flights" className="hover:text-blue-500 transition-colors">
                  Flight Booking
                </a>
              </li>
              <li>
                <a href="#umrah" className="hover:text-blue-500 transition-colors">
                  Umrah Packages
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-blue-500 transition-colors">
                  Tour Packages
                </a>
              </li>
              <li>
                <a href="#cars" className="hover:text-blue-500 transition-colors">
                  Car Rental
                </a>
              </li>
              <li>
                <a href="#rewards" className="hover:text-blue-500 transition-colors">
                  Rewards Program
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#help" className="hover:text-blue-500 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-blue-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-500 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#tracking" className="hover:text-blue-500 transition-colors">
                  Track Booking
                </a>
              </li>
            </ul>

            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-blue-500" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-blue-500" />
                <span>info@flyzone.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} Fly Zone Elite Travel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="hover:text-blue-500 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-blue-500 transition-colors">
              Terms
            </a>
            <a href="#cookies" className="hover:text-blue-500 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
