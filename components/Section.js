import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/legacy/image";

import * as sectionTypes from "./section-types";
import * as customSectionTypes from "./custom-section-types";

const sectionComponents = { ...sectionTypes, ...customSectionTypes };

export default function Section({ data, marginBottom, marginTop }) {
  const { fields } = data;
  const { type } = fields;

  const formatComponent = (string) =>
    string
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

  const DynamicSection = fields.customType
    ? sectionComponents[formatComponent(fields.customType)]
    : sectionComponents[formatComponent(type)];

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

  if (DynamicSection) {
    return (
      <>
        <DynamicSection
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
