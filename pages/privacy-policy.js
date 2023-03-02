import Head from "next/head";
import { getMetaData } from "../lib/api";
import Link from "next/link";
import Image from "next/image";
import { InteriorHero } from "@/components/section-types";

export default function PrivacyPolicy({
  defaultMetaTitle,
  websiteUrl,
  orgLegal,
  dateString,
}) {
  return (
    <>
      <Head>
        <title>{defaultMetaTitle}</title>
      </Head>

      <InteriorHero title="Privacy Policy" />

      <section className="flex justify-center mt-20">
        <p className="max-w-prose font-sans text-gray-700">
          This Statement of Privacy applies to {websiteUrl} and {orgLegal} and
          governs data collection and usage. For the purposes of this Privacy
          Policy, unless otherwise noted, all references to {orgLegal}
          include {websiteUrl}
          and {orgLegal}. The {orgLegal} website is a publicly accessible
          website. By using the {orgLegal} website, you consent to the data
          practices described in this statement.
        </p>
      </section>

      <section className="flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            Collection of your Personal Information
          </h3>
          <p className="max-w-prose self-start font-sans text-gray-700">
            In order to better provide you with products and services offered on
            our Site, {orgLegal} collect personally identifiable information,
            such as your:
          </p>
          <ul className="flex flex-col gap-2 self-start text-gray-700">
            <li className="flex max-w-prose justify-start gap-4">
              <div className="min-w-[1rem]">
                <Image alt="" src="/favicon-16x16.png" height={10} width={10} />
              </div>{" "}
              <div>First and Last Name</div>
            </li>
            <li className="flex max-w-prose justify-start gap-4">
              <div className="min-w-[1rem]">
                <Image alt="" src="/favicon-16x16.png" height={10} width={10} />
              </div>{" "}
              <div>E-mail Address</div>
            </li>
            <li className="flex max-w-prose justify-start gap-4">
              <div className="min-w-[1rem]">
                <Image alt="" src="/favicon-16x16.png" height={10} width={10} />
              </div>{" "}
              <div>Phone Number</div>
            </li>
          </ul>
          <p className="max-w-prose self-start font-sans text-gray-700">
            We do not collect any personal information about you unless you
            voluntarily provide it to us. However, you may be required to
            provide certain personal information to us when you elect to use
            certain products or services available on the Site. These may
            include: (a) registering for an account on our Site; (b) entering a
            sweepstakes or contest sponsored by us or one of our partners; (c)
            signing up for special offers from selected third parties; (d)
            sending us an email message; (e) submitting your credit card or
            other payment information when ordering and purchasing products and
            services on our Site. To wit, we will use your information for, but
            not limited to, communicating with you in relation to services
            and/or products you have requested from us. We also may gather
            additional personal or non-personal information in the future.
          </p>
        </div>
      </section>

      <section className="flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            Sharing Information with Third Parties
          </h3>
          <p className="max-w-prose self-start font-sans text-gray-700">
            {orgLegal} does not sell, rent or lease its customer lists to third
            parties.
          </p>
          <p className="max-w-prose self-start font-sans text-gray-700">
            {orgLegal} may share data with trusted partners to help perform
            statistical analysis, send you email or postal mail, provide
            customer support, or arrange for deliveries. All such third parties
            are prohibited from using your personal information except to
            provide these services to {orgLegal}, and they are required to
            maintain the confidentiality of your information.
          </p>
          <p className="max-w-prose self-start font-sans text-gray-700">
            {orgLegal} may disclose your personal information, without notice,
            if required to do so by law or in the good faith belief that such
            action is necessary to: (a) conform to the edicts of the law or
            comply with legal process served on {orgLegal} or the site; (b)
            protect and defend the rights or property of {orgLegal}; and/or (c)
            act under exigent circumstances to protect the personal safety of
            users of {orgLegal}, or the public.
          </p>
        </div>
      </section>

      <section className="flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            Automatically Collected Information
          </h3>
          <p className="max-w-prose text-gray-700">
            Information about your computer hardware and software may be
            automatically collected by {orgLegal}. This information can include:
            your IP address, browser type, domain names, access times and
            referring website addresses. This information is used for the
            operation of the service, to maintain quality of the service, and to
            provide general statistics regarding use of the {orgLegal}
            website.
          </p>
        </div>
      </section>

      <section className="flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            Links
          </h3>
          <p className="max-w-prose text-gray-700">
            This website contains links to other sites. Please be aware that we
            are not responsible for the content or privacy practices of such
            other sites. We encourage our users to be aware when they leave our
            site and to read the privacy statements of any other site that
            collects personally identifiable information.
          </p>
        </div>
      </section>

      <section className="flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            Security of Your Personal Information
          </h3>
          <p className="max-w-prose text-gray-700">
            {orgLegal} secures your personal information from unauthorized
            access, use, or disclosure. {orgLegal} uses the following methods
            for this purpose:
          </p>
          <ul className="flex flex-col gap-2 self-start text-gray-700">
            <li className="flex max-w-prose justify-start gap-4">
              <div className="min-w-[1rem]">
                <Image alt="" src="/favicon-16x16.png" height={10} width={10} />
              </div>{" "}
              <div>SSL Protocol</div>
            </li>
          </ul>
          <p className="max-w-prose text-gray-700">
            When personal information (such as a credit card number) is
            transmitted to other websites, it is protected through the use of
            encryption, such as the Secure Sockets Layer (SSL) protocol.
          </p>
          <p className="max-w-prose text-gray-700">
            We strive to take appropriate security measures to protect against
            unauthorized access to or alteration of your personal information.
            Unfortunately, no data transmission over the Internet or any
            wireless network can be guaranteed to be 100% secure. As a result,
            while we strive to protect your personal information, you
            acknowledge that: (a) there are security and privacy limitations
            inherent to the Internet which are beyond our control; and (b)
            security, integrity, and privacy of any and all information and data
            exchanged between you and us through this Site cannot be guaranteed.
          </p>
        </div>
      </section>

      <section className="flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            Right to Deletion
          </h3>
          <p className="max-w-prose self-start text-gray-700">
            Subject to certain exceptions set out below, on receipt of a
            verifiable request from you, we will:
          </p>
          <ul className="flex flex-col gap-2 self-start text-gray-700">
            <li className="flex max-w-prose justify-start gap-4">
              <div className="min-w-[1rem]">
                <Image alt="" src="/favicon-16x16.png" height={10} width={10} />
              </div>{" "}
              <div>Delete your personal information from our records; and</div>
            </li>
            <ul className="flex flex-col gap-2 self-start text-gray-700">
              <li className="flex max-w-prose justify-start gap-4">
                <div className="min-w-[1rem]">
                  <Image
                    alt="Heavenly Home Security Graphic"
                    src="/shape_2_dark.svg"
                    height={10}
                    width={10}
                  />
                </div>{" "}
                <div>
                  Direct any service providers to delete your personal
                  information from their records.
                </div>
              </li>
            </ul>
          </ul>
          <p className="max-w-prose self-start italic text-gray-700">
            Please note that we may not be able to comply with requests to
            delete your personal information if it is necessary to:
          </p>
          <ul className="flex flex-col gap-2 self-start text-gray-700">
            <li className="flex max-w-prose justify-start gap-4">
              <div className="min-w-[1rem]">
                <Image alt="" src="/favicon-16x16.png" height={10} width={10} />
              </div>{" "}
              <div>
                Complete the transaction for which the personal information was
                collected, fulfill the terms of a written warranty or product
                recall conducted in accordance with federal law, provide a good
                or service requested by you, or reasonably anticipated within
                the context of our ongoing business relationship with you, or
                otherwise perform a contract between you and us;
              </div>
            </li>
            <li className="flex max-w-prose justify-start gap-4">
              <div className="min-w-[1rem]">
                <Image alt="" src="/favicon-16x16.png" height={10} width={10} />
              </div>{" "}
              <div>
                Detect security incidents, protect against malicious, deceptive,
                fraudulent, or illegal activity; or prosecute those responsible
                for that activity;
              </div>
            </li>
            <li className="flex max-w-prose justify-start gap-4">
              <div className="min-w-[1rem]">
                <Image alt="" src="/favicon-16x16.png" height={10} width={10} />
              </div>{" "}
              <div>
                Debug to identify and repair errors that impair existing
                intended functionality;
              </div>
            </li>
            <li className="flex max-w-prose justify-start gap-4">
              <div className="min-w-[1rem]">
                <Image alt="" src="/favicon-16x16.png" height={10} width={10} />
              </div>{" "}
              <div>
                Exercise free speech, ensure the right of another consumer to
                exercise his or her right of free speech, or exercise another
                right provided for by law;
              </div>
            </li>
            <li className="flex max-w-prose justify-start gap-4">
              <div className="min-w-[1rem]">
                <Image alt="" src="/favicon-16x16.png" height={10} width={10} />
              </div>{" "}
              <div>
                Comply with the California Electronic Communications Privacy
                Act;
              </div>
            </li>
            <li className="flex max-w-prose justify-start gap-4">
              <div className="min-w-[1rem]">
                <Image alt="" src="/favicon-16x16.png" height={10} width={10} />
              </div>{" "}
              <div>
                Engage in public or peer-reviewed scientific, historical, or
                statistical research in the public interest that adheres to all
                other applicable ethics and privacy laws, when our deletion of
                the information is likely to render impossible or seriously
                impair the achievement of such research, provided we have
                obtained your informed consent;
              </div>
            </li>
            <li className="flex max-w-prose justify-start gap-4">
              <div className="min-w-[1rem]">
                <Image alt="" src="/favicon-16x16.png" height={10} width={10} />
              </div>{" "}
              <div>
                Enable solely internal uses that are reasonably aligned with
                your expectations based on your relationship with us;
              </div>
            </li>
            <li className="flex max-w-prose justify-start gap-4">
              <div className="min-w-[1rem]">
                <Image alt="" src="/favicon-16x16.png" height={10} width={10} />
              </div>{" "}
              <div>Comply with an existing legal obligation; or</div>
            </li>
            <li className="flex max-w-prose justify-start gap-4">
              <div className="min-w-[1rem]">
                <Image alt="" src="/favicon-16x16.png" height={10} width={10} />
              </div>{" "}
              <div>
                Otherwise use your personal information, internally, in a lawful
                manner that is compatible with the context in which you provided
                the information.
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            Right to Deletion
          </h3>
          <p className="max-w-prose self-start text-gray-700">
            {orgLegal} does not knowingly collect personally identifiable
            information from children under the age of thirteen. If you are
            under the age of thirteen, you must ask your parent or guardian for
            permission to use this website.
          </p>
        </div>
      </section>

      <section className="flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            E-mail Communications
          </h3>
          <p className="max-w-prose self-start text-gray-700">
            From time to time, {orgLegal} may contact you via email for the
            purpose of providing announcements, promotional offers, alerts,
            confirmations, surveys, and/or other general communication. In order
            to improve our Services, we may receive a notification when you open
            an email from {orgLegal} or click on a link therein.
          </p>
          <p className="max-w-prose self-start text-gray-700">
            If you would like to stop receiving marketing or promotional
            communications via email from {orgLegal}, you may opt-out of such
            communications by clicking on the Unsubscribe button in promotional
            emails.
          </p>
        </div>
      </section>

      <section className="flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            External Data Storage Sites
          </h3>
          <p className="max-w-prose self-start text-gray-700">
            We may store your data on servers provided by third party hosting
            vendors with whom we have contracted.
          </p>
        </div>
      </section>

      <section className="flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            Changes to this Statement
          </h3>
          <p className="max-w-prose self-start text-gray-700">
            {orgLegal} reserves the right to change this Privacy Policy from
            time to time. We will notify you about significant changes in the
            way we treat personal information by sending a notice to the primary
            email address specified in your account, by placing a prominent
            notice on our site, and/or by updating any privacy information on
            this page. Your continued use of the Site and/or Services available
            through this Site after such modifications will constitute your: (a)
            acknowledgment of the modified Privacy Policy; and (b) agreement to
            abide and be bound by that Policy.
          </p>
        </div>
      </section>

      <section className="mb-56 flex justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <h3 className="self-start font-heading text-2xl font-semibold">
            Contact Information
          </h3>
          <p className="max-w-prose self-start text-gray-700">
            {orgLegal} welcomes your questions or comments regarding this
            Statement of Privacy. If you believe that {orgLegal} has not adhered
            to this Statement, please contact {orgLegal} but visiting our{" "}
            <Link
              href="/contact"
              className="font-semibold text-primary-600 underline"
            >
              contact page
            </Link>
            .
          </p>
          <p className="self-start font-bold">{orgLegal}</p>
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
      title: "Privacy Policy",
      slug: "privacy-policy",
    },
  };

  const defaultMetaTitle = metaData?.title ? metaData?.title : "";

  const websiteUrl = metaData?.cleanUrl ? metaData?.cleanUrl : "";

  const orgLegal = metaData?.organizationLegal
    ? metaData?.organizationLegal
    : "";

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
      orgLegal,
      dateString,
    },
  };
}
