"use client";

import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { getHeaderData } from "../lib/api";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import NestedLink from "./NestedLink";
import { forwardRef } from "react";

const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href} ref={ref} {...rest}>
      {children}
    </Link>
  );
});

MyLink.displayName = "MyLink";

export default function Header({ data, metaData }) {
  const [isScrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });
  });

  return (
    <Popover
      className={`absolute top-0 left-0 z-20 w-full bg-transparent lg:fixed ${
        isScrolling && "lg:bg-white lg:shadow-md"
      }`}
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 lg:justify-start lg:space-x-10">
          <Logo data={data} metaData={metaData} isScrolling={isScrolling} />

          <div className="flex items-center justify-end">
            {/* Nav links */}
            <NavLinks
              navigationLinks={data?.navigationLinks}
              isScrolling={isScrolling}
            />

            {/* Call to Action Buttons */}
            <CallToActionButtons
              callToAction={data?.callToAction}
              isScrolling={isScrolling}
            />

            <div className="-my-2 -mr-2 xl:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-primary-300 hover:bg-primary-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                <span className="sr-only">Open menu</span>
                {/* Menu Bars Icon */}
                <svg
                  className="h-6 w-6"
                  x-description="Heroicon name: outline/menu"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </Popover.Button>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right p-2 transition md:left-auto md:right-0 md:w-full md:max-w-xl xl:hidden"
        >
          {({ close }) => (
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <MobileMenuLogo logo={data?.siteLogo} metaData={metaData} />

                  <div className="-mr-2">
                    <Popover.Button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </Popover.Button>
                  </div>
                </div>

                {data &&
                  data?.navigationLinks?.map((navigationLink) => {
                    if (navigationLink?.fields?.childPages) {
                      return (
                        <div
                          className="mt-6"
                          key={navigationLink?.fields?.title}
                        >
                          <p className="font-bold uppercase tracking-wide text-gray-500">
                            {navigationLink?.fields?.title}
                          </p>
                          <nav className="mt-1 grid grid-cols-1 gap-2">
                            {navigationLink?.fields?.childPages?.map(
                              (childPage) => (
                                <MyLink
                                  onClick={() => {
                                    close();
                                  }}
                                  href={`/${childPage?.fields?.slug}`}
                                  target="_self"
                                  key={childPage?.fields?.slug}
                                  className="flex items-center rounded-lg py-1 text-gray-900 hover:bg-gray-50"
                                >
                                  <div className="text-theme-title text-base font-medium">
                                    {childPage?.fields?.title}
                                  </div>
                                </MyLink>
                              )
                            )}
                          </nav>
                        </div>
                      );
                    }
                  })}
              </div>

              <div className="px-5 py-6">
                {data?.navigationLinks && (
                  <div className="grid text-center gap-4">
                    {data?.navigationLinks?.map((navigationLink) => {
                      if (!navigationLink?.fields?.childPages) {
                        return (
                          <MyLink
                            onClick={() => {
                              close();
                            }}
                            href={`/${navigationLink?.fields?.slug}`}
                            key={`${navigationLink?.fields?.slug}`}
                            target="_self"
                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                          >
                            {navigationLink?.fields?.title}
                          </MyLink>
                        );
                      }
                    })}
                  </div>
                )}

                {data?.callToAction && (
                  <div className="mt-6">
                    {data?.callToAction?.map((ctaBtn) => {
                      if (ctaBtn?.fields?.text) {
                        return (
                          <MyLink
                            onClick={() => {
                              close();
                            }}
                            href={`/${ctaBtn?.fields?.page?.fields?.slug}`}
                            key={ctaBtn?.fields?.text}
                            className="button flex w-full bg-primary-600 text-white hover:bg-primary-500 focus:ring-primary-500"
                          >
                            {ctaBtn?.fields?.text}
                          </MyLink>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

const Logo = ({ data, metaData, isScrolling }) => {
  return (
    data && (
      <div className="flex justify-start flex-1">
        <Link href="/" className="cursor-pointer">
          <span className="sr-only">{metaData?.organizationName}</span>
          {/* Site Logo */}
          <div>
            {data?.siteLogoWhite && !isScrolling && (
              <Image
                className="h-6 drop-shadow-md lg:h-10 w-auto "
                src={`https:${data?.siteLogoWhite?.fields?.file?.url}`}
                height={
                  data?.siteLogoWhite?.fields?.file?.details?.image?.height
                }
                width={data?.siteLogoWhite?.fields?.file?.details?.image?.width}
                alt={metaData?.organizationName}
                objectfit="cover"
              />
            )}
            {data?.siteLogo && isScrolling && (
              <Image
                className="h-6 drop-shadow-md lg:h-10 w-auto "
                src={`https:${data?.siteLogo?.fields?.file?.url}`}
                height={data?.siteLogo?.fields?.file?.details?.image?.height}
                width={data?.siteLogo?.fields?.file?.details?.image?.width}
                alt={metaData?.organizationName}
              />
            )}
          </div>
        </Link>
      </div>
    )
  );
};

const NavLinks = ({ navigationLinks, isScrolling }) => {
  return (
    navigationLinks && (
      <nav className="mt-2 hidden space-x-8 xl:flex">
        {navigationLinks?.map((navLink) => {
          return navLink?.fields?.childPages ? (
            <NestedLink
              navLink={navLink}
              isScrolling={isScrolling}
              key={navLink?.fields?.title}
            />
          ) : (
            <Link
              href={`/${navLink?.fields?.slug}`}
              key={navLink?.fields?.title}
              className={`block font-medium uppercase tracking-wider text-primary-100 hover:text-white hover:underline ${
                isScrolling && "text-black hover:text-gray-600"
              }`}
            >
              {navLink?.fields?.title}
            </Link>
          );
        })}
      </nav>
    )
  );
};

const CallToActionButtons = ({ callToAction, isScrolling }) => {
  return (
    <div className="mr-8 ml-auto hidden flex-1 justify-end space-x-4 whitespace-nowrap md:flex xl:mr-0 xl:ml-8">
      {callToAction &&
        callToAction?.map((callToActionButton) => {
          const contentType = callToActionButton?.sys?.contentType?.sys?.id;
          if (contentType === "buttonLink") {
            return (
              <Link
                href={`/${callToActionButton?.fields?.page?.fields?.slug}`}
                key={callToActionButton?.fields?.text}
                className={`button font-sans uppercase tracking-wider ${
                  isScrolling
                    ? "border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white focus:ring-white"
                    : "button button inline-flex bg-primary-600 text-white hover:bg-primary-700 hover:text-white focus:ring-primary-700"
                }`}
              >
                {callToActionButton?.fields?.text}
              </Link>
            );
          } else if (contentType === "callLink") {
            // format number text. remove all characters that are not digits
            const href = `tel:${callToActionButton?.fields?.number?.replace(
              /\D+/gm,
              ""
            )}`;
            return (
              <MyLink
                onClick={() => {
                  close();
                }}
                key={callToActionButton?.fields?.number}
                href={href}
                className={`button inline-flex rounded-md border-2 border-transparent py-2 px-6 text-white shadow-none ${
                  isScrolling && "lg:text-black"
                }`}
              >
                {/* Telephone icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="16"
                  width="16"
                  className="mr-2 fill-primary-400"
                >
                  <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
                </svg>
                {callToActionButton?.fields?.number}
              </MyLink>
            );
          }
        })}
    </div>
  );
};

const MobileMenuLogo = ({ logo, metaData }) => {
  return (
    logo && (
      <div>
        <span className="flex">
          <span className="sr-only">{metaData?.organizationName}</span>
          <div className="min-h-6 w-auto">
            <Image
              className="h-6 w-auto"
              src={`https:${logo?.fields?.file?.url}`}
              height={logo?.fields?.file?.details?.image?.height}
              width={logo?.fields?.file?.details?.image?.width}
              alt={logo?.fields?.title}
            />
          </div>
        </span>
      </div>
    )
  );
};
