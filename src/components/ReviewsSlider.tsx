import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "Finally, a natural deodorant that actually works. No more yellow stains!",
    author: "Sarah M.",
    highlight: "WORKS"
  },
  {
    id: 2,
    text: "The sandalwood scent is incredible—subtle but sophisticated.",
    author: "James K.",
    highlight: "SUBTLE"
  },
  {
    id: 3,
    text: "I've tried every natural deodorant. This is the only one I'll repurchase.",
    author: "Emily R.",
    highlight: "ONLY ONE"
  },
  {
    id: 4,
    text: "As someone with sensitive skin, this is a game-changer.",
    author: "Michael T.",
    highlight: "GAME-CHANGER"
  },
  {
    id: 5,
    text: "Minimalist packaging, maximum protection. Love it.",
    author: "Olivia P.",
    highlight: "LOVE IT"
  }
];

const ReviewsSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative section-spacing overflow-hidden">
      {/* Large USP Text Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
      >
        <span className="text-[20vw] font-black text-foreground whitespace-nowrap">
          REAL RESULTS
        </span>
      </motion.div>

      {/* Bleeding Black Shape - Top Right */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute -top-16 -right-16 w-[300px] h-[250px] md:w-[400px] md:h-[350px] shape-black z-0"
      >
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <span className="text-3xl md:text-5xl font-black text-primary rotate-12">
            5★
          </span>
        </div>
      </motion.div>

      <div className="relative z-10 container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary mb-4 uppercase">
            Testimonials
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground">
            What They Say
          </h3>
        </motion.div>

        {/* Asymmetric Review Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`
                relative p-8 rounded-[2rem] border-2 border-foreground
                ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
                ${index === 2 ? 'bg-primary text-primary-foreground border-primary' : 'bg-background'}
              `}
            >
              {/* Highlight word */}
              <span className={`
                absolute -top-4 left-6 px-4 py-1 text-xs font-bold rounded-full
                ${index === 2 ? 'bg-foreground text-background' : 'bg-primary text-primary-foreground'}
              `}>
                {review.highlight}
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-6 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${index === 2 ? 'fill-primary-foreground text-primary-foreground' : 'fill-primary text-primary'}`} 
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className={`text-xl font-medium leading-relaxed mb-6 ${index === 2 ? '' : 'text-foreground'}`}>
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${index === 2 ? 'bg-primary-foreground/20' : 'bg-secondary'} flex items-center justify-center font-bold`}>
                  {review.author[0]}
                </div>
                <div>
                  <span className="font-bold">{review.author}</span>
                  <p className={`text-xs ${index === 2 ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    Verified Buyer
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;
