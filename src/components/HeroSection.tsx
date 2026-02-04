import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroCloseup from "@/assets/hero-closeup.png";
import { Sparkles, MoveRight, Star } from "lucide-react"; 
import { Zap, ArrowRight } from "lucide-react";

const Marquee = () => {
  return (
    <div className="absolute top-[20%] left-0 w-full overflow-hidden -z-10 opacity-[0.03] select-none pointer-events-none transform -rotate-2">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-[12rem] md:text-[20rem] font-black tracking-tighter mx-4">
            ZERO ALUMINUM • PURE MINERAL • 
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const FloatingShard = ({ delay, className }: { delay: number, className: string }) => (
  <motion.div
    initial={{ y: 0, rotate: 0 }}
    animate={{ y: [-20, 20, -20], rotate: [0, 10, -10, 0] }}
    transition={{ duration: 6, delay: delay, repeat: Infinity, ease: "easeInOut" }}
    className={`absolute z-20 ${className}`}
  >
     {/* Abstract Crystal Shape */}
    <div className="w-full h-full bg-white/40 backdrop-blur-md border border-white/60 shadow-lg" style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }} />
  </motion.div>
);

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background flex flex-col justify-center">
      
      {/* 1. TEXTURE LAYER: Grid & Grain */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}
      />

      {/* 2. KINETIC LAYER: The Infinite Scroll */}
      <Marquee />

      {/* Bleeding Blue Shape - Top Right */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1, ease: "circOut" }}
        className="absolute top-0 right-0 w-[40%] h-[70%] bg-[#0047FF] rounded-bl-[120px] z-0 hidden lg:block shadow-[inset_0px_0px_100px_rgba(0,0,0,0.1)]"
      />

      {/* Bleeding Black Shape - Bottom Left */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
        className="absolute bottom-0 left-0 w-[90%] md:w-[45%] h-[35%] bg-black rounded-tr-[100px] z-10"
      >
        {/* Subtle texture inside the black shape */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
      </motion.div>

      {/* Main Content Grid */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center pt-20 lg:pt-0">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 mb-6 mt-20"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#0047FF] animate-pulse" />
            <h2 className="text-sm md:text-base font-bold tracking-[0.3em] uppercase">
              The Science of Fresh
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-[0.85] mb-8 tracking-tighter"
          >
            NATURE'S <br />
            {/* The "Hollow" Effect for depth */}
            <span className="text-transparent bg-clip-text stroke-text relative" style={{ WebkitTextStroke: "2px #0047FF" }}>
              PUREST
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
                className="absolute bottom-2 left-0 h-[0.15em] bg-[#0047FF]/20 -z-10"
              />
            </span> <br />
            DEFENSE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl font-medium text-white mb-5 max-w-md border-l-4 border-[#0047FF] pl-6"
          >
            Pure Mineral. Zero Aluminum Chlorohydrate. Clean, natural protection that actually
works—enriched with Vitamins C & E <br/>
            <span className="font-bold text-black">The only deodorant you'll ever need.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-6 mt-2"
          >
            
            {/* 1. PRIMARY: "GET FRESH" (The Detonator) */}
            <a href="#product-spotlight" className="group relative inline-block text-decoration-none">
              
              {/* The Hard Shadow (Anchor) */}
              <div className="absolute inset-0 bg-black rounded-xl translate-x-2 translate-y-2 transition-transform duration-200 ease-out group-hover:translate-x-3 group-hover:translate-y-3 group-active:translate-x-1 group-active:translate-y-1" />
              
              {/* The Button Face */}
              <button className="relative h-16 px-10 bg-[#0047FF] rounded-xl border-4 border-black flex items-center gap-3 overflow-hidden transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:-translate-x-1 group-active:translate-x-1 group-active:translate-y-1">
                
                {/* Glare Effect (Sweeps across on hover) */}
                <div className="absolute inset-0 bg-white/20 -translate-x-full skew-x-12 group-hover:animate-[shimmer_1s_infinite] w-full" />
                
                {/* Content */}
                <span className="relative z-10 text-xl font-black text-white italic tracking-tighter uppercase transform group-hover:scale-105 transition-transform">
                  Get Fresh
                </span>
                <Zap className="relative z-10 w-6 h-6 text-white fill-white group-hover:rotate-12 transition-transform duration-300" />
              
              </button>
            </a>

            {/* 2. SECONDARY: "THE SCIENCE" (The Curtain) */}
            <a href="/about" className="group relative inline-block text-decoration-none">
              <button className="relative h-16 px-8 bg-white rounded-xl border-4 border-black flex items-center overflow-hidden transition-all hover:shadow-[4px_4px_0px_#000]">
                
                {/* The Ink Fill (Slides up from bottom) */}
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                
                {/* Content */}
                <span className="relative z-10 text-lg font-bold text-black group-hover:text-white transition-colors duration-300 uppercase tracking-wide flex items-center gap-2">
                    The Science
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                
              </button>
            </a>

          </motion.div>
        </div>

        {/* RIGHT COLUMN: The Kinetic Product Display */}
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 perspective-1000">
          
          {/* Parallax Container */}
          <motion.div style={{ y: y2 }} className="relative w-full max-w-xl">
            
            {/* 3. DEPTH LAYER: Floating Shards (The "Mineral" Story) */}
            <FloatingShard delay={0} className="w-16 h-16 top-0 right-10" />
            <FloatingShard delay={1.5} className="w-12 h-12 bottom-20 -left-4" />
            <FloatingShard delay={0.8} className="w-8 h-8 top-1/2 right-0 bg-[#0047FF]/30 border-[#0047FF]" />

            {/* The Product Card */}
            <div className="relative z-10">
               {/* Hard Shadow Anchor */}
               <div className="absolute inset-0 bg-black translate-x-6 translate-y-6 rounded-[3rem]" />
               
               {/* The Image */}
               <div className="relative border-4 border-black rounded-[3rem] overflow-hidden bg-white">
                  <img
                    src={heroCloseup}
                    alt="Dr.Deodorant product closeup"
                    className="w-full h-auto object-cover scale-105"
                  />
                  {/* Internal Vignette for focus */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
               </div>
            </div>

            {/* THE HYPE STICKER (Your Request) - Now with entry animation */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: -12 }}
              whileHover={{ scale: 1.1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: 1 }}
              className="absolute -top-8 -left-8 z-30 cursor-pointer"
            >
               <div className="relative bg-white border-4 border-black p-5 shadow-[8px_8px_0px_#0047FF]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-black/10 rotate-1 backdrop-blur-sm" />
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-[#0047FF] fill-[#0047FF] animate-pulse" />
                    <div className="flex flex-col">
                        <span className="text-4xl font-black leading-none text-black italic tracking-tighter">
                            NO STAINS
                        </span>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0047FF]">
                              Guaranteed
                          </span>
                          <Star className="w-3 h-3 fill-yellow-400 text-black" />
                        </div>
                    </div>
                  </div>
               </div>
            </motion.div>

            {/* The Bottom Badge */}
            <motion.div style={{ y: y1 }} className="absolute -bottom-10 -right-4 z-20">
               <div className="bg-[#0047FF] text-white border-4 border-black px-8 py-4 rounded-full shadow-[8px_8px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                 <span className="font-black text-xl">100%</span>
                 <span className="text-sm font-bold uppercase tracking-wide opacity-90">Natural Mineral</span>
               </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;