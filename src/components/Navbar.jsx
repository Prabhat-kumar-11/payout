import React from "react";
import HelpIcon from "../assets/NavbarIcons/HelpIcon";
import SearchInput from "./SearchInput";
import NavMenuIcon from "../assets/NavbarIcons/NavMenuIcon";
import ChatIcon from "../assets/NavbarIcons/ChatIcon";

const Navbar = () => {
  return (
    <div className="fixed z-50 top-0 h-16 w-[calc(100%-14rem)] ml-56 flex gap-4 px-8 py-[0.75rem] border-b border-b-[#D9D9D9] bg-white">
      <div className="flex flex-1 items-center gap-[0.38rem]">
        <p className="text-Galano font-medium bg-[ #1A181E] text-[1.25rem] mr-4">
          Payouts
        </p>
        <HelpIcon />
        <p className="text-[#4D4D4D] text-[0.75rem] -mt-[2px]">How it works</p>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <SearchInput
          className="bg-[#F2F2F2]"
          placeholder={"Search features, tutorials, etc."}
        />
      </div>
      <div className="flex-1 w-full flex justify-end items-center gap-2">
        <ChatIcon />
        <NavMenuIcon />
      </div>
    </div>
  );
};

export default Navbar;
