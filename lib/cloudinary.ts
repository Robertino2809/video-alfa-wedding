const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string;

export function cldUrl(
  publicId: string,
  width: number = 1200
): string {
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_${width}/${publicId}`;
}