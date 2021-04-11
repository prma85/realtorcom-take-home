import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { site, profile } = useContext(AppContext);

  return (
    <div className="layout">
      <div className="layout-header">
        <div className="logo">
          <Link to="/">
            <img alt="realtor.com logo" src={site.logoImage} />
          </Link>
        </div>
        <div className="title">
          <h1>{site.title}</h1>
        </div>
        <div className="user">
          <Link to="/profile">{`Welcome ${profile.firstName}`}</Link>
        </div>
      </div>
      <div className="layout-content">{children}</div>
    </div>
  );
};

export default Layout;
