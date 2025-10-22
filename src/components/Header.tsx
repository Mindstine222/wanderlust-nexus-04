import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/fly-zone-logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Visas', href: '/visas' },
    { name: 'Flights', href: '/flights' },
    { name: 'Umrah', href: '/umrah' },
    { name: 'Tours', href: '/tours' },
    { name: 'Tracking', href: '/tracking' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const MobileMenu = () => (
    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-[9998] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Slide-in Menu from Right */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-[9999] lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl text-[#0B1220]">Menu</h3>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6 text-[#0B1220]" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-1 mb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`py-3 px-4 rounded-lg transition-colors ${
                      location.pathname === link.href
                        ? 'text-[#007CFF] bg-[#007CFF]/10'
                        : 'text-[#0B1220] hover:text-[#007CFF] hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Action Buttons */}
              <div className="space-y-3 pt-6 border-t">
                <Button variant="outline" className="w-full border-[#007CFF] text-[#007CFF]">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Link to="/signin" className="block" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-gray-300">
                    Sign In
                  </Button>
                </Link>
                <Link to="/account" className="block" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#007CFF] hover:bg-[#0066CC] text-white">
                    <User className="h-4 w-4 mr-2" />
                    My Account
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Promo Bar */}
      <div className="bg-gradient-to-r from-[#007CFF] to-[#00BFFF] text-white py-2 px-4 text-center text-sm z-[50] relative">
        <p>
          🎉 Special Offer: Get 20% OFF on Dubai Tour Packages! Use code: DUBAI20
        </p>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-[100] transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img src={logoImage} alt="Fly Zone Elite Travels" className="h-12 w-12 transition-transform group-hover:scale-105" />
              <span className="text-2xl text-[#007CFF] font-semibold hidden sm:inline">Fly Zone Elite Travels</span>
              <span className="text-2xl text-[#007CFF] font-semibold sm:hidden">Fly Zone</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative py-2 transition-colors duration-300 ${
                    location.pathname === link.href
                      ? 'text-[#007CFF]'
                      : 'text-[#0B1220] hover:text-[#007CFF]'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#007CFF]"
                      layoutId="underline"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                className="hidden md:flex items-center space-x-2 border-[#007CFF] text-[#007CFF] hover:bg-[#007CFF] hover:text-white transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </Button>
              
              <Link to="/signin" className="hidden md:block">
                <Button variant="ghost" className="text-[#0B1220] hover:text-[#007CFF] hover:bg-[#007CFF]/10">
                  Sign In
                </Button>
              </Link>
              
              <Link to="/account" className="hidden md:block">
                <Button className="bg-[#007CFF] hover:bg-[#0066CC] text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#007CFF]/30">
                  <User className="h-4 w-4 mr-2" />
                  My Account
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-[#0B1220]" />
                ) : (
                  <Menu className="h-6 w-6 text-[#0B1220]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Portal - Rendered at document root */}
      {typeof document !== 'undefined' && createPortal(<MobileMenu />, document.body)}
    </>
  );
}
