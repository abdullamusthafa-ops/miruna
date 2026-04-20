import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  useEffect(() => {
    document.title = "Journal | Miruna";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Style notes, edits and stories from Miruna — slow reads on dressing with intention.",
    );
    if (!meta.parentElement) document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 md:pt-32">
        {/* Hero */}
        <section className="container mx-auto px-4 py-10 md:py-16 text-center max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
            The Journal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
            Notes on dressing<br className="hidden sm:block" /> with intention.
          </h1>
          <div className="mx-auto mt-6 h-px w-12 bg-foreground/30" />
          <p className="mt-6 text-sm md:text-base text-muted-foreground italic max-w-xl mx-auto">
            Slow reads on the dresses, moments and small decisions that make a wardrobe feel like yours.
          </p>
        </section>

        {/* Posts grid */}
        <section className="container mx-auto px-4 pb-20 md:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/journal/${post.slug}`}
                className="group bg-background block"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                    {post.category} · {post.readTime}
                  </p>
                  <h2 className="font-serif text-xl md:text-2xl leading-snug mb-3 group-hover:underline underline-offset-4 decoration-1">
                    {post.title}
                  </h2>
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-block text-[11px] uppercase tracking-[0.25em] border-b border-foreground pb-1">
                    Read story
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Blog;
