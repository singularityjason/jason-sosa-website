import { cn } from "@/lib/utils";
import { BentoItem } from "../types";

interface StatsBentoCellProps {
  item: BentoItem;
  onClick?: () => void;
}

export function StatsBentoCell({ item, onClick }: StatsBentoCellProps) {
  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-xl cursor-pointer group",
        "bg-gradient-to-br from-white/[0.06] to-white/[0.02]",
        "border border-white/10",
        "transition-all duration-300",
        "hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5",
        "bento-cell-focus"
      )}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      tabIndex={0}
      role="button"
      aria-label={item.statLabel ? `${item.statValue || ''} ${item.statLabel}`.trim() : item.statValue || item.title || "View stat"}
    >
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        {/* Logo (if provided) */}
        {item.logoUrl && (
          <img
            src={item.logoUrl}
            alt={item.title || item.statLabel || "Logo"}
            className={cn(
              "h-10 sm:h-12 w-auto object-contain mb-3",
              "transition-all duration-300",
              "group-hover:scale-105",
              "brightness-0 invert opacity-90"
            )}
          />
        )}

        {/* Stat value (only show if no logo, or as subtitle with logo) */}
        {(!item.logoUrl || item.subtitle) && item.statValue && (
          <div
            className={cn(
              item.logoUrl ? "text-xl sm:text-2xl" : "text-4xl sm:text-5xl",
              "font-bold",
              "bg-gradient-to-r from-white via-white/90 to-accent/80 bg-clip-text text-transparent",
              "transition-all duration-300",
              "group-hover:scale-105"
            )}
          >
            {item.statValue}
          </div>
        )}

        {/* Stat label */}
        {item.statLabel && (
          <p className="text-sm text-white/70 mt-2 uppercase tracking-wider font-medium">
            {item.statLabel}
          </p>
        )}

        {/* Subtitle (for year or additional info) */}
        {item.subtitle && (
          <p className="text-xs text-white/50 mt-1 uppercase tracking-wide">
            {item.subtitle}
          </p>
        )}

        {/* Title (optional) */}
        {item.title && !item.statLabel && (
          <p className="text-sm text-white/60 mt-2">{item.title}</p>
        )}
      </div>

      {/* Decorative glow */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity duration-500"
        )}
      />

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-accent/10 to-transparent opacity-50" />
    </div>
  );
}

export default StatsBentoCell;
