import { FluxxLogo } from "@/components/site/FluxxLogo";
import { MacDownloadButton } from "@/components/site/MacDownloadButton";
import { MobileNav } from "@/components/site/MobileNav";
import { navLinks } from "@/content/site";
import type { SiteUrls } from "@/content/site";

type NavProps = {
  urls: SiteUrls;
};

export function Nav({ urls }: NavProps) {
  return (
    <header className="site-nav sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--surface-nav)] backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6 sm:px-8">
        <div className="flex items-center gap-2.5">
          <a
            href="#"
            className="rounded-md transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-violet)]"
          >
            <FluxxLogo />
          </a>
        </div>

        <nav
          className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.label === "GitHub" ? urls.githubUrl : link.href}
              className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-violet)]"
              {...(link.label === "GitHub"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <MacDownloadButton
            downloadUrlArm64={urls.downloadUrlArm64}
            downloadUrlX64={urls.downloadUrlX64}
            className="hidden shrink-0 text-sm md:inline-flex"
          />
          <MobileNav urls={urls} />
        </div>
      </div>
    </header>
  );
}
