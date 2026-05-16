import type { ReactNode } from "react";
import {
  CompositionPanel,
  PanelBody,
  PanelHeader,
  StatusChip,
} from "@/components/site/CompositionPrimitives";

/** Mini planning doc + assistant — Plan step & planning workspace. */
export function PlanningDocFragment({ compact = false }: { compact?: boolean }) {
  return (
    <CompositionPanel className="w-full">
      <PanelHeader>
        <StatusChip variant="violet">Planning</StatusChip>
        <span className="font-mono text-[10px] text-[var(--muted)]">
          product-brief.md
        </span>
      </PanelHeader>
      <PanelBody className={`space-y-2 ${compact ? "p-2.5" : "p-3"}`}>
        <p className="text-[11px] font-medium leading-snug text-foreground/90">
          Add team billing with Stripe checkout
        </p>
        <div className="rounded-md border border-[var(--border-subtle)] bg-[var(--surface-inset)] p-2">
          <p className="mb-1 text-[9px] font-medium uppercase tracking-wider text-[var(--brand-violet)]">
            Planning assistant
          </p>
          <p className="text-[10px] leading-relaxed text-[var(--muted)]">
            Scoped into 4 tasks with dependencies and implementation notes.
          </p>
        </div>
        <ul className="space-y-1 font-mono text-[9px] text-[var(--muted)]">
          <li className="flex items-center gap-1.5">
            <span className="size-1 rounded-full bg-[var(--brand-violet)]" />
            FLX-42 Stripe checkout API
          </li>
          {!compact ? (
            <li className="flex items-center gap-1.5">
              <span className="size-1 rounded-full bg-[var(--muted)]/50" />
              FLX-43 Webhook handler
            </li>
          ) : null}
        </ul>
        {!compact ? (
          <p className="border-t border-[var(--border-subtle)] pt-2 text-[9px] text-[var(--muted)]">
            Decision: annual vs monthly seat pricing — attached to FLX-42
          </p>
        ) : null}
      </PanelBody>
    </CompositionPanel>
  );
}

/** Task delegation with agent + worktree cue. */
export function DelegateTaskFragment() {
  return (
    <CompositionPanel className="w-full">
      <PanelHeader>
        <span className="font-mono text-[10px] text-[var(--muted)]">FLX-42</span>
        <StatusChip variant="blue">Delegated</StatusChip>
      </PanelHeader>
      <PanelBody className="space-y-2 p-3">
        <p className="text-[11px] font-medium">Stripe checkout API</p>
        <div className="flex flex-wrap gap-1">
          <StatusChip variant="violet">Claude Code</StatusChip>
          <StatusChip>worktree</StatusChip>
        </div>
        <div className="composition-terminal">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-2 py-1">
            <span className="font-mono text-[9px] text-[var(--status-blue)]">
              claude · feat/flx-42-checkout
            </span>
            <span className="text-[8px] text-[var(--muted)]">running</span>
          </div>
          <pre className="composition-terminal-body font-mono text-[9px] leading-relaxed text-[var(--muted)]">
            <code>{`> Reading project context\n> Creating checkout session handler...`}</code>
          </pre>
        </div>
      </PanelBody>
    </CompositionPanel>
  );
}

const trackColumns = [
  { title: "In progress", count: 2, highlight: false },
  { title: "Needs input", count: 1, highlight: true },
  { title: "Review", count: 1, highlight: false },
] as const;

/** Compact board columns for Track step & kanban feature. */
export function KanbanTrackFragment({ detailed = false }: { detailed?: boolean }) {
  return (
    <CompositionPanel className="w-full">
      <PanelHeader>
        <span className="text-[11px] font-medium">flux-app</span>
        <div className="flex gap-1">
          <StatusChip>Board</StatusChip>
          {detailed ? <StatusChip variant="amber">1 blocked</StatusChip> : null}
        </div>
      </PanelHeader>
      <PanelBody className="p-2.5">
        <div
          className={`grid gap-1.5 ${detailed ? "grid-cols-4" : "grid-cols-3"}`}
        >
          {detailed ? (
            <div className="composition-column">
              <p className="composition-column-title">Backlog</p>
              <div className="composition-card opacity-70">
                <p className="text-[10px] font-medium">OAuth flow</p>
                <StatusChip>planned</StatusChip>
              </div>
            </div>
          ) : null}
          {trackColumns.map((col) => (
            <div key={col.title} className="composition-column">
              <p className="composition-column-title">{col.title}</p>
              <div
                className={`composition-card${col.highlight ? " composition-card--needs-input" : ""}`}
              >
                <p className="text-[10px] font-medium">
                  {col.highlight ? "Stripe checkout" : "Settings page"}
                </p>
                <div className="mt-1">
                  <StatusChip variant={col.highlight ? "amber" : "green"}>
                    {col.highlight ? "needs input" : "ready"}
                  </StatusChip>
                </div>
              </div>
            </div>
          ))}
          {detailed ? (
            <div className="composition-column">
              <p className="composition-column-title">Done</p>
              <div className="composition-card">
                <p className="text-[10px] font-medium">Health check</p>
                <StatusChip variant="green">shipped</StatusChip>
              </div>
            </div>
          ) : null}
        </div>
        {detailed ? (
          <div className="mt-2 flex flex-wrap gap-1 border-t border-[var(--border-subtle)] pt-2">
            <StatusChip>billing</StatusChip>
            <StatusChip variant="amber">blocker: API keys</StatusChip>
          </div>
        ) : null}
      </PanelBody>
    </CompositionPanel>
  );
}

/** Diff / PR strip for Review step. */
export function ReviewGitFragment() {
  return (
    <CompositionPanel className="w-full">
      <PanelHeader>
        <StatusChip variant="green">Ready for review</StatusChip>
        <span className="font-mono text-[10px] text-[var(--muted)]">PR #84</span>
      </PanelHeader>
      <PanelBody className="space-y-2 p-3">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[9px]">
          <StatusChip variant="green">worktree</StatusChip>
          <span className="text-[var(--muted)]">feat/flx-41-settings</span>
          <span className="text-[var(--muted)]">→ main</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded border border-[var(--border-subtle)] bg-[var(--surface-inset)] px-2 py-0.5 font-mono text-[9px] text-[var(--status-green)]">
            +128 −12
          </span>
          <StatusChip variant="violet">handoff ready</StatusChip>
        </div>
        <pre className="rounded-md border border-[var(--border-subtle)] bg-[var(--surface-inset)] p-2 font-mono text-[8px] leading-relaxed text-[var(--muted)]">
          <code>
            <span className="text-[var(--status-green)]">+</span> export async
            function createCheckoutSession(...)
          </code>
        </pre>
        <p className="text-[9px] text-[var(--muted)]">
          Team update: ready for your review before merge
        </p>
      </PanelBody>
    </CompositionPanel>
  );
}

/** Multi-agent task list. */
export function DelegatedAgentsFragment() {
  const sessions = [
    { task: "FLX-42 Stripe API", agent: "Claude Code", state: "needs input" },
    { task: "FLX-38 Webhooks", agent: "Codex", state: "running" },
    { task: "FLX-35 Admin UI", agent: "Cursor Agent", state: "running" },
  ] as const;

  return (
    <CompositionPanel className="w-full">
      <PanelHeader>
        <span className="text-[11px] font-medium">Agent sessions</span>
        <StatusChip variant="blue">3 active</StatusChip>
      </PanelHeader>
      <PanelBody className="divide-y divide-[var(--border-subtle)]">
        {sessions.map((s) => (
          <div key={s.task} className="flex items-start justify-between gap-2 p-2.5">
            <div>
              <p className="font-mono text-[10px] font-medium">{s.task}</p>
              <p className="text-[9px] text-[var(--muted)]">{s.agent}</p>
            </div>
            <StatusChip
              variant={
                s.state === "needs input"
                  ? "amber"
                  : s.state === "running"
                    ? "blue"
                    : "default"
              }
            >
              {s.state}
            </StatusChip>
          </div>
        ))}
      </PanelBody>
    </CompositionPanel>
  );
}

/** Worktree isolation visual. */
export function WorktreesFragment() {
  const trees: Array<{
    branch: string;
    label: string;
    active: boolean;
    protected?: boolean;
  }> = [
    { branch: "feat/flx-42-checkout", label: "FLX-42", active: true },
    { branch: "feat/flx-38-webhooks", label: "FLX-38", active: false },
    { branch: "main", label: "protected", active: false, protected: true },
  ];

  return (
    <CompositionPanel className="w-full">
      <PanelHeader>
        <StatusChip variant="green">Git worktrees</StatusChip>
        <span className="text-[10px] text-[var(--muted)]">isolated per task</span>
      </PanelHeader>
      <PanelBody className="space-y-1.5 p-3">
        {trees.map((t) => (
          <div
            key={t.branch}
            className={`flex items-center justify-between rounded-md border px-2.5 py-2 font-mono text-[9px] ${
              t.active
                ? "border-[var(--brand-violet)]/40 bg-[var(--brand-violet)]/5"
                : "border-[var(--border-subtle)] bg-[var(--surface-inset)]"
            }`}
          >
            <span
              className={
                t.protected ? "text-[var(--muted)]" : "text-foreground/90"
              }
            >
              {t.branch}
            </span>
            <span className="text-[var(--muted)]">{t.label}</span>
          </div>
        ))}
        <p className="pt-1 text-[9px] text-[var(--muted)]">
          Agents never touch your main checkout — branch maps to task and PR
        </p>
      </PanelBody>
    </CompositionPanel>
  );
}

/** Team sync + automation cues. */
export function TeamSyncFragment() {
  return (
    <CompositionPanel className="w-full">
      <PanelHeader>
        <StatusChip>Team board</StatusChip>
        <StatusChip variant="violet">automation</StatusChip>
      </PanelHeader>
      <PanelBody className="space-y-2 p-3">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-[var(--muted)]">Shared visibility</span>
          <span className="font-medium">3 teammates online</span>
        </div>
        <ul className="space-y-1.5 text-[10px]">
          <li className="flex items-center gap-2 rounded-md border border-[var(--border-subtle)] bg-[var(--surface-inset)] px-2 py-1.5">
            <StatusChip variant="green">auto</StatusChip>
            <span className="text-[var(--muted)]">
              Blocker cleared → moved to In progress
            </span>
          </li>
          <li className="flex items-center gap-2 rounded-md border border-[var(--border-subtle)] bg-[var(--surface-inset)] px-2 py-1.5">
            <StatusChip variant="violet">handoff</StatusChip>
            <span className="text-[var(--muted)]">
              PR #84 assigned for review
            </span>
          </li>
        </ul>
        <p className="text-[9px] text-[var(--muted)]">
          Cloud team sync — availability varies by release
        </p>
      </PanelBody>
    </CompositionPanel>
  );
}

/** Persistent terminal attach visual. */
export function TerminalsFragment() {
  return (
    <CompositionPanel className="w-full">
      <PanelHeader>
        <span className="font-mono text-[10px] text-[var(--status-blue)]">
          PTY · warm attach
        </span>
        <StatusChip variant="amber">Needs input</StatusChip>
      </PanelHeader>
      <PanelBody className="space-y-2 p-3">
        <div className="composition-terminal">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-2 py-1">
            <span className="font-mono text-[9px] text-[var(--muted)]">
              session survived window close
            </span>
          </div>
          <pre className="composition-terminal-body font-mono text-[9px] leading-relaxed text-[var(--muted)]">
            <code>{`> Reattached to running agent\n> Silence detected — waiting for input\n> Confirm price_annual mapping?`}</code>
          </pre>
        </div>
        <p className="text-[9px] text-[var(--muted)]">
          Electron owns the PTY — reopen Flux and pick up where the agent paused
        </p>
      </PanelBody>
    </CompositionPanel>
  );
}

export const workflowStepVisuals: Record<string, () => ReactNode> = {
  plan: () => <PlanningDocFragment compact />,
  delegate: () => <DelegateTaskFragment />,
  track: () => <KanbanTrackFragment />,
  review: () => <ReviewGitFragment />,
};

export const featureVisuals: Record<string, () => ReactNode> = {
  planning: () => <PlanningDocFragment />,
  kanban: () => <KanbanTrackFragment detailed />,
  agents: () => <DelegatedAgentsFragment />,
  worktrees: () => <WorktreesFragment />,
  team: () => <TeamSyncFragment />,
  terminals: () => <TerminalsFragment />,
};
