/**
 * Reads `NEXT_PUBLIC_FLUXX_<suffix>`, falling back to deprecated
 * `NEXT_PUBLIC_FLUX_<suffix>` for one release.
 */
export function readPublicFluxxEnv(suffix: string): string | undefined {
  const fluxx = process.env[`NEXT_PUBLIC_FLUXX_${suffix}`];
  if (fluxx !== undefined && fluxx !== "") {
    return fluxx;
  }
  const legacy = process.env[`NEXT_PUBLIC_FLUX_${suffix}`];
  if (legacy !== undefined && legacy !== "") {
    return legacy;
  }
  return undefined;
}
