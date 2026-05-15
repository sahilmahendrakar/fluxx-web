/**
 * Fallback DMG (Flux 0.1.1 arm64). Override at build time with
 * `NEXT_PUBLIC_FLUX_DOWNLOAD_URL` if production should not track this default.
 */
const DEFAULT_DOWNLOAD =
  "https://github.com/sahilmahendrakar/flux-web/releases/download/untagged-5deeee5aac2fd2a22be3/Flux-0.1.1-arm64.dmg";

const DEMO_VIDEO_ID = "uh_haSxyhyw";

export default function Home() {
  const downloadUrl =
    process.env.NEXT_PUBLIC_FLUX_DOWNLOAD_URL ?? DEFAULT_DOWNLOAD;

  const embedSrc = `https://www.youtube-nocookie.com/embed/${DEMO_VIDEO_ID}?modestbranding=1&rel=0`;

  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden">
      <div
        className="hero-ambient pointer-events-none fixed inset-0"
        aria-hidden
      />
      <main className="relative z-10 flex flex-1 flex-col">
        <section
          className="flex min-h-dvh flex-col items-center justify-center px-6 py-20"
          aria-label="Flux"
        >
          <div className="flex max-w-md flex-col items-center text-center">
            <div className="mb-3 flex items-center gap-3">
              <h1 className="text-[2.75rem] font-extralight tracking-[-0.04em] sm:text-6xl sm:tracking-[-0.045em]">
                Flux
              </h1>
              <span className="rounded-full border border-neutral-300/80 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted)] dark:border-white/12">
                Beta
              </span>
            </div>
            <p className="mb-12 max-w-[17rem] text-sm leading-relaxed text-[var(--muted)] sm:max-w-none sm:text-[0.9375rem]">
              Orchestrate your coding agents.
            </p>
            <div className="flex flex-col items-center gap-3">
              <a
                href={downloadUrl}
                target="_self"
                className="group relative inline-flex h-11 min-w-[10.5rem] items-center justify-center rounded-full bg-neutral-950 px-8 text-sm font-medium text-white transition-[transform,box-shadow] duration-200 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_12px_40px_-12px_rgba(0,0,0,0.35)] active:scale-[0.98] dark:bg-white dark:text-neutral-950 dark:hover:shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_12px_48px_-12px_rgba(0,0,0,0.45)]"
              >
                Download
              </a>
              <a
                href="#demo"
                className="group inline-flex min-h-10 flex-col items-center justify-center gap-0.5 rounded-full border border-transparent px-6 py-1.5 text-sm font-medium text-[var(--muted)] transition-[color,background-color,border-color] duration-200 hover:border-neutral-300/80 hover:bg-black/[0.03] hover:text-foreground active:scale-[0.98] dark:hover:border-white/12 dark:hover:bg-white/[0.05]"
              >
                <span>View demo</span>
                <svg
                  className="size-3.5 shrink-0 opacity-55 transition-[transform,opacity] duration-200 group-hover:translate-y-px group-hover:opacity-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section
          id="demo"
          className="flex min-h-dvh flex-col items-center justify-center px-4 py-12 sm:px-8 sm:py-16"
          aria-label="Product demo"
        >
          <div className="relative w-full max-w-[min(100%,calc((100dvh-8rem)*16/9))]">
            <div className="overflow-hidden rounded-2xl border border-neutral-300/80 bg-black/[0.02] shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_24px_64px_-32px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04] dark:border-white/12 dark:bg-white/[0.03] dark:shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_24px_80px_-40px_rgb(0_0_0_/_0.5)] dark:ring-white/[0.06]">
              <div className="relative aspect-video w-full">
                <iframe
                  title="Flux product demo"
                  src={embedSrc}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
