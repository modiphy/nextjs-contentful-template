import "../styles/globals.css";
import "../styles/blend.css";
import "../styles/colors.css";
import "../styles/header.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getHeaderData, getMetaData, getFooterData } from "@/lib/api";

export async function metadata() {
  const metaData = await getMetaData();

  return {
    title: {
      default: metaData?.defaultMetaTitle,
      template: "%s | " + metaData?.defaultMetaTitle,
    },
    description: metaData?.description,

    icons: {
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      other: [
        { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
    },

    manifest: "/site.webmanifest",
  };
}

export default async function RootLayout({ children }) {
  const headerData = await getHeaderData();
  const footerData = await getFooterData();
  const metadata = await getMetaData();

  return (
    <html lang="en">
      <body>
        <Header data={headerData} metaData={metadata} />
        <main>{children}</main>
        <Footer data={footerData} />
      </body>
    </html>
  );
}
