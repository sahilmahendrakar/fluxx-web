"use client";

import {
  archToDownloadUrl,
  detectMacArch,
  type MacArch,
} from "@/lib/detect-mac-arch";
import { ctaLabels } from "@/content/site";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export type MacDownloadUrls = {
  downloadUrlArm64: string;
  downloadUrlX64: string;
};

type MacDownloadButtonProps = MacDownloadUrls & {
  className?: string;
  /** Primary pill button (default), full-width mobile, or footer text link. */
  variant?: "primary" | "fullWidth" | "link";
  /** Called when the user follows any download link (e.g. close mobile nav). */
  onNavigate?: () => void;
};

const ARCH_OPTIONS: { arch: "arm64" | "x64"; label: string }[] = [
  { arch: "arm64", label: "Apple Silicon (arm64)" },
  { arch: "x64", label: "Intel (x64)" },
];

export function MacDownloadButton({
  downloadUrlArm64,
  downloadUrlX64,
  className = "",
  variant = "primary",
  onNavigate,
}: MacDownloadButtonProps) {
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [detectedArch, setDetectedArch] = useState<MacArch>("unknown");

  const urls = { arm64: downloadUrlArm64, x64: downloadUrlX64 };
  const primaryHref = archToDownloadUrl(detectedArch, urls);

  useEffect(() => {
    let cancelled = false;
    void detectMacArch().then((arch) => {
      if (!cancelled) {
        setDetectedArch(arch);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onPointerDown = (event: MouseEvent) => {
      if (
        rootRef.current &&
        !rootRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeMenu]);

  const rootClass =
    variant === "fullWidth"
      ? `site-mac-download site-mac-download--full ${className}`.trim()
      : variant === "link"
        ? `site-mac-download site-mac-download--link ${className}`.trim()
        : `site-mac-download ${className}`.trim();

  const primaryClass =
    variant === "link"
      ? "site-mac-download__primary-link"
      : "site-mac-download__primary site-btn-primary";

  const toggleClass =
    variant === "link"
      ? "site-mac-download__toggle-link"
      : "site-mac-download__toggle";

  return (
    <div ref={rootRef} className={rootClass}>
      <a
        href={primaryHref}
        className={primaryClass}
        onClick={() => onNavigate?.()}
      >
        {ctaLabels.downloadMac}
      </a>
      <button
        ref={toggleRef}
        type="button"
        className={toggleClass}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label="Choose Mac download architecture"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
          <path
            d="M3.5 5.25 7 8.75l3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open ? (
        <div
          id={menuId}
          role="menu"
          className="site-mac-download__menu"
          aria-label="Mac download options"
        >
          <ul className="site-mac-download__menu-list">
            {ARCH_OPTIONS.map(({ arch, label }) => (
              <li key={arch} role="none">
                <a
                  role="menuitem"
                  href={urls[arch]}
                  className="site-mac-download__menu-item"
                  onClick={() => {
                    setOpen(false);
                    onNavigate?.();
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
