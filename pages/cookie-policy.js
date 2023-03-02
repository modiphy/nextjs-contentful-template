import Head from "next/head";

import { getMetaData } from "../lib/api";

import Link from "next/link";

import { InteriorHero } from "@/components/section-types";

export default function Home({ defaultMetaTitle, websiteUrl, dateString }) {
  return (
    <>
      <Head>
        <title>{defaultMetaTitle}</title>
      </Head>

      <InteriorHero title="Cookie Policy" />

      <section className="flex justify-center mt-20">
        <p className="max-w-prose font-sans text-gray-700">
          This cookie policy (&quot;Policy&quot;) describes what cookies are and
          how and they&apos;re being used by the{" "}
          {websiteUrl && (
            <Link
              href={websiteUrl}
              className="font-semibold text-primary-600 underline"
            >
              {websiteUrl}
            </Link>
          )}{" "}
          website (&quot;Website&quot; or &quot;Service&quot;) and any of its
          related products and services (collectively, &quot;Services&quot;).
          This Policy is a legally binding agreement between you
          (&quot;User&quot;, &quot;you&quot; or &quot;your&quot;) and this
          Website operator (&quot;Operator&quot;, &quot;we&quot;, &quot;us&quot;
          or &quot;our&quot;). You should read this Policy so you can understand
          the types of cookies we use, the information we collect using cookies
          and how that information is used. It also describes the choices
          available to you regarding accepting or declining the use of cookies.
          For further information on how we use, store and keep your personal
          data secure, see our{" "}
          <Link
            href="privacy-policy"
            className="font-semibold text-primary-600 underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section className="flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            What are cookies?
          </h3>

          <p className="max-w-prose font-sans text-gray-700">
            Cookies are small pieces of data stored in text files that are saved
            on your computer or other devices when websites are loaded in a
            browser. They are widely used to remember you and your preferences,
            either for a single visit (through a &quot;session cookie&quot;) or
            for multiple repeat visits (using a &quot;persistent cookie&quot;).
          </p>

          <p className="max-w-prose font-sans text-gray-700">
            Session cookies are temporary cookies that are used during the
            course of your visit to the Website, and they expire when you close
            the web browser.
          </p>

          <p className="max-w-prose font-sans text-gray-700">
            Persistent cookies are used to remember your preferences within our
            Website and remain on your desktop or mobile device even after you
            close your browser or restart your computer. They ensure a
            consistent and efficient experience for you while visiting the
            Website and Services.
          </p>

          <p className="max-w-prose font-sans text-gray-700">
            Cookies may be set by the Website (&quot;first-party cookies&quot;),
            or by third parties, such as those who serve content or provide
            advertising or analytics services on the Website (&quot;third party
            cookies&quot;). These third parties can recognize you when you visit
            our website and also when you visit certain other websites.
          </p>
        </div>
      </section>

      <section className="flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            What type of cookies do we use?
          </h3>

          <div className="flex flex-col gap-4">
            <h4 className="self-start text-xl font-semibold">
              Functionality cookies
            </h4>

            <p className="max-w-prose font-sans text-gray-700">
              Functionality cookies let us operate the Website and Services in
              accordance with the choices you make. For example, we will
              recognize your username and remember how you customized the
              Website and Services during future visits.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="self-start text-xl font-semibold">
              Analytical cookies
            </h4>

            <p className="max-w-prose font-sans text-gray-700">
              These cookies enable us and third party services to collect
              aggregated data for statistical purposes on how our visitors use
              the Website. These cookies do not contain personal information
              such as names and email addresses and are used to help us improve
              your user experience of the Website.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="self-start text-xl font-semibold">
              Social media cookies
            </h4>

            <p className="max-w-prose font-sans text-gray-700">
              Third party cookies from social media sites (such as Facebook,
              Twitter, etc) let us track social network users when they visit or
              use the Website and Services, or share content, by using a tagging
              mechanism provided by those social networks.
            </p>

            <p className="max-w-prose font-sans text-gray-700">
              These cookies are also used for event tracking and remarketing
              purposes. Any data collected with these tags will be used in
              accordance with our and social networks&apos; privacy policies. We
              will not collect or share any personally identifiable information
              from the user.
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            What are your cookie options?
          </h3>

          <p className="max-w-prose text-gray-700">
            If you don&apos;t like the idea of cookies or certain types of
            cookies, you can change your browser&apos;s settings to delete
            cookies that have already been set and to not accept new cookies. To
            learn more about how to do this or to learn more about cookies,
            visit{" "}
            <a
              className="font-semibold text-primary-600 underline"
              href="https://internetcookies.org"
            >
              internetcookies.org
            </a>
          </p>
        </div>
      </section>

      <section className="flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            Changes and amendments
          </h3>

          <p className="max-w-prose text-gray-700">
            We reserve the right to modify this Policy or its terms relating to
            the Website and Services at any time, effective upon posting of an
            updated version of this Policy on the Website. When we do, we will
            revise the updated date at the bottom of this page. Continued use of
            the Website and Services after any such changes shall constitute
            your consent to such changes.
          </p>
        </div>
      </section>

      <section className="flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            Acceptance of this policy
          </h3>

          <p className="max-w-prose text-gray-700">
            You acknowledge that you have read this Policy and agree to all its
            terms and conditions. By accessing and using the Website and
            Services you agree to be bound by this Policy. If you do not agree
            to abide by the terms of this Policy, you are not authorized to
            access or use the Website and Services.
          </p>
        </div>
      </section>

      <section className="mb-56 flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            Contacting us
          </h3>

          <p className="max-w-prose text-gray-700">
            If you would like to contact us to understand more about this Policy
            or wish to contact us concerning any matter relating to our use of
            cookies, you may do so via the{" "}
            <Link
              href="/contact"
              className="font-semibold text-primary-600 underline"
            >
              contact form
            </Link>
          </p>

          <p className="self-start italic text-gray-700">
            Effective as of {dateString}
          </p>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const metaData = await getMetaData();

  const pageData = {
    fields: {
      title: "Cookie Policy",
      slug: "cookie-policy",
    },
  };

  const defaultMetaTitle = metaData?.title ? metaData?.title : "";

  const websiteUrl = metaData?.cleanUrl ? metaData?.cleanUrl : "";

  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  const dateString = `${month} ${day}, ${year}`;

  return {
    props: {
      pageData,
      defaultMetaTitle,
      websiteUrl,
      dateString,
    },
  };
}
