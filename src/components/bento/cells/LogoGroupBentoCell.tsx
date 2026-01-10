import { cn } from "@/lib/utils";
import { BentoItem } from "../types";
import { useState } from "react";

interface LogoGroupBentoCellProps {
  item: BentoItem;
  onClick?: () => void;
}

function LogoWithFallback({
  logo,
  index
}: {
  logo: { name: string; url: string };
  index: number;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // Text fallback for broken images
    return (
      <div
        className={cn(
          "flex items-center justify-center px-2 py-1",
          "text-xs font-medium text-white/60 text-center",
          "transition-all duration-300",
          "group-hover:text-white/90"
        )}
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        {logo.name}
      </div>
    );
  }

  return (
    <img
      src={logo.url}
      alt={logo.name}
      loading="lazy"
      onError={() => setHasError(true)}
      className={cn(
        "max-w-full max-h-full object-contain",
        "filter grayscale-[50%] opacity-70",
        "transition-all duration-300",
        "group-hover:grayscale-0 group-hover:opacity-100"
      )}
      style={{ transitionDelay: `${index * 50}ms` }}
    />
  );
}

export function LogoGroupBentoCell({ item, onClick }: LogoGroupBentoCellProps) {
  const logos = item.logos || [];

  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-xl cursor-pointer group",
        "bg-gradient-to-br from-white/5 to-white/[0.02]",
        "border border-white/10",
        "transition-all duration-300",
        "hover:border-accent/30",
        "bento-cell-focus"
      )}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      tabIndex={0}
      role="button"
      aria-label={item.title || "View logos"}
    >
      {/* Title */}
      {item.title && (
        <div className="absolute top-0 left-0 right-0 p-4 z-10">
          <p className="text-xs font-medium text-white/50 uppercase tracking-widest">
            {item.title}
          </p>
        </div>
      )}

      {/* Logo grid */}
      <div className="absolute inset-0 flex items-center justify-center p-4 pt-10">
        <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-md">
          {logos.slice(0, 6).map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center aspect-[3/2]"
            >
              <LogoWithFallback logo={logo} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  );
}

export default LogoGroupBentoCell;
