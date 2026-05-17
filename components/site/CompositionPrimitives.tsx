import type { ReactNode } from "react";

export function StatusChip({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "violet" | "amber" | "green" | "blue";
}) {
  return (
    <span className={`composition-chip composition-chip--${variant}`}>
      {children}
    </span>
  );
}

export function CompositionPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`composition-panel overflow-hidden ${className}`.trim()}>
      {children}
    </div>
  );
}

export function PanelHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`composition-panel-header ${className}`.trim()}>
      {children}
    </div>
  );
}

export function PanelBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`composition-panel-body ${className}`.trim()}>{children}</div>;
}
