import { Sparkles, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-serif text-2xl font-bold">Wicked Beauty</span>
            </div>
            <p className="text-background/80 italic">
              Where beauty dreams come true!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3 text-background/80">
              <a
                href="tel:+61411805333"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+61 411 805 333</span>
              </a>
              <a
                href="mailto:wickedbronze@hotmail.com"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>wickedbronze@hotmail.com</span>
              </a>
              <a
                href="https://instagram.com/wannafeelpretty_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>@wannafeelpretty_</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>© {currentYear} Wicked Beauty. All rights reserved.</p>
          <p className="mt-2">
            Certified Lash Technician × 3 | Beauty, Cosmetic & Personal Care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
