import { cn } from "@/lib/utils";

const skeletonItems = [
  { size: "wide" },
  { size: "medium" },
  { size: "medium" },
  { size: "large" },
  { size: "medium" },
  { size: "medium" },
  { size: "wide" },
  { size: "medium" },
  { size: "tall" },
  { size: "medium" },
  { size: "medium" },
  { size: "wide" },
];

const sizeClasses: Record<string, string> = {
  large: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2",
  wide: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-1",
  tall: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2",
  medium: "col-span-1 row-span-1",
  small: "col-span-1 row-span-1",
};

export function BentoGridSkeleton() {
  return (
    <div
      className={cn(
        "grid gap-4",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        "auto-rows-[minmax(160px,auto)] sm:auto-rows-[minmax(180px,auto)] lg:auto-rows-[minmax(200px,auto)]"
      )}
    >
      {skeletonItems.map((item, index) => (
        <div
          key={index}
          className={cn(
            sizeClasses[item.size],
            "animate-pulse"
          )}
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          <div
            className={cn(
              "h-full rounded-xl",
              "bg-gradient-to-br from-white/[0.06] to-white/[0.02]",
              "border border-white/5"
            )}
          />
        </div>
      ))}
    </div>
  );
}

export default BentoGridSkeleton;
