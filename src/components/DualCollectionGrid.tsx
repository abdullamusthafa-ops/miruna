import { Link } from "react-router-dom";
import dressesImg from "@/assets/dresses-collection.jpg";
import occasionImg from "@/assets/occasion-collection.jpeg";

const DualCollectionGrid = () => {
  return (
    <section className="h-[100dvh]">
      <div className="h-full px-0">
        <div className="grid grid-cols-2 gap-0 h-full">
          <Link to="/collection/dresses" className="group relative overflow-hidden">
            <div className="h-full overflow-hidden">
              <img
                src={dressesImg}
                alt="Dresses"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 flex flex-col items-center text-center">
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-white md:text-sm">
                Dresses
              </h3>
              <p className="mt-1 text-[9px] tracking-wide text-white/70 md:text-[11px] hidden sm:block">
                Find your perfect fit
              </p>
              <span className="mt-2 inline-block border-b border-white/60 pb-0.5 text-[8px] font-medium uppercase tracking-[0.15em] text-white/80 transition-colors group-hover:border-white group-hover:text-white md:mt-3 md:text-[10px]">
                Shop Now
              </span>
            </div>
          </Link>
          <Link to="/collection/occasion" className="group relative overflow-hidden">
            <div className="h-full overflow-hidden">
              <img
                src={occasionImg}
                alt="Occasion"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 flex flex-col items-center text-center">
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-white md:text-sm">
                Occasion
              </h3>
              <p className="mt-1 text-[9px] tracking-wide text-white/70 md:text-[11px] hidden sm:block">
                For every moment
              </p>
              <span className="mt-2 inline-block border-b border-white/60 pb-0.5 text-[8px] font-medium uppercase tracking-[0.15em] text-white/80 transition-colors group-hover:border-white group-hover:text-white md:mt-3 md:text-[10px]">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DualCollectionGrid;
