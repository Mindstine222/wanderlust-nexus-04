import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import flyZoneLogo from "@/assets/fly-zone-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/packages" },
    { label: "Hajj & Umrah", href: "/hajj-umrah" },
    { label: "Honeymoon", href: "/honeymoon" },
    { label: "Visa & Tickets", href: "/visa" },
    { label: "Special Offers", href: "/offers" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-soft">
      {/* Top bar */}
      <div className="border-b border-border bg-primary/5">
        <div className="container mx-auto px-4 py-2 flex justify-end gap-6 text-sm">
          <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
            <Phone className="h-4 w-4" />
            <span>+1 (234) 567-890</span>
          </a>
          <a href="mailto:info@travelagency.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
            <Mail className="h-4 w-4" />
            <span>info@travelagency.com</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={flyZoneLogo} alt="Fly Zone Elite Travel" className="h-14 w-14" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground leading-tight">
                FLY ZONE
              </span>
              <span className="text-xs text-secondary font-semibold leading-tight">
                ELITE TRAVELS
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background shadow-large">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="hero" size="lg" className="mt-4">
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
