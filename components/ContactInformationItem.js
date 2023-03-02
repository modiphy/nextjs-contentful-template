import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";

export default function ContactInformationItem({ title, body }) {
  return (
    <div className="flex flex-col text-gray-200">
      <div className="mb-1 font-semibold uppercase tracking-wide text-white">
        {title}
      </div>
      {documentToReactComponents(body, options)}
    </div>
  );
}

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      return (
        <Link
          href={`/${node?.data?.target?.fields?.page?.fields?.slug}`}
          className="button inline-flex w-full justify-center rounded-md border-2 border-transparent bg-primary-600 py-2 px-6 text-white hover:bg-primary-500 focus:ring-primary-500"
        >
          {node?.data?.target?.fields?.text}
        </Link>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="mt-1 text-lg">{children}</p>;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <span className="text-theme-body mt-1 text-base leading-tight">
          <Link
            href={node?.data?.uri}
            target="_blank"
            className="hover:text-white hover:underline"
          >
            {children}
          </Link>
        </span>
      );
    },
  },
};
