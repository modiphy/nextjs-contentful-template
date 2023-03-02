import Head from "next/head";
import { InteriorHero } from "@/components/section-types";

export default function ThankYou({ defaultMetaTitle }) {
  return (
    <>
      <Head>
        <title>{defaultMetaTitle}</title>
      </Head>

      {/* Temporary banner so that the header can be seen */}
      <div className="h-[95px] bg-gray-900"></div>

      <section className="relative bg-transparent" id="thank-you-message">
        <div className="container relative z-1 max-w-screen-lg pt-12 pb-12 text-center md:pt-12 md:pb-12 lg:pt-16 lg:pb-16 xl:pt-20 xl:pb-20">
          <div className="">
            <h1
              className="text-theme-title-primary aos-init aos-animate text-lg font-semibold uppercase tracking-wide md:text-xl"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              Thank You
            </h1>

            <h2
              className="text-theme-title aos-init aos-animate mt-1 font-heading text-4xl font-black md:text-5xl xl:text-6xl"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              Success!
            </h2>

            <div className="mt-6">
              <div
                className="aos-init aos-animate prose prose-lg mx-auto bg-transparent md:prose-xl"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                <p>Your request has been submitted.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const metaData = await getMetaData();

  const pageData = {
    fields: {
      title: "Thank You",
      slug: "thank-you",
    },
  };

  const defaultMetaTitle = metaData?.title ? metaData?.title : "";

  const websiteUrl = metaData?.cleanUrl ? metaData?.cleanUrl : "";

  const orgLegal = metaData?.organizationLegal
    ? metaData?.organizationLegal
    : "";

  return {
    props: {
      pageData,
      defaultMetaTitle,
      websiteUrl,
      orgLegal,
    },
  };
}
