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
