import { Section } from "@/components/site/Section";
import { faqItems } from "@/content/site";

export function Faq() {
  return (
    <Section id="faq" aria-label="Frequently asked questions">
      <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
        FAQ
      </h2>
      <div className="mx-auto flex max-w-2xl flex-col gap-4">
        {faqItems.map((item) => (
          <details key={item.question} className="site-panel group">
            <summary className="cursor-pointer list-none px-5 py-4 text-sm font-medium transition-colors marker:content-none hover:text-foreground [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {item.question}
                <span
                  className="text-[var(--muted)] transition-transform group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </span>
            </summary>
            <p className="border-t border-[var(--border-subtle)] px-5 pb-4 pt-3 text-sm leading-relaxed text-[var(--muted)]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
