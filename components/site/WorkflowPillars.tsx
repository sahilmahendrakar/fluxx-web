import { Section } from "@/components/site/Section";
import { workflowPillars } from "@/content/site";

export function WorkflowPillars() {
  return (
    <Section aria-label="Workflow pillars" className="!py-16 sm:!py-20">
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-[var(--muted)] sm:text-base">
        More than parallel agents — Flux is project management for the full
        loop from intent to ship.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {workflowPillars.map((pillar) => (
          <li key={pillar.id} className="site-panel p-5">
            <h3 className="mb-2 text-base font-medium">{pillar.label}</h3>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              {pillar.tagline}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
