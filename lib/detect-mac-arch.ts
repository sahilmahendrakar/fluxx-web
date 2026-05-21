export type MacArch = "arm64" | "x64" | "unknown";

function isMacOsUserAgent(): boolean {
  if (typeof navigator === "undefined") {
    return false;
  }
  const ua = navigator.userAgent;
  if (/Macintosh|Mac OS X/i.test(ua)) {
    return true;
  }
  return navigator.userAgentData?.platform === "macOS";
}

function archFromWebGlRenderer(): MacArch | null {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") ?? canvas.getContext("experimental-webgl");
    if (!gl || !(gl instanceof WebGLRenderingContext)) {
      return null;
    }
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (!debugInfo) {
      return null;
    }
    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    if (typeof renderer !== "string") {
      return null;
    }
    const lower = renderer.toLowerCase();
    if (
      /apple m\d|apple gpu|apple silicon/.test(lower) ||
      (lower.includes("apple") && !lower.includes("intel"))
    ) {
      return "arm64";
    }
    if (/intel|amd|radeon|nvidia|geforce/.test(lower)) {
      return "x64";
    }
  } catch {
    return null;
  }
  return null;
}

/** Best-effort macOS CPU arch; non-Mac and failures return `"unknown"`. */
export async function detectMacArch(): Promise<MacArch> {
  if (typeof navigator === "undefined" || !isMacOsUserAgent()) {
    return "unknown";
  }

  if (navigator.userAgentData?.getHighEntropyValues) {
    try {
      const { architecture } =
        await navigator.userAgentData.getHighEntropyValues(["architecture"]);
      if (architecture === "arm") {
        return "arm64";
      }
      if (architecture === "x86") {
        return "x64";
      }
    } catch {
      // fall through to WebGL heuristic
    }
  }

  return archFromWebGlRenderer() ?? "unknown";
}

export function archToDownloadUrl(
  arch: MacArch,
  urls: { arm64: string; x64: string },
): string {
  if (arch === "x64") {
    return urls.x64;
  }
  return urls.arm64;
}
