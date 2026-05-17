import { ctaLabels, footerContent, navLinks } from "@/content/site";
import type { SiteUrls } from "@/content/site";

type FooterProps = {
  urls: SiteUrls;
};

export function Footer({ urls }: FooterProps) {
  return (
    <footer className="border-t border-[var(--border-subtle)] px-6 py-12 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:flex-row sm:justify-between">
        <div className="max-w-sm">
          <p className="mb-2 text-sm font-semibold">Fluxx</p>
          <p className="text-sm text-[var(--muted)]">{footerContent.tagline}</p>
          <p className="mt-4 text-xs text-[var(--muted)]">
            {footerContent.copyright}
          </p>
        </div>
        <nav
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]"
          aria-label="Footer"
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
          <a
            href={urls.downloadUrl}
            className="transition-colors hover:text-foreground"
          >
            {ctaLabels.downloadMac}
          </a>
        </nav>
      </div>
    </footer>
  );
}
