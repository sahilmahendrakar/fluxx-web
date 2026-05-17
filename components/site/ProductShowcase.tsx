import { StatusChip } from "@/components/site/CompositionPrimitives";

const floatingLabels = [
  {
    text: "Planning",
    className:
      "composition-label composition-label--planning left-[4%] top-[6%] max-sm:left-[2%] max-sm:top-[2%]",
  },
  {
    text: "Delegate",
    className:
      "composition-label composition-label--delegate right-[8%] top-[14%] max-sm:right-[4%] max-sm:top-[8%]",
  },
  {
    text: "Track",
    className:
      "composition-label composition-label--track left-[42%] top-[2%] max-sm:left-[38%] max-sm:top-[1%]",
  },
  {
    text: "Review",
    className:
      "composition-label composition-label--review right-[18%] bottom-[28%] max-sm:hidden",
  },
  {
    text: "Team sync",
    className:
      "composition-label composition-label--sync left-[6%] bottom-[22%] max-sm:left-[2%] max-sm:bottom-[18%]",
  },
  {
    text: "Automation",
    className:
      "composition-label composition-label--auto right-[4%] bottom-[8%] max-sm:right-[2%] max-sm:bottom-[4%]",
  },
] as const;

const boardColumns = [
  {
    title: "Backlog",
    cards: [
      { title: "OAuth callback flow", tag: "planned", muted: true },
      { title: "Rate limit middleware", tag: "scoped", muted: true },
    ],
  },
  {
    title: "In progress",
    cards: [{ title: "Webhook retries", tag: "delegated", agent: "Claude" }],
  },
  {
    title: "Needs input",
    cards: [
      { title: "Stripe checkout API", tag: "needs input", highlight: true },
    ],
  },
  {
    title: "Review / Done",
    cards: [{ title: "User settings page", tag: "ready", done: true }],
  },
] as const;

function PlanningPanel() {
  return (
    <div
      className="composition-panel composition-panel--planning composition-float composition-float--left w-full max-w-[220px] shrink-0 max-lg:max-w-none lg:absolute lg:left-0 lg:top-8 lg:z-20 lg:-translate-x-[6%] lg:rotate-[-1.5deg]"
      aria-hidden
    >
      <div className="composition-panel-header">
        <StatusChip variant="violet">Planning</StatusChip>
        <span className="font-mono text-[10px] text-[var(--muted)]">
          product-brief.md
        </span>
      </div>
      <div className="composition-panel-body space-y-2.5 p-3">
        <p className="text-[11px] font-medium leading-snug text-foreground/90">
          Add team billing with Stripe checkout
        </p>
        <div className="rounded-md border border-[var(--border-subtle)] bg-[var(--surface-inset)] p-2">
          <p className="mb-1.5 text-[9px] font-medium uppercase tracking-wider text-[var(--brand-violet)]">
            Planning assistant
          </p>
          <p className="text-[10px] leading-relaxed text-[var(--muted)]">
            Scoped into 4 tasks: checkout API, webhook handler, seat limits,
            admin UI.
          </p>
        </div>
        <ul className="space-y-1 font-mono text-[9px] text-[var(--muted)]">
          <li className="flex items-center gap-1.5">
            <span className="size-1 rounded-full bg-[var(--brand-violet)]" />
            FLX-42 Stripe checkout API
          </li>
          <li className="flex items-center gap-1.5">
            <span className="size-1 rounded-full bg-[var(--muted)]/50" />
            FLX-43 Webhook handler
          </li>
        </ul>
      </div>
    </div>
  );
}

function KanbanBoard() {
  return (
    <div
      className="composition-panel composition-panel--board relative z-10 w-full min-w-0 flex-1"
      aria-hidden
    >
      <div className="composition-panel-header">
        <span className="text-[11px] font-medium">flux-app</span>
        <div className="flex gap-1.5">
          <StatusChip>Board</StatusChip>
          <StatusChip variant="blue">3 agents</StatusChip>
        </div>
      </div>
      <div className="composition-board-grid p-2.5 pt-2">
        {boardColumns.map((col) => (
          <div key={col.title} className="composition-column">
            <p className="composition-column-title">{col.title}</p>
            <div className="space-y-1.5">
              {col.cards.map((card) => (
                <div
                  key={card.title}
                  className={`composition-card${"highlight" in card && card.highlight ? " composition-card--needs-input" : ""}${"muted" in card && card.muted ? " opacity-70" : ""}`}
                >
                  <p className="text-[10px] font-medium leading-tight">
                    {card.title}
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1">
                    <StatusChip
                      variant={
                        "highlight" in card && card.highlight
                          ? "amber"
                          : "done" in card && card.done
                            ? "green"
                            : "agent" in card
                              ? "blue"
                              : "default"
                      }
                    >
                      {card.tag}
                    </StatusChip>
                    {"agent" in card && card.agent ? (
                      <span className="font-mono text-[8px] text-[var(--muted)]">
                        {card.agent}
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TaskDetailPanel() {
  return (
    <div
      className="composition-panel composition-panel--detail composition-float composition-float--right w-full max-w-[240px] shrink-0 max-lg:max-w-none lg:absolute lg:right-0 lg:top-12 lg:z-30 lg:translate-x-[4%] lg:rotate-[1deg]"
      aria-hidden
    >
      <div className="composition-panel-header">
        <span className="font-mono text-[10px] text-[var(--muted)]">
          FLX-42
        </span>
        <StatusChip variant="amber">Needs input</StatusChip>
      </div>
      <div className="composition-panel-body space-y-2 p-3">
        <p className="text-[11px] font-medium">Stripe checkout API</p>
        <p className="text-[10px] leading-relaxed text-[var(--muted)]">
          Agent paused — confirm price ID mapping for annual vs monthly seats.
        </p>
        <div className="composition-terminal">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-2 py-1">
            <span className="font-mono text-[9px] text-[var(--status-blue)]">
              claude · worktree
            </span>
            <span className="composition-needs-input-pulse text-[8px] font-medium uppercase tracking-wider text-[var(--status-amber)]">
              Needs input
            </span>
          </div>
          <pre className="composition-terminal-body font-mono text-[9px] leading-relaxed text-[var(--muted)]">
            <code>
              {`> Implement checkout session create\n> Waiting: confirm price_annual\n  vs price_monthly mapping...`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

function GitStrip() {
  return (
    <div
      className="composition-panel composition-panel--git relative z-20 w-full"
      aria-hidden
    >
      <div className="flex flex-col gap-2 p-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[9px]">
          <StatusChip variant="green">worktree</StatusChip>
          <span className="text-[var(--muted)]">feat/flx-41-settings</span>
          <span className="hidden text-[var(--muted)] sm:inline">→</span>
          <span className="text-foreground/80">main</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded border border-[var(--border-subtle)] bg-[var(--surface-inset)] px-2 py-0.5 font-mono text-[9px] text-[var(--status-green)]">
            +128 −12
          </span>
          <span className="composition-chip composition-chip--violet">
            PR #84 ready
          </span>
          <span className="text-[10px] text-[var(--muted)]">Review & ship</span>
        </div>
      </div>
      <div className="composition-diff-preview hidden border-t border-[var(--border-subtle)] px-2.5 py-2 font-mono text-[8px] leading-relaxed text-[var(--muted)] sm:block">
        <span className="text-[var(--status-green)]">+</span> export async
        function createCheckoutSession(...)
      </div>
    </div>
  );
}

/** Cinematic Fluxx product composition for the hero viewport. */
export function ProductShowcase() {
  return (
    <div
      id="product"
      className="composition-root motion-safe mx-auto w-full max-w-6xl"
      role="img"
      aria-label="Fluxx workspace showing planning docs turning ideas into kanban tasks, an agent terminal waiting for input, and a git worktree ready for review"
    >
      <div className="composition-stage relative">
        {floatingLabels.map((label) => (
          <span key={label.text} className={label.className}>
            {label.text}
          </span>
        ))}

        <div className="composition-layout">
          <PlanningPanel />
          <KanbanBoard />
          <TaskDetailPanel />
          <GitStrip />
        </div>
      </div>
    </div>
  );
}
