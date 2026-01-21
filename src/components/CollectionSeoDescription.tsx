import { useState } from "react";

interface CollectionSeoDescriptionProps {
  slug: string;
}

interface SeoContent {
  intro: string;
  highlighted: string;
  expanded: string;
}

const seoDescriptions: Record<string, SeoContent> = {
  // Clothing
  "co-ords": {
    intro: "Discover our curated collection of co-ord sets, designed for the modern woman who values effortless coordination and timeless style.",
    highlighted: "Each set is crafted with premium fabrics and meticulous attention to detail, ensuring you look polished from day to night.",
    expanded: "From relaxed weekend ensembles to sophisticated office-ready combinations, our co-ords eliminate the guesswork from getting dressed. Whether you prefer structured tailoring or flowing silhouettes, find perfectly matched pieces that transition seamlessly between occasions. Shop blazer sets, knit co-ords, and statement two-pieces designed to elevate your wardrobe with versatile, mix-and-match styling possibilities."
  },
  "blazers": {
    intro: "Explore our collection of designer blazers that blend structured sophistication with contemporary femininity for every occasion.",
    highlighted: "Our blazers are tailored to perfection, offering a flattering silhouette that empowers and elevates your personal style.",
    expanded: "From classic single-breasted designs to modern oversized cuts, each blazer in our collection represents the pinnacle of craftsmanship. Discover rich textures, luxurious fabrics, and impeccable tailoring that transitions effortlessly from boardroom presentations to evening cocktails. Whether you prefer timeless black or statement colours, our blazers are designed to become the cornerstone of your wardrobe."
  },
  "tops-bodysuits": {
    intro: "Shop our selection of designer tops and bodysuits that serve as the foundation of every unforgettable outfit.",
    highlighted: "From sleek bodysuits to statement blouses, each piece is designed to flatter and inspire confidence.",
    expanded: "Our collection features everything from minimalist essentials to bold conversation starters. Discover corset-style bodysuits, flowing chiffon blouses, and structured crop tops crafted from premium materials. Each design prioritizes both comfort and style, ensuring you feel as good as you look. Perfect for layering under blazers, pairing with high-waisted skirts, or making a statement on their own."
  },
  "bottoms-skirts": {
    intro: "Discover our range of designer skirts and bottoms that complete every look with sophistication and flair.",
    highlighted: "From mini to maxi lengths, our skirts are designed to accentuate your silhouette with premium craftsmanship.",
    expanded: "Explore tailored trousers, flowing midi skirts, and daring mini styles that embody modern femininity. Our collection features high-quality fabrics including silk, crepe, and structured cotton blends. Whether you're dressing for a corporate setting or a weekend brunch, find the perfect piece to anchor your outfit. Each design balances comfort with elegance for versatile, all-day wear."
  },
  "jumpsuits": {
    intro: "Shop our collection of designer jumpsuits offering one-and-done elegance for the woman who demands effortless sophistication.",
    highlighted: "Our jumpsuits combine the ease of a single piece with the impact of a complete ensemble, perfect for any occasion.",
    expanded: "From wide-leg evening styles to tailored workwear options, each jumpsuit is crafted with attention to fit and movement. Discover strapless designs, belted silhouettes, and modern cuts in premium fabrics. Our jumpsuits eliminate outfit planning while maximizing style impact. Whether attending a wedding, dinner party, or important meeting, step out with confidence in pieces designed to impress."
  },
  "corsets": {
    intro: "Explore our collection of designer corsets that blend vintage glamour with modern sensibility for statement-making style.",
    highlighted: "Each corset is engineered to sculpt and flatter, creating a timeless silhouette that celebrates feminine curves.",
    expanded: "From classic boned structures to modern bustier styles, our corsets offer both form and function. Discover satin finishes, lace details, and structured designs that pair beautifully with high-waisted bottoms, under blazers, or as standalone statement pieces. Crafted with premium materials and meticulous boning, each piece provides comfortable support while elevating any outfit to runway-worthy status."
  },
  // Dresses by Length
  "mini": {
    intro: "Shop our stunning collection of mini dresses designed to make a bold statement and showcase your confident style.",
    highlighted: "From cocktail hours to dance floors, our mini dresses are crafted to turn heads and capture attention.",
    expanded: "Explore fitted bodycon silhouettes, flirty A-lines, and structured designs in premium fabrics. Each mini dress features thoughtful details from draped necklines to statement sleeves, ensuring you stand out at every event. Perfect for parties, date nights, and celebrations, our collection offers versatile options that pair beautifully with heels and statement accessories. Discover your signature look today."
  },
  "midi": {
    intro: "Discover our collection of elegant midi dresses offering the perfect balance between sophistication and modern femininity.",
    highlighted: "Our midi dresses are designed for versatility, transitioning seamlessly from professional settings to evening occasions.",
    expanded: "From wrap styles to fitted silhouettes, each midi dress showcases expert tailoring and premium materials. Explore flowing crepe designs, structured satin pieces, and romantic floral prints that flatter every figure. The universally flattering mid-length provides elegant coverage while maintaining contemporary appeal. Perfect for weddings, office wear, and upscale dining, our midis become wardrobe staples you'll reach for again and again."
  },
  "maxi": {
    intro: "Browse our collection of floor-length maxi dresses that embody timeless glamour and effortless sophistication.",
    highlighted: "Each maxi dress is designed to create a dramatic silhouette, perfect for making an unforgettable entrance.",
    expanded: "From flowing chiffon gowns to structured column designs, our maxi collection offers options for every special occasion. Discover elegant cuts, premium fabrics, and thoughtful details including thigh-high slits, open backs, and statement trains. Whether attending a formal gala, beach wedding, or romantic dinner, our maxi dresses provide the perfect blend of comfort and high-impact style."
  },
  // Dresses by Occasion
  "party": {
    intro: "Shop our collection of party dresses designed to make every celebration unforgettable with show-stopping style.",
    highlighted: "From sequined minis to sophisticated cocktail lengths, our party dresses ensure you're always the best dressed.",
    expanded: "Discover bold colours, statement textures, and eye-catching details perfect for birthdays, holidays, and nights out. Our collection features bodycon fits, flowing silhouettes, and daring cuts in premium fabrics designed for movement and comfort. Each dress balances glamour with wearability, ensuring you can dance the night away in style. Pair with strappy heels and statement jewellery for maximum impact."
  },
  "brunch": {
    intro: "Explore our collection of brunch dresses offering effortless elegance for your favourite daytime occasions.",
    highlighted: "Our brunch dresses combine comfort with polished style, perfect for leisurely weekend gatherings and celebrations.",
    expanded: "From floral midis to structured minis, each design features breathable fabrics and flattering silhouettes ideal for warm afternoons. Discover wrap styles, puff sleeves, and feminine details that photograph beautifully. Our brunch collection balances casual comfort with refined aesthetics, transitioning easily from morning mimosas to afternoon shopping. Perfect with sandals for relaxed settings or heels for elevated occasions."
  },
  "bridal": {
    intro: "Discover our bridal collection featuring romantic pieces for every moment of your wedding journey.",
    highlighted: "From engagement parties to honeymoon getaways, our bridal pieces celebrate love with timeless elegance.",
    expanded: "Explore white and ivory designs perfect for rehearsal dinners, bridal showers, and reception outfit changes. Our collection features delicate lace, flowing silks, and sophisticated silhouettes that complement your special celebrations. Each piece is crafted with the discerning bride in mind, offering premium quality and romantic details. Create lasting memories in dresses designed for your most treasured moments."
  },
  "birthday": {
    intro: "Shop our birthday dress collection designed to make your special day as memorable and stylish as you deserve.",
    highlighted: "Celebrate another year in show-stopping style with dresses crafted for unforgettable birthday moments.",
    expanded: "From glamorous sequined minis to elegant sophisticated lengths, find the perfect dress to mark your milestone. Our birthday collection features bold colours, statement details, and flattering silhouettes that photograph beautifully. Whether hosting an intimate dinner or dancing at a club, these dresses ensure all eyes are on you. Pair with statement accessories and your favourite heels for birthday perfection."
  },
  "prom": {
    intro: "Explore our prom dress collection featuring stunning designs that make high school's biggest night truly magical.",
    highlighted: "Our prom dresses are crafted to create picture-perfect moments you'll treasure forever.",
    expanded: "From classic ball gowns to modern sleek designs, discover dresses that match your personal style and create unforgettable memories. Our collection features premium fabrics, intricate detailing, and flattering cuts in a rainbow of colours. Whether you prefer romantic florals, bold solids, or shimmering metallics, find a dress that makes you feel confident and beautiful. Perfect for this milestone celebration."
  },
  // Dresses by Style
  "evening": {
    intro: "Browse our collection of evening dresses designed for sophisticated glamour at formal after-dark occasions.",
    highlighted: "Each evening dress is crafted to command attention with refined elegance and impeccable tailoring.",
    expanded: "From elegant floor-length gowns to sophisticated midi designs, our evening collection offers options for galas, dinners, and special events. Discover rich fabrics, dramatic silhouettes, and luxurious details that embody timeless sophistication. Each dress balances statement-making impact with graceful movement. Pair with delicate jewellery and evening clutches for a complete look that exudes confidence and style."
  },
  "formal": {
    intro: "Shop our formal dress collection featuring elegant designs perfect for sophisticated occasions and upscale events.",
    highlighted: "Our formal dresses combine classic elegance with contemporary design for refined occasions.",
    expanded: "From corporate galas to wedding guest attire, discover pieces that meet dress codes while expressing personal style. Our collection features structured silhouettes, premium fabrics, and thoughtful details that elevate any formal setting. Explore column dresses, A-line designs, and fitted styles in timeless colours and modern hues. Each dress is designed to make you feel polished, confident, and appropriately elegant."
  },
  "night-out": {
    intro: "Discover our night out dress collection designed for unforgettable evenings and spontaneous adventures.",
    highlighted: "From club-ready minis to dinner-date elegance, our night out dresses ensure you always steal the spotlight.",
    expanded: "Explore daring cuts, bold details, and statement silhouettes perfect for bars, clubs, and late-night dining. Our collection features body-hugging fits, strategic cutouts, and eye-catching textures that move with you. Each design balances edge with sophistication, ensuring you look incredible under any lighting. Pair with statement heels and confident attitude for nights that become legendary stories."
  },
  // Colours
  "red": {
    intro: "Shop our collection of red dresses embodying passion, power, and unforgettable presence for every occasion.",
    highlighted: "Red is the colour of confidence—our collection ensures you make a bold statement wherever you go.",
    expanded: "From sultry burgundies to vibrant crimsons, explore every shade of this timeless power colour. Our red dress collection features minis, midis, and maxis in silhouettes designed to flatter. Perfect for date nights, holiday parties, and any moment calling for drama and sophistication. Each dress is crafted in premium fabrics that drape beautifully and hold their colour. Command attention in shades that never go unnoticed."
  },
  "pink": {
    intro: "Explore our pink dress collection celebrating feminine charm with shades from soft blush to vibrant fuchsia.",
    highlighted: "Our pink dresses range from romantic pastels to bold statement hues, perfect for expressing your unique style.",
    expanded: "Discover flirty minis, elegant midis, and flowing maxis in every shade of pink imaginable. Our collection features romantic details, flattering silhouettes, and premium fabrics that embody modern femininity. Perfect for brunches, weddings, and spring celebrations, these dresses photograph beautifully and pair well with both neutral and metallic accessories. Find your perfect pink from soft whispers to confident declarations."
  },
  "black": {
    intro: "Browse our collection of black dresses offering timeless sophistication for every occasion in your calendar.",
    highlighted: "The little black dress is a wardrobe essential—our collection elevates this classic with modern details and perfect fits.",
    expanded: "From cocktail parties to formal events, our black dress collection offers versatile options that never disappoint. Explore structured minis, elegant midis, and dramatic maxis in premium fabrics. Each design features thoughtful details from strategic cutouts to statement sleeves that modernize the classic. Black dresses transition seamlessly between seasons and occasions, making them the most valuable pieces in any wardrobe."
  },
  "white": {
    intro: "Shop our white dress collection featuring pristine designs perfect for summer celebrations and special occasions.",
    highlighted: "Our white dresses embody effortless elegance, from bridal events to vacation getaways.",
    expanded: "Discover flowing maxis, structured minis, and romantic midis in shades from pure white to soft ivory. Our collection features lace details, flowing fabrics, and flattering cuts perfect for graduations, engagements, and tropical destinations. Each white dress is crafted from quality materials that maintain their brightness wash after wash. Embrace fresh, clean aesthetics that feel both timeless and thoroughly modern."
  },
  "blue": {
    intro: "Explore our blue dress collection spanning elegant navy to vibrant cobalt for sophisticated style statements.",
    highlighted: "From serene pastels to deep midnight hues, our blue dresses offer versatility for every occasion.",
    expanded: "Discover the calming elegance of sky blue, the professional polish of navy, and the vibrancy of electric cobalt. Our collection features romantic prints, solid sophistication, and modern silhouettes in this universally flattering colour family. Perfect for weddings, work events, and special celebrations, blue dresses complement every skin tone. Explore styles that transition seamlessly from season to season."
  },
  "gold": {
    intro: "Shop our gold dress collection featuring luxurious metallic designs for celebrations that demand glamour.",
    highlighted: "Our gold dresses ensure you shine like the star you are at every special occasion.",
    expanded: "From subtle champagne shimmer to bold molten gold, discover dresses that catch every light. Our collection features sequined minis, flowing metallic gowns, and sophisticated midi designs perfect for holiday parties, galas, and New Year's Eve. Each piece is crafted with quality metallic fabrics that move beautifully and maintain their lustre. Make unforgettable entrances in dresses designed to dazzle."
  },
  "silver": {
    intro: "Browse our silver dress collection offering modern metallic glamour for standout special occasion style.",
    highlighted: "Silver dresses bring futuristic elegance to every celebration, ensuring you make a memorable impression.",
    expanded: "Explore sequined party dresses, sleek satin designs, and flowing metallic gowns in every shade of silver. Our collection features contemporary cuts, flattering silhouettes, and quality construction that catches light beautifully. Perfect for holiday events, New Year's celebrations, and evening occasions, silver dresses offer an alternative to traditional gold with equal impact. Embrace modern glamour with confidence."
  },
  // Drops
  "new-in": {
    intro: "Discover our latest arrivals featuring fresh designs and trending styles just added to the collection.",
    highlighted: "Be the first to shop our newest pieces before they sell out—new styles drop weekly.",
    expanded: "Our new arrivals showcase the latest trends, seasonal must-haves, and exclusive designs you won't find anywhere else. From statement dresses to essential basics, each new piece reflects our commitment to quality, style, and modern femininity. Shop early for the best selection and discover pieces that will define your wardrobe this season. Sign up for notifications to never miss a drop."
  },
  "bestsellers": {
    intro: "Shop our bestselling pieces—the customer favourites that have earned their place in wardrobes worldwide.",
    highlighted: "Our bestsellers are proven crowd-pleasers, loved for their flattering fits and versatile styling.",
    expanded: "Discover the dresses, tops, and sets that customers return to purchase in multiple colours. Each bestseller has earned its status through exceptional quality, comfortable fits, and endless compliments. From signature silhouettes to standout details, these pieces represent the best of our collection. Join thousands of satisfied customers who have made these designs their go-to choices for special occasions."
  },
};

const defaultSeo: SeoContent = {
  intro: "Explore our carefully curated collection of designer pieces crafted for the modern woman who values quality and style.",
  highlighted: "Each piece in our collection is designed with meticulous attention to detail and premium materials.",
  expanded: "Discover versatile designs that transition seamlessly from day to night, work to weekend. Our collection features flattering silhouettes, quality construction, and timeless appeal that transcends trends. Whether you're dressing for a special occasion or elevating your everyday wardrobe, find pieces that express your unique style. Shop with confidence knowing each item meets our standards for excellence."
};

const CollectionSeoDescription = ({ slug }: CollectionSeoDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const content = seoDescriptions[slug] || defaultSeo;

  return (
    <section className="border-t border-border py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {content.intro}{" "}
            <span className="text-foreground font-medium">{content.highlighted}</span>
            {isExpanded && (
              <span className="block mt-4">{content.expanded}</span>
            )}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-xs font-medium tracking-wide uppercase text-foreground hover:text-muted-foreground transition-colors underline underline-offset-4"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionSeoDescription;
