"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

/** Client-only analytics — keeps root layout safe for static prerender. */
export function AnalyticsScripts() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
