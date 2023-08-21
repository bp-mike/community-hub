import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import SideBar from "../components/SideBar";
import RightSideBar from "../components/RightSideBar";

function RootLayout() {
  return (
    <>
      <NavBar className="fixed top-0 left-0" />
      <div className="w-screen d-flex-row">
        <div className="pt-4 w-1/4 pl-12">
          <SideBar />
        </div>
        <div className="pt-4 w-2/4">
          <Outlet />
        </div>
        <div className="pt-4 w-1/4 pr-12">
          <RightSideBar />
        </div>
      </div>
    </>
  );
}

export default RootLayout;
