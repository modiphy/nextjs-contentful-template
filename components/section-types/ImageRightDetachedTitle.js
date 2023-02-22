import Button from "../Button";
import Media from "../Media";

export default function ImageRightDetachedTitle({
  title,
  subtitle,
  body,
  media,
  buttons,
}) {
  return (
    <section>
      <div className="container max-w-screen-xl py-12 lg:py-16 xl:py-20">
        {title && (
          <h2 className="mt-1 font-heading text-3xl font-bold text-gray-900 md:text-4xl xl:text-5xl">
            {title}
          </h2>
        )}

        <div className="mt-6 grid gap-10 md:mt-8 lg:mt-6 lg:grid-cols-2 xl:gap-x-12">
          <div>
            {body && <div className="prose xl:prose-lg">{body}</div>}

            {buttons && (
              <div className="mt-2">
                {buttons?.map((button) => (
                  <Button
                    className="button button inline-flex bg-primary-600 text-white hover:bg-primary-700 hover:text-white focus:ring-primary-700"
                    text={button.fields.text}
                    pageRef={button.fields.page}
                    key={button.fields.text}
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <Media media={media} />
          </div>
        </div>
      </div>
    </section>
  );
}
