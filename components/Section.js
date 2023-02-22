import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";

import * as sectionTypes from "./section-types";
import * as customSectionTypes from "./custom-section-types";

const components = {
  "hero-contact-form": sectionTypes.HeroContactForm,
  default: sectionTypes.Default,
  "interior-hero": sectionTypes.InteriorHero,
  "footer-call-to-action": sectionTypes.FooterCallToAction,
  "footer-email-signup": sectionTypes.FooterEmailSignup,
  "image-right-detached-title": sectionTypes.ImageRightDetachedTitle,
  "image-right": sectionTypes.ImageRight,
};

export default function Section({ data, marginBottom, marginTop }) {
  const { fields } = data;
  const { type } = fields;
  const Section = fields.customType
    ? components[fields.customType]
    : components[type];

  const options = {
    renderNode: {
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="flex gap-2">
          <Image
            alt="List item graphic"
            src="/shape-1.svg"
            height={10}
            width={10}
          />{" "}
          {children}
        </li>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="mb-4 flex flex-col gap-2">{children}</ul>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="prose mx-auto mt-6 xl:prose-lg">{children}</p>
      ),
    },
  };

  // render rich text from data
  const body = documentToReactComponents(fields.body, options);

  if (Section) {
    return (
      <>
        <Section
          data={data}
          title={fields?.title}
          subtitle={fields?.subtitle}
          unformattedBody={fields?.body}
          richTextOptions={options}
          body={body}
          media={fields?.media}
          buttons={fields?.buttons}
          backgroundImage={fields?.backgroundImage}
          customContentCollection={fields?.customContentCollection}
          codeEmbed={fields?.codeEmbed}
          id={fields.id}
          marginBottom={marginBottom}
          marginTop={marginTop}
        />
      </>
    );
  } else {
    return (
      <div className="p-44">
        <h1>This section type hasn&apos;t been built yet.</h1>
      </div>
    );
  }
}
