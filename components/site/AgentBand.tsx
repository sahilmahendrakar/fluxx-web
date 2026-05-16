import { Section } from "@/components/site/Section";
import { agentBandContent, supportedIntegrations } from "@/content/site";

export function AgentBand() {
  return (
    <Section aria-label="Integrations">
      <h2 className="mb-2 text-center text-xl font-semibold tracking-tight sm:text-2xl">
        {agentBandContent.headline}
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-center text-sm text-[var(--muted)]">
        {agentBandContent.subline}
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        {supportedIntegrations.map((item) => (
          <li key={item.name}>
            <span className="site-pill inline-flex items-center gap-1.5">
              {item.name}
              {item.note ? (
                <span className="normal-case tracking-normal text-[var(--brand-violet)]">
                  · {item.note}
                </span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
