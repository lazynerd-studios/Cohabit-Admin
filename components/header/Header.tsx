import Image from "next/image";
import user from "@/assets/user.svg";
import SearchIcon from "@/assets/icons/SearchIcon";
import Notification from "@/assets/icons/Notification";
import { CustomInput as Input } from "@/lib/AntDesignComponents";

const Header = () => {
  return (
    <div className="w-full p-[1%] flex items-center justify-between bg-[#FFF]">
      <div className="flex items-center gap-[0.5rem]">
        <SearchIcon className="stroke-[#32475CDE]/[87%]" />
        <Input className="searchInput" placeholder="Search" />
      </div>
      <div className="flex items-center">
        <Notification />
        <Image alt="user" src={user} />
      </div>
    </div>
  );
};

export default Header;
