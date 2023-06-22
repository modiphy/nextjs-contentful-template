import uniqid from "uniqid";

const formatAuthorName = (author, authorsArray, index) => {
  // last author
  if (index === authorsArray.length - 1 && authorsArray.length === 1) {
    return (
      <span className="font-semibold" key={uniqid()}>
        {author}
      </span>
    );
  }

  // 2 authors
  if (index === authorsArray.length - 1 && authorsArray.length === 2) {
    return (
      <>
        <span>and </span>
        <span className="font-semibold" key={uniqid()}>
          {author}
        </span>
      </>
    );
  }

  // last author in 3+ authors
  if (index === authorsArray.length - 1 && authorsArray.length > 2) {
    return (
      <>
        <span>and </span>
        <span className="font-semibold" key={uniqid()}>
          {author}
        </span>
      </>
    );
  }

  // authors that are first and in between
  return (
    <>
      <span className="font-semibold" key={uniqid()}>
        {author}
      </span>
      <span>, </span>
    </>
  );
};

export { formatAuthorName };
