import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/e0ffd08f8933846da2959bfcecec1c508228fc02.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Visas', href: '/visas' },
    { name: 'Flights', href: '/flights' },
    { name: 'Umrah', href: '/umrah' },
    { name: 'Tours', href: '/tours' },
    // { name: 'Cars', href: '/cars' }, // Hidden as requested
    { name: 'Tracking', href: '/tracking' }
  ];

  return (
    <>
      {/* Promo Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center">
        <p className="text-sm">
          🎉 Special Offer: Get 20% OFF on Dubai Tour Packages! Use code: DUBAI20
        </p>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img src={logoImage} alt="Fly Zone Elite Travel" className="h-12 w-12" />
                <span className="text-2xl text-blue-600">Fly Zone</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors ${
                    location.pathname === link.href
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Link to="/signin">
                <Button variant="ghost" className="hidden md:flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </Button>
              </Link>
              <Link to="/signin">
                <Button className="hidden md:block bg-blue-600 hover:bg-blue-700">
                  My Account
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`py-2 transition-colors ${
                    location.pathname === link.href
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2 border-t">
                <Link to="/signin" className="block">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signin" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    My Account
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
