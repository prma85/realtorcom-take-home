import { useContext } from "react";
import AppContext from "../AppContext";
import { useParams, Redirect } from "react-router-dom";
import { capitalizeFirstLetter, convertDateToString } from "../helpers";
import { Title } from "../components";

const Details = () => {
  const { data } = useContext(AppContext);
  const { id } = useParams<{ id: string }>();
  const { features } = data;
  const item = features.filter((f) => f.id === id)[0];

  if (!item) return <Redirect to="/404" />;

  const propsToShow = [
    { prop: "title" },
    { prop: "mag", desc: "Magnitude" },
    { prop: "time" },
    { prop: "status" },
    { prop: "tsunami" },
    { prop: "type" }
  ];

  const title = item.properties.title;

  return (
    <div id="view-details">
      <Title render={(prev) => `${title} - ${prev}`} />
      <h2 className="content-title">{title}</h2>
      <table className="details">
        <caption>{`Details for the ${title}`}</caption>
        <tbody>
          {propsToShow.map((p) => (
            <tr>
              <td className="bold">
                {p.desc ? p.desc : capitalizeFirstLetter(p.prop)}
              </td>
              <td>
                {p.prop === "time"
                  ? convertDateToString(item.properties[p.prop])
                  : item.properties[p.prop]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
