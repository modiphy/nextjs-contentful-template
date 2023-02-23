import Image from "next/image";
import ogImage from "../public/og-image.png";

export default function Media({ media }) {
  // If there is video data, set video as media content
  if (/(video)/.test(media?.fields?.file?.contentType)) {
    return (
      <video
        className="aspect-[16/9] w-full bg-gray-500 shadow-lg"
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
      <Image
        className="relative overflow-hidden bg-gray-500 text-[0] shadow-lg"
        src={`https:${media?.fields?.file?.url}`}
        height={media?.fields?.file?.details?.image?.height}
        width={media?.fields?.file?.details?.image?.width}
        objectfit="cover"
        alt=""
      />
    );
  }

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-500 shadow-lg">
      <Image src={ogImage} alt="" fill />
    </div>
  );
}
