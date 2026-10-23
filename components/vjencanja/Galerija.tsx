import { Children, isValidElement } from "react";
import GalerijaGrid from "./GalerijaGrid";
import { assertPhoto, type FotografijaProps } from "./Fotografija";
import { getImageDimensions } from "./imageDimensions";
import { justifyRows } from "./photoLayout";

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

  // Raspored redova računa se pri buildu; u browseru se redovi samo skaliraju.
  const rows = justifyRows(images.map(({ width, height }) => width / height));

  return <GalerijaGrid images={images} rows={rows} />;
}
