import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    slug: "why-your-pores-are-crying",
    title: "WHY YOUR PORES ARE CRYING: THE ALUMINIUM TRUTH",
    excerpt: "Discover the hidden damage conventional deodorants cause and why your skin deserves better.",
    category: "Science",
    author: "Dr. Sarah Chen",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    slug: "sweat-is-sexy",
    title: "SWEAT IS SEXY (BUT STINK ISN'T)",
    excerpt: "The science behind body odor and why sweating is actually good for you.",
    category: "Lifestyle",
    author: "Mike Torres",
    date: "Jan 10, 2026",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    slug: "72-hour-test",
    title: "THE 72-HOUR TEST: HOW WE SURVIVED A JUNGLE TREK",
    excerpt: "Our team put Dr.Deodorant to the ultimate test in the Amazon rainforest.",
    category: "Myth-Busting",
    author: "Adventure Team",
    date: "Jan 5, 2026",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    slug: "natural-ingredients-guide",
    title: "THE COMPLETE GUIDE TO NATURAL DEODORANT INGREDIENTS",
    excerpt: "What goes into a truly clean formula? We break down every ingredient.",
    category: "Science",
    author: "Dr. Sarah Chen",
    date: "Dec 28, 2025",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    slug: "morning-routine-fresh",
    title: "5 MORNING HABITS THAT KEEP YOU FRESH ALL DAY",
    excerpt: "Beyond deodorant: lifestyle changes that transform your natural scent.",
    category: "Lifestyle",
    author: "Emma Wright",
    date: "Dec 20, 2025",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    slug: "deodorant-myths-debunked",
    title: "10 DEODORANT MYTHS WE'RE FINALLY DEBUNKING",
    excerpt: "From 'sweating detoxes you' to 'natural doesn't work' – let's set the record straight.",
    category: "Myth-Busting",
    author: "Research Team",
    date: "Dec 15, 2025",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
    featured: false,
  },
];

const featuredPost = blogPosts.find((post) => post.featured);
const regularPosts = blogPosts.filter((post) => !post.featured);

const Blog = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden ">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Bleeding Blue Shape - Right */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute -top-20 -right-32 w-[400px] h-[600px] md:w-[600px] md:h-[800px] bg-primary rounded-[3rem] z-0 border-b-4 border-l-4 border-black"
        />

        <div className="container-narrow relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-8">
            {/* Left - Massive Typography */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1"
            >
              <div className="space-y-0">
                <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-[0.8] text-foreground">
                  THE
                </h1>
                <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-[0.8] text-primary">
                  FRESH
                </h1>
                <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-[0.8] text-foreground">
                  EDIT
                </h1>
              </div>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-md">
                Science-backed insights, lifestyle tips, and myth-busting stories from the Dr.Deodorant lab.
              </p>
            </motion.div>

            {/* Right - Featured Article */}
            {featuredPost && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex-1 lg:max-w-lg relative z-20"
              >
                <div className="bg-background border-4 border-foreground rounded-[2rem] overflow-hidden shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#000] hover:-translate-y-2 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-48 md:h-56 object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase">
                      Featured
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                      {featuredPost.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight mb-3">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {featuredPost.excerpt}
                    </p>
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all"
                    >
                      READ MORE <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="relative py-20 md:py-32">
        {/* Bleeding Black Shape - Left */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute top-40 -left-32 w-[300px] h-[400px] md:w-[400px] md:h-[500px] bg-foreground rounded-[3rem] z-0"
        />

        <div className="container-narrow relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl tracking-tighter mb-16 text-primary"
          >
            LATEST <span className="text-black">DROPS</span>
          </motion.h2>

          {/* Masonry-Style Grid - FIXED */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // FIX: Changed to 'md:col-span-2'. Removed 'row-span-2' to fix the empty gap.
                className={`group ${index === 0 ? "md:col-span-2" : "col-span-1"}`}
              >
                <Link to={`/blog/${post.slug}`}>
                  <div
                    className={`bg-background border-4 border-foreground rounded-[2rem] overflow-hidden shadow-[8px_8px_0px_#000] group-hover:shadow-[12px_12px_0px_#0047FF] group-hover:-translate-y-2 transition-all duration-300 h-full flex flex-col`}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        // STYLE UPDATE: Made the main image taller (h-96) for a cinematic look
                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                          index === 0 ? "h-64 md:h-96" : "h-64"
                        }`}
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block w-fit bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                        {post.category}
                      </span>
                      <h3
                        className={`font-black tracking-tight leading-tight mb-3 ${
                          index === 0 ? "text-2xl md:text-4xl" : "text-lg md:text-xl"
                        }`}
                      >
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Bleeding Blue Shape - Right */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -bottom-20 -right-20 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-primary rounded-[3rem] z-0"
        />

        <div className="container-narrow relative z-10">
          <div className="relative max-w-5xl mx-auto group">
            
            {/* LAYER 1 (The Base): Cobalt Blue - The Hard Shadow */}
            <div className="absolute inset-0 bg-[#0047FF] rounded-[3rem] border-4 border-black translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6" />

            {/* LAYER 2 (The Shell): Black - Main Container */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-black text-white rounded-[3rem] border-4 border-black overflow-hidden flex flex-col md:flex-row"
            >
              
              {/* LEFT SIDE: The Hook */}
              <div className="flex-1 p-10 md:p-16 relative z-10 flex flex-col justify-center">
                {/* Decorative Grid Pattern behind text */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" 
                     style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
                />
                
                <div className="relative">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-md mb-6">
                      <div className="w-2 h-2 rounded-full bg-[#0047FF] animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-widest text-white">Newsletter</span>
                   </div>
                   
                   <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
                    DON'T SWEAT<br/>
                    THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0047FF] to-white">SMALL STUFF.</span>
                  </h2>
                  <p className="text-lg text-zinc-400 font-medium max-w-md">
                    Get the science of freshness delivered. No spam, just pure deodorant data.
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE (The Core): White - The Input Zone */}
              <div className="w-full md:w-[450px] bg-white p-10 md:p-12 flex flex-col justify-center border-t-4 md:border-t-0 md:border-l-4 border-black relative">
                 {/* Decorative "Notch" or Label */}
                 <div className="absolute top-0 right-0 bg-black text-white px-4 py-2 rounded-bl-2xl font-black text-xs uppercase tracking-widest border-b-4 border-l-4 border-black">
                    Join the Club
                 </div>

                 {subscribed ? (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-[#0047FF] text-white p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_#000] text-center"
                    >
                      <span className="text-4xl block mb-2">🎉</span>
                      <h3 className="text-2xl font-black uppercase">You're In!</h3>
                      <p className="font-bold opacity-80">Stay fresh.</p>
                    </motion.div>
                 ) : (
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                      <div className="space-y-2">
                        <label className="text-black font-black text-sm uppercase tracking-wider ml-1">Your Email</label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-6 py-5 text-lg bg-zinc-100 text-black font-bold placeholder:text-zinc-400 rounded-2xl border-4 border-transparent focus:bg-white focus:border-[#0047FF] focus:outline-none transition-all shadow-inner"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full py-5 bg-black text-white font-black text-xl uppercase tracking-wider rounded-2xl border-4 border-black hover:bg-[#0047FF] hover:border-[#0047FF] transition-all duration-300 shadow-[8px_8px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-y-1 group"
                      >
                        Subscribe
                      </button>
                      
                      <p className="text-xs text-zinc-400 text-center font-medium mt-2">
                        Unsubscribe at any time. Stay cool.
                      </p>
                    </form>
                 )}
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
