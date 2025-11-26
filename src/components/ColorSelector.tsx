import { Check } from "lucide-react";

interface ColorSelectorProps {
  colors: Array<{ name: string; hex: string; images: string[] }>;
  selectedColor: string;
  onColorChange: (colorName: string) => void;
  size?: "sm" | "md";
}

const ColorSelector = ({ colors, selectedColor, onColorChange, size = "md" }: ColorSelectorProps) => {
  const sizeClasses = size === "sm" ? "h-6 w-6" : "h-8 w-8";
  const checkSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";

  return (
    <div className="flex items-center gap-2">
      {colors.map((color) => (
        <button
          key={color.name}
          onClick={() => onColorChange(color.name)}
          className={`${sizeClasses} rounded-full border-2 transition-all hover:scale-110 ${
            selectedColor === color.name ? "border-primary ring-2 ring-primary ring-offset-2" : "border-border"
          }`}
          style={{ backgroundColor: color.hex }}
          title={color.name}
          aria-label={`Select ${color.name}`}
        >
          {selectedColor === color.name && (
            <Check className={`${checkSize} text-white drop-shadow-lg`} strokeWidth={3} />
          )}
        </button>
      ))}
    </div>
  );
};

export default ColorSelector;
