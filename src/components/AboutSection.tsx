import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Shield, Leaf } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "No Yellow Stains",
    description: "Pure alum mineral leaves no residue on clothing, keeping your wardrobe pristine."
  },
  {
    icon: Shield,
    title: "Hypoallergenic",
    description: "Dermatologist-tested formula suitable for even the most sensitive skin types."
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Single-ingredient protection from crystallized mineral salt, nothing artificial."
  }
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-semibold tracking-[0.25em] text-primary mb-4 uppercase">
            The Science of Purity
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            The Alum Advantage
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Potassium alum has been nature's deodorant for over 2,000 years. This crystalline 
            mineral works by creating an invisible barrier that neutralizes odor-causing 
            bacteria—without blocking your pores or disrupting your body's natural processes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-foreground/10 mb-6">
                <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <div className="aspect-video max-w-4xl mx-auto bg-secondary rounded-lg overflow-hidden border border-foreground/5 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-4 cursor-pointer transition-all duration-300 hover:bg-primary hover:scale-105 group">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1 group-hover:border-l-primary-foreground transition-colors" 
                  style={{ borderLeftWidth: '12px' }}
                />
              </div>
              <p className="text-sm text-muted-foreground font-medium tracking-wide">
                How to Use — 15 sec
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
