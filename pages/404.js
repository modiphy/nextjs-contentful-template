import Link from "next/link";
import { getHeaderData } from "@/lib/api";

export default function Error() {
  return (
    <>
      {/* Temporary banner so that the header can be seen */}
      <div className="h-[95px] bg-gray-900"></div>

      <section className="relative bg-transparent">
        <div className="container relative z-1 max-w-screen-lg pb-12 pt-12 text-center md:pb-12 md:pt-12 lg:pb-16 lg:pt-16 xl:pb-20 xl:pt-20">
          <div className="">
            <h2
              className="text-theme-title font-heading text-4xl font-extrabold md:text-5xl"
              color="text-theme-title"
            >
              Wait a second...
            </h2>

            <div className="prose-bg-primary-lighter prose mx-auto mt-6 md:prose-lg">
              We&apos;re sorry, this page doesn&apos;t exist. You can{" "}
              <Link
                href="/"
                className="text-theme-title-primary font-bold text-primary-600 underline"
              >
                explore the rest of our site.
              </Link>
              .
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const headerData = await getHeaderData();

  return {
    props: {
      headerData,
    },
  };
}
