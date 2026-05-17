import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  "aria-label"?: string;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  "aria-label": ariaLabel,
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`site-section px-6 py-20 sm:px-8 sm:py-24 ${className}`.trim()}
    >
      <div className="motion-safe mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
