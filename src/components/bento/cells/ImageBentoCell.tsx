import { useState } from "react";
import { cn } from "@/lib/utils";
import { BentoItem } from "../types";
import { Badge } from "@/components/ui/badge";
import { ImageIcon } from "lucide-react";

interface ImageBentoCellProps {
  item: BentoItem;
  onClick?: () => void;
}

export function ImageBentoCell({ item, onClick }: ImageBentoCellProps) {
  const [hasError, setHasError] = useState(false);
  const imageUrl = item.imageUrl || item.previewImageUrl;
  const hasValidImage = imageUrl && !hasError;

  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-xl cursor-pointer group",
        "bg-gradient-to-br from-white/[0.08] to-white/[0.02] transition-all duration-300",
        "border border-white/10",
        "hover:shadow-xl hover:shadow-accent/10",
        "bento-cell-focus"
      )}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      tabIndex={0}
      role="button"
      aria-label={item.title ? `View project: ${item.title}` : "View project"}
    >
      {/* Image or Dark Placeholder */}
      {hasValidImage ? (
        <img
          src={imageUrl}
          alt={item.title || "Project image"}
          loading="lazy"
          onError={() => setHasError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
          <ImageIcon className="w-12 h-12 text-white/20" />
        </div>
      )}

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
