import { cn } from "@/lib/utils";
import { BentoItem } from "./types";
import { BentoCell } from "./BentoCell";
import { BentoGridSkeleton } from "./BentoGridSkeleton";

interface BentoGridProps {
  items: BentoItem[];
  onItemClick?: (item: BentoItem) => void;
  loading?: boolean;
  className?: string;
}

export function BentoGrid({ items, onItemClick, loading, className }: BentoGridProps) {
  if (loading) {
    return <BentoGridSkeleton />;
  }

  return (
    <div
      className={cn(
        "grid gap-4 grid-flow-dense",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        "auto-rows-[minmax(160px,auto)] sm:auto-rows-[minmax(180px,auto)] lg:auto-rows-[minmax(200px,auto)]",
        className
      )}
    >
      {items.map((item, index) => (
        <BentoCell
          key={item.id}
          item={item}
          onClick={() => onItemClick?.(item)}
          index={index}
        />
      ))}
    </div>
  );
}

export default BentoGrid;
