"use client";

import { useState } from "react";
import { ctaLabels, navLinks } from "@/content/site";
import type { SiteUrls } from "@/content/site";
type MobileNavProps = {
  urls: SiteUrls;
};

export function MobileNav({ urls }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="flex size-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--muted)] transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-violet)]"
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
            <path
              d="M4 4l10 10M14 4L4 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
            <path
              d="M3 5h12M3 9h12M3 13h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
      {open ? (
        <nav
          id="mobile-nav-menu"
          className="absolute inset-x-0 top-14 border-b border-[var(--border-subtle)] bg-[var(--surface-nav)] px-6 py-4 backdrop-blur-md"
          aria-label="Primary mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const href =
                link.label === "GitHub" ? urls.githubUrl : link.href;
              const external = link.label === "GitHub";
              return (
                <li key={link.href}>
                  <a
                    href={href}
                    className="block rounded-lg px-3 py-2.5 text-sm text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-foreground"
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : { onClick: () => setOpen(false) })}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href={urls.downloadUrl}
                className="site-btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                {ctaLabels.downloadMac}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
