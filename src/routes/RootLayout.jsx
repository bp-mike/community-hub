import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import SideBar from "../components/SideBar";

function RootLayout() {
  return (
    <>
    <NavBar className="fixed top-0 left-0"/>
    <div className="w-screen d-flex-row">
    <SideBar className="w-1/4"/>
      <Outlet />
    </div>
    </>
  );
}

export default RootLayout;
