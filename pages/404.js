import Link from "next/link";

export default function Error() {
  return (
    <>
      {/* Temporary banner so that the header can be seen */}
      <div className="h-[95px] bg-gray-900"></div>

      <section className="relative bg-transparent">
        <div className="container relative z-1 max-w-screen-lg pt-12 pb-12 text-center md:pt-12 md:pb-12 lg:pt-16 lg:pb-16 xl:pt-20 xl:pb-20">
          <div className="">
            <h2
              className="text-theme-title font-heading text-4xl font-extrabold md:text-5xl"
              color="text-theme-title"
            >
              Wait a second...
            </h2>

            <div className="prose-bg-primary-lighter prose mx-auto mt-6 md:prose-lg">
              This page has no sections. Create some{" "}
              <Link
                href="https://app.contentful.com/spaces/wad6hnejkmsy/entries?id=v39anGlN192MZmXk&contentTypeId=page&order.fieldId=updatedAt&order.direction=descending&displayedFieldIds=contentType&displayedFieldIds=updatedAt&displayedFieldIds=author&page=0"
                target="_blank"
                rel="noreferrer"
              >
                <a className="text-theme-title-primary font-bold text-primary-600 underline">
                  sections in contentful
                </a>
              </Link>
              .
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
