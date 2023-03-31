import "../styles/globals.css";
import "../styles/blend.css";
import "../styles/colors.css";
import "../styles/header.css";
import Header from "@/components/Header";
import { getHeaderData } from "@/lib/api";

export default async function RootLayout({ children }) {
  const headerData = await getHeaderData();

  return (
    <html>
      <head />
      <body>
        <Header data={headerData} />
        <main>{children}</main>
      </body>
    </html>
  );
}
