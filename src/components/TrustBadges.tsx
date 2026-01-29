import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Leaf, FlaskConical } from "lucide-react";

const badges = [
  {
    icon: Heart,
    label: "Cruelty-Free",
    description: "Never tested on animals"
  },
  {
    icon: Leaf,
    label: "100% Vegan",
    description: "Plant-based formula"
  },
  {
    icon: FlaskConical,
    label: "Lab-Tested",
    description: "Dermatologist approved"
  }
];

const TrustBadges = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 md:py-20 border-t border-foreground/5">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-20"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-4 text-muted-foreground"
            >
              <badge.icon className="w-8 h-8" strokeWidth={1.5} />
              <div>
                <p className="font-semibold text-foreground">{badge.label}</p>
                <p className="text-sm">{badge.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
