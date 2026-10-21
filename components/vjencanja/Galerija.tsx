import { Children, isValidElement } from "react";
import GalerijaGrid from "./GalerijaGrid";
import { assertPhoto, type FotografijaProps } from "./Fotografija";
import { getImageDimensions } from "./imageDimensions";

export default function Galerija({ children }: { children: React.ReactNode }) {
  const images = Children.toArray(children)
    .filter(isValidElement<FotografijaProps>)
    .map(({ props }) => {
      assertPhoto(props);
      return { src: props.src, alt: props.alt, ...getImageDimensions(props.src) };
    });

  if (images.length === 0) {
    throw new Error("[vjencanja] <Galerija> nema nijednu <Fotografija>");
  }

  return <GalerijaGrid images={images} />;
}
