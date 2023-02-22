import Button from "../Button";
import Media from "../Media";

export default function Default({
  id,
  title,
  subtitle,
  body,
  media,
  buttons,
  codeEmbed,
}) {
  return (
    <section id={id} className="relative bg-transparent text-lg">
      <div className="relative z-1 mx-auto w-full max-w-screen-lg px-4 pt-12 pb-6 text-center md:pt-12 md:pb-6 lg:pt-16 lg:pb-8 xl:pt-20 xl:pb-10">
        {title && (
          <h2 className="font-heading text-2xl font-extrabold text-theme-title md:text-3xl xl:text-4xl">
            {title}
          </h2>
        )}

        {subtitle && (
          <p className="mt-3 font-heading text-xl font-medium text-theme-title-primary md:text-2xl">
            {subtitle}
          </p>
        )}

        {codeEmbed && <div dangerouslySetInnerHTML={{ __html: codeEmbed }} />}

        {body && <div className="prose mx-auto mt-6 xl:prose-lg">{body}</div>}

        {media && <Media media={media} />}

        {buttons && (
          <div className="mt-6 flex justify-center gap-4">
            {buttons.map((button) => (
              <Button
                className="button bg-blue-600 hover:bg-blue-500 focus:ring-blue-500 inline-flex rounded-md border-2 border-transparent py-2 px-6 text-white hover:cursor-pointer"
                text={button.fields.text}
                pageRef={button.fields.page}
                key={button.fields.text}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
