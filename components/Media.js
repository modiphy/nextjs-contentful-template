import Image from "next/image";
import ogImage from "../public/og-image.png";

export default function Media({ media }) {
  // If there is video data, set video as media content
  if (/(video)/.test(media?.fields?.file?.contentType)) {
    return (
      <video
        className="aspect-[16/9] w-full rounded bg-primary-500 shadow-lg"
        src={`https:${media.fields.file.url}`}
        autoPlay
        muted
        loop
      />
    );
  }

  // If image data exists, return image
  if (/(image)/.test(media?.fields?.file?.contentType)) {
    return (
      <div className="relative overflow-hidden rounded-sm bg-primary-500 text-[0] shadow-lg">
        <Image
          src={`https:${media?.fields?.file?.url}`}
          height={media?.fields?.file?.details?.image?.height}
          width={media?.fields?.file?.details?.image?.width}
          objectfit="cover"
          placeholder="blur"
          blurDataURL={ogImage}
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-primary-500 shadow-lg">
      <Image src={ogImage} layout="fill" />
    </div>
  );
}
