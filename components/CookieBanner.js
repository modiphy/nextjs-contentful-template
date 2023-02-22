import Cookies from "js-cookie";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showCookie, setShowCookie] = useState(true);

  useEffect(() => {
    setShowCookie(Cookies.get("wpcc") !== "dismissed");
  }, []);

  const hideCookie = () => {
    Cookies.set("wpcc", "dismissed", { expires: 0.3 });
    setShowCookie(false);
  };

  return (
    showCookie && (
      <div className="fixed bottom-0 z-50 border bg-white p-7 font-medium sm:left-5 sm:bottom-5 sm:rounded-md">
        <div className="max-w-[280px]">
          <span className="">
            This website uses cookies to ensure you get the best experience on
            our website.{" "}
          </span>
          <Link href="/cookie-policy" rel="noreferrer" target="_blank">
            <a className="text-red-700 hover:text-red-800 group inline-flex items-center justify-center text-sm underline md:text-base">
              {" "}
              View Cookie Policy
            </a>
          </Link>
          <button
            onClick={() => hideCookie()}
            className="button mt-4 w-full inline-flex bg-primary-600 text-white hover:bg-primary-700 hover:text-white focus:ring-primary-700"
          >
            Got it!
          </button>
        </div>
      </div>
    )
  );
}
