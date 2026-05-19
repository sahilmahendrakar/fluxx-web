import Image from "next/image";
import { heroContent, marketingScreenshots, requiredCopy } from "@/content/site";

const workflowTags = ["Plan", "Delegate", "Track", "Review"] as const;

/** Fixed 1200×630 canvas for OG / Twitter / iMessage preview screenshots. */
export function ShareThumbnail() {
  return (
    <div
      className="thumbnail-canvas relative overflow-hidden bg-[#f8f7fb] text-[#0c0c0c]"
      aria-hidden
    >
      <div className="thumbnail-ambient pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 flex h-full">
        <div className="flex w-[52%] shrink-0 flex-col justify-between px-14 py-12">
          <div className="flex items-center gap-3.5">
            <Image
              src="/flux-icon.png"
              alt=""
              width={56}
              height={56}
              className="size-14 shrink-0 rounded-[14px] shadow-[0_8px_24px_-8px_rgb(139_92_246/0.45)]"
              priority
            />
            <span className="text-[2rem] font-semibold tracking-[-0.04em]">Fluxx</span>
          </div>

          <div className="max-w-[34rem]">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#8b5cf6]">
              {heroContent.eyebrow}
            </p>
            <h1 className="mb-5 text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.035em] text-balance">
              {heroContent.title}
            </h1>
            <p className="text-[1.125rem] leading-snug text-[#52525b] text-pretty">
              {requiredCopy.promiseLine}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {workflowTags.map((tag) => (
              <span key={tag} className="thumbnail-tag">
                {tag}
              </span>
            ))}
            <span className="ml-auto text-[15px] font-medium tracking-tight text-[#71717a]">
              fluxx.sh
            </span>
          </div>
        </div>

        <div className="relative flex min-w-0 flex-1 items-center justify-center pr-10 pt-8 pb-10">
          <div
            className="thumbnail-screenshot-glow pointer-events-none absolute inset-y-[12%] right-[6%] left-[8%] rounded-3xl"
            aria-hidden
          />
          <div className="thumbnail-screenshot-frame relative w-full max-w-[34rem]">
            <Image
              src={marketingScreenshots.planningAssistant.src}
              alt=""
              width={marketingScreenshots.planningAssistant.width}
              height={marketingScreenshots.planningAssistant.height}
              className="thumbnail-screenshot-image block h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
