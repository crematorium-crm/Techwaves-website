import * as React from "react";
import { cn } from "@/lib/utils";
import { Play, X } from "lucide-react";

interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  description?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
  videoType?: "iframe" | "file"; // iframe for YouTube/Vimeo, file for mp4/mov
}

const VideoPlayer = React.forwardRef<HTMLDivElement, VideoPlayerProps>(
  (
    {
      className,
      thumbnailUrl,
      videoUrl,
      title,
      description,
      aspectRatio = "16/9",
      videoType = "iframe",
      ...props
    },
    ref
  ) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    React.useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") setIsModalOpen(false);
      };
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    React.useEffect(() => {
      document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    }, [isModalOpen]);

    return (
      <>
        <div
          ref={ref}
          className={cn(
            "group relative cursor-pointer overflow-hidden rounded-lg shadow-lg",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className
          )}
          style={{ aspectRatio }}
          onClick={() => setIsModalOpen(true)}
          onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
          tabIndex={0}
          aria-label={`Play video: ${title}`}
          {...props}
        >
          {/* Thumbnail */}
          <img
            src={thumbnailUrl}
            alt={`Thumbnail for ${title}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
              <Play className="h-8 w-8 fill-white text-white" />
            </div>
          </div>

          {/* Title & Description */}
          {(title || description) && (
            <div className="absolute bottom-0 left-0 p-4">
              {title && <h3 className="text-lg font-bold text-white">{title}</h3>}
              {description && (
                <p className="mt-1 text-sm text-white/80">{description}</p>
              )}
            </div>
          )}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            aria-modal="true"
            role="dialog"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close video player"
            >
              <X className="h-6 w-6" />
            </button>

            <div
              className="w-full max-w-5xl aspect-video p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {videoType === "file" ? (
                <video
                  className="h-full w-full rounded-lg"
                  controls
                  autoPlay
                  playsInline
                  controlsList="nodownload"
                >
                  <source src={videoUrl} type="video/mp4" />
                  <source src={videoUrl.replace(".mp4", ".mov")} type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  src={videoUrl}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full rounded-lg"
                />
              )}
            </div>
          </div>
        )}
      </>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";

export { VideoPlayer };
