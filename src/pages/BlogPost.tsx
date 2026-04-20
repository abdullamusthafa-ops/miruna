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

      <article className="pt-24 md:pt-32">
        {/* Editorial header — text first, no overlay */}
        <header className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-16">
            <Link
              to="/journal"
              className="inline-block text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              ← The Journal
            </Link>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
              {post.category} · {post.date} · {post.readTime}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
              {post.title}
            </h1>
            <div className="mx-auto mt-6 h-px w-12 bg-foreground/30" />
            <p className="mt-6 text-sm md:text-base text-muted-foreground italic max-w-xl mx-auto">
              {post.subtitle}
            </p>
          </div>

          {/* Cover image — controlled aspect, no overlay */}
          <div className="relative w-full overflow-hidden bg-muted aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] max-h-[80vh]">
            <img
              src={post.cover}
              alt={post.title}
              className="absolute inset-0 h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
        </header>

        {/* Intro */}
        <section className="container mx-auto px-4 py-14 md:py-20">
          <div className="max-w-2xl mx-auto">
            {post.intro.map((p, i) => (
              <p
                key={i}
                className={`font-sans text-[15px] md:text-[17px] leading-[1.8] text-foreground/85 mb-5 ${
                  i === 0
                    ? "first-letter:font-serif first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none"
                    : ""
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Sections — alternating editorial layout */}
        {post.sections.map((section, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section
              key={idx}
              className={`${isEven ? "bg-background" : "bg-secondary/40"}`}
            >
              <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                  {/* Image */}
                  <div
                    className={`md:col-span-6 ${
                      isEven ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    {section.image && (
                      <figure className="relative">
                        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                          <img
                            src={section.image}
                            alt={section.imageAlt ?? section.heading}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        </div>
                        {section.caption && (
                          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground text-center">
                            {section.caption}
                          </figcaption>
                        )}
                      </figure>
                    )}
                  </div>

                  {/* Text */}
                  <div
                    className={`md:col-span-6 ${
                      isEven ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="max-w-md md:max-w-lg">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                        Chapter {String(idx + 1).padStart(2, "0")}
                      </p>
                      <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.15] tracking-tight mb-6">
                        {section.heading}
                      </h2>
                      <div className="h-px w-10 bg-foreground/30 mb-6" />
                      {section.paragraphs.map((p, i) => (
                        <p
                          key={i}
                          className="font-sans text-[15px] leading-[1.8] text-foreground/80 mb-4"
                        >
                          {p}
                        </p>
                      ))}
                      {section.productLink && (
                        <Link
                          to={section.productLink}
                          className="mt-6 inline-block text-[11px] font-medium uppercase tracking-[0.25em] border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
                        >
                          Shop the look
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Outro */}
        <section className="border-t border-border bg-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                In closing
              </p>
              {post.outro.map((p, i) => (
                <p
                  key={i}
                  className="font-sans text-[15px] md:text-[17px] leading-[1.8] text-foreground/85 mb-5"
                >
                  {p}
                </p>
              ))}
              <div className="my-10 md:my-14 flex items-center justify-center">
                <div className="h-px w-8 bg-foreground/30" />
                <span className="mx-4 text-foreground/40 text-xs">✦</span>
                <div className="h-px w-8 bg-foreground/30" />
              </div>
              <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl leading-[1.3] italic text-foreground/90">
                "{post.signoff}"
              </blockquote>
              <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                — Miruna
              </p>
              <div className="mt-12">
                <Link to="/products">
                  <Button variant="default" size="lg">
                    <span>Shop the dresses</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* More stories */}
        {otherPosts.length > 0 && (
          <section className="border-t border-border bg-secondary/40">
            <div className="container mx-auto px-4 py-16 md:py-20">
              <div className="text-center mb-10 md:mb-12">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                  Continue reading
                </p>
                <h3 className="font-serif text-2xl md:text-3xl">More from the Journal</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-4xl mx-auto">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/journal/${p.slug}`}
                    className="group bg-background"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={p.cover}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 md:p-6">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                        {p.category}
                      </p>
                      <h4 className="font-serif text-lg md:text-xl leading-snug group-hover:underline underline-offset-4 decoration-1">
                        {p.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link
                  to="/journal"
                  className="text-[11px] uppercase tracking-[0.25em] border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
                >
                  View all stories
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
