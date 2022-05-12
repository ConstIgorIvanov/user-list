import { Outlet } from "react-router-dom";
import { Filter } from "../Filter/Filter";

const Layout = () => {
  return (
    <div className="layout">
      <Filter></Filter>
      <Outlet></Outlet>
    </div>
  );
};

export { Layout };
