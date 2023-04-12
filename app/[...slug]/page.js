import { getMetaData, getPageData, getPagePaths } from "@/lib/api";
import Section from "@/components/Section";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const pageData = await getPageData(params.slug[params.slug.length - 1]);
  const metaData = await getMetaData();

  return {
    title: pageData?.fields?.title,

    metadataBase: new URL(`https://${metaData?.cleanUrl}`),
    alternates: {
      canonical: `/${params.slug[params.slug.length - 1]}`,
    },

    openGraph: {
      title: `${pageData?.fields?.title} - ${metaData?.defaultMetaTitle}`,
      description: metaData?.description,
      images: [{ url: "/og-image.png" }],
      locale: "en_US",
      type: "website",
      url: `https://${metaData?.cleanUrl}/${
        params.slug[params.slug.length - 1]
      }`,
      siteName: `${metaData?.organizationName} - Website`,
    },
  };
}

export default async function Page({ params }) {
  const pageData = await getPageData(params?.slug?.[params?.slug?.length - 1]);

  const { sections } = pageData?.fields;

  return (
    <>
      {sections ? (
        sections.map((pageSection) => {
          return <Section data={pageSection} key={pageSection.fields.title} />;
        })
      ) : (
        // No sections disclaimer
        <section className="py-12 pb-40 md:py-16 lg:py-24 xl:py-32 2xl:pb-40 2xl:pt-36">
          <div className="md:h-22 h-20 lg:h-24 xl:h-28"></div>
          <div className="container max-w-screen-xl text-center">
            <div className="">
              <h2
                className="text-theme-title font-heading text-4xl font-bold md:text-5xl"
                color="text-theme-title"
              >
                Wait a second...
              </h2>
              <div className="prose-bg-primary-lighter prose mx-auto mt-6 md:prose-lg">
                This page has no sections. Create some{" "}
                <Link
                  href="https://app.contentful.com/spaces/troih5m1tjzf/home"
                  target="_blank"
                  className="text-theme-title-primary font-bold underline"
                >
                  sections in your contentful space
                </Link>
                .
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export async function generateStaticParams() {
  const pagePaths = await getPagePaths();

  return pagePaths;
}
