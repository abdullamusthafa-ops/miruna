import { Sparkles } from "lucide-react";

const QualityBadge = () => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-luxury via-luxury-light to-luxury p-6 text-center shadow-lg">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      <div className="relative">
        <div className="mb-2 flex items-center justify-center">
          <Sparkles className="h-6 w-6 text-luxury-foreground" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-luxury-foreground">This outfit will do the talking</h3>
        <p className="text-sm text-luxury-foreground/90">
          Made in the UAE, every piece is lovingly stitched with the finest quality
        </p>
      </div>
    </div>
  );
};

export default QualityBadge;
