import Button from "../Button";

export default function FooterCallToAction({ title, subtitle, buttons }) {
  return (
    <section className="relative bg-transparent" id="discuss-your-project">
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900">
        <svg
          className="relative -top-px scale-y-flipped transform fill-current text-white"
          viewBox="0 0 1000 50"
        >
          <path d="M 0 0 L 0 50 L 1000 50 L 1000 0 L 950 48 L 50 48" />
          <path
            d="M 16 0 L 55 38 L 945 38 L 984 0"
            vectorEffect="non-scaling-stroke"
            fillOpacity="0"
            strokeWidth="4"
            className="stroke-current text-gray-700"
          />
        </svg>
      </div>

      <div className="container relative z-1 max-w-screen-md pb-4 pt-8 text-center md:pb-6 md:pt-12 lg:pt-16 xl:pt-20">
        <div className="rounded-sm bg-primary-700 bg-gradient-to-br from-primary-600 to-primary-800 p-6 shadow-lg md:p-8 lg:p-12">
          {title && (
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              {title}
            </h2>
          )}

          {buttons && (
            <div className="mt-8">
              <div className="space-y-2 md:space-x-2 md:space-y-0">
                {buttons?.map((button) => (
                  <Button
                    className="button button-base inline-flex w-full border-2 border-white bg-transparent text-center text-white hover:border-white hover:bg-white hover:text-primary-700 md:w-auto"
                    text={button.fields.text}
                    pageRef={button.fields.page}
                    key={button.fields.text}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
