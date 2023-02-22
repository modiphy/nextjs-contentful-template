import Section from "../components/Section";
import { getMetaData, getPageData, getParentUrl } from "../lib/api";
import { useEffect } from "react";
import Link from "next/link";

export default function Home({ pageData }) {
  const { sections } = pageData?.fields;

  useEffect(() => {
    console.log(pageData);
  });

  return <>
    {sections ? (
      sections.map((pageSection) => {
        return <Section data={pageSection} key={pageSection.fields.title} />;
      })
    ) : (
      // No sections disclaimer
      <section className="py-12 pb-40 md:py-16 lg:py-24 xl:py-32 2xl:pt-36 2xl:pb-40">
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
                className="text-theme-title-primary font-bold underline">
                
                  sections in your contentful space
                
              </Link>
              .
            </div>
          </div>
        </div>
      </section>
    )}
  </>;
}

export async function getStaticProps() {
  const pageData = await getPageData("home");

  // used in the page layout
  const metaData = await getMetaData();

  return {
    props: {
      pageData,
      metaData,
    },
  };
}
