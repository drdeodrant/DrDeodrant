import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "Finally, a natural deodorant that actually works. No more yellow stains on my white shirts!",
    author: "Sarah M.",
    verified: true
  },
  {
    id: 2,
    text: "The sandalwood scent is incredible—subtle but sophisticated. My partner loves it.",
    author: "James K.",
    verified: true
  },
  {
    id: 3,
    text: "I've tried every natural deodorant on the market. This is the only one I'll repurchase.",
    author: "Emily R.",
    verified: true
  },
  {
    id: 4,
    text: "As someone with sensitive skin, this is a game-changer. No irritation whatsoever.",
    author: "Michael T.",
    verified: true
  },
  {
    id: 5,
    text: "The minimalist packaging matches my aesthetic perfectly. Great for travel too.",
    author: "Olivia P.",
    verified: true
  }
];

const ReviewsSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing bg-card overflow-hidden">
      <div className="container-narrow mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-sm font-semibold tracking-[0.25em] text-primary mb-4 uppercase">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            What Our Customers Say
          </h3>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Reviews */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <div className="flex gap-6 overflow-x-auto pb-4 px-6 md:px-8 scrollbar-hide snap-x snap-mandatory">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="flex-shrink-0 w-[340px] md:w-[400px] snap-start"
            >
              <div className="bg-background border border-foreground/10 rounded-lg p-8 h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground text-lg leading-relaxed mb-6">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">
                    {review.author}
                  </span>
                  {review.verified && (
                    <span className="text-xs text-muted-foreground px-2 py-1 bg-secondary rounded-full">
                      Verified Buyer
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-card to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-card to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
};

export default ReviewsSlider;
