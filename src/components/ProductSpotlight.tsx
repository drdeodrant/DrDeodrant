import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import productImage from "@/assets/product-deodorant.jpg";

const ProductSpotlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <img
                src={productImage}
                alt="Dr.Deodorant - Sandalwood & Bergamot"
                className="max-w-sm w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-16"
          >
            <p className="text-sm font-semibold tracking-[0.25em] text-primary mb-4 uppercase">
              Signature Collection
            </p>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Sandalwood & Bergamot
            </h2>
            
            <p className="text-2xl font-semibold text-foreground mb-6">
              $28.00
            </p>

            <div className="mb-8">
              <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                Scent Notes
              </p>
              <p className="text-foreground leading-relaxed">
                Warm sandalwood base with bright citrus bergamot top notes, 
                finished with a subtle hint of white musk. A sophisticated, 
                gender-neutral fragrance.
              </p>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span>50ml / 1.7 fl oz</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span>Lasts 6+ months with daily use</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span>Free shipping on orders over $50</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="px-10 py-6 text-base font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Quick Add to Cart
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
