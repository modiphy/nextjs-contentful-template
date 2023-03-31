import "../styles/globals.css";
import "../styles/blend.css";
import "../styles/colors.css";
import "../styles/header.css";
import Header from "@/components/Header";
import { getHeaderData, getMetaData } from "@/lib/api";

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

  return (
    <html lang="en">
      <body>
        <Header data={headerData} />
        <main>{children}</main>
      </body>
    </html>
  );
}
