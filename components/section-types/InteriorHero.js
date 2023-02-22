import Button from "../Button";
import Media from "../Media";

export default function InteriorHero({ title }) {
  return (
    <section className="relative bg-gray-600">
      <div className="pattern-dark absolute inset-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black"></div>
      <div className="md:h-22 h-20 lg:h-24 xl:h-28"></div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden"></div>

      <div className="relative"></div>
      <div className="container relative z-10 mx-auto max-w-screen-2xl px-8 pb-16 pt-24 md:pb-24 md:pt-32 lg:pb-40">
        <div className="flex justify-center lg:mt-8">
          {title && (
            <h1 className="max-w-xl text-center font-heading text-4xl tracking-wide font-extrabold uppercase text-white md:text-4xl lg:text-7xl">
              {title}
            </h1>
          )}
        </div>
      </div>

      <div className="absolute left-0 right-0 -bottom-px">
        <svg
          className="relative -top-px fill-current text-white"
          viewBox="0 0 1000 50"
        >
          <path d="M 0 0 L 0 50 L 1000 50 L 1000 0 L 950 48 L 50 48" />
          <path
            d="M 16 0 L 55 38 L 945 38 L 984 0"
            vectorEffect="non-scaling-stroke"
            fillOpacity="0"
            strokeWidth="4"
            className="stroke-current text-primary-600"
          />
        </svg>
      </div>
    </section>
  );
}
