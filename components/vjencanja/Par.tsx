import { createHash } from "node:crypto";
import { Children, cloneElement, isValidElement } from "react";
import FadeIn from "./FadeIn";
import { assertPhoto, type FotografijaProps } from "./Fotografija";
import { getImageDimensions } from "./imageDimensions";
import { GAP, MD_CONTENT_WIDTH, PAIR_MIN_HEIGHT } from "./photoLayout";

export default function Par({ children }: { children: React.ReactNode }) {
  const photos = Children.toArray(children).filter(
    isValidElement<FotografijaProps>
  );
  if (photos.length !== 2) {
    throw new Error(
      `[vjencanja] <Par> mora sadržavati točno dvije <Fotografija>, a ima ${photos.length}`
    );
  }

  const ratios = photos.map(({ props }) => {
    assertPhoto(props);
    const { width, height } = getImageDimensions(props.src);
    return width / height;
  });
  const sum = ratios[0] + ratios[1];

  // Jedna pored druge (iste visine, širine prema omjeru) tek kad je sadržaj
  // dovoljno širok da obje budu visoke barem PAIR_MIN_HEIGHT; na mobitelu uvijek
  // jedna ispod druge. Prag ovisi o omjerima, pa se piše kao container query.
  const minWidth = Math.ceil(Math.max(MD_CONTENT_WIDTH, PAIR_MIN_HEIGHT * sum + GAP));
  const id =
    "par-" +
    createHash("md5")
      .update(photos.map(({ props }) => props.src).join("|"))
      .digest("hex")
      .slice(0, 8);
  // Par ne smije biti viši od ~90% visine ekrana (kao i samostalne uspravne fotke).
  const css = `@container (min-width: ${minWidth}px) {
  .${id} { flex-direction: row; max-width: calc(90vh * ${sum.toFixed(4)} + ${GAP}px); }
  .${id} > .par-item { flex: var(--r) 1 0%; min-width: 0; }
}`;

  return (
    <FadeIn className="my-16 md:my-20 @container">
      <style>{css}</style>
      <div className={`${id} mx-auto flex flex-col gap-2`}>
        {photos.map((photo) => cloneElement(photo, { inPair: true }))}
      </div>
    </FadeIn>
  );
}
