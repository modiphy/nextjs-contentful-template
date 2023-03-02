import Head from "next/head";

export default function CustomHead({ metaData, pageData }) {
  const pageTitle = () => {
    if (pageData?.fields?.title === "Home") {
      return metaData?.defaultMetaTitle;
    }
    return `${pageData?.fields?.title} - ${metaData?.defaultMetaTitle}`;
  };

  const canonicalUrl = () => {
    if (pageData?.fields?.title !== "Home") {
      return pageData?.fields?.slug;
    }
    return "";
  };

  return (
    <Head>
      {metaData?.defaultMetaTitle && <title>{pageTitle()}</title>}
      {metaData?.description && (
        <meta name="description" content={metaData?.description} />
      )}
      <link
        rel="canonical"
        href={`https://${metaData?.cleanUrl}/${canonicalUrl()}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <meta content="/og-image.png" property="og:image" />
      <meta content="en_US" property="og:locale"></meta>
      <meta content="website" property="og:type"></meta>
      <meta content={pageTitle()} property="og:title"></meta>
      <meta content={metaData?.description} property="og:description"></meta>
      <meta content={metaData?.url} property="og:url"></meta>
      <meta content={metaData?.siteName} property="og:site_name"></meta>
    </Head>
  );
}
