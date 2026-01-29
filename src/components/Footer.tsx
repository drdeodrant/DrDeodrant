import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 md:py-20 border-t border-foreground/5">
      <div className="container-narrow">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold tracking-wide text-foreground mb-4">
              DR.DEODORANT
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Pure mineral protection for the modern individual. 
              Crafted with care, tested by nature.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-3">
              {["Shop All", "Our Story", "Scent Journal", "FAQ"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>hello@drdeodorant.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="pt-2">
                123 Mineral Lane<br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Dr.Deodorant. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Shipping
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
