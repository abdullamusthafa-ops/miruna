import { Link } from "react-router-dom";

const ValentinesEditSection = () => {
  return (
    <section className="relative w-full">
      <Link to="/collection/valentines" className="block">
        <div className="relative w-full h-[280px] sm:h-[320px] md:h-[400px] lg:h-[450px] overflow-hidden">
          <img
            src="https://miruna.io/cdn/shop/files/notext_1.png?v=1769141932&width=1920"
            alt="The Valentines Edit"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-display tracking-wider text-white sm:text-2xl md:text-3xl lg:text-4xl">
                The Valentines Edit
              </h2>
              <span className="mt-2 inline-block border border-white bg-transparent px-4 py-1.5 text-[10px] font-medium tracking-[0.15em] uppercase text-white transition-colors hover:bg-white hover:text-foreground sm:mt-3 sm:px-6 sm:py-2 sm:text-xs">
                SHOP NOW
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default ValentinesEditSection;
