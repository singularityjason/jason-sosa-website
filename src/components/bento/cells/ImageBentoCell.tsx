import { cn } from "@/lib/utils";
import { BentoItem } from "../types";
import { Badge } from "@/components/ui/badge";

interface ImageBentoCellProps {
  item: BentoItem;
  onClick?: () => void;
}

export function ImageBentoCell({ item, onClick }: ImageBentoCellProps) {
  const imageUrl = item.imageUrl || item.previewImageUrl || "/placeholder.svg";

  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-xl cursor-pointer group",
        "bg-muted transition-all duration-300",
        "hover:shadow-xl hover:shadow-accent/10",
        "bento-cell-focus"
      )}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      tabIndex={0}
      role="button"
      aria-label={item.title ? `View project: ${item.title}` : "View project"}
    >
      {/* Image */}
      <img
        src={imageUrl}
        alt={item.title || "Project image"}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = "/placeholder.svg";
        }}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hover overlay with info */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          "flex flex-col justify-end p-4 sm:p-6"
        )}
      >
        {item.category && (
          <Badge variant="secondary" className="w-fit mb-2 bg-accent/20 text-accent border-accent/30">
            {item.category}
          </Badge>
        )}
        {item.title && (
          <h3 className="text-lg font-semibold text-white leading-tight">
            {item.title}
          </h3>
        )}
        {item.subtitle && (
          <p className="text-sm text-white/70 mt-1">{item.subtitle}</p>
        )}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {item.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/60"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Always visible subtle title at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-0 transition-opacity">
        {item.title && (
          <h3 className="text-sm font-medium text-white/90 truncate">
            {item.title}
          </h3>
        )}
      </div>

      {/* Featured indicator - visible on mobile where wide/large cells lose distinction */}
      {item.featured && (
        <div className="absolute top-3 left-3 sm:hidden">
          <div className="px-2 py-0.5 rounded-full bg-accent/90 text-[10px] font-medium text-white uppercase tracking-wide">
            Featured
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageBentoCell;
