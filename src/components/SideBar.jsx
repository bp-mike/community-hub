import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
export default function SideBar() {

    return (
      // scrol bar and fixed side nav
      <div className="p-12 border">
        <div className="bg-white p-8 rounded-lg">

          <Link to="/" className="side-bar-item my-4 gap-1 border-b-2 pb-3 border-b-primary-orange-200"> <BiHomeAlt className="mr-3"/> Home</Link>

        <p className="">Topics</p>
        
          <Link to="/feed/social-services-and-community-support" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-3"/> Social Services & Community Support</Link>
        
          <Link to="/feed/human-rights" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-3"/> Human Rights</Link>
        
          <Link to="/feed/food-assistance-and-nutrition" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-3"/> Food Assistance and Nutrition</Link>
        
          <Link to="/feed/education" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-3"/> Education</Link>
        
          <Link to="/feed/health-care" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-3"/> Healthcare</Link>
        
          <Link to="/feed/environment-and-conservation" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-3"/> Environment and Conservation</Link>
        
          <Link to="/feed/animal-welfare" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-3"/> Animal Welfare</Link>
        
          <Link to="/feed/disaster-relief-and-humanitarian-aid" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-3"/> Disaster Relief and Humanitarian Aid</Link>
        
          <Link to="/feed/art-and-culture" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-3"/> Arts and Culture</Link>
        
          <Link to="/feed/teach-and-digital-support" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-3"/> Technology and Digital Support</Link>
        
          <Link to="/feed/sports-and-recreation" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-3"/> Sports and Recreation</Link>
        
          <Link to="/feed/elderly-care-and-support" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-3"/> Elderly Care and Support</Link>

        </div>

        <div className="bg-white mt-3 p-8">

        <p className="">Resources</p>

        <Link to="/" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-4"/> Post A Project</Link>

        <Link to="/" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-4"/> My Projects</Link>

        <Link to="/" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-4"/> Manage Projects</Link>

        <Link to="/" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-4"/> About Community Hub</Link>

        <Link to="/" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-4"/> Help center</Link>

        <Link to="/" className="side-bar-item my-4 gap-1"> <BiHomeAlt className="mr-4"/> Terms & Privacy</Link>
        </div>
      </div>
    );
  }