import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">
              Signature Smile
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Transform your smile with advanced All-on-4 dental implant
              solutions. Professional care for lasting results.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/all-on-4"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  All-on-4 Procedure
                </Link>
              </li>
              <li>
                <Link
                  to="/benefits"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Before & After Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>(215) 555-0100</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span>info@signaturesmile.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>401 Commerce Drive, Suite 104 & 204<br />Fort Washington, PA 19034</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="ml-6">Mon-Fri: 8am-6pm, Sat: 9am-3pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Signature Smile. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
