import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import SideBar from "../components/SideBar";

function RootLayout() {
  return (
    <>
    <NavBar />
    <SideBar />
      <Outlet />
    </>
  );
}

export default RootLayout;
