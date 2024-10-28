import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function HomeLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default HomeLayout;
