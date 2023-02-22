import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";

export default function NestedLink({ navLink, isScrolling }) {
  const [open, setOpen] = useState(false);

  const openPopOver = () => {
    setOpen(true);
  };

  const closePopOver = () => {
    setOpen(false);
  };

  return (
    <Popover
      className="group relative"
      onMouseEnter={openPopOver}
      onMouseLeave={closePopOver}
    >
      <>
        <Popover.Button>
          <Link href={`/${navLink?.fields?.slug}`}>
            <a
              className={`hover:bg-green relative flex items-center font-semibold text-primary-100 hover:text-white ${
                isScrolling && "text-black hover:text-gray-600"
              }`}
            >
              <span>{navLink?.fields?.title}</span>
              <svg
                className="group-hover:text-header-caret-hover-color text-header-caret-color ml-2 h-5 w-5 fill-primary-400 transition-transform group-hover:rotate-180"
                x-description="Heroicon name: solid/chevron-down"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </Link>
        </Popover.Button>
        <Transition
          show={open}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Popover.Panel
            className="absolute top-full z-10 flex w-screen max-w-xs flex-col pt-3 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2"
            static
          >
            <div className="relative overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900 ring-opacity-15">
              <span
                className="is-block absolute left-1/2 -top-2 -ml-3"
                aria-hidden="true"
              >
                <svg
                  className="h-[8px] w-[20px] fill-current text-primary-400"
                  viewBox="0 0 5 2"
                  preserveAspectRatio="none"
                >
                  <path d="M 0 2 L 2.5 0 L 5 2 Z"></path>
                </svg>
              </span>
              <div className="relative grid">
                {navLink &&
                  navLink?.fields?.childPages?.map((navLinkButton) => (
                    <Link
                      href={`/${navLinkButton?.fields?.slug}`}
                      key={`/${navLinkButton?.fields?.slug}`}
                    >
                      <a className="group/child-nav flex items-center border-b border-gray-200 border-opacity-50 px-5 pt-6 pb-4 hover:bg-gray-50">
                        <div className="ml-3 flex items-center gap-3 transition-all">
                          <svg
                            className="fill-gray-400 group-hover/child-nav:fill-primary-500"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="shield-check"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                            height="16"
                            weight="16"
                          >
                            <path d="M466.5 83.71l-192-80c-5.875-2.5-12.16-3.703-18.44-3.703S243.5 1.203 237.6 3.703L45.61 83.71C27.73 91.08 16 108.6 16 127.1C16 385.4 205.4 512 255.9 512C305.2 512 496 387.3 496 127.1C496 108.6 484.3 91.08 466.5 83.71zM256 464C158.5 423.4 64 297.3 64 128l192-80L448 128C448 301.8 349.6 425 256 464zM200.1 247C196.3 242.3 190.1 239.1 184 239.1c-13.71 0-24 11.21-24 24C160 270.1 162.3 276.3 167 280.1l48 48C219.5 333.5 225.7 335.1 232 335.1c2.595 0 11.46-.4962 18.22-8.375l96-112c3.881-4.528 5.781-10.09 5.781-15.62c0-7.405-5.79-23.99-23.98-23.99c-6.756 0-13.48 2.831-18.24 8.362L230.7 276.7L200.1 247z"></path>
                          </svg>
                          <p className="text-theme-title group-hover/child-nav:text-secondary-950 font-heading text-sm font-semibold tracking-wide 2xl:text-base">
                            {navLinkButton?.fields?.title}
                          </p>
                          <svg
                            className="fill-gray-400 transition-transform group-hover/child-nav:translate-x-2 group-hover/child-nav:fill-primary-500"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="long-arrow-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                            height="12"
                          >
                            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
                          </svg>
                        </div>
                      </a>
                    </Link>
                  ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
}
