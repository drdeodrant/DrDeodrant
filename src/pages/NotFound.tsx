import React from 'react';
import { motion } from 'framer-motion';
import { Home, MoveLeft, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen relative bg-zinc-50 overflow-hidden flex flex-col justify-center items-center">
      
      {/* --- BACKGROUND SHAPES (Bleeding Edges) --- */}
      
      {/* 1. Massive Cobalt Blue Shape (Top Right) */}
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="absolute top-0 right-0 w-[80%] md:w-[50%] h-[60%] bg-[#0047FF] rounded-bl-[120px] z-0"
      />

      {/* 2. Heavy Black Anchor Shape (Bottom Left) */}
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
        className="absolute bottom-0 left-0 w-[70%] md:w-[40%] h-[40%] bg-black rounded-tr-[100px] z-0"
      />

      {/* 3. Floating Geometric Accent (Decorative) */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[10%] w-24 h-24 border-[8px] border-black bg-transparent rounded-full z-10 hidden md:block"
      />

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center md:items-start">
        
        {/* THE GLITCHY 404 HEADER */}
        <div className="relative">
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
            className="text-[12rem] md:text-[18rem] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-black to-zinc-800 drop-shadow-xl select-none"
            style={{ WebkitTextStroke: "4px black" }}
          >
            4
            <span className="text-[#0047FF] drop-shadow-none" style={{ WebkitTextStroke: "0px" }}>0</span>
            4
          </motion.h1>
          
          {/* Overlapping "Sticker" Text */}
          <motion.div 
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: -6, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-black px-6 py-2 shadow-[8px_8px_0px_rgba(0,0,0,1)]"
          >
            <span className="text-2xl md:text-4xl font-black italic text-black whitespace-nowrap">
              OFF GRID
            </span>
          </motion.div>
        </div>

        {/* TEXT CONTENT & ACTIONS */}
        <div className="mt-8 md:mt-0 md:ml-12 max-w-2xl">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-black text-black uppercase leading-tight mb-6"
          >
            Looking for <br />
            <span className="text-white bg-black px-2 box-decoration-clone">Freshness?</span>
          </motion.h2>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl font-bold text-zinc-700 bg-white/80 backdrop-blur-sm p-4 border-l-8 border-[#0047FF] mb-10 max-w-lg"
          >
            You've wandered into the void. This page has evaporated (unlike our scents). Let's get you back to the good stuff.
          </motion.p>

          {/* BUTTON GROUP */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 w-full md:w-auto"
          >
            {/* BUTTON 1: Primary "Go Home" - Funky Style */}
            <a href="/" className="group relative">
              <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              <button className="relative bg-[#0047FF] text-white border-4 border-black px-8 py-4 text-xl font-black tracking-tight uppercase flex items-center gap-3 transition-transform active:translate-x-2 active:translate-y-2">
                <Home className="w-6 h-6 stroke-[3]" />
                Back to Base
              </button>
            </a>

            {/* BUTTON 2: "Help" - White/Black High Contrast */}
            <a href="/contact" className="group relative">
               <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
               <button className="relative bg-white text-black border-4 border-black px-8 py-4 text-xl font-black tracking-tight uppercase flex items-center gap-3 transition-transform active:translate-x-2 active:translate-y-2">
                <MoveLeft className="w-6 h-6 stroke-[3]" />
                 Start Over
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;