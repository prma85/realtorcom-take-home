import { useContext } from "react";
import AppContext from "../AppContext";
import { convertToSentenceCase, convertDateToString } from "../helpers";

const Details = () => {
  const { profile } = useContext(AppContext);

  const propsToShow = [
    { prop: "firstName" },
    { prop: "lastName" },
    { prop: "phone" },
    { prop: "email" },
    { prop: "bio" }
  ];

  return (
    <div id="view-profile">
      <h2 className="content-title">Profile</h2>
      <table className="profile">
        <caption>{`Details for the ${profile.firstName}`}</caption>
        <tbody>
          {propsToShow.map((p, index) => (
            <tr>
              {index === 0 && (
                <td className="avatar" rowspan={propsToShow.length}>
                  <img
                    width="160"
                    alt={`${profile.firstName}'s avatar`}
                    src={profile.avatarImage}
                  />
                </td>
              )}
              <td className="bold">{convertToSentenceCase(p.prop)}</td>
              <td>{profile[p.prop]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
