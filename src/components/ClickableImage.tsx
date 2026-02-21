import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

export function ClickableImage({
  src,
  alt,
  className,
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <figure className="cursor-pointer group">
          <img
            src={src}
            alt={alt}
            className={cn(
              "rounded-lg transition-transform duration-200 group-hover:scale-[1.02]",
              className,
            )}
          />
          {caption && (
            <figcaption className="text-xs text-muted-foreground text-center mt-2">
              {caption}
            </figcaption>
          )}
        </figure>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl p-2" showCloseButton>
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <img
          src={src}
          alt={alt}
          className="w-full max-h-[85vh] object-contain rounded-lg"
        />
        {caption && (
          <p className="text-xs text-muted-foreground text-center">{caption}</p>
        )}
      </DialogContent>
    </Dialog>
  );
}
