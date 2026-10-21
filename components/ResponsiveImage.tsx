import responsiveImages from "@/lib/responsive-images.json";

type Props = {
  src: string;
  alt: string;
  /** Hero slika iznad pregiba: bez lazy loadinga i s fetchpriority="high". */
  priority?: boolean;
  sizes?: string;
  className?: string;
};

type Entry = { width: number; height: number; srcSet: string };
const images: Record<string, Entry> = responsiveImages;

/** srcSet i dimenzije slike koje generira scripts/optimize-images.mjs (ako postoje). */
export function getResponsiveImage(src: string): Entry | undefined {
  return images[src];
}

/**
 * Pozadinska slika preko cijele sekcije (kao next/image s `fill`), ali s
 * responzivnim verzijama iz scripts/optimize-images.mjs, da mobitel skida
 * manju datoteku. Za slike bez responzivnih verzija koristi samo `src`.
 */
export default function ResponsiveImage({
  src,
  alt,
  priority = false,
  sizes = "100vw",
  className = "",
}: Props) {
  const entry = images[src];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      srcSet={entry?.srcSet}
      sizes={entry ? sizes : undefined}
      width={entry?.width}
      height={entry?.height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
