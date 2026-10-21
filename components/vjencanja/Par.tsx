import { Children, cloneElement, isValidElement } from "react";
import FadeIn from "./FadeIn";
import type { FotografijaProps } from "./Fotografija";

export default function Par({ children }: { children: React.ReactNode }) {
  const photos = Children.toArray(children).filter(
    isValidElement<FotografijaProps>
  );
  if (photos.length !== 2) {
    throw new Error(
      `[vjencanja] <Par> mora sadržavati točno dvije <Fotografija>, a ima ${photos.length}`
    );
  }

  return (
    <FadeIn className="my-16 md:my-20 grid grid-cols-1 md:grid-cols-2 gap-2">
      {photos.map((photo) => cloneElement(photo, { inPair: true }))}
    </FadeIn>
  );
}
