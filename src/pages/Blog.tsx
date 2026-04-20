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

      <main className="pt-24 md:pt-28">
        {/* Hero */}
        <section className="container mx-auto px-4 py-10 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            The Journal
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Notes on dressing with intention.
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-sm md:text-base text-muted-foreground">
            Slow reads on the dresses, moments and small decisions that make a wardrobe feel like yours.
          </p>
        </section>

        {/* Posts grid */}
        <section className="container mx-auto px-4 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/journal/${post.slug}`}
                className="group bg-background block"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
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
                  <h2 className="font-serif text-xl md:text-2xl leading-snug mb-2 group-hover:underline underline-offset-4 decoration-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.2em] border-b border-foreground pb-0.5">
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
