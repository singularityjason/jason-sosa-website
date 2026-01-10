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
        "max-h-12 sm:max-h-16 lg:max-h-20 w-auto object-contain",
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
        <div className="absolute top-0 left-0 right-0 p-5 z-10">
          <p className="text-sm font-semibold text-white/70 uppercase tracking-wider">
            {item.title}
          </p>
        </div>
      )}

      {/* Logo grid - supports up to 9 logos in 3x3 layout */}
      <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-6 pt-14">
        <div className={cn(
          "grid grid-cols-3 w-full max-w-md mx-auto",
          logos.length > 6
            ? "gap-4 sm:gap-5"
            : "gap-5 sm:gap-6"
        )}>
          {logos.slice(0, 9).map((logo, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center justify-center bg-white/5 rounded-lg p-2",
                logos.length > 6 ? "h-14 sm:h-16" : "h-16 sm:h-20"
              )}
            >
              <LogoWithFallback logo={logo} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoGroupBentoCell;
