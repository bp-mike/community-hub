import { Input } from "@mantine/core";
import { Button } from "@mantine/core";
// import logo from "./assets/CommunityHub.png"
import logo from "../assets/CommunityHub-no-bg.png"

export default function NavBar() {
  return (
    <div className="w-screen p-2 d-flex-row bg-white">
      <div className="w-1/4">
        <img
          src={logo}
          className=""
          width={200}
          alt="community-hub"
        />
        {/* <img
          src="../assets/fav-icon-no-bg.png"
          className="block sm:invisible"
          alt="community-hub"
        /> */}
      </div>
      <div className="w-2/4">
        <Input placeholder="Search Community Hub" radius="xl" />
      </div>
      <div className="w-1/4 pl-4 ">
        <Button size="xs" className="bg-primary-blue-100 hover:bg-primary-blue-100 mr-2 float-right">
          Login
        </Button>
        <Button size="xs" className="bg bg-primary-orange-100 hover:bg-primary-orange-200 float-right mr-2">
          Sign-Up
        </Button>
      </div>
    </div>
  );
}
