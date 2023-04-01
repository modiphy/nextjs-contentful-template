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
      <div className="fixed bottom-0 z-50 border bg-white p-7 font-medium sm:bottom-5 sm:left-5 sm:rounded-md">
        <div className="max-w-[280px]">
          <span className="">
            This website uses cookies to ensure you get the best experience on
            our website.{" "}
          </span>
          <Link
            href="/cookie-policy"
            rel="noreferrer"
            target="_blank"
            className="group inline-flex items-center justify-center text-sm text-primary-700 underline hover:text-primary-800 md:text-base"
          >
            {" "}
            View Cookie Policy
          </Link>
          <button
            onClick={() => hideCookie()}
            className="button mt-4 inline-flex w-full rounded-sm bg-primary-600 text-white hover:bg-primary-700 hover:text-white focus:ring-primary-700"
          >
            Got it!
          </button>
        </div>
      </div>
    )
  );
}
