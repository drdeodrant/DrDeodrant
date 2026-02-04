import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Award, Heart } from "lucide-react";
import alumCrystal from "@/assets/alum-crystal.jpg";
import founderImage from "@/assets/founder.jpeg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Section A: The Hook
const HookSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-background">
      {/* Bleeding Blue Shape - Left side */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 -left-20 w-[400px] md:w-[500px] h-screen shape-blue z-0 flex items-center justify-center"
      >
        <div className="transform -rotate-90 whitespace-nowrap">
          <span className="text-6xl md:text-8xl font-black text-primary-foreground tracking-tighter opacity-80">
            PURE SCIENCE
          </span>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Text - Left offset */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 lg:col-start-3 pt-32 lg:pt-0"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.9] mb-8 tracking-tighter">
                WE
                <span className="text-primary"> HATE</span><br/>
                STAINS & SMELL.
              </h1>
              {/* PART 1: The Hook - Uses your Electric Brand Blue (#0047FF)
                  This makes the text feel like part of the artwork, not just a paragraph.
              */}
              <p className="text-xl md:text-2xl text-zinc-750 font-black leading-tight mb-6 tracking-tight">
                Deodorant marks on your favorite shirt? Unacceptable.
                <br className="hidden md:block" />
                Chemicals seeping into your skin? Never again.
              </p>

              {/* PART 2: The Story - Uses Pure Black
                  Standard, high-contrast black for maximum readability.
              */}
              <p className="text-lg md:text-xl text-black font-bold leading-relaxed max-w-lg">
                We started Dr.Deodorant because the world deserved better.
                A deodorant that protects without compromising. 
                <span className="bg-black text-white px-1">Pure mineral science, zero nonsense.</span>
              </p>
            </motion.div>

            {/* DESIGN FIX 3: Image Proximity
              Changed 'col-start-8' to 'col-start-9'.
              This keeps the image close to the text but allows overlapping elements to breathe.
          */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="lg:col-span-4 lg:col-start-9 relative mt-12 lg:mt-0"
          >
            <div className="relative group">
              {/* Black accent shape - Offset for "Sticker" effect */}
              <div className="absolute top-4 -right-4 w-full h-full bg-black rounded-[2.5rem] z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              
              <img
                src={alumCrystal}
                alt="Pure alum crystal texture"
                className="relative z-10 w-full rounded-[2.5rem] border-4 border-white shadow-2xl"
              />

              {/* Floating badge - Adjusted position to overlap nicely */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-12 bottom-12 bg-primary text-white px-8 py-4 rounded-full z-20 shadow-[4px_4px_0px_rgba(0,0,0,1)] border-2 border-black transform -rotate-3 hover:rotate-0 transition-transform"
              >
                <span className="font-black text-lg tracking-wide">100% NATURAL</span>
              </motion.div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section B: The Origin Timeline
const OriginSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineEvents = [
    {
      year: "2019",
      title: "The Discovery",
      description: "Our founder discovers potassium alum during travels in Asia. Mind = blown.",
      icon: Sparkles,
      position: "left",
    },
    {
      year: "2020",
      title: "Lab Testing",
      description: "18 months of R&D. 47 formula iterations. One perfect crystal.",
      icon: Award,
      position: "right",
    },
    {
      year: "2022",
      title: "Launch Day",
      description: "Dr.Deodorant goes live. Sells out in 72 hours.",
      icon: Heart,
      position: "left",
    },
  ];

  return (
    <section ref={ref} className="relative section-spacing overflow-hidden bg-secondary">
      {/* Background giant text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[20rem] md:text-[30rem] font-black text-foreground/[0.03] leading-none">
          EST
        </span>
      </div>

      {/* Blue accent shape - top right */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute -top-20 -right-20 w-[300px] h-[400px] shape-blue z-0"
      />

      <div className="relative z-10 container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary mb-4 uppercase">
            Our Story
          </h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[0.9] tracking-tighter">
            How It All<br />Started
          </h3>
        </motion.div>

        {/* Asymmetric Timeline */}
        <div className="relative">
          {/* Connector line - energetic diagonal */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 hidden lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: event.position === "left" ? -80 : 80 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  event.position === "right" ? "lg:text-right" : ""
                }`}
              >
                {/* Year - Massive */}
                <div
                  className={`${
                    event.position === "right" ? "lg:order-2" : ""
                  }`}
                >
                  <span className="text-8xl md:text-9xl font-black text-primary/20 leading-none">
                    {event.year}
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`${
                    event.position === "right" ? "lg:order-1" : ""
                  }`}
                >
                  <div className="bg-background p-8 rounded-[2rem] border-4 border-foreground shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <event.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h4 className="text-2xl font-black text-foreground">
                        {event.title}
                      </h4>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background hidden lg:block z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Section C: The Visionary
const VisionarySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative section-spacing overflow-hidden bg-background">
      {/* Giant name - background layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 flex items-end justify-start pointer-events-none overflow-hidden"
      >
        <span className="text-[8rem] md:text-[14rem] lg:text-[20rem] font-black text-foreground/[0.04] leading-none whitespace-nowrap translate-x-[-5%] translate-y-[20%]">
          REMEE
        </span>
      </motion.div>

      {/* Black shape - bottom right */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 -right-20 w-[400px] md:w-[500px] h-[600px] md:h-[700px] shape-black z-0"
      />

      <div className="relative z-10 container-narrow">
        <div className="grid lg:grid-cols-12 gap-8 items-end min-h-[80vh]">
          {/* Content - Left */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 pb-20"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-primary mb-4 uppercase">
              The Visionary
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[0.9] tracking-tighter mb-8">
              Meet<br />
              <span className="text-primary">REMEE</span>
            </h3>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Former biochemist. Skincare obsessive. The person who spent 3 years 
              perfecting what most brands make in 3 weeks.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              "I believed everyone deserves protection that doesn't come with 
              compromises. No chemicals. No stains. Just pure, honest science."
            </p>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-block"
            >
              <p className="text-3xl md:text-4xl text-primary font-bold italic transform -rotate-3">
                — Remee
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Founder & Chief Scientist
              </p>
            </motion.div>
          </motion.div>

          {/* Founder Image - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 100 }} // Changed to slide in from right for better energy
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-5 lg:col-start-8 relative perspective-1000"
          >
            <div className="relative group">
              
              {/* DESIGN FIX: The "Shadow" Shape
                  This sits behind the image to create a 3D collage effect. 
                  It's offset slightly to the bottom-right. */}
              <div className="absolute top-4 -right-4 w-full h-full bg-white rounded-[3rem] -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

              {/* The Main Image Container */}
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden border-4 border-black bg-white relative">
                <img 
                  src={founderImage} 
                  alt="Founder of Dr. Deodorant" 
                  // Image Effect: Starts grayscale, becomes full color on hover
                  className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105" 
                />
                
                {/* Optional: Subtle blue overlay that vanishes on hover (adds to the brand color) */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
              </div>

              {/* Floating Card 1: Patents */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotate: -5 }}
                animate={isInView ? { opacity: 1, x: 0, rotate: -5 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-8 top-1/4 bg-white px-6 py-4 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)] border-4 border-black z-20 hover:scale-110 transition-transform"
              >
                <p className="text-4xl font-black text-primary leading-none">10+</p>
                <p className="text-sm font-bold text-black uppercase tracking-wider mt-1">Patents Filed</p>
              </motion.div>

              {/* Floating Card 2: Experience */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 5 }}
                animate={isInView ? { opacity: 1, x: 0, rotate: 5 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -right-8 bottom-1/4 bg-primary text-white px-6 py-4 rounded-2xl shadow-[8px_8px_0px_rgba(255,255,255,1)] border-4 border-black z-20 hover:scale-110 transition-transform"
              >
                <p className="text-4xl font-black leading-none">15Y</p>
                <p className="text-sm font-bold text-white/90 uppercase tracking-wider mt-1">In Biochemistry</p>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HookSection />
      <OriginSection />
      <VisionarySection />
      <Footer />
    </main>
  );
};

export default About;
