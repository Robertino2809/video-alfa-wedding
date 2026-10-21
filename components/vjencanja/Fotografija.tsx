import Image from "next/image";
import FadeIn from "./FadeIn";
import { getImageDimensions } from "./imageDimensions";

export type FotografijaProps = {
  src: string;
  alt: string;
  /** Postavlja <Par>; u MDX-u se ne koristi. */
  inPair?: boolean;
};

export function assertPhoto({ src, alt }: { src?: string; alt?: string }) {
  if (!src) throw new Error("[vjencanja] <Fotografija> nema src");
  if (!alt || alt.trim() === "") {
    throw new Error(`[vjencanja] <Fotografija src="${src}"> nema alt`);
  }
}

export default function Fotografija({ src, alt, inPair }: FotografijaProps) {
  assertPhoto({ src, alt });

  if (inPair) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  const { width, height } = getImageDimensions(src);
  // Uspravne fotografije ne smiju biti više od ~90% visine ekrana.
  return (
    <FadeIn
      className="my-16 md:my-20 mx-auto"
      style={{ maxWidth: `calc(90vh * ${(width / height).toFixed(4)})` }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 1024px) 1024px, 100vw"
        className="w-full h-auto"
      />
    </FadeIn>
  );
}
