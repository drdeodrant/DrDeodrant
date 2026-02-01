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
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Bleeding Blue Shape - Right */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute -top-20 -right-32 w-[400px] h-[600px] md:w-[600px] md:h-[800px] bg-primary rounded-[3rem] z-0"
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
            className="text-4xl md:text-6xl font-black tracking-tighter mb-16"
          >
            LATEST <span className="text-primary">DROPS</span>
          </motion.h2>

          {/* Masonry-Style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <Link to={`/blog/${post.slug}`}>
                  <div
                    className={`bg-background border-4 border-foreground rounded-[2rem] overflow-hidden shadow-[8px_8px_0px_#000] group-hover:shadow-[12px_12px_0px_#0047FF] group-hover:-translate-y-2 transition-all duration-300 h-full flex flex-col`}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                          index === 0 ? "h-64 md:h-80" : "h-48"
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
                          index === 0 ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-foreground text-background rounded-[3rem] p-8 md:p-16 shadow-[12px_12px_0px_#0047FF]"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
                DON'T <span className="text-primary">SWEAT</span> IT.
                <br />
                JOIN THE LIST.
              </h2>
              <p className="text-lg md:text-xl text-muted mb-8">
                Get exclusive drops, science breakdowns, and fresh content delivered straight to your inbox.
              </p>

              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary text-primary-foreground p-6 rounded-2xl inline-block"
                >
                  <span className="text-xl font-bold">🎉 You're in! Welcome to the fresh side.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-6 py-4 text-lg bg-background text-foreground border-4 border-background rounded-xl focus:outline-none focus:border-primary transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-10 py-4 bg-primary text-primary-foreground font-black text-lg uppercase tracking-wide rounded-xl border-4 border-primary hover:bg-background hover:text-foreground hover:border-background transition-all duration-300 shadow-[4px_4px_0px_#fff] hover:shadow-[6px_6px_0px_#fff]"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
