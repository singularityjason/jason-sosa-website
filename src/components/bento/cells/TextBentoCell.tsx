import { cn } from "@/lib/utils";
import { BentoItem } from "../types";
import { ArrowUpRight } from "lucide-react";

interface TextBentoCellProps {
  item: BentoItem;
  onClick?: () => void;
}

export function TextBentoCell({ item, onClick }: TextBentoCellProps) {
  const accentColor = item.accentColor || "from-accent/20 via-accent/5 to-transparent";

  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-xl cursor-pointer group",
        "bg-gradient-to-br from-white/[0.12] to-white/[0.04]",
        "border border-white/15",
        "transition-all duration-500",
        "hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10",
        "bento-cell-focus"
      )}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      tabIndex={0}
      role="button"
      aria-label={item.title || "View details"}
    >
      {/* Gradient accent overlay - visible by default at 40%, full on hover */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-100",
          "transition-opacity duration-500",
          accentColor
        )}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-5 sm:p-7">
        <div className="space-y-3">
          {item.description && (
            <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">
              {item.description}
            </span>
          )}
          {item.title && (
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-snug">
              {item.title}
            </h3>
          )}
          {item.subtitle && (
            <p className="text-sm sm:text-base text-white/70 mt-2 leading-relaxed">{item.subtitle}</p>
          )}
        </div>

        {/* Arrow indicator */}
        <div className="flex justify-end mt-4">
          <div
            className={cn(
              "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center",
              "transform translate-x-2 opacity-0",
              "group-hover:translate-x-0 group-hover:opacity-100",
              "transition-all duration-300"
            )}
          >
            <ArrowUpRight className="w-4 h-4 text-accent" />
          </div>
        </div>
      </div>

      {/* Decorative corner accent - subtle by default */}
      <div
        className={cn(
          "absolute top-0 right-0 w-24 h-24",
          "bg-gradient-to-bl from-accent/10 to-transparent",
          "opacity-50 group-hover:opacity-100",
          "transition-opacity duration-500"
        )}
      />

      {/* Featured indicator - visible on mobile where wide cells lose distinction */}
      {item.featured && (
        <div className="absolute top-3 right-3 sm:hidden">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        </div>
      )}
    </div>
  );
}

export default TextBentoCell;
