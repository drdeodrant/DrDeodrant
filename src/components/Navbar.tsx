import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";

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

  // 1. Fixed Data Structure (matches logic below)
  const navLinks = [
    { name: "Shop", id: "product-spotlight" },
    { name: "Story", route: "/about" }, 
    { name: "FAQ", id: "faq" },
  ];

  // 2. The Robust Navigation Logic
  const handleNavigation = (link: { name: string; id?: string; route?: string }) => {
    setIsMobileOpen(false); // Always close mobile menu first

    // CASE 1: It's a separate page (like /about)
    if (link.route) {
      window.location.href = link.route;
      return;
    }

    // CASE 2: It's a Scroll Link (has an ID)
    if (link.id) {
      // Check if we are currently on the Home page
      if (window.location.pathname === "/" || window.location.pathname === "") {
        // We are on Home -> Just Scroll
        const element = document.getElementById(link.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // We are NOT on Home -> Navigate to Home with the Hash
        window.location.href = `/#${link.id}`;
      }
    }
  };

  return (
    <>
      {/* Floating Navbar Container */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-0 right-0 z-40 flex justify-center px-4 transition-all duration-300 ${
          isScrolled ? "py-0" : "py-2"
        }`}
      >
        <div className="w-full max-w-5xl bg-white border-2 border-black rounded-full shadow-[6px_6px_0px_0px_#000] flex items-center justify-between px-6 py-3 md:px-8 md:py-4 relative">
          
          {/* 1. Logo (Left) */}
          <div 
            className="text-xl md:text-2xl font-black tracking-tighter cursor-pointer select-none hover:text-primary transition-colors"
            onClick={() => window.location.href = "/"}
          >
            DR.DEO
          </div>

          {/* 2. Desktop Links (Center) */}
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

          {/* 3. Actions (Right) */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <button className="relative group">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center border-2 border-black transition-all duration-200 group-hover:bg-primary group-hover:border-black group-hover:shadow-[2px_2px_0px_0px_#000] group-hover:-translate-y-0.5">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border border-black">
                2
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* 4. Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-primary flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-8 right-8 w-14 h-14 bg-white text-black border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#000] active:translate-y-1 active:shadow-none transition-all"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Huge Mobile Links */}
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

            {/* Decorative Shape */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-black rounded-t-[50%] opacity-20 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;