import { getFooterData } from "../lib/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import ContactInformationItem from "./ContactInformationItem";
import Image from "next/image";

export default function Footer({ pageData }) {
  const [data, setData] = useState();

  useEffect(() => {
    getFooterData().then((res) => setData(res));
  }, []);

  useEffect(() => {
    console.log(data);
  });

  return (
    <footer className="bg-gray-900 mt-auto pt-12 pb-24">
      <div className="container max-w-screen-lg space-y-14 text-center lg:text-left">
        {data?.footerInformation && (
          <div className="space-y-5 lg:flex lg:justify-between lg:space-y-0">
            {data?.footerInformation?.map((footerInfoItem) => (
              <ContactInformationItem
                title={footerInfoItem?.fields?.title}
                body={footerInfoItem?.fields?.body}
                key={footerInfoItem?.fields?.title}
              />
            ))}
          </div>
        )}

        {data?.footerNavigation && (
          <nav
            className="flex flex-col flex-wrap justify-center lg:flex-row lg:justify-between"
            aria-label="Footer"
          >
            {data?.footerNavigation?.map((footerNavItem) => {
              if (footerNavItem?.fields?.childPages) {
                return (
                  <div className="py-2" key={footerNavItem?.fields?.title}>
                    <Link href={`${footerNavItem?.fields?.slug}`}>
                      <a className="text-base font-semibold uppercase tracking-wide text-gray-200 hover:text-primary-100">
                        {footerNavItem?.fields?.title}
                      </a>
                    </Link>
                    <ul className="mt-3 space-y-1">
                      {footerNavItem?.fields?.childPages?.map((childPage) => (
                        <li key={childPage?.fields?.slug}>
                          <Link
                            href={`${childPage?.fields?.slug}`}
                            target="_self"
                          >
                            <a className="text-sm font-normal text-gray-200 hover:text-white">
                              {childPage?.fields?.title}
                            </a>
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
                      >
                        <a className="hover:text-white text-gray-200">
                          {footerNavItem?.fields?.title}
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              }
            })}
          </nav>
        )}

        {data?.footerLogo && (
          <div className="text-center">
            <Link href="/">
              <a className="inline-block">
                <div>
                  <Image
                    src={`https:${data?.footerLogo?.fields?.file?.url}`}
                    height={
                      data?.footerLogo?.fields?.file?.details?.image?.height
                    }
                    width={
                      data?.footerLogo?.fields?.file?.details?.image?.width
                    }
                    alt="Footer Logo"
                  />
                </div>
              </a>
            </Link>
          </div>
        )}

        {/* Modiphy Banner */}
        <ModiphyBannerFooter />

        {data?.socials && (
          <div className="flex justify-center space-x-5">
            {data?.socials?.map((socialLink) => (
              <Link
                key={socialLink?.fields?.socialMedia}
                href={`${socialLink?.fields?.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <a className="text-gray-400 hover:text-white">
                  <span className="sr-only">
                    {socialLink?.fields?.socialMedia}
                  </span>
                  <span
                    className="fill-gray-400 transition-colors hover:fill-white"
                    dangerouslySetInnerHTML={{
                      __html: socialLink?.fields?.iconSvg,
                    }}
                  ></span>
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}

const ModiphyBannerFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="space-y-6">
      <p className="flex items-center justify-center space-x-1 text-center text-sm text-gray-400">
        <span className="inline-block">
          ©{currentYear} American Covers Inc. All rights reserved.
        </span>
        <span className="leading-0 inline-block">
          <a
            className="has-text-grey-light"
            href="https://www.modiphy.com/"
            target="_blank"
            rel="noreferrer noopener"
            title="MODIPHY® DESIGN | GridSource - HDD boring and drilling in Baton Rouge, Louisiana"
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
              <title id="modiphy-logo-title">
                MODIPHY® DESIGN | GridSource - HDD boring and drilling in Baton
                Rouge, Louisiana
              </title>
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
          </a>
        </span>
      </p>
      <div className="flex justify-center space-x-5">
        <a
          className="text-gray-400 hover:text-white"
          href="https://www.youtube.com/watch?v=aX60xCFaFoc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Youtube</span>
          <svg
            className="svg-inline--fa fa-youtube fa-2x"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="youtube"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            ></path>
          </svg>
        </a>
        <a
          className="text-gray-400 hover:text-white"
          href="https://www.instagram.com/gridsource.inc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Instagram</span>
          <svg
            className="svg-inline--fa fa-instagram fa-2x"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="instagram"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            ></path>
          </svg>
        </a>
        <a
          className="text-gray-400 hover:text-white"
          href="https://www.linkedin.com/company/gridsource"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">LinkedIn</span>
          <svg
            className="svg-inline--fa fa-linkedin fa-2x"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="linkedin"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
