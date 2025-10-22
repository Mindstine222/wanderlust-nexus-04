import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Link } from 'react-router-dom';
import logoImage from '../assets/fly-zone-logo.png';

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section - Hidden on Mobile */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
        className="bg-gray-800 py-8 md:py-12 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-white mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Get the latest offers and travel updates directly to your inbox</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 md:w-80 h-12"
              />
              <Button className="bg-[#007CFF] hover:bg-[#0066CC] text-white h-12 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"
      >
        {/* Mobile Footer - Compact Version */}
        <div className="md:hidden space-y-6">
          {/* Logo and Social */}
          <div className="text-center">
            <Link to="/" className="flex items-center justify-center space-x-3 mb-4 group">
              <img 
                src={logoImage} 
                alt="Fly Zone Elite Travels" 
                className="h-10 w-10" 
              />
              <span className="text-xl text-white">Fly Zone Elite Travels</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4 px-4">
              Your trusted travel partner for visas, flights, tours, and umrah packages.
            </p>
            <div className="flex justify-center space-x-3 mb-6">
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-800 hover:bg-[#007CFF] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-800 hover:bg-[#007CFF] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-800 hover:bg-[#007CFF] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-800 hover:bg-[#007CFF] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links - 2 Column on Mobile */}
          <div className="grid grid-cols-2 gap-4 text-center text-sm">
            <div>
              <Link to="/visas" className="block py-2 hover:text-[#007CFF] transition-colors">
                Visas
              </Link>
              <Link to="/flights" className="block py-2 hover:text-[#007CFF] transition-colors">
                Flights
              </Link>
              <Link to="/umrah" className="block py-2 hover:text-[#007CFF] transition-colors">
                Umrah
              </Link>
            </div>
            <div>
              <Link to="/tours" className="block py-2 hover:text-[#007CFF] transition-colors">
                Tours
              </Link>
              <Link to="/tracking" className="block py-2 hover:text-[#007CFF] transition-colors">
                Tracking
              </Link>
              <a href="#about" className="block py-2 hover:text-[#007CFF] transition-colors">
                About Us
              </a>
            </div>
          </div>

          {/* Contact Info - Compact */}
          <div className="text-center space-y-2 text-sm border-t border-gray-800 pt-6">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-4 w-4 text-[#007CFF]" />
              <a href="tel:+923001234567" className="hover:text-[#007CFF] transition-colors">
                +92 300 1234567
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-4 w-4 text-[#007CFF]" />
              <a href="mailto:info@flyzone.com" className="hover:text-[#007CFF] transition-colors">
                info@flyzone.com
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Footer - Full Version */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <img 
                src={logoImage} 
                alt="Fly Zone Elite Travels" 
                className="h-12 w-12 transition-transform group-hover:scale-105" 
              />
              <span className="text-2xl text-white">Fly Zone Elite Travels</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Your trusted travel partner for visas, flights, tours, and umrah packages across the globe.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-[#007CFF] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-[#007CFF] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-[#007CFF] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-[#007CFF] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:text-[#007CFF] transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#007CFF] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-[#007CFF] transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#007CFF] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#007CFF] transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#007CFF] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-white mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/visas" className="hover:text-[#007CFF] transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#007CFF] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Visas
                </Link>
              </li>
              <li>
                <Link to="/flights" className="hover:text-[#007CFF] transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#007CFF] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Flights
                </Link>
              </li>
              <li>
                <Link to="/umrah" className="hover:text-[#007CFF] transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#007CFF] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Umrah
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-[#007CFF] transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#007CFF] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-[#007CFF] transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#007CFF] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="text-white mb-6">Support</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="#help" className="hover:text-[#007CFF] transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#007CFF] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Help Center
                </a>
              </li>
              <li>
                <Link to="/tracking" className="hover:text-[#007CFF] transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#007CFF] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Track Booking
                </Link>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[#007CFF] transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#007CFF] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#007CFF] transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#007CFF] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Terms & Conditions
                </a>
              </li>
            </ul>

            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#007CFF] mt-0.5" />
                <div>
                  <p className="text-white">Call Us</p>
                  <a href="tel:+923001234567" className="hover:text-[#007CFF] transition-colors">
                    +92 300 1234567
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#007CFF] mt-0.5" />
                <div>
                  <p className="text-white">Email Us</p>
                  <a href="mailto:info@flyzone.com" className="hover:text-[#007CFF] transition-colors">
                    info@flyzone.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#007CFF] mt-0.5" />
                <div>
                  <p className="text-white">Address</p>
                  <p className="text-gray-400">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <Separator className="bg-gray-800" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-center md:text-left">
          <p className="text-gray-400">
            © {currentYear} Fly Zone Elite Travels. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#privacy" className="hover:text-[#007CFF] transition-colors duration-300">
              Privacy
            </a>
            <a href="#terms" className="hover:text-[#007CFF] transition-colors duration-300">
              Terms
            </a>
            <a href="#cookies" className="hover:text-[#007CFF] transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
