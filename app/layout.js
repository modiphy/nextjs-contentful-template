import "../styles/globals.css";
import "../styles/blend.css";
import "../styles/colors.css";
import "../styles/header.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getHeaderData, getMetaData, getFooterData } from "@/lib/api";

export async function metadata({ params }) {
  const metaData = await getMetaData();

  return {
    title: {
      default: metaData?.fields?.title,
      template: "%s | " + metaData?.defaultMetaTitle,
    },
  };
}

export default async function RootLayout({ children }) {
  const headerData = await getHeaderData();
  const footerData = await getFooterData();

  return (
    <html lang="en">
      <body>
        <Header data={headerData} />
        <main>{children}</main>
        <Footer data={footerData} />
      </body>
    </html>
  );
}
