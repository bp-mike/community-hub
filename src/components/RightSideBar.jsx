import { Link } from "react-router-dom";

import { 
  FaBriefcase, 
  FaClipboardList, 
  // FaBookmark,  
  // FaQuestion, FaPhone,  FaExclamation,
 } from "react-icons/fa";
// import { 
//   FaHouseFloodWater, FaBowlFood
//  } from "react-icons/fa6";
export default function RightSideBar() {
  return (
    // scrol bar and fixed side nav
    <>
    <div className="bg-white p-8 h-auto">
      <Link to="/projects" className="side-bar-item my-4 gap-1">
        <FaBriefcase className="mr-4" /> Projects
      </Link>

      {/* <Link to="/" className="side-bar-item my-4 gap-1">
        <FaBookmark className="mr-4" /> My Projects
      </Link> */}

      <Link to="/projects/manage-projects" className="side-bar-item my-4 gap-1">
        <FaClipboardList className="mr-4" /> Manage Projects
      </Link>
{/* 
      <Link to="/" className="side-bar-item my-4 gap-1">
        <FaQuestion className="mr-4" /> About Community Hub
      </Link>

      <Link to="/" className="side-bar-item my-4 gap-1">
        <FaPhone className="mr-4" /> Help center
      </Link>

      <Link to="/" className="side-bar-item my-4 gap-1">
        <FaExclamation className="mr-4" /> Terms & Privacy
      </Link> */}
    </div>
    </>
  );
}
