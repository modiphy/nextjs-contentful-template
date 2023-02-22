import Button from "../Button";
import Media from "../Media";

export default function ImageRight({
  id,
  title,
  subtitle,
  body,
  media,
  buttons,
  codeEmbed,
}) {
  return (
    <section class="relative bg-transparent" id={id}>
      <div class="container relative z-1 max-w-screen-xl pt-12 pb-12 md:pt-12 md:pb-12 lg:pt-16 lg:pb-16 xl:pt-20 xl:pb-20">
        <div class="mt-6 grid justify-center gap-10 md:mt-8 lg:mt-6 lg:grid-cols-2 xl:gap-x-12">
          <div class="relative w-full max-w-2xl lg:max-w-none">
            <div class="relative">
              <Media media={media} />
            </div>
          </div>
          <div class="relative lg:col-start-1 lg:row-start-1">
            <div class="relative">
              {title && (
                <h2 class="font-heading text-2xl font-semibold text-gray-900 md:text-3xl xl:text-4xl">
                  {title}
                </h2>
              )}
              {subtitle && (
                <h3 class="text-base font-semibold uppercase tracking-wide text-primary-500 md:text-lg">
                  {subtitle}
                </h3>
              )}

              {body && (
                <div class="prose mt-6 bg-transparent xl:prose-lg">{body}</div>
              )}

              {buttons && (
                <div class="mt-6 space-y-2 sm:space-x-2 md:space-y-0">
                  {buttons?.map((button) => (
                    <Button
                      class="button button-base inline-flex w-full bg-primary-400 text-center text-white hover:bg-primary-500 focus:ring-primary-500 md:w-auto"
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
