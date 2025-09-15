import { useNavigate } from "react-router";
import Logo from "../logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiBell, BiCameraMovie, BiSearch } from "react-icons/bi";
import Avatar from "../../components/avatar";
import { FaMicrophone } from "react-icons/fa";
import clsx from "clsx";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  navbarPlayerMode: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>
};

export default function Navbar({ navbarPlayerMode, setOpenSidebar }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className={clsx("flex bg-zinc-900 justify-between p-4 fixed w-full z-1", {
        "px-24": navbarPlayerMode,
      })}
    >
      <div className="flex items-center gap-6 pl-2">
        <GiHamburgerMenu color="white" size={20} onClick={() => setOpenSidebar(prev => !prev)} />
        <Logo />
      </div>
      <div className="flex items-center gap-2 hidden md:block lg:flex">
        <div className="w-138 border border-zinc-500 text-white text-sm rounded-3xl py-2 px-4 flex items-center gap-5">
          <BiSearch className="text-zinc-500" size={22} />
          <input
            onKeyDown={(e) => e.key === "Enter" && navigate("/videos")}
            type="text"
            className="w-96 text-white placeholder-zinc-50 focus:outline-none focus:ring-0"
            placeholder="Search..."
          />
        </div>

        <div className="text-zinc-50 rounded-full bg-zinc-800 w-7 h-7 flex justify-center items-center">
          <FaMicrophone size={14} />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <BiCameraMovie color="white" size={24} />
        <div className="relative">
          <div className="flex justify-center absolute text-zinc-50 bg-red-500 rounded-full right-0 items-center w-3 h-3 text-[10px]">
            33
          </div>
          <BiBell color="white" size={24} />
        </div>
        <div onClick={() => navigate("/profile")} className="cursor-pointer">
          <Avatar size="sm" />
        </div>
      </div>
    </div>
  );
}
