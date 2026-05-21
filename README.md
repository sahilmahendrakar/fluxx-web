# Fluxx marketing site (`fluxx-web`)

Next.js app for [fluxx.sh](https://fluxx.sh).

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy environment variables

Public env vars are read via `lib/public-env.ts` (`NEXT_PUBLIC_FLUXX_*`, with one-release fallback to `NEXT_PUBLIC_FLUX_*`).

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_FLUXX_DOWNLOAD_URL_ARM64` | Apple Silicon macOS DMG URL (primary default on unknown arch) |
| `NEXT_PUBLIC_FLUXX_DOWNLOAD_URL_X64` | Intel macOS DMG URL |
| `NEXT_PUBLIC_FLUXX_DOWNLOAD_URL` | Legacy single URL; falls back to arm64 when `*_ARM64` is unset |
| `NEXT_PUBLIC_FLUXX_GITHUB_URL` | GitHub repo link |
| `NEXT_PUBLIC_FLUXX_DEMO_VIDEO_SRC` | Demo MP4 path or URL |

Defaults (when unset) point at `sahilmahendrakar/fluxx` latest release assets:

- `Fluxx-arm64.dmg`
- `Fluxx-x64.dmg`

The Mac download control (`components/site/MacDownloadButton.tsx`) auto-selects arm64 vs x64 on macOS when possible; users can override via the architecture dropdown.

## Build

```bash
pnpm build
pnpm start
```
