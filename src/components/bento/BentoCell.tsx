import { cn } from "@/lib/utils";
import { BentoItem, sizeClasses } from "./types";
import { VideoBentoCell } from "./cells/VideoBentoCell";
import { ImageBentoCell } from "./cells/ImageBentoCell";
import { LogoBentoCell } from "./cells/LogoBentoCell";
import { LogoGroupBentoCell } from "./cells/LogoGroupBentoCell";
import { TextBentoCell } from "./cells/TextBentoCell";
import { StatsBentoCell } from "./cells/StatsBentoCell";

interface BentoCellProps {
  item: BentoItem;
  onClick?: () => void;
  index: number;
}

export function BentoCell({ item, onClick, index }: BentoCellProps) {
  const sizeClass = sizeClasses[item.size];

  const renderCell = () => {
    switch (item.type) {
      case "video":
        return <VideoBentoCell item={item} onClick={onClick} />;
      case "image":
      case "project":
        return <ImageBentoCell item={item} onClick={onClick} />;
      case "logo":
        return <LogoBentoCell item={item} onClick={onClick} />;
      case "logoGroup":
        return <LogoGroupBentoCell item={item} onClick={onClick} />;
      case "text":
        return <TextBentoCell item={item} onClick={onClick} />;
      case "stats":
        return <StatsBentoCell item={item} onClick={onClick} />;
      default:
        return <ImageBentoCell item={item} onClick={onClick} />;
    }
  };

  return (
    <div
      className={cn(
        sizeClass,
        "animate-fade-in"
      )}
      style={{
        animationDelay: `${index * 50}ms`,
        animationFillMode: "backwards",
      }}
    >
      {renderCell()}
    </div>
  );
}

export default BentoCell;
