import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPost } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | Miruna Journal`;
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute("content", post.excerpt);
    if (!meta.parentElement) document.head.appendChild(meta);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [post]);

  if (!post) return <Navigate to="/journal" replace />;

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="pt-20 md:pt-24">
        {/* Cover */}
        <header className="relative">
          <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
            <img
              src={post.cover}
              alt={post.title}
              className="absolute inset-0 h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 text-white">
              <div className="container mx-auto px-0 md:px-4">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-3 opacity-80">
                  {post.category} · {post.date} · {post.readTime}
                </p>
                <h1 className="font-serif text-3xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl">
                  {post.title}
                </h1>
                <p className="mt-4 max-w-xl text-sm md:text-base opacity-90">
                  {post.subtitle}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Intro */}
        <section className="container mx-auto px-4 py-12 md:py-20 max-w-2xl">
          {post.intro.map((p, i) => (
            <p
              key={i}
              className={`text-base md:text-lg leading-relaxed text-foreground/90 mb-5 ${
                i === 0 ? "first-letter:font-serif first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:leading-none" : ""
              }`}
            >
              {p}
            </p>
          ))}
        </section>

        {/* Sections */}
        {post.sections.map((section, idx) => (
          <section key={idx} className="border-t border-border">
            <div className="container mx-auto px-4 py-12 md:py-20">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {section.image && (
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={section.image}
                      alt={section.imageAlt ?? section.heading}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="max-w-xl">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                    Chapter {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-serif text-2xl md:text-4xl leading-tight mb-6">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-foreground/85 mb-4"
                    >
                      {p}
                    </p>
                  ))}
                  {section.caption && (
                    <p className="mt-6 italic text-sm text-muted-foreground border-l border-foreground/30 pl-4">
                      {section.caption}
                    </p>
                  )}
                  {section.productLink && (
                    <Link
                      to={section.productLink}
                      className="mt-6 inline-block text-[11px] uppercase tracking-[0.25em] border-b border-foreground pb-0.5 hover:opacity-70 transition-opacity"
                    >
                      Shop the look
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Outro */}
        <section className="border-t border-border bg-secondary/20">
          <div className="container mx-auto px-4 py-16 md:py-24 max-w-2xl text-center">
            {post.outro.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed text-foreground/90 mb-5"
              >
                {p}
              </p>
            ))}
            <div className="mt-10 md:mt-14">
              <p className="font-serif text-xl md:text-3xl leading-snug italic">
                "{post.signoff}"
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                — Miruna
              </p>
            </div>
            <div className="mt-10">
              <Link to="/products">
                <Button variant="default" size="lg">
                  <span>Shop the dresses</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* More stories */}
        {otherPosts.length > 0 && (
          <section className="border-t border-border">
            <div className="container mx-auto px-4 py-16 md:py-20">
              <h3 className="text-center font-serif text-2xl md:text-3xl mb-10">
                Continue reading
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-4xl mx-auto">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/journal/${p.slug}`}
                    className="group bg-background"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={p.cover}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-serif text-lg md:text-xl group-hover:underline underline-offset-4 decoration-1">
                        {p.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link
                  to="/journal"
                  className="text-[11px] uppercase tracking-[0.25em] border-b border-foreground pb-0.5"
                >
                  All stories
                </Link>
              </div>
            </div>
          </section>
        )}
      </article>

      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default BlogPost;
