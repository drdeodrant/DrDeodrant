import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Dr. Deodorant made of?",
    answer: "Dr. Deodorant is formulated with potassium aluminum sulfate (alum), water, and natural fruit extracts including acerola and kiwi, enriched with vitamins C and E. It is completely unscented and contains no artificial fragrances, masking agents, parabens, or harsh additives, offering gentle, effective odour protection with skin-loving benefits.",
  },
  {
    question: "How is it different from regular deodorants?",
    answer: "Unlike conventional deodorants that mask odor with fragrances or block sweat glands with chemicals, Dr. Deodorant creates an invisible mineral barrier that prevents odor-causing bacteria from forming. It's completely natural and leaves no residue or stains.",
  },
  {
    question: "How do I use Dr. Deodorant?",
    answer: "Simply wet the crystal with water and glide it over clean underarms. Allow to dry naturally. For best results, apply immediately after showering when pores are open.",
  },
  {
    question: "Is Dr. Deodorant safe for sensitive skin?",
    answer: "Absolutely! Our crystal formula is hypoallergenic and dermatologist-tested. It contains no irritants, making it perfect for even the most sensitive skin types.",
  },
  {
    question: "How long does the deodorant last after application?",
    answer: "A single application provides 24-hour odor protection. The mineral barrier remains effective throughout the day, even during intense physical activity.",
  },
  {
    question: "What flavors are available?",
    answer: "Currently, Dr. Deodorant is available in its Original (Unscented) variant. We’re excited to share that new naturally inspired variants are coming soon, including Aloe Vera, Turmeric, Mango, Coconut, and Mangosteen.",
  },
  {
    question: "What is the shelf life of Dr. Deodorant?",
    answer: "Dr. Deodorant has a shelf life of 3 years from the date of manufacturing when stored properly. With daily use, a single crystal typically lasts 3 to 6+ months, depending on usage conditions—making it 3–6× longer lasting than natural deodorants.",
  },
  {
    question: "Is it cruelty-free?",
    answer: "Yes! Dr. Deodorant is 100% cruelty-free and vegan. We never test on animals and our products contain no animal-derived ingredients.",
  },
  {
    question: "Can I use it after shaving?",
    answer: "We recommend waiting 15-30 minutes after shaving before application, as freshly shaved skin may be more sensitive. The natural formula is gentle, but allowing skin to calm ensures maximum comfort.",
  },
  {
    question: "Where can I buy Dr. Deodorant?",
    answer: "You can purchase directly from our official website or from our selected online and offline partners. We recommend buying from authorized sources to ensure authenticity.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="relative section-spacing overflow-hidden bg-background">
      {/* Bleeding Blue Shape - Left */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute -left-32 top-20 w-[300px] h-[500px] shape-blue z-0"
      />

      {/* Bleeding Black Shape - Right */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute -right-20 bottom-40 w-[250px] h-[400px] shape-black z-0"
      />

      {/* Large Background Text */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <span className="text-[20rem] md:text-[30rem] font-black text-foreground/[0.02] leading-none">
          ?
        </span>
      </div>

      <div className="relative z-10 container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-bold tracking-[0.3em] text-primary mb-4 uppercase">
            Got Questions?
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
            FAQ
          </h2>
        </motion.div>

        {/* FAQ Grid - Asymmetric Layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {faqs.slice(0, 5).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`
                  relative border-4 border-foreground rounded-2xl overflow-hidden
                  shadow-[6px_6px_0px_rgba(0,0,0,1)]
                  transition-all duration-300
                  ${openIndex === index ? "bg-primary" : "bg-background hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"}
                  ${index % 2 === 1 ? "md:translate-x-8" : ""}
                `}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className={`text-lg font-bold pr-4 ${openIndex === index ? "text-primary-foreground" : "text-foreground"}`}>
                    {faq.question}
                  </span>
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                    transition-all duration-300
                    ${openIndex === index ? "bg-background rotate-180" : "bg-primary"}
                  `}>
                    <ChevronDown className={`w-5 h-5 ${openIndex === index ? "text-foreground" : "text-primary-foreground"}`} />
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={`px-6 pb-5 ${openIndex === index ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Offset */}
          <div className="space-y-6 md:mt-16">
            {faqs.slice(5).map((faq, index) => {
              const actualIndex = index + 5;
              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * actualIndex }}
                  className={`
                    relative border-4 border-foreground rounded-2xl overflow-hidden
                    shadow-[6px_6px_0px_rgba(0,0,0,1)]
                    transition-all duration-300
                    ${openIndex === actualIndex ? "bg-primary" : "bg-background hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"}
                    ${actualIndex % 2 === 0 ? "md:-translate-x-8" : ""}
                  `}
                >
                  <button
                    onClick={() => toggleFAQ(actualIndex)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className={`text-lg font-bold pr-4 ${openIndex === actualIndex ? "text-primary-foreground" : "text-foreground"}`}>
                      {faq.question}
                    </span>
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                      transition-all duration-300
                      ${openIndex === actualIndex ? "bg-background rotate-180" : "bg-primary"}
                    `}>
                      <ChevronDown className={`w-5 h-5 ${openIndex === actualIndex ? "text-foreground" : "text-primary-foreground"}`} />
                    </div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === actualIndex ? "auto" : 0,
                      opacity: openIndex === actualIndex ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`px-6 pb-5 ${openIndex === actualIndex ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
