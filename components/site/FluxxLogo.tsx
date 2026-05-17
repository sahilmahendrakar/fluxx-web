import Image from "next/image";

type FluxxLogoProps = {
  className?: string;
};

/** Fluxx wordmark with app icon. */
export function FluxxLogo({ className = "" }: FluxxLogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-semibold tracking-tight ${className}`.trim()}
    >
      <Image
        src="/flux-icon.png"
        alt=""
        width={28}
        height={28}
        className="size-7 shrink-0 rounded-lg"
        aria-hidden
      />
      <span>Fluxx</span>
    </span>
  );
}
