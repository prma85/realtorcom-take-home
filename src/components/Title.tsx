import { Fragment } from "react";

interface TitleProps {
  render: ((prev: string) => string) | string;
}

const Title = ({ render }: TitleProps) => {
  console.log(typeof render);
  if (typeof render === "string") {
    document.title = render;
  } else if (typeof render === "function") {
    const previousTitle = document.title.split(" - ");
    const newTitle = render(
      previousTitle.length >= 2
        ? previousTitle[previousTitle.length - 1]
        : previousTitle[0]
    );
    document.title = newTitle;
  }

  return <Fragment />;
};

export default Title;
