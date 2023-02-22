import Link from "next/link";

export default function Button({ text, pageRef, url, className = "" }) {
  return (
    <Link
      href={pageRef ? `/${pageRef.fields.slug}` : url}
      className={className}
    >
      {text}
    </Link>
  );
}
