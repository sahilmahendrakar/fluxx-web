import Image from "next/image";
import type { MarketingScreenshot as MarketingScreenshotMeta } from "@/content/site";

type MarketingScreenshotProps = {
  shot: MarketingScreenshotMeta;
  /** `hero` fills width; `feature` fits the feature column. */
  variant?: "hero" | "feature" | "compact";
  priority?: boolean;
};

export function MarketingScreenshot({
  shot,
  variant = "feature",
  priority = false,
}: MarketingScreenshotProps) {
  const isHero = variant === "hero";
  const isCompact = variant === "compact";

  return (
    <figure
      className={`marketing-screenshot marketing-screenshot--${variant}`}
    >
      <div className="marketing-screenshot-frame">
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          priority={priority}
          sizes={
            isHero
              ? "(max-width: 1024px) 100vw, 1152px"
              : isCompact
                ? "(max-width: 640px) 100vw, 280px"
                : "(max-width: 1024px) 100vw, 560px"
          }
          className="marketing-screenshot-image"
        />
      </div>
      {shot.caption ? (
        <figcaption className="marketing-screenshot-caption">
          {shot.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
