"use client";

import Image from "next/image";
import { cldUrl } from "@/lib/cloudinary";

interface CloudImageProps {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function CloudImage({
  publicId,
  alt,
  width = 1200,
  height = 800,
  className = "",
}: CloudImageProps) {
  return (
    <Image
      src={cldUrl(publicId, width)}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}