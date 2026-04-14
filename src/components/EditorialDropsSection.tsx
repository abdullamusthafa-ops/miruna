import { Link } from "react-router-dom";
import editorialHero from "@/assets/editorial-hero.jpg";
import dropFluffStuff from "@/assets/drop-fluff-stuff.jpg";
import dropTooGoodToLose from "@/assets/drop-too-good-to-lose.jpg";
import dropIWokeUp from "@/assets/drop-i-woke-up-like-this.jpg";
import dropMyMomSaidNo from "@/assets/drop-my-mom-said-no.jpg";

const sheCategories = [
  {
    name: "FLUFF STUFF",
    tag: "Limited Edition",
    image: dropFluffStuff,
    link: "/collection/fluff-stuff",
  },
  {
    name: "TOO GOOD TO LOSE",
    image: dropTooGoodToLose,
    link: "/collection/too-good-to-lose",
  },
  {
    name: "I WOKE UP LIKE THIS",
    image: dropIWokeUp,
    link: "/collection/i-woke-up-like-this",
  },
  {
    name: "MY MOM SAID NO",
    image: dropMyMomSaidNo,
    link: "/collection/my-mom-said-no",
  },
];

const EditorialDropsSection = () => {
  return (
    <section>
      {/* Editorial Split: Left Image + Right Video — full screen */}
      <div className="h-screen px-0 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-1 h-full">
          <Link to="/collection/she" className="group relative block overflow-hidden">
            <div className="h-full overflow-hidden bg-muted">
              <img
                src={editorialHero}
                alt="SHE Collection"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/70 sm:text-[10px]">
                The Collection
              </p>
              <h3 className="mt-1 text-xl font-display tracking-wide text-white sm:text-2xl md:text-3xl">
                SHE
              </h3>
              <span className="mt-3 inline-block border border-white/80 px-4 py-1.5 text-[9px] font-medium uppercase tracking-[0.15em] text-white transition-colors group-hover:bg-white group-hover:text-foreground sm:mt-4 sm:px-5 sm:py-2 sm:text-[10px]">
                Explore
              </span>
            </div>
          </Link>

          <div className="relative h-full overflow-hidden bg-muted hidden md:block">
            <video
              src="/videos/editorial-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              preload="metadata"
            />
          </div>
        </div>
      </div>

      {/* Drop Names Strip — full screen */}
      <div className="h-screen px-0 md:px-4 mt-1">
        <div className="grid grid-cols-2 gap-1 md:grid-cols-4 h-full">
          {sheCategories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.link}
              className="group relative overflow-hidden"
            >
              <div className="h-full overflow-hidden bg-muted">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {cat.tag && (
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                  <span className="bg-background/90 px-2 py-0.5 text-[7px] font-medium uppercase tracking-wider text-foreground sm:text-[9px]">
                    {cat.tag}
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                <span className="text-[9px] font-medium tracking-[0.12em] uppercase text-white sm:text-[10px] md:text-xs leading-tight block">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialDropsSection;
