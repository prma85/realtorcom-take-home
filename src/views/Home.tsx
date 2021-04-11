import { useContext, useState } from "react";
import AppContext from "../AppContext";
import { sortBy } from "../helpers";
import { TableRow, TableTitle, OrderBy } from "../components";
interface Order {
  orderBy: OrderBy;
  asc: boolean;
}

const Home = () => {
  const { data } = useContext(AppContext);
  const { metadata, features } = data;
  const { title } = metadata;

  const [order, setOrder] = useState<Order>({
    orderBy: "title",
    asc: true
  });
  const [list, setList] = useState(features);

  const onClickCol = (orderBy: OrderBy) => {
    const newList = [...list];
    const asc = !order.asc;
    newList.sort(sortBy(orderBy, asc));
    setList(newList);
    setOrder({ orderBy, asc });
  };

  const getOrderSymbol = (orderBy: OrderBy) => {
    if (orderBy === order.orderBy) return order.asc ? "⮝" : "⮟";
    return "";
  };

  return (
    <div id="view-home">
      <h2 className="content-title">{title}</h2>
      <table className="list">
        <caption>{`List for the ${title}`}</caption>
        <thead>
          <tr>
            <TableTitle
              title="title"
              onClick={onClickCol}
              order={getOrderSymbol}
            />
            <TableTitle
              title="mag"
              desc="Magnitude"
              onClick={onClickCol}
              order={getOrderSymbol}
            />
            <TableTitle
              title="time"
              onClick={onClickCol}
              order={getOrderSymbol}
            />
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <TableRow data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
