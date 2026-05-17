import { Section } from "@/components/site/Section";
import { workflowStepVisuals } from "@/components/site/ProductFragments";
import { howItWorksSteps } from "@/content/site";

export function HowItWorks() {
  return (
    <Section id="how-it-works" aria-label="How it works">
      <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
        How it works
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-[var(--muted)] sm:text-base">
        Fluxx helps you act like a PM for AI engineering work — turn product
        intent into planned, delegated, tracked, reviewed engineering work.
      </p>

      <ol className="workflow-stepper relative grid gap-6 lg:grid-cols-4 lg:gap-4">
        {howItWorksSteps.map((step, index) => {
          const Visual = workflowStepVisuals[step.id];
          return (
            <li key={step.id} className="workflow-step relative flex flex-col">
              <div
                className="workflow-step-connector hidden lg:block"
                aria-hidden
              />
              <div className="site-panel flex h-full flex-col gap-3 p-5">
                <div className="flex items-center gap-3">
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--brand-violet)]/35 bg-[var(--brand-violet)]/10 text-xs font-semibold text-[var(--brand-violet)]"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-medium">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {step.description}
                </p>
                <div
                  className="mt-auto min-h-[7.5rem]"
                  role="img"
                  aria-label={`${step.title} workflow preview`}
                >
                  {Visual ? <Visual /> : null}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
