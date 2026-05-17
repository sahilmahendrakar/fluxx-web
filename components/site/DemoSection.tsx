import { demoSection } from "@/content/site";
import type { SiteUrls } from "@/content/site";

type DemoSectionProps = {
  urls: SiteUrls;
};

export function DemoSection({ urls }: DemoSectionProps) {
  return (
    <section
      id="demo"
      className="site-section flex min-h-dvh flex-col items-center justify-center px-4 py-12 sm:px-8 sm:py-16"
      aria-label="Product demo"
    >
      <div className="motion-safe mx-auto w-full max-w-6xl">
        <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          {demoSection.headline}
        </h2>
        <div className="relative mx-auto w-full max-w-[min(100%,calc((100dvh-8rem)*16/9))]">
          <div className="site-panel overflow-hidden">
            <div className="relative aspect-video w-full bg-[#09090b]">
              <video
                className="demo-video absolute inset-0 h-full w-full"
                controls
                playsInline
                preload="metadata"
                aria-label="Fluxx product demo"
              >
                <source src={urls.demoVideoSrc} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
          </div>
        </div>
        <ol className="mt-8 flex flex-col gap-3 text-sm text-[var(--muted)] sm:flex-row sm:justify-center sm:gap-8">
          {demoSection.steps.map((step, index) => (
            <li key={step} className="flex items-start gap-3 sm:max-w-[14rem]">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-[var(--border-subtle)] text-xs font-medium text-foreground">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
