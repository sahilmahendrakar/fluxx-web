"use client";

/**
 * Root error boundary — must define its own html/body and stay free of
 * layout providers (Analytics, fonts context, etc.) so static prerender succeeds.
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-[#09090b] px-6 text-[#fafafa]">
        <h1 className="text-lg font-semibold">Something went wrong</h1>
        <p className="max-w-md text-center text-sm text-[#a1a1aa]">
          Fluxx hit an unexpected error. Try reloading the page.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
