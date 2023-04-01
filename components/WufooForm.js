export default function WufooForm({
  children,
  marginBottom,
  marginTop,
  border,
}) {
  return (
    <div
      className={`py-10g flex flex-1 justify-center lg:py-14 ${marginBottom} ${marginTop}`}
    >
      <div
        className={`relative flex max-w-xl flex-1 items-center justify-center rounded-xl bg-white p-4 md:p-6 ${border}`}
      >
        {children}
      </div>
    </div>
  );
}
