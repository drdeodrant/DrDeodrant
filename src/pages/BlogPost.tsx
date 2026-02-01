import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, User, Twitter, Facebook, Linkedin, Link as LinkIcon } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPostsData: Record<string, {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: {
    type: 'paragraph' | 'heading' | 'pullquote' | 'list';
    text: string;
    items?: string[];
  }[];
  tableOfContents: { id: string; title: string }[];
}> = {
  "why-your-pores-are-crying": {
    title: "WHY YOUR PORES ARE CRYING: THE ALUMINIUM TRUTH",
    category: "Science",
    author: "Dr. Sarah Chen",
    date: "January 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=1200&h=600&fit=crop",
    tableOfContents: [
      { id: "introduction", title: "The Hidden Problem" },
      { id: "science", title: "The Science Explained" },
      { id: "effects", title: "Long-term Effects" },
      { id: "solution", title: "A Better Way" },
    ],
    content: [
      {
        type: "paragraph",
        text: "Every morning, millions of people reach for their conventional deodorant without a second thought. But beneath the fresh scent and smooth application lies a concerning reality that the personal care industry has long tried to keep under wraps."
      },
      {
        type: "heading",
        text: "The Hidden Problem"
      },
      {
        type: "paragraph",
        text: "Aluminum compounds, found in most antiperspirants, work by forming temporary plugs within your sweat ducts. While this might seem like an effective solution to wetness, it's essentially forcing your body to fight against its natural cooling mechanism."
      },
      {
        type: "pullquote",
        text: "Your skin is your largest organ. What you put on it matters just as much as what you put in your body."
      },
      {
        type: "paragraph",
        text: "Research published in the Journal of Applied Toxicology has raised questions about the long-term accumulation of aluminum in breast tissue. While the definitive link to health issues is still being studied, the precautionary principle suggests we should be looking for alternatives."
      },
      {
        type: "heading",
        text: "The Science Explained"
      },
      {
        type: "paragraph",
        text: "When aluminum salts dissolve in sweat, they form a gel-like substance that physically blocks the sweat glands. This process prevents the release of sweat but doesn't stop the production—your body still creates the same amount of sweat, it just has nowhere to go."
      },
      {
        type: "list",
        text: "Key concerns with aluminum-based antiperspirants:",
        items: [
          "Disruption of natural thermoregulation",
          "Potential accumulation in body tissues",
          "Irritation and clogged pores",
          "Yellow staining on clothing"
        ]
      },
      {
        type: "heading",
        text: "Long-term Effects"
      },
      {
        type: "paragraph",
        text: "Beyond the immediate concerns, regular use of aluminum-based products has been associated with increased skin sensitivity, disruption of the skin's microbiome, and the development of resistant body odor that seems worse without the product."
      },
      {
        type: "pullquote",
        text: "The irony? The more you use conventional antiperspirants, the more dependent your body becomes on them."
      },
      {
        type: "paragraph",
        text: "This creates a vicious cycle where users feel they need stronger formulations over time, leading to increased exposure to potentially harmful compounds."
      },
      {
        type: "heading",
        text: "A Better Way"
      },
      {
        type: "paragraph",
        text: "Natural alternatives, like potassium alum (the mineral crystal used in Dr.Deodorant), work differently. Instead of blocking pores, they create an environment on the skin's surface that's inhospitable to odor-causing bacteria while allowing your body to sweat naturally."
      },
      {
        type: "paragraph",
        text: "This approach works with your body's natural processes rather than against them, providing effective odor protection without the potential downsides of aluminum chlorohydrate and other synthetic compounds."
      }
    ]
  },
  "sweat-is-sexy": {
    title: "SWEAT IS SEXY (BUT STINK ISN'T)",
    category: "Lifestyle",
    author: "Mike Torres",
    date: "January 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop",
    tableOfContents: [
      { id: "intro", title: "Embrace the Sweat" },
      { id: "science", title: "Why We Sweat" },
      { id: "odor", title: "The Stink Factor" },
      { id: "solution", title: "Stay Fresh, Stay You" },
    ],
    content: [
      {
        type: "paragraph",
        text: "Let's get one thing straight: sweating is not the enemy. In fact, it's one of the most sophisticated cooling systems in the animal kingdom, and humans are particularly good at it."
      },
      {
        type: "heading",
        text: "Embrace the Sweat"
      },
      {
        type: "paragraph",
        text: "From athletes to yoga enthusiasts, the glow of a good workout has never been something to hide. The problem isn't the sweat itself—it's what happens when bacteria on your skin start breaking it down."
      },
      {
        type: "pullquote",
        text: "Sweat is 99% water. It's odorless. The smell comes from bacteria—and that's what we should be targeting."
      },
      {
        type: "paragraph",
        text: "Understanding this distinction is key to making smarter choices about personal care. You don't need to stop sweating; you need to control the bacterial activity on your skin."
      }
    ]
  },
  "72-hour-test": {
    title: "THE 72-HOUR TEST: HOW WE SURVIVED A JUNGLE TREK",
    category: "Myth-Busting",
    author: "Adventure Team",
    date: "January 5, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&h=600&fit=crop",
    tableOfContents: [
      { id: "challenge", title: "The Challenge" },
      { id: "day1", title: "Day 1: Into the Green" },
      { id: "day2", title: "Day 2: Peak Humidity" },
      { id: "results", title: "The Results" },
    ],
    content: [
      {
        type: "paragraph",
        text: "When we claim that Dr.Deodorant provides all-day protection, we don't just mean a day at the office. We mean a REAL day—the kind that tests your limits and your deodorant's promises."
      },
      {
        type: "heading",
        text: "The Challenge"
      },
      {
        type: "paragraph",
        text: "We sent a team of five into the Amazon rainforest with nothing but basic supplies and a single Dr.Deodorant crystal each. The mission? Survive 72 hours in 95% humidity while staying fresh."
      },
      {
        type: "pullquote",
        text: "If it works in the Amazon, it'll work anywhere. That was our thesis—and we were about to put it to the ultimate test."
      },
      {
        type: "paragraph",
        text: "The conditions were brutal: temperatures hovering around 35°C, humidity that made breathing feel like swimming, and physical exertion that would make any gym session look like a warm-up."
      }
    ]
  }
};

// Default content for any slug not found
const defaultPost = {
  title: "ARTICLE COMING SOON",
  category: "Updates",
  author: "Dr.Deodorant Team",
  date: "January 2026",
  readTime: "3 min read",
  image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=600&fit=crop",
  tableOfContents: [
    { id: "intro", title: "Introduction" },
  ],
  content: [
    {
      type: "paragraph" as const,
      text: "This article is currently being written by our team. Check back soon for fresh insights, science-backed tips, and myth-busting content from the Dr.Deodorant lab."
    }
  ]
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug && blogPostsData[slug] ? blogPostsData[slug] : defaultPost;
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          {/* Duotone Overlay */}
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        {/* Title Overlapping */}
        <div className="absolute bottom-0 left-0 right-0 z-10 transform translate-y-1/3">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold uppercase mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-foreground max-w-4xl">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        {/* Bleeding Shape - Right */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute top-60 -right-20 w-[200px] h-[400px] md:w-[300px] md:h-[600px] bg-primary rounded-[3rem] z-0 opacity-20"
        />

        <div className="container-narrow relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sticky Sidebar - Desktop */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden lg:block lg:w-64 shrink-0"
            >
              <div className="sticky top-32">
                {/* Back Button */}
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 font-bold text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>

                {/* Author & Date */}
                <div className="mb-8 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {post.readTime}
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-muted-foreground">
                    Share
                  </h4>
                  <div className="flex gap-3">
                    {[
                      { icon: Twitter, href: `https://twitter.com/intent/tweet?url=${shareUrl}` },
                      { icon: Facebook, href: `https://facebook.com/sharer/sharer.php?u=${shareUrl}` },
                      { icon: Linkedin, href: `https://linkedin.com/sharing/share-offsite/?url=${shareUrl}` },
                      { icon: LinkIcon, href: "#" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Table of Contents */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-muted-foreground">
                    Contents
                  </h4>
                  <div className="relative pl-4 border-l-4 border-primary/30">
                    <div className="absolute left-0 top-0 w-1 bg-primary h-1/3 -ml-[2px]" />
                    <ul className="space-y-3">
                      {post.tableOfContents.map((item, index) => (
                        <li key={index}>
                          <a
                            href={`#${item.id}`}
                            className={`text-sm ${
                              index === 0
                                ? "font-bold text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                            } transition-colors`}
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 max-w-3xl"
            >
              {/* Mobile Back Button */}
              <Link
                to="/blog"
                className="lg:hidden inline-flex items-center gap-2 font-bold text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              {/* Mobile Meta */}
              <div className="lg:hidden mb-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span>{post.readTime}</span>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {post.content.map((block, index) => {
                  if (block.type === "paragraph") {
                    return (
                      <p
                        key={index}
                        className={`text-lg leading-relaxed mb-6 text-foreground/90 ${
                          index === 0 ? "first-letter:text-7xl first-letter:font-black first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:leading-[0.8]" : ""
                        }`}
                      >
                        {block.text}
                      </p>
                    );
                  }

                  if (block.type === "heading") {
                    return (
                      <h2
                        key={index}
                        id={post.tableOfContents[Math.floor(index / 2)]?.id}
                        className="text-3xl md:text-4xl font-black tracking-tight mt-12 mb-6 text-foreground"
                      >
                        {block.text}
                      </h2>
                    );
                  }

                  if (block.type === "pullquote") {
                    return (
                      <motion.blockquote
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative my-12 md:float-right md:w-2/5 md:ml-8 md:mb-4 p-6 bg-primary/5 border-l-4 border-primary"
                      >
                        <p className="text-2xl md:text-3xl font-black italic text-primary leading-tight">
                          "{block.text}"
                        </p>
                      </motion.blockquote>
                    );
                  }

                  if (block.type === "list") {
                    return (
                      <div key={index} className="my-8">
                        <p className="font-bold mb-4">{block.text}</p>
                        <ul className="space-y-2">
                          {block.items?.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-lg"
                            >
                              <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>

              {/* Related Articles CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 p-8 bg-foreground text-background rounded-[2rem] shadow-[8px_8px_0px_#0047FF]"
              >
                <h3 className="text-2xl md:text-3xl font-black mb-4">
                  WANT MORE <span className="text-primary">FRESH</span> READS?
                </h3>
                <p className="text-muted mb-6">
                  Explore more science-backed insights and lifestyle tips from the Dr.Deodorant lab.
                </p>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl border-2 border-primary hover:bg-background hover:text-foreground hover:border-background transition-all"
                >
                  EXPLORE ALL ARTICLES <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
