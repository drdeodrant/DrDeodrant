import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import alumCrystal from "@/assets/alum-crystal.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative section-spacing overflow-hidden">
      {/* Bleeding Blue Shape - Left side with USP */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-1/4 -left-24 w-[350px] h-[500px] md:w-[450px] md:h-[600px] shape-blue z-0 flex items-center justify-center"
      >
        <div className="transform -rotate-90 whitespace-nowrap">
          <span className="text-5xl md:text-7xl font-black text-primary-foreground tracking-tighter">
            PURE MINERAL
          </span>
        </div>
      </motion.div>

      {/* Main Content - Asymmetric Grid */}
      <div className="relative z-10 container-narrow">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text (offset) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:col-start-2"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-primary mb-6 uppercase">
              The Science
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 leading-[0.95]">
              2000 Years<br />of Natural<br />Protection
            </h3>
            <p className="text-lg text-foreground leading-relaxed mb-8 font-bold">
              Potassium alum has been nature’s deodorant for centuries.
              This purified, skin-grade mineral forms an invisible barrier that
              neutralizes odor-causing bacteria—without blocking pores.
            </p>
            
            {/* Feature blocks */}
            <div className="space-y-4">
              {[
                { label: "Vitamin C & E Enriched", desc: "Evens Tone, Heals & Smoothens" },
                { label: "Hypoallergenic", desc: "Safe for sensitive skin" },
                { label: "No Stains", desc: "Pure formula, pristine clothes" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-secondary rounded-2xl"
                >
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image with overlapping shape */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 lg:col-start-8 relative"
          >
            {/* Black shape overlay */}
            <div className="absolute -top-12 -right-8 w-4/5 h-4/5 shape-black z-0" />
            
            <div className="relative z-10 bg-background p-4 rounded-[2rem]">
              <img
                src={alumCrystal}
                alt="Pure alum crystal"
                className="w-full h-auto rounded-[1.5rem]"
              />
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-foreground text-background px-8 py-6 rounded-3xl z-20"
            >
              <p className="text-4xl font-black">24 Hr</p>
              <p className="text-sm font-medium">Odour Protection</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
