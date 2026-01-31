import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Plus, Minus } from "lucide-react";
import productImage from "@/assets/product-deodorant.jpg";
import CheckoutModal from "./CheckoutModal";

const ProductSpotlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [cartCount, setCartCount] = useState(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const handleIncrement = () => {
    setCartCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCartCount((prev) => Math.max(0, prev - 1));
  };

  const handleBuyNow = () => {
    if (cartCount === 0) {
      setCartCount(1);
    }
    setIsCheckoutOpen(true);
  };

  return (
    <section ref={ref} className="relative section-spacing overflow-hidden bg-foreground">
      {/* Bleeding White Shape - Right side with product close-up */}
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-20 -right-20 w-[400px] h-[600px] md:w-[500px] md:h-[700px] bg-white/5 rounded-[3rem] z-0 overflow-hidden backdrop-blur-sm"
      >
        <img 
          src={productImage} 
          alt="Product detail"
          className="w-full h-full object-cover opacity-30"
        />
      </motion.div>

      {/* Blue accent shape */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute -bottom-20 left-1/4 w-[300px] h-[200px] shape-blue z-0"
      />

      <div className="relative z-10 container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Product Image - Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative flex justify-center items-center">
              {/* Background Shape: Remains as a backdrop/frame */}
              <div className="absolute inset-0 shape-blue transform rotate-6 scale-110 rounded-3xl" />
              
              {/* Foreground Video: Replaces the Image */}
              <div className="relative z-10 w-full max-w-md aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl transform rotate-6 bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-fill"
                >
                  <source src="src/assets/Deodorant_Ad_Video_Generation.mp4" type="video/mp4" />
                </video>
              </div>
              
            </div>
          </motion.div>

          {/* Product Details - Right */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-background"
          >
            <p className="text-sm font-bold tracking-[0.3em] text-primary mb-4 uppercase">
              Signature Collection
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[0.95]">
              Sandalwood<br />& Bergamot
            </h2>
            
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-5xl font-black text-primary">$28</span>
              <span className="text-lg text-background/60">50ml / 1.7 fl oz</span>
            </div>

            <div className="mb-10">
              <p className="text-sm font-bold text-background/60 mb-3 uppercase tracking-wide">
                Scent Profile
              </p>
              <p className="text-lg text-background/80 leading-relaxed">
                Warm sandalwood base with bright citrus bergamot, 
                finished with subtle white musk. Sophisticated & gender-neutral.
              </p>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["Lasts 6+ Months", "Free Shipping $50+", "Lab Tested"].map((item) => (
                <span 
                  key={item}
                  className="px-5 py-2 bg-background/10 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Add to Cart Button with Counter */}
              {cartCount === 0 ? (
                <Button 
                  size="lg" 
                  onClick={handleAddToCart}
                  className="px-12 py-7 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105"
                >
                  <ShoppingBag className="w-5 h-5 mr-3" />
                  Add to Cart
                </Button>
              ) : (
                <div className="flex items-center bg-primary rounded-full overflow-hidden border-2 border-primary">
                  <button
                    onClick={handleDecrement}
                    className="w-14 h-14 flex items-center justify-center text-primary-foreground hover:bg-primary-hover transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <div className="px-6 py-3 text-xl font-black text-primary-foreground min-w-[60px] text-center">
                    {cartCount}
                  </div>
                  <button
                    onClick={handleIncrement}
                    className="w-14 h-14 flex items-center justify-center text-primary-foreground hover:bg-primary-hover transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="px-10 py-4 bg-background text-foreground text-lg font-black rounded-full border-4 border-foreground shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
              >
                Buy Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        quantity={cartCount > 0 ? cartCount : 1}
        productName="Sandalwood & Bergamot"
        price={28}
      />
    </section>
  );
};

export default ProductSpotlight;