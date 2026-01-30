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
              <h2 className="text-xl font-display tracking-wider text-white sm:text-2xl md:text-3xl lg:text-4xl">
                BEST SELLERS
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

export default BestSellersBanner;
