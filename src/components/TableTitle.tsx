import { capitalizeFirstLetter } from "../helpers";

export type OrderBy = "title" | "mag" | "time";

interface TableTitleProps {
  desc?: string;
  title: OrderBy;
  onClick: (v: OrderBy) => void;
  order: (v: OrderBy) => string;
}

const TableTitle = ({ desc, title, onClick, order }: TableTitleProps) => (
  <th onClick={() => onClick(title)}>{`${
    desc ? desc : capitalizeFirstLetter(title)
  } ${order(title)}`}</th>
);

export default TableTitle;
