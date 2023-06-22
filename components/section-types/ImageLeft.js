import Button from "../Button";
import Media from "../Media";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ImageLeft({
  id,
  title,
  subtitle,
  body,
  media,
  buttons,
  codeEmbed,
}) {
  return (
    <section className="relative bg-transparent" id={id}>
      <div className="container relative z-1 max-w-screen-xl pb-12 pt-12 md:pb-12 md:pt-12 lg:pb-16 lg:pt-16 xl:pb-20 xl:pt-20">
        <div className="mt-6 grid justify-center gap-10 md:mt-8 lg:mt-6 lg:grid-cols-2 xl:gap-x-12">
          <div className="relative w-full max-w-2xl lg:max-w-none">
            <div className="relative">
              <Media media={media} />
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              {title && (
                <h2 className="font-heading text-2xl font-semibold text-gray-900 md:text-3xl xl:text-4xl">
                  {title}
                </h2>
              )}
              {subtitle && (
                <h3 className="text-base font-semibold uppercase tracking-wide text-primary-500 md:text-lg">
                  {subtitle}
                </h3>
              )}

              {body && (
                <div className="prose mt-6 bg-transparent xl:prose-lg">
                  {body}
                </div>
              )}

              {buttons && (
                <div className="mt-6 space-y-2 sm:space-x-2 md:space-y-0">
                  {buttons?.map((button) => (
                    <Button
                      className="button button-base inline-flex w-full bg-primary-400 text-center text-white hover:bg-primary-500 focus:ring-primary-500 md:w-auto"
                      text={button.fields.text}
                      pageRef={button.fields.page}
                      key={button.fields.text}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
