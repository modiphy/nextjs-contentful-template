import CustomHead from "./CustomHead";
import { useEffect, useState } from "react";
import CookieBanner from "./CookieBanner";
import { getMetaData } from "../lib/api";
import Script from "next/script";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, pageData, metaData, headerData }) {
  useEffect(() => {
    console.log(children);
  });

  const [analyticsId, setAnalyticsId] = useState();

  useEffect(() => {
    getMetaData().then((metaData) => {
      setAnalyticsId(metaData?.analyticsId);
    });
  });

  useEffect(() => {
    console.log("Analytics Id:", analyticsId);
  });

  return (
    <>
      <CustomHead metaData={metaData} pageData={pageData} />
      {analyticsId && (
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
        />
      )}
      {analyticsId && (
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analyticsId}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      )}

      <CookieBanner />

      <Header data={headerData} />
      <main>{children}</main>
      <Footer pageData={pageData} metaData={metaData} />
    </>
  );
}
