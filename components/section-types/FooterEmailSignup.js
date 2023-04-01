import Link from "next/link";

export default function FooterEmailSignup({ title }) {
  return (
    <section className="relative bg-gray-900">
      <div className="container relative z-1 max-w-screen-xl py-8 text-left">
        <div className="rounded-sm border-4 border-primary-600 px-6 py-6 md:px-12 md:py-12 lg:px-16 lg:py-16 xl:flex xl:items-center">
          <div className="xl:-mt-2 xl:w-0 xl:flex-1">
            {title && (
              <h2 className="font-heading text-2xl font-semibold text-white md:text-4xl">
                {title}
              </h2>
            )}
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:ml-8 xl:mt-0">
            <form
              name="form1294"
              className="wufoo sm:flex"
              acceptCharset="UTF-8"
              autoComplete="off"
              encType="multipart/form-data"
              method="post"
              action="https://modiphy.wufoo.com/forms/zzb9yb30rquiqj/#public"
            >
              <label htmlFor="emailAddress" className="sr-only">
                Email address
              </label>
              <input
                id="Field6"
                name="Field6"
                spellCheck="false"
                type="email"
                autoComplete="email"
                maxLength="255"
                required=""
                className="w-full rounded-sm border-gray-400 px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
                placeholder="Enter your email"
              />
              <button
                id="saveForm"
                name="saveForm"
                type="submit"
                className="button mt-3 flex w-full border-transparent bg-primary-600 text-white hover:border-transparent hover:bg-primary-700 hover:text-white focus:ring-white focus:ring-offset-primary-600 sm:ml-3 sm:mt-0 sm:w-auto sm:flex-shrink-0"
              >
                Subscribe
              </button>

              <div className="hidden">
                <label htmlFor="comment">Do Not Fill This Out</label>
                <textarea
                  name="comment"
                  id="comment"
                  rows="1"
                  cols="1"
                ></textarea>
                <input
                  type="hidden"
                  id="idstamp"
                  name="idstamp"
                  value="i7MOdfILlcS5sPqSE2zMPvn/ivg5rSgzu+c2orUW1oM="
                />
                <input
                  type="hidden"
                  id="encryptedPassword"
                  name="encryptedPassword"
                  value=""
                />
              </div>
            </form>

            <p className="mt-3 text-center text-sm text-gray-400">
              We care about the protection of your data. Read our
              <Link
                href="/privacy-policy"
                className="font-bold text-gray-300 hover:underline"
              >
                <> Privacy Policy.</>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
