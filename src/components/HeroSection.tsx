import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroCloseup from "@/assets/hero-closeup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Bleeding Blue Shape - Top Right */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -top-20 -right-20 w-[500px] h-[400px] md:w-[700px] md:h-[500px] shape-blue z-0"
      />

      {/* Bleeding Black Shape - Bottom Left */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute -bottom-32 -left-32 w-[400px] h-[350px] md:w-[600px] md:h-[450px] shape-black z-10"
      >
        <div className="absolute inset-0 flex items-center justify-end p-12">
          <span className="usp-text text-primary-foreground rotate-[-6deg]">
            NO STAINS
          </span>
        </div>
      </motion.div>

      {/* Main Content - Asymmetric Layout */}
      <div className="relative z-20 min-h-screen flex flex-col lg:flex-row">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-32 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-base md:text-lg font-bold tracking-[0.3em] text-foreground mb-6">
              DR.DEODORANT
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.9] mb-8"
          >
            Nature's<br />
            <span className="text-primary">Purest</span><br />
            Protection.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-md"
          >
            Pure alum mineral. Zero aluminum compounds. 
            Clean, natural protection that actually works.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex gap-4"
          >
            <Button 
              size="lg" 
              className="px-10 py-7 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 border-2 border-white"
            >
              Shop Now
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="px-10 py-7 text-lg font-bold rounded-full border-2 border-foreground transition-all duration-300 hover:scale-105 hover:bg-foreground hover:text-background hover:border-background"
            >
              Learn More
            </Button>
          </motion.div>
        </div>

        {/* Right Content - Product Image with Overlap */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 relative flex items-center justify-center lg:justify-end p-8 lg:p-0"
        >
          <div className="relative w-full max-w-2xl">
            {/* Blue accent shape behind image */}
            <div className="absolute -top-8 -right-8 w-3/4 h-3/4 shape-blue opacity-20" />
            
            <img
              src={heroCloseup}
              alt="Dr.Deodorant product closeup"
              className="relative z-10 w-full h-auto rounded-[2rem] shadow-2xl"
            />

            {/* Floating USP badge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -left-8 bottom-16 bg-primary text-primary-foreground px-8 py-4 rounded-full shadow-xl z-20"
            >
              <span className="font-bold text-lg">100% Natural</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
