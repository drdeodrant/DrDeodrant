import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Leaf, FlaskConical } from "lucide-react";

const badges = [
  { icon: Heart, label: "Cruelty-Free" },
  { icon: Leaf, label: "100% Vegan" },
  { icon: FlaskConical, label: "Lab-Tested" }
];

const TrustBadges = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Blue bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 bg-primary origin-left"
      />

      <div className="relative z-10 container-narrow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-24"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-4 text-primary-foreground"
            >
              <badge.icon className="w-10 h-10" strokeWidth={1.5} />
              <span className="text-xl md:text-2xl font-black tracking-tight">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
