import { ctaLabels, finalCta } from "@/content/site";
import type { SiteUrls } from "@/content/site";

type CtaProps = {
  urls: SiteUrls;
};

export function Cta({ urls }: CtaProps) {
  return (
    <section
      className="site-section px-6 py-24 sm:px-8"
      aria-label="Download Fluxx"
    >
      <div className="motion-safe mx-auto max-w-2xl text-center">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
          {finalCta.headline}
        </h2>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a href={urls.downloadUrl} className="site-btn-primary">
            {ctaLabels.downloadMac}
          </a>
          <a
            href={urls.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="site-btn-secondary"
          >
            {ctaLabels.viewGithub}
          </a>
          <a href="#demo" className="site-btn-secondary">
            {ctaLabels.watchDemo}
          </a>
        </div>
      </div>
    </section>
  );
}
