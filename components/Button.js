export default function Button({ text, pageRef, url, className = "" }) {
  return (
    <a href={pageRef ? `/${pageRef.fields.slug}` : url} className={className}>
      {text}
    </a>
  );
}
