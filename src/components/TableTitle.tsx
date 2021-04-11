import { capitalizeFirstLetter } from "../helpers";

interface TableTitleProps {
  desc?: string;
  title: string;
  onClick: (v: string) => void;
  order: (v: string) => string;
}

const TableTitle = ({ desc, title, onClick, order }: TableTitleProps) => (
  <th onClick={() => onClick(title)}>{`${
    desc ? desc : capitalizeFirstLetter(title)
  } ${order(title)}`}</th>
);

export default TableTitle;
