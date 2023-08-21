import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { 
  FaPeopleArrows, FaBalanceScale,  FaSchool, FaEnvira, FaPaw,  FaDrum,
  FaInternetExplorer,FaBasketballBall, FaWheelchair
 } from "react-icons/fa";
import { 
  FaHouseFloodWater, FaBowlFood
 } from "react-icons/fa6";
 import { GiHealthNormal } from "react-icons/gi";
export default function SideBar() {
  return (
    // scrol bar and fixed side nav
    <>
      <div className="bg-white p-8 rounded-lg">
        <Link
          to="/"
          className="side-bar-item my-4 gap-1 border-b-2 pb-3 border-b-primary-orange-200"
        >
          <BiHomeAlt className="mr-3" />
          Home
        </Link>

        <p className="">Topics</p>

        <Link
          to="/feed/social-services-and-community-support"
          className="side-bar-item my-4 gap-1"
        >
          <FaPeopleArrows className="mr-3" />
          Social Services & Community Support
        </Link>

        <Link to="/feed/human-rights" className="side-bar-item my-4 gap-1">
          <FaBalanceScale className="mr-3" />
          Human Rights
        </Link>

        <Link
          to="/feed/food-assistance-and-nutrition"
          className="side-bar-item my-4 gap-1"
        >
          <FaBowlFood className="mr-3" />
          Food Assistance and Nutrition
        </Link>

        <Link to="/feed/education" className="side-bar-item my-4 gap-1">
          <FaSchool className="mr-3" />
          Education
        </Link>

        <Link to="/feed/health-care" className="side-bar-item my-4 gap-1">
          <GiHealthNormal className="mr-3" />
          Healthcare
        </Link>

        <Link
          to="/feed/environment-and-conservation"
          className="side-bar-item my-4 gap-1"
        >
          <FaEnvira className="mr-3" />
          Environment and Conservation
        </Link>

        <Link to="/feed/animal-welfare" className="side-bar-item my-4 gap-1">
          <FaPaw className="mr-3" />
          Animal Welfare
        </Link>

        <Link
          to="/feed/disaster-relief-and-humanitarian-aid"
          className="side-bar-item my-4 gap-1"
        >
          <FaHouseFloodWater className="mr-3" />
          Disaster Relief and Humanitarian Aid
        </Link>

        <Link to="/feed/art-and-culture" className="side-bar-item my-4 gap-1">
          <FaDrum className="mr-3" />
          Arts and Culture
        </Link>

        <Link
          to="/feed/teach-and-digital-support"
          className="side-bar-item my-4 gap-1"
        >
          <FaInternetExplorer className="mr-3" />
          Technology and Digital Support
        </Link>

        <Link
          to="/feed/sports-and-recreation"
          className="side-bar-item my-4 gap-1"
        >
          <FaBasketballBall className="mr-3" />
          Sports and Recreation
        </Link>

        <Link
          to="/feed/elderly-care-and-support"
          className="side-bar-item my-4 gap-1"
        >
          <FaWheelchair className="mr-3" />
          Elderly Care and Support
        </Link>
      </div>
    </>
  );
}
