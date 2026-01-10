import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, ExternalLink } from "lucide-react";

interface ImageLightboxProps {
  imageUrl: string | null;
  title?: string;
  subtitle?: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageLightbox = ({ imageUrl, title, subtitle, isOpen, onClose }: ImageLightboxProps) => {
  if (!imageUrl) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogOverlay className="backdrop-blur-sm bg-black/80" />
      <DialogContent
        className="p-0 border-none bg-transparent shadow-none max-w-5xl w-[95vw] overflow-hidden [&>button]:hidden"
        onPointerDownOutside={onClose}
        onEscapeKeyDown={onClose}
      >
        <DialogTitle className="sr-only">{title || "Image preview"}</DialogTitle>
        <div className="relative w-full bg-black/60 rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={title || "Project image"}
            className="w-full h-auto max-h-[85vh] object-contain"
          />

          {/* Title overlay at bottom */}
          {(title || subtitle) && (
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
              {title && (
                <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
              )}
              {subtitle && (
                <p className="text-white/80 mt-1">{subtitle}</p>
              )}
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-black/90 transition-colors z-10"
            aria-label="Close image"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Open in new tab */}
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-16 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-black/90 transition-colors z-10"
            aria-label="Open image in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
