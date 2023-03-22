import "../styles/globals.css";
import "../styles/blend.css";
import "../styles/colors.css";
import "../styles/header.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
