/**
 * Shared site content and environment-driven URLs for the Fluxx marketing page.
 */

export const SITE_URL = "https://fluxx.sh";

/** Fallback DMG (0.1.1 arm64). Override with NEXT_PUBLIC_FLUXX_DOWNLOAD_URL when a Fluxx-named release ships. */
export const DEFAULT_DOWNLOAD_URL =
  "https://github.com/sahilmahendrakar/fluxx-web/releases/download/v0.1.1/Flux-0.1.1-arm64.dmg";

export const DEFAULT_GITHUB_URL = "https://github.com/sahilmahendrakar/fluxx";

/** Self-hosted demo in `public/demo/`. Override with NEXT_PUBLIC_FLUXX_DEMO_VIDEO_SRC. */
export const DEFAULT_DEMO_VIDEO_SRC = "/demo/flux-demo-short.mp4";

/** Optional YouTube fallback when NEXT_PUBLIC_FLUXX_DEMO_VIDEO_SRC is unset and you set NEXT_PUBLIC_FLUXX_DEMO_VIDEO_ID instead — prefer the MP4 for the marketing page. */
export const DEFAULT_DEMO_VIDEO_ID = "uh_haSxyhyw";

export const siteMetadata = {
  title: "Fluxx — AI-native project management for software development",
  description:
    "Fluxx is AI-native project management for software development, bringing planning docs, kanban, coding agents, git worktrees, team sync, and automation into one workspace.",
} as const;

/** Required homepage copy — use verbatim across the site. */
export const requiredCopy = {
  category: "AI-native project management for software development.",
  heroBody:
    "Fluxx brings planning docs, kanban, coding agents, git worktrees, team sync, and automation into one project management workspace, so a single engineer can plan work, delegate to agents, review progress, and ship with confidence.",
  promiseLine:
    "Turn product intent into planned, delegated, tracked, reviewed engineering work.",
} as const;

export type SiteUrls = {
  downloadUrl: string;
  githubUrl: string;
  /** Path or URL to an MP4/WebM served from `public/` or a CDN. */
  demoVideoSrc: string;
};

function envOrLegacy(
  primary: string | undefined,
  legacy: string | undefined,
): string | undefined {
  return primary ?? legacy;
}

export function getSiteUrls(): SiteUrls {
  const downloadUrl =
    envOrLegacy(
      process.env.NEXT_PUBLIC_FLUXX_DOWNLOAD_URL,
      process.env.NEXT_PUBLIC_FLUX_DOWNLOAD_URL,
    ) ?? DEFAULT_DOWNLOAD_URL;
  const githubUrl =
    envOrLegacy(
      process.env.NEXT_PUBLIC_FLUXX_GITHUB_URL,
      process.env.NEXT_PUBLIC_FLUX_GITHUB_URL,
    ) ?? DEFAULT_GITHUB_URL;
  const demoVideoSrc =
    envOrLegacy(
      process.env.NEXT_PUBLIC_FLUXX_DEMO_VIDEO_SRC,
      process.env.NEXT_PUBLIC_FLUX_DEMO_VIDEO_SRC,
    ) ?? DEFAULT_DEMO_VIDEO_SRC;

  return { downloadUrl, githubUrl, demoVideoSrc };
}

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Demo", href: "#demo" },
  { label: "FAQ", href: "#faq" },
  { label: "GitHub", href: "#github" },
];

export const heroContent = {
  eyebrow: "Fluxx",
  title: requiredCopy.category.replace(/\.$/, ""),
  body: requiredCopy.heroBody,
  promiseLine: requiredCopy.promiseLine,
  trustRow: [
    "Planning docs + kanban",
    "Coding agents + isolated worktrees",
    "Team sync + automations",
  ],
} as const;

export const ctaLabels = {
  downloadMac: "Download for macOS",
  watchDemo: "Watch demo",
  viewGithub: "View on GitHub",
} as const;

export const demoSection = {
  headline: "See Fluxx in motion.",
  steps: [
    "Plan from docs and project context.",
    "Delegate scoped tasks to agents.",
    "Track, review, and ship from one place.",
  ],
} as const;

export type WorkflowStep = {
  id: string;
  title: string;
  description: string;
};

export const howItWorksSteps: WorkflowStep[] = [
  {
    id: "plan",
    title: "Plan",
    description:
      "Capture product intent in synced docs, then use the planning assistant to turn it into scoped engineering tasks.",
  },
  {
    id: "delegate",
    title: "Delegate",
    description:
      "Assign tasks to coding agents with the right project context, terminal, and isolated git worktree.",
  },
  {
    id: "track",
    title: "Track",
    description:
      "Use the board to see what is running, blocked, waiting for input, ready for review, or done.",
  },
  {
    id: "review",
    title: "Review",
    description:
      "Inspect outputs, diffs, PRs, handoffs, and team updates before shipping.",
  },
];

export type WorkflowPillar = {
  id: string;
  label: string;
  tagline: string;
};

export const workflowPillars: WorkflowPillar[] = [
  {
    id: "plan",
    label: "Plan the work",
    tagline: "Synced docs, planning assistant, and scoped task breakdowns.",
  },
  {
    id: "delegate",
    label: "Delegate the work",
    tagline: "Assign tasks to coding agents with isolated worktrees.",
  },
  {
    id: "manage",
    label: "Manage the work",
    tagline: "Kanban state, needs-input signals, labels, and team sync.",
  },
  {
    id: "ship",
    label: "Ship with confidence",
    tagline: "Keep intent, execution, progress, and review in one workspace.",
  },
];

export type MarketingScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

/** Real Fluxx UI captures — hybrid marketing visuals. */
export const marketingScreenshots = {
  heroBoard: {
    src: "/marketing/hero-board.png",
    alt: "Fluxx kanban board with backlog, in progress, needs input, review, and done columns",
    width: 3024,
    height: 1838,
  },
  agentSession: {
    src: "/marketing/agent-session.png",
    alt: "Fluxx task workspace showing an agent session with scoped context and follow-up input",
    width: 2464,
    height: 1736,
  },
  planningAssistant: {
    src: "/marketing/planning-assistant.png",
    alt: "Fluxx board beside the planning assistant recommending what to work on next",
    width: 3024,
    height: 1898,
  },
} as const satisfies Record<string, MarketingScreenshot>;

/** Feature sections that use a screenshot instead of HTML mocks. */
export const featureScreenshots: Partial<Record<string, MarketingScreenshot>> = {
  planning: marketingScreenshots.planningAssistant,
  kanban: marketingScreenshots.heroBoard,
  agents: marketingScreenshots.agentSession,
};

export type FeatureBlock = {
  id: string;
  title: string;
  message: string;
  proofPoints: string[];
};

export const featureBlocks: FeatureBlock[] = [
  {
    id: "planning",
    title: "Planning workspace",
    message: "Turn rough product ideas into executable engineering plans.",
    proofPoints: [
      "Synced planning docs live beside the project.",
      "Planning assistant inspects context and helps split work into scoped tasks.",
      "Decisions, implementation notes, and breakdowns stay attached to execution.",
    ],
  },
  {
    id: "kanban",
    title: "Kanban as project command center",
    message: "Manage AI-assisted work like a real engineering project.",
    proofPoints: [
      "Backlog, in-progress, needs-input, review, and done flows.",
      "Labels, blockers, filters, and rich task detail.",
      "Board state reflects what needs attention — not just what exists.",
    ],
  },
  {
    id: "agents",
    title: "Delegated agent work",
    message: "Give each task to an agent without losing control.",
    proofPoints: [
      "Scoped task sessions with project context baked in.",
      "Run Claude Code, Codex, Cursor Agent, and other CLI agents.",
      "Each session keeps context tied to the task, not a loose terminal tab.",
    ],
  },
  {
    id: "worktrees",
    title: "Isolated worktrees",
    message: "Every task gets a clean workspace.",
    proofPoints: [
      "Git worktree per delegated task.",
      "Agents do not stomp your main checkout.",
      "Branch and PR flows map back to each task.",
    ],
  },
  {
    id: "team",
    title: "Team sync and automations",
    message: "Keep humans, agents, and project state aligned.",
    proofPoints: [
      "Shared boards for team visibility where cloud sync is enabled.",
      "Automations for status transitions and unblocked work.",
      "PR, handoff, and review direction as workflows mature.",
    ],
  },
  {
    id: "terminals",
    title: "Persistent terminals",
    message: "Close the window without losing the work.",
    proofPoints: [
      "Electron main process owns PTYs — sessions survive app restarts.",
      "Warm attach when you reopen a task.",
      "Silence-based needs-input detection surfaces when an agent is stuck.",
    ],
  },
];

export type IntegrationItem = {
  name: string;
  note?: string;
};

export const agentBandContent = {
  headline: "Built for the CLI agents and workflows you already use",
  subline:
    "Verified paths today; broader integrations as they stabilize.",
} as const;

export const supportedIntegrations: IntegrationItem[] = [
  { name: "Claude Code" },
  { name: "Codex" },
  { name: "Cursor Agent" },
  { name: "GitHub" },
  { name: "Git worktrees" },
  { name: "Planning docs" },
  { name: "Team sync", note: "cloud" },
  { name: "Automation" },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What is Fluxx?",
    answer:
      "Fluxx is AI-native project management for software development — a workspace where you plan work, delegate to coding agents, track progress on a kanban board, and review outcomes before shipping.",
  },
  {
    question: "Is Fluxx a project management tool or an agent runner?",
    answer:
      "Both, integrated. Fluxx is built around the full loop: plan from docs, delegate scoped tasks to agents with isolated worktrees, track state on a board, and review diffs and PRs — not just parallel terminal sessions.",
  },
  {
    question: "Which agents does Fluxx support?",
    answer:
      "Fluxx is designed for CLI-based coding agents you already use, including Claude Code, Codex, and Cursor-style agents. Support varies by integration maturity.",
  },
  {
    question: "Does Fluxx use git worktrees?",
    answer:
      "Yes. Each delegated task can run in its own git worktree so agents do not collide on your main checkout.",
  },
  {
    question: "Is my code sent to Fluxx?",
    answer:
      "Fluxx runs against your local repositories. Your code stays on your machine unless you explicitly use cloud/team features that sync project state.",
  },
  {
    question: "Is Fluxx local-first?",
    answer:
      "Yes. The core workflow runs on your machine with real repos. Cloud and team sync are optional where collaboration helps.",
  },
  {
    question: "Does it work with existing repos?",
    answer:
      "Yes. Point Fluxx at repositories you already have on disk.",
  },
  {
    question: "Is there a cloud/team mode?",
    answer:
      "Team sync and shared boards are part of the broader vision. Check current release notes for what is available in your build.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "macOS is the primary download today. Other platforms may follow — see the download page and GitHub for the latest.",
  },
  {
    question: "Is Fluxx open source?",
    answer:
      "View the repository on GitHub for license and contribution details.",
  },
];

export const finalCta = {
  headline: "Turn intent into shipped software.",
} as const;

export const footerContent = {
  tagline: "AI-native project management for software development.",
  copyright: `© ${new Date().getFullYear()} Fluxx`,
} as const;
