import { Link } from "react-router-dom";

const BestSellersBanner = () => {
  return (
    <section className="relative w-full">
      <Link to="/products?filter=bestsellers" className="block active:opacity-90 transition-opacity">
        <div className="relative w-full overflow-hidden">
          <img
            src="https://miruna.io/cdn/shop/files/Best_Sellers_Banner_Desktop.webp?v=1769175064&width=800"
            alt="Best Sellers"
            className="w-full h-auto object-cover hidden sm:block"
            loading="lazy"
          />
          {/* Mobile: taller crop for better visibility */}
          <div className="sm:hidden aspect-[16/9] overflow-hidden">
            <img
              src="https://miruna.io/cdn/shop/files/Best_Sellers_Banner_Desktop.webp?v=1769175064&width=800"
              alt="Best Sellers"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-black/10 sm:bg-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/80 sm:text-xs mb-1.5 sm:mb-2">
                Worn, saved, and sold out — twice.
              </p>
              <h2 className="text-xl font-display font-bold tracking-wider text-white sm:text-2xl md:text-3xl lg:text-4xl">
                MOST LOVED PIECES
              </h2>
              <span className="mt-2.5 inline-block border border-white bg-white/10 backdrop-blur-sm px-5 py-2 text-[9px] font-medium tracking-[0.15em] uppercase text-white sm:mt-4 sm:text-xs sm:border-b sm:border-t-0 sm:border-l-0 sm:border-r-0 sm:bg-transparent sm:backdrop-blur-none sm:px-1 sm:py-0 sm:pb-1">
                SHOP BEST SELLERS
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default BestSellersBanner;
