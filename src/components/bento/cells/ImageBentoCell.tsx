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
  const [logoError, setLogoError] = useState(false);

  const previewImage = item.previewImageUrl;
  const logoImage = item.imageUrl;

  // Detect if the image is likely a logo (not suitable for full-bleed background)
  const isLikelyLogo = (url: string | undefined): boolean => {
    if (!url) return false;
    const lowerUrl = url.toLowerCase();
    // Check for logo indicators in filename/URL
    if (lowerUrl.includes('logo')) return true;
    // Check for common logo domains/patterns
    if (lowerUrl.includes('clearbit')) return true;
    // Check if preview is same as logo_url (means logo is being used as preview)
    if (logoImage && previewImage && logoImage === previewImage) return true;
    return false;
  };

  // Determine display mode:
  // - If preview image exists AND is not a logo, use as full background
  // - If only logo OR preview is actually a logo, show constrained
  const previewIsLogo = isLikelyLogo(previewImage);
  const hasRealPreviewImage = previewImage && !hasError && !previewIsLogo;
  const hasLogoToShow = (logoImage && !logoError) || (previewImage && previewIsLogo && !hasError);

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
      {/* Mode 1: Full background image (for actual photos/previews - NOT logos) */}
      {hasRealPreviewImage && (
        <>
          <img
            src={previewImage}
            alt={item.title || "Project image"}
            loading="lazy"
            onError={() => setHasError(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </>
      )}

      {/* Mode 2: Logo - centered and constrained (NOT stretched as background) */}
      {!hasRealPreviewImage && hasLogoToShow && (
        <div className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-br from-white/[0.06] to-white/[0.02]">
          <img
            src={logoImage || previewImage}
            alt={item.subtitle || item.title || "Logo"}
            loading="lazy"
            onError={() => logoImage ? setLogoError(true) : setHasError(true)}
            className={cn(
              "max-w-[65%] max-h-[45%] w-auto h-auto object-contain",
              "filter brightness-0 invert opacity-80",
              "transition-all duration-300",
              "group-hover:opacity-100 group-hover:scale-105"
            )}
          />
        </div>
      )}

      {/* Mode 3: No image - placeholder */}
      {!hasRealPreviewImage && !hasLogoToShow && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
          <ImageIcon className="w-12 h-12 text-white/20" />
        </div>
      )}

      {/* Content overlay - always visible at bottom */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 sm:p-6",
          // Add gradient background for logo mode
          !hasRealPreviewImage && hasLogoToShow && "bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-16"
        )}
      >
        {item.category && (
          <Badge variant="secondary" className="w-fit mb-2 bg-accent/30 text-accent border-accent/40 text-xs font-semibold">
            {item.category}
          </Badge>
        )}
        {item.title && (
          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight drop-shadow-lg">
            {item.title}
          </h3>
        )}
        {item.subtitle && (
          <p className="text-sm text-white/80 mt-1.5 drop-shadow-md">{item.subtitle}</p>
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
