import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import RightSideBar from "../components/RightSideBar";

function ProjectsLayout() {
  return (
    <>
      <NavBar className="fixed top-0 left-0" />
      <div className="w-screen d-flex-row">
        <div className="pt-4 w-1/4 pl-12">
        <RightSideBar />
        </div>
        <div className="pt-4 w-2/4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ProjectsLayout;
