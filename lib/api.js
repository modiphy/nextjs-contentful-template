import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

const getPageData = async (slugQuery = "") => {
  const data = await client
    .getEntries({
      content_type: "page",
      "fields.slug": slugQuery,
      include: 10,
    })
    .then((data) => data?.items[0]);

  return data ? data : null;
};

const getPagePaths = async () => {
  const data = await client
    .getEntries({
      content_type: "page",
      select: ["fields.slug"],
    })
    .then((pagePaths) =>
      Promise.all(
        pagePaths?.items?.map(async (pagePath) => {
          const parentPath = await getParentUrl(pagePath?.sys?.id);
          const nestedChildPath = [
            `${parentPath}`,
            `${pagePath?.fields?.slug}`,
          ];

          return {
            slug: parentPath ? nestedChildPath : [pagePath?.fields?.slug],
          };
        })
      )
    );

  return data ? data : null;
};

const getHeaderData = async () => {
  const data = await client
    .getEntries({ content_type: "headerData", include: 10 })
    .then((data) => data?.items[0]?.fields)
    .then((data) => FixChildPageSlugsHeader(data));

  return data ? data : null;
};

const getFooterData = async () => {
  const data = await client
    .getEntries({ content_type: "footer", include: 2 })
    .then((data) => data?.items[0]?.fields);

  return data ? data : null;
};

const getMetaData = async () => {
  const data = await client
    .getEntries({
      content_type: "metaData",
    })
    .then((data) => data?.items[0]?.fields);

  return data ? data : null;
};

// --------------------------- Helper Functions ---------------------------
const getParentUrl = async (id) => {
  const data = await client
    .getEntries({
      links_to_entry: id,
    })
    .then((data) => data?.items?.[0]?.fields?.slug);

  return data ? data : null;
};

const FixChildPageSlugsHeader = (data) => {
  // nest child page slugs under parent page
  const newNavigationLinks = data?.navigationLinks?.map((navigationLink) => {
    const newChildPages = navigationLink?.fields?.childPages?.map(
      (childPage) => {
        return {
          ...childPage,
          fields: {
            ...childPage?.fields,
            slug: `${navigationLink?.fields?.slug}/${childPage?.fields?.slug}`,
          },
        };
      }
    );

    if (navigationLink?.fields?.childPages) {
      return {
        ...navigationLink,
        fields: { ...navigationLink?.fields, childPages: newChildPages },
      };
    }

    return navigationLink;
  });

  const newData = { ...data, navigationLinks: newNavigationLinks };

  return newData;
};

export { getPageData, getPagePaths, getHeaderData, getFooterData, getMetaData };
