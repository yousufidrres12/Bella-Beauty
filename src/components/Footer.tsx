import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-gradient-soft border-t border-border/30 pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white">
                <img src={logo} alt="Bella Beauty Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-gradient">
                  Bella Beauty
                </h3>
                <p className="text-xs text-muted-foreground">
                  Premium Wellness Clinic
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Experience the pinnacle of beauty and wellness at our luxury clinic. 
              We provide personalized treatments that enhance your natural beauty 
              and boost your confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Before & After", href: "/gallery" },
                { name: "Beauty Tips", href: "/blog" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Book Now", href: "/booking" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Popular Services</h4>
            <ul className="space-y-2">
              {[
                "HydraFacial Treatment",
                "Laser Hair Removal",
                "Botox & Fillers",
                "Chemical Peels",
                "Microneedling",
                "Body Contouring",
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-1" />
                <div className="text-sm">
                  <p className="text-foreground font-medium">Visit Us</p>
                  <p className="text-muted-foreground">
                    123 Beauty Avenue<br />
                    Wellness City, WC 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <div className="text-sm">
                  <p className="text-foreground font-medium">Call Us</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <div className="text-sm">
                  <p className="text-foreground font-medium">Email Us</p>
                  <p className="text-muted-foreground">hello@bellabeauty.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={16} className="text-primary mt-1" />
                <div className="text-sm">
                  <p className="text-foreground font-medium">Hours</p>
                  <p className="text-muted-foreground">
                    Mon-Sat: 9AM-7PM<br />
                    Sunday: 10AM-5PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Infinite Pixels. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;