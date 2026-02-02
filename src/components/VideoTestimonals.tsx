import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Instagram, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

// Placeholder data
const testimonials = [
  {
    id: 1,
    name: "Alex M.",
    handle: "@alexsweats",
    video: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
    poster: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=800&fit=crop",
    quote: "Literally survived my gym sesh.",
    time: "10:23 AM"
  },
  {
    id: 2,
    name: "Sarah J.",
    handle: "@sarahstyles",
    video: "https://assets.mixkit.co/videos/preview/mixkit-tree-branches-in-the-breeze-1188-large.mp4",
    poster: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=800&fit=crop",
    quote: "No stains on my black dress!",
    time: "02:15 PM"
  },
  {
    id: 3,
    name: "Mike T.",
    handle: "@mikehikes",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-changing-lights-1240-large.mp4",
    poster: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=800&fit=crop",
    quote: "72 hours is actually real.",
    time: "09:00 AM"
  },
  {
    id: 4,
    name: "Jessie",
    handle: "@jess_vibe",
    video: "https://assets.mixkit.co/videos/preview/mixkit-vertical-shot-of-a-woman-dancing-2423-large.mp4",
    poster: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=800&fit=crop",
    quote: "Smells like nothing. Love it.",
    time: "06:45 PM"
  },
  {
    id: 5,
    name: "Sam K.",
    handle: "@sam_skates",
    video: "https://assets.mixkit.co/videos/preview/mixkit-vertical-shot-of-a-woman-dancing-2423-large.mp4",
    poster: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=800&fit=crop",
    quote: "Best purchase of 2026.",
    time: "04:20 PM"
  },
  {
    id: 6,
    name: "Jordan P.",
    handle: "@jordan_runs",
    video: "https://assets.mixkit.co/videos/preview/mixkit-vertical-shot-of-a-woman-dancing-2423-large.mp4",
    poster: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=800&fit=crop",
    quote: "Actually works. Wow.",
    time: "08:10 AM"
  }
];

const VideoCard = ({ data, index }: { data: typeof testimonials[0]; index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      className="relative flex-shrink-0 w-[280px] md:w-[320px] aspect-[9/16] bg-black rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_#0047FF] overflow-hidden group cursor-pointer"
      whileHover={{ y: -12, boxShadow: "16px 16px 0px #0047FF" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={data.video}
        poster={data.poster}
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
        loop
        playsInline
      />

      <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
        <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
           <span className="text-[10px] font-mono font-bold text-white tracking-widest">
             {data.time}
           </span>
        </div>
        
        <div className="flex items-center gap-2 bg-red-600/90 px-3 py-1 rounded-full border border-red-400/50">
          <motion.div 
            animate={{ opacity: [1, 0.5, 1] }} 
            transition={{ duration: 1, repeat: Infinity }}
            className="w-2 h-2 bg-white rounded-full"
          />
          <span className="text-[10px] font-black text-white tracking-widest">REC</span>
        </div>
      </div>

      <AnimatePresence>
        {!isPlaying && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex items-center justify-center z-10 bg-black/20"
          >
            <div className="w-20 h-20 bg-white rounded-full border-4 border-black flex items-center justify-center shadow-[6px_6px_0px_#000] group-hover:rotate-12 transition-transform duration-300">
              <Play className="w-8 h-8 fill-black ml-1" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-8 left-6 right-6 z-20 pointer-events-none">
        <motion.div 
          initial={{ rotate: 0 }}
          whileInView={{ rotate: index % 2 === 0 ? -2 : 2 }}
          className="bg-white border-4 border-black p-5 rounded-[1.5rem] shadow-[6px_6px_0px_rgba(0,0,0,1)]"
        >
          <p className="font-black text-lg uppercase leading-[0.95] mb-2 text-black">
            "{data.quote}"
          </p>
          <div className="flex justify-between items-center border-t-2 border-zinc-100 pt-2 mt-2">
            <div className="flex items-center gap-1">
              <Instagram className="w-3 h-3 text-zinc-400" />
              <span className="text-xs font-bold text-zinc-500">{data.handle}</span>
            </div>
            <span className="text-[10px] bg-[#0047FF] text-white px-2 py-0.5 rounded-sm font-black uppercase tracking-wider">
              Verified
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const VideoTestimonials = () => {
  // 1. Create a ref for the scroll container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 2. Define the scroll function
  const scroll = (direction: 'left' | 'right') => {

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      
      const card = container.firstElementChild as HTMLElement;
      const cardWidth = card ? card.offsetWidth : 300;
      const gap = 32; // gap-8 = 2rem = 32px
      const scrollAmount = cardWidth + gap;

      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative py-24 md:py-40 bg-white overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container-narrow mb-16 relative z-10 flex flex-col md:flex-row items-end justify-between gap-8">
        <div>
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-[#0047FF] rounded-[2rem] -rotate-2 -z-10 shadow-[8px_8px_0px_#000]" />
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white mix-blend-normal">
              VIBE <br className="md:hidden" /> CHECK.
            </h2>
          </div>
          <p className="text-xl md:text-2xl font-bold mt-8 max-w-md leading-tight">
            Real sweat. Real tests. <br/>
            <span className="bg-black text-white px-2">Zero filter.</span>
          </p>
        </div>
        
        {/* 3. Functional Navigation Buttons */}
        <div className="hidden md:flex gap-4 pb-2">
          <button 
            onClick={() => scroll('left')}
            className="w-14 h-14 rounded-full border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-95 shadow-[4px_4px_0px_#000] active:shadow-none"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-14 h-14 rounded-full border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-95 shadow-[4px_4px_0px_#000] active:shadow-none"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full">
        {/* 4. Attach ref to the container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-20 px-6 pt-12 md:px-20 gap-8 snap-x snap-mandatory scrollbar-hide"
        >
          {testimonials.map((t, i) => (
            <div key={t.id} className="snap-center">
              <VideoCard data={t} index={i} />
            </div>
          ))}
          
          <div className="snap-center flex-shrink-0 w-[280px] md:w-[320px] aspect-[9/16] bg-[#0047FF] rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_#000] flex flex-col items-center justify-center p-8 text-center text-white relative overflow-hidden group cursor-pointer hover:-translate-y-3 transition-transform">
            <div className="absolute inset-4 border-4 border-dashed border-white/30 rounded-[2rem]" />
            <div className="relative z-10">
                <div className="w-20 h-20 bg-white text-[#0047FF] rounded-full flex items-center justify-center font-black text-4xl mb-6 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform">
                    +
                </div>
                <h3 className="text-5xl font-black mb-2 leading-none tracking-tighter">YOU<br/>NEXT?</h3>
                <p className="font-bold text-white/80 mb-8 text-sm uppercase tracking-widest">
                    Feature on our feed
                </p>
                <button className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-y-1 transition-all">
                    Upload
                </button>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none md:w-40 z-20" />
      </div>
    </section>
  );
};

export default VideoTestimonials;