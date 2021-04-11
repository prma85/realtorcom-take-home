import { Feature } from "../interfaces/database";
import { convertDateToString } from "../helpers";
import { Link } from "react-router-dom";

interface TableRowProps {
  data: Feature;
}

const TableRow = ({ data }: TableRowProps) => (
  <tr>
    <td className="title">
      <Link
        to={`/details/${data.id}`}
        title={`Details about ${data.properties.title}`}
      >
        {data.properties.title}
      </Link>
    </td>
    <td className="mag">{data.properties.mag}</td>
    <td className="time">{convertDateToString(data.properties.time)}</td>
  </tr>
);

export default TableRow;
