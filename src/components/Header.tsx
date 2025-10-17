import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, User } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import logoImage from '@/assets/fly-zone-logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Visas', href: '/visas' },
    { name: 'Flights', href: '/flights' },
    { name: 'Umrah', href: '/umrah' },
    { name: 'Tours', href: '/tours' },
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
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-md border-b border-border' : 'bg-background/80 backdrop-blur-sm border-b border-border/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <img src={logoImage} alt="Fly Zone Elite Travel" className="h-12 w-12 transition-transform duration-300 group-hover:scale-105" />
                <span className="text-2xl font-heading font-semibold text-primary transition-colors">Fly Zone</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium transition-all duration-200 relative ${
                    location.pathname === link.href
                      ? 'text-primary'
                      : 'text-foreground/80 hover:text-primary'
                  } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                    location.pathname === link.href 
                      ? 'after:w-full' 
                      : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Link to="/signin">
                <Button variant="ghost" className="hidden md:flex items-center space-x-2 hover:bg-primary/10">
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </Button>
              </Link>
              <Link to="/signin">
                <Button className="hidden md:block">
                  My Account
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="md:hidden p-2">
                    <Menu className="h-6 w-6 text-foreground" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className={`py-3 px-4 font-medium transition-colors rounded-lg ${
                          location.pathname === link.href
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground hover:bg-muted'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                    <div className="pt-4 space-y-3 border-t">
                      <Link to="/signin" className="block">
                        <Button variant="outline" className="w-full">
                          Sign In
                        </Button>
                      </Link>
                      <Link to="/signin" className="block">
                        <Button className="w-full">
                          My Account
                        </Button>
                      </Link>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

      </header>
    </>
  );
}
