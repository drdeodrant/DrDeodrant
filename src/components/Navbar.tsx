import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import logo from "@/assets/Drdeo logo.png"; // Make sure the filename matches exactly in your folder

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Standardized Data Structure
  const navLinks = [
    { name: "Shop", id: "product-spotlight" },
    { name: "Story", href: "/about" }, // standardized to 'href'
    { name: "Journal", href: "/blog" },
  ];

  // Robust Navigation Handler
  const handleNavigation = (link: { name: string; id?: string; href?: string }) => {
    setIsMobileOpen(false);

    // CASE 1: Page Navigation
    if (link.href) {
      window.location.href = link.href;
      return;
    }

    // CASE 2: Scroll Navigation
    if (link.id) {
      if (window.location.pathname === "/" || window.location.pathname === "") {
        const element = document.getElementById(link.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.location.href = `/#${link.id}`;
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-0 right-0 z-40 flex justify-center px-4 transition-all duration-300 ${
          isScrolled ? "py-0" : "py-2"
        }`}
      >
        <div className="w-full max-w-5xl bg-white border-2 border-black rounded-full shadow-[6px_6px_0px_0px_#000] flex items-center justify-between px-6 py-3 md:px-8 md:py-4 relative">
          
          {/* 1. Logo Image (Replaces Text) */}
          <div 
            className="cursor-pointer select-none hover:opacity-80 transition-opacity"
            onClick={() => window.location.href = "/"}
          >
            <img 
              src={logo} 
              alt="Dr. Deo Logo" 
              className="h-8 md:h-5 w-auto object-contain brightness-0" // Adjust height as needed
            />
          </div>

          {/* 2. Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link)}
                className="relative text-sm font-bold uppercase tracking-wide hover:text-primary group transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* 3. Actions */}
          <div className="flex items-center gap-4">
            <button className="relative group">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center border-2 border-black transition-all duration-200 group-hover:bg-primary group-hover:border-black group-hover:shadow-[2px_2px_0px_0px_#000] group-hover:-translate-y-0.5">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border border-black">
                2
              </span>
            </button>

            <button 
              className="md:hidden w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-primary flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-8 right-8 w-14 h-14 bg-white text-black border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#000] active:translate-y-1 active:shadow-none transition-all"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => handleNavigation(link)}
                  className="text-6xl font-black text-white uppercase tracking-tighter hover:text-black hover:scale-105 transition-all stroke-text"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-black rounded-t-[50%] opacity-20 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;