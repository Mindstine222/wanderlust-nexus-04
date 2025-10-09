import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Hajj & Umrah", href: "#packages" },
      { label: "Honeymoon Packages", href: "#packages" },
      { label: "Tour Packages", href: "#packages" },
      { label: "Visa Services", href: "#visa" },
      { label: "Flight Tickets", href: "#visa" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQs", href: "#faq" },
      { label: "Privacy Policy", href: "#privacy" },
    ],
    destinations: [
      { label: "Mecca & Medina", href: "#" },
      { label: "Europe", href: "#" },
      { label: "Maldives", href: "#" },
      { label: "Dubai", href: "#" },
      { label: "Turkey", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 gradient-hero rounded-lg flex items-center justify-center shadow-medium">
                <span className="text-white font-bold text-xl">GT</span>
              </div>
              <span className="text-2xl font-bold text-background">
                Gerry's Travel
              </span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Your trusted partner in creating unforgettable travel experiences worldwide. Excellence in service since 2010.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <Mail className="h-4 w-4" />
                <span>info@gerrystravel.com</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="h-4 w-4" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-background">Our Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-background">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-background">Popular Destinations</h3>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            © {currentYear} Gerry's Travel. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="h-10 w-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth"
              >
                <social.icon className="h-5 w-5 text-background" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
