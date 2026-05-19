import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Fluxx — Share thumbnail",
  robots: { index: false, follow: false },
};

export default function ThumbnailLayout({ children }: { children: ReactNode }) {
  return (
    <div className="thumbnail-root" style={{ colorScheme: "light" }}>
      {children}
    </div>
  );
}
