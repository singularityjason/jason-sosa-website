import { cn } from "@/lib/utils";
import { BentoItem } from "../types";

interface LogoBentoCellProps {
  item: BentoItem;
  onClick?: () => void;
}

export function LogoBentoCell({ item, onClick }: LogoBentoCellProps) {
  const logoUrl = item.logoUrl || "/placeholder.svg";

  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-xl cursor-pointer group",
        "bg-gradient-to-br from-white/5 to-white/[0.02]",
        "border border-white/10",
        "transition-all duration-300",
        "hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5",
        "bento-cell-focus"
      )}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      tabIndex={0}
      role="button"
      aria-label={item.title || "View logo"}
    >
      {/* Logo container */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <img
          src={logoUrl}
          alt={item.title || "Logo"}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
          }}
          className={cn(
            "max-w-[70%] max-h-[60%] object-contain",
            "filter grayscale-[50%] opacity-75",
            "transition-all duration-300",
            "group-hover:grayscale-0 group-hover:opacity-100"
          )}
        />
      </div>

      {/* Hover label */}
      {item.title && (
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 p-3",
            "bg-gradient-to-t from-black/60 to-transparent",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          )}
        >
          <p className="text-xs font-medium text-white/80 text-center">
            {item.title}
          </p>
        </div>
      )}
    </div>
  );
}

export default LogoBentoCell;
