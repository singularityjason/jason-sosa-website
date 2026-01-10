import { useState } from "react";
import { cn } from "@/lib/utils";
import { BentoItem } from "../types";
import { Play } from "lucide-react";

interface VideoBentoCellProps {
  item: BentoItem;
  onClick?: () => void;
}

function getYouTubeThumbnail(url: string): string | null {
  const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1];
  // Use hqdefault (480x360) - more reliable than maxresdefault which may not exist
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
}

function getVimeoThumbnail(url: string): string | null {
  const videoId = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1];
  return videoId ? `https://vumbnail.com/${videoId}.jpg` : null;
}

export function VideoBentoCell({ item, onClick }: VideoBentoCellProps) {
  const [hasError, setHasError] = useState(false);

  const getThumbnail = (): string | null => {
    if (item.previewImageUrl) return item.previewImageUrl;
    if (item.videoUrl) {
      if (item.videoUrl.includes("youtube") || item.videoUrl.includes("youtu.be")) {
        return getYouTubeThumbnail(item.videoUrl);
      }
      if (item.videoUrl.includes("vimeo")) {
        return getVimeoThumbnail(item.videoUrl);
      }
    }
    return item.imageUrl || null;
  };

  const thumbnail = getThumbnail();
  const hasValidThumbnail = thumbnail && !hasError;

  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-xl cursor-pointer group",
        "bg-gradient-to-br from-white/[0.08] to-white/[0.02] transition-all duration-500",
        "border border-white/10",
        "hover:shadow-2xl hover:shadow-accent/20",
        "bento-cell-focus"
      )}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      tabIndex={0}
      role="button"
      aria-label={item.title ? `Play video: ${item.title}` : "Play video"}
    >
      {/* Thumbnail or Dark Placeholder */}
      {hasValidThumbnail ? (
        <img
          src={thumbnail}
          alt={item.title || "Video thumbnail"}
          loading="lazy"
          onError={() => setHasError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={cn(
            "w-16 h-16 rounded-full bg-white/90 flex items-center justify-center",
            "transition-all duration-300",
            "group-hover:scale-110 group-hover:bg-white",
            "shadow-lg"
          )}
        >
          <Play className="w-7 h-7 text-black ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
        {item.category && (
          <span className="inline-block text-xs font-medium text-accent mb-2 uppercase tracking-wider">
            {item.category}
          </span>
        )}
        {item.title && (
          <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">
            {item.title}
          </h3>
        )}
        {item.subtitle && (
          <p className="text-sm text-white/70 mt-1">{item.subtitle}</p>
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

export default VideoBentoCell;
