import { getFooterData, getMetaData } from "../lib/api";
import Link from "next/link";
import ContactInformationItem from "./ContactInformationItem";
import Image from "next/legacy/image";

export default async function Footer() {
  const data = await getFooterData();
  const metaData = await getMetaData();

  return (
    <footer className="mt-auto bg-gray-900 pb-24 pt-12">
      <div className="container max-w-screen-lg space-y-14 text-center lg:text-left">
        <FooterInformation footerInformation={data?.footerInformation} />

        <FooterNavigation footerNavigation={data?.footerNavigation} />

        <div>
          <FooterLogo footerLogo={data?.footerLogo} metaData={metaData} />
          
          <ModiphyBannerFooter metaData={metaData} />

          <FooterSocialMediaLinks
            footerSocialMediaLinks={data?.footerSocialMediaLinks}
          />
        </div>
      </div>
    </footer>
  );
}

const FooterInformation = ({ footerInformation }) => {
  return (
    footerInformation && (
      <div className="space-y-5 lg:flex lg:justify-between lg:space-y-0">
        {footerInformation?.map((footerInfoItem) => (
          <ContactInformationItem {...footerInfoItem?.fields} />
        ))}
      </div>
    )
  );
};

const FooterNavigation = ({ footerNavigation }) => {
  return (
    footerNavigation && (
      <nav
        className="flex flex-col flex-wrap justify-center lg:flex-row lg:justify-between"
        aria-label="Footer"
      >
        {footerNavigation?.map((footerNavItem) => {
          if (footerNavItem?.fields?.childPages) {
            return (
              <div className="py-2" key={footerNavItem?.fields?.title}>
                <Link
                  href={`${footerNavItem?.fields?.slug}`}
                  className="text-base font-semibold uppercase tracking-wide text-gray-200 hover:text-primary-100"
                >
                  {footerNavItem?.fields?.title}
                </Link>
                <ul className="mt-3 space-y-1">
                  {footerNavItem?.fields?.childPages?.map((childPage) => (
                    <li key={childPage?.fields?.slug}>
                      <Link
                        href={`${childPage?.fields?.slug}`}
                        target="_self"
                        className="text-sm font-normal text-gray-200 hover:text-white"
                      >
                        {childPage?.fields?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          } else {
            return (
              <div className="py-2" key={footerNavItem?.fields?.title}>
                <div className="text-base font-semibold uppercase tracking-wide text-gray-200">
                  <Link
                    href={`${footerNavItem?.fields?.slug}`}
                    target="_self"
                    className="text-gray-200 hover:text-white"
                  >
                    {footerNavItem?.fields?.title}
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </nav>
    )
  );
};

const FooterLogo = ({ footerLogo, metaData }) => {
  return (
    footerLogo && (
      <div className="text-center">
        <Link href="/" className="inline-block">
          <div>
            <Image
              src={`https:${footerLogo?.fields?.file?.url}`}
              height={footerLogo?.fields?.file?.details?.image?.height}
              width={footerLogo?.fields?.file?.details?.image?.width}
              alt={`${metaData?.organizationName}`}
            />
          </div>
        </Link>
      </div>
    )
  );
};

const ModiphyBannerFooter = ({ metaData }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="space-y-6">
      <p className="flex items-center justify-center space-x-1 text-center text-sm text-gray-400">
        <span className="inline-block">
          ©{currentYear} {metaData?.organizationName} All rights reserved.
        </span>
        <span className="leading-0 inline-block">
          <Link
            className="has-text-grey-light"
            href="https://www.modiphy.com/"
            target="_blank"
            rel="noreferrer noopener"
            title={`MODIPHY® DESIGN | ${metaData?.defaultMetaTitle}`}
          >
            <svg
              className="h-6 w-6 fill-current"
              version="1.1"
              id="Foreground"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 74.3 74.3"
              role="img"
              aria-labelledby="modiphy-logo-title"
            >
              <title id="modiphy-logo-title">{`MODIPHY® DESIGN | ${metaData?.defaultMetaTitle}`}</title>
              <path
                className="path"
                d="M74.3,28.2c0-4.6-8.3-8.5-19.5-9.6c3.7-6.2,4.8-11.6,2.3-14c-3.3-3.3-11.9-0.2-20.6,7C34.7,4.6,31.7,0,28.2,0
    c-4.6,0-8.5,8.3-9.6,19.5c-6.2-3.7-11.6-4.8-14-2.3c-3.3,3.3-0.2,11.9,7,20.6C4.6,39.5,0,42.6,0,46c0,4.6,8.3,8.5,19.5,9.6
    c-3.7,6.2-4.8,11.6-2.3,14c3.3,3.3,11.9,0.2,20.6-7c1.8,7,4.8,11.6,8.3,11.6c4.6,0,8.5-8.3,9.6-19.5c6.2,3.7,11.6,4.8,14,2.3
    c3.3-3.3,0.2-11.9-7-20.6C69.7,34.7,74.3,31.7,74.3,28.2z M61.1,45.5c-3.9,3.9-14.1,0.1-24-8.4c2,2.9,4.4,5.8,7.3,8.7
    c3.5,3.5,7.1,6.3,10.5,8.5C53,57.9,50.7,60,48.1,60c-5.5,0-10.1-9.9-11-22.9c-0.6,3.4-1,7.3-1,11.3c0,4.9,0.5,9.5,1.4,13.4
    c-3.9,1.2-7,1-8.8-0.8c-3.9-3.9-0.1-14.1,8.4-24c-2.9,2-5.8,4.4-8.7,7.3c-3.5,3.5-6.4,7.1-8.5,10.5c-3.6-1.9-5.7-4.2-5.7-6.8
    c0-5.5,9.9-10.1,22.9-11c-3.4-0.6-7.2-1-11.3-1c-4.9,0-9.5,0.5-13.4,1.4c-1.2-3.9-1-7,0.8-8.9c3.9-3.9,14.1-0.1,24,8.4
    c-2-2.9-4.4-5.8-7.3-8.7c-3.5-3.5-7.1-6.4-10.5-8.5c1.9-3.6,4.2-5.7,6.8-5.7c5.5,0,10.1,9.9,11,22.9c0.6-3.4,1-7.3,1-11.3
    c0-4.9-0.5-9.5-1.4-13.4c3.9-1.2,7-1,8.9,0.8c3.9,3.9,0.1,14.1-8.4,24c2.9-2,5.8-4.4,8.7-7.3c3.5-3.5,6.4-7.1,8.5-10.5
    c3.6,1.9,5.7,4.2,5.7,6.8c0,5.5-9.9,10.1-22.9,11c3.4,0.6,7.3,1,11.3,1c4.9,0,9.5-0.5,13.4-1.4C63.1,40.6,62.9,43.7,61.1,45.5z"
              ></path>
            </svg>
          </Link>
        </span>
      </p>
    </div>
  );
};

const FooterSocialMediaLinks = ({ footerSocialMediaLinks }) => {
  return (
    footerSocialMediaLinks && (
      <div className="mt-5 flex justify-center space-x-5">
        {footerSocialMediaLinks?.map((socialMediaLink) => (
          <Link
            className="text-gray-400 hover:text-white"
            href={socialMediaLink?.fields?.url}
            target="_blank"
            rel="noopener noreferrer"
            key={`${socialMediaLink?.sys?.id}${uniqid()}`}
          >
            <span className="sr-only">{socialMediaLink?.fields?.title}</span>
            <div
              dangerouslySetInnerHTML={{
                __html: socialMediaLink?.fields?.iconSvg,
              }}
            />
          </Link>
        ))}
      </div>
    )
  );
};
