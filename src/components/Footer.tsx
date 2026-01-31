import { motion } from "framer-motion";

const Footer = () => {

  const navLinks = [
  { label: "Shop All", href: "#product-spotlight" }, // Correct: Points to the ID
  { label: "Our Story", href: "/about" },
  { label: "Scent Journal", href: "#" },
  { label: "FAQ", href: "#faq" },                    // Correct: Points to the ID
];


  return (
    <footer className="relative py-20 md:py-28 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[250px] shape-blue opacity-10" />
      <div className="absolute -top-10 -right-10 w-[200px] h-[200px] shape-black opacity-5" />

      <div className="relative z-10 container-narrow">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand - Large */}
          <div className="md:col-span-5">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-6"
            >
              DR.DEODORANT
            </motion.h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-sm">
              Pure mineral protection for the modern individual. 
              Crafted with care, tested by nature.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-bold text-foreground mb-6 text-lg">Explore</h4>
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-foreground mb-6 text-lg">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="font-medium">hello@drdeodorant.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="pt-2">
                123 Mineral Lane<br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground font-medium">
            © 2025 Dr.Deodorant. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
