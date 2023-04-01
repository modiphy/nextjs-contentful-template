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
      <div className="relative z-1 mx-auto w-full max-w-screen-lg px-4 pb-6 pt-12 text-center md:pb-6 md:pt-12 lg:pb-8 lg:pt-16 xl:pb-10 xl:pt-20">
        {title && (
          <h2 className="text-theme-title font-heading text-2xl font-extrabold md:text-3xl xl:text-4xl">
            {title}
          </h2>
        )}

        {subtitle && (
          <p className="text-theme-title-primary mt-3 font-heading text-xl font-medium md:text-2xl">
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
                className="button inline-flex rounded-md border-2 border-transparent bg-blue-600 px-6 py-2 text-white hover:cursor-pointer hover:bg-blue-500 focus:ring-blue-500"
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
