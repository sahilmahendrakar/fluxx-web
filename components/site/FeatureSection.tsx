import type { FeatureBlock } from "@/content/site";
import { featureScreenshots } from "@/content/site";
import { featureVisuals } from "@/components/site/ProductFragments";
import { MarketingScreenshot } from "@/components/site/MarketingScreenshot";

type FeatureSectionProps = {
  feature: FeatureBlock;
  reversed?: boolean;
};

export function FeatureSection({ feature, reversed = false }: FeatureSectionProps) {
  const screenshot = featureScreenshots[feature.id];
  const MockVisual = featureVisuals[feature.id];

  return (
    <section
      id={feature.id}
      aria-label={feature.title}
      className="site-section px-6 py-16 sm:px-8 sm:py-20"
    >
      <div
        className={`motion-safe mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <h2 className="mb-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {feature.title}
          </h2>
          <p className="mb-6 text-base leading-relaxed text-[var(--muted)]">
            {feature.message}
          </p>
          <ul className="flex flex-col gap-3 text-sm leading-relaxed text-[var(--muted)]">
            {feature.proofPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--brand-violet)]"
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-w-0">
          {screenshot ? (
            <MarketingScreenshot shot={screenshot} variant="feature" />
          ) : MockVisual ? (
            <div
              role="img"
              aria-label={`${feature.title} product preview`}
            >
              <MockVisual />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
