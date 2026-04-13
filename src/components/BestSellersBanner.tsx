import { Link } from "react-router-dom";

const BestSellersBanner = () => {
  return (
    <section className="relative w-full">
      <Link to="/products?filter=bestsellers" className="block">
        <div className="relative w-full overflow-hidden">
          <img
            src="https://miruna.io/cdn/shop/files/Best_Sellers_Banner_Desktop.webp?v=1769175064&width=3200"
            alt="Best Sellers"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:text-xs mb-2">
                BACK TO STOCK
              </p>
              <h2 className="text-xl font-display font-bold tracking-wider text-white sm:text-2xl md:text-3xl lg:text-4xl">
                BEST SELLER
              </h2>
              <span className="mt-3 inline-block border-b border-white bg-transparent px-1 pb-1 text-[10px] font-medium tracking-[0.15em] uppercase text-white transition-colors hover:text-white/70 sm:mt-4 sm:text-xs">
                SHOP NOW
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default BestSellersBanner;
