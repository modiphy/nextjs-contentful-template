import Button from "../Button";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import { content } from "@/tailwind.config";

export default function HeroContactForm({
  id,
  title,
  subtitle,
  buttons,
  unformattedBody,
  customContentCollection,
}) {
  const options = {
    renderNode: {
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <div className="flex w-full bg-transparent">
          <svg
            className="mr-4 min-h-[20px] min-w-[25px] fill-primary-200"
            aria-hidden="true"
            focusable="false"
            dataprefix="far"
            dataicon="check"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            weight={25}
            height={20}
          >
            <path d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"></path>
          </svg>

          <div className="text-lg font-medium uppercase tracking-wide text-white md:text-xl lg:text-base xl:text-lg 2xl:text-xl">
            {children}
          </div>
        </div>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-lg font-medium uppercase tracking-wide text-white md:text-xl lg:text-base xl:text-lg 2xl:text-xl">
          {children}
        </h3>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-y-3 gap-x-3 md:mt-10 lg:mx-0 lg:gap-y-2 xl:gap-y-4">
          {children}
        </ul>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        (<Link
          href={node?.data?.uri}
          className="text-2xl font-medium uppercase tracking-wide text-white md:text-xl lg:text-base xl:text-lg 2xl:text-xl">

          {children}

        </Link>)
      ),
    },
  };

  const emailEmbeds = customContentCollection.filter(
    (customContentItem) =>
      customContentItem?.sys?.contentType?.sys?.id === "contactFormEmbed"
  );

  const embedScript = emailEmbeds?.[0]?.fields?.script;
  const embedElement = emailEmbeds?.[0]?.fields?.element;
  const embedHeading = emailEmbeds?.[0]?.fields?.heading;

  useEffect(() => {
    eval(embedScript);
  });

  // render rich text from data
  const customBody = documentToReactComponents(unformattedBody, options);
  return (
    <section id={id} className="relative bg-gray-600">
      <div className="pattern-dark absolute inset-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black"></div>
      <div className="md:h-22 h-20 lg:h-24 xl:h-28"></div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden"></div>

      <div className="relative"></div>
      <div className="container relative z-1 max-w-screen-2xl py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:mt-5">
            {title && (
              <h1 className="max-w-xl font-heading text-4xl font-extrabold uppercase text-white md:text-4xl lg:text-7xl">
                {title}
              </h1>
            )}

            {subtitle && (
              <div className="prose prose-lg prose-invert mt-6 md:prose-xl">
                {subtitle}
              </div>
            )}

            {customContentCollection && (
              <div className="mt-8">
                <div className="space-y-5 xl:flex xl:justify-between xl:space-y-0">
                  {customContentCollection?.map((customContentItem) => {
                    // To shorten if statement
                    const contentType =
                      customContentItem?.sys?.contentType?.sys?.id;

                    // To Reduce indentation in if statement
                    const CustomContentComponent = (
                      <div key={customContentItem?.sys?.id}>
                        <p className="font-heading text-lg font-medium uppercase tracking-wide text-gray-100">
                          {customContentItem?.fields?.title}
                        </p>
                        <div className="mt-3 text-lg text-gray-300">
                          {documentToReactComponents(
                            customContentItem?.fields?.body
                          )}
                        </div>
                      </div>
                    );

                    // Render only entries with a certain content type
                    if (contentType === "customContentItem") {
                      return CustomContentComponent;
                    }
                  })}
                </div>
              </div>
            )}

            {buttons && (
              <div className="mt-8 space-x-4">
                {buttons.map((button) => (
                  <Button
                    className="button button inline-flex bg-primary-600 text-white hover:bg-primary-700 hover:text-white focus:ring-primary-700"
                    text={button.fields.text}
                    pageRef={button.fields.page}
                    key={button.fields.text}
                  />
                ))}
              </div>
            )}
          </div>

          {embedScript && embedElement && (
            <div className="lg:col-span-6 lg:col-start-7 xl:col-span-5 xl:col-start-8">
              <div className="relative mx-auto lg:mt-8 xl:mt-0">
                <div className="relative">
                  <div className="relative z-1 mx-auto w-full overflow-hidden rounded bg-white shadow-xl lg:mr-0">
                    <div className="px-4 pt-6 sm:px-6">
                      {embedHeading && (
                        <p className="mb-3 text-center font-sans text-xl font-medium uppercase tracking-wide md:text-2xl">
                          {embedHeading}
                        </p>
                      )}
                      <div className="min-h-[384px]">
                        <div
                          className="bg-white"
                          dangerouslySetInnerHTML={{ __html: embedElement }}
                        />
                      </div>
                    </div>
                    <div className="border-t-2 border-gray-200 bg-gray-50 px-4 py-6 text-center sm:px-10">
                      <p className="text-xs leading-5 text-gray-500">
                        {" "}
                        We care about protecting your data. Read our{" "}
                        <Link
                          href="/privacy-policy"
                          className="font-bold text-gray-700 hover:underline">
                          
                            Privacy Policy.
                          
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute left-0 right-0 -bottom-px">
        <svg
          className="relative -top-px fill-current text-gray-900"
          viewBox="0 0 1000 50"
        >
          <path d="M 0 0 L 0 50 L 1000 50 L 1000 0 L 950 48 L 50 48" />
          <path
            d="M 16 0 L 55 38 L 945 38 L 984 0"
            vectorEffect="non-scaling-stroke"
            fillOpacity="0"
            strokeWidth="4"
            className="stroke-current text-primary-600"
          />
        </svg>
      </div>
    </section>
  );
}
