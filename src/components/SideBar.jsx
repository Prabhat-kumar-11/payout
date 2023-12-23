import React from "react";
import DownChevronIcon from "../assets/DownChevronIcon";
import HomeIcon from "../assets/SideNavIcons/HomeIcon";
import { NavLinks } from "../utils/constants";
import WalletCreditIcon from "../assets/SideNavIcons/WalletCreditIcon";

export const SideBar = () => {
  return (
    <div className="fixed left-0 z-10 flex-shrink-0 min-h-screen w-56 bg-Secondary-Navbar py-4 px-2 flex flex-col">
      <div className="flex items-center gap-3 px-2">
        <img
          className="w-[2.4375rem] h-[2.4375rem]"
          src="./brand-logo.png"
          alt="brand logo"
        />
        <div className="flex flex-col text-white">
          <p className="text-medium font-inter">Nishyan</p>
          <a className="underline hover:no-underline text-small" href="#">
            Visit Store
          </a>
        </div>
        <DownChevronIcon className="ml-auto text-white" />
      </div>
      <div className="mt-6 flex flex-col gap-[0.25rem]">
        {NavLinks.map((link) => (
          <div
            key={link.title}
            className={` rounded-[0.25rem] py-2 px-4 cursor-pointer ${
              link.title === "Payouts" ? "bg-white/10" : ""
            }`}
          >
            <div className="flex gap-2 items-center">
              {link.icon}
              <p className="text-white text-[0.875rem] font-medium font-inter">
                {link.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 bg-[#353C53] mt-auto py-[0.38rem] px-[0.75rem] rounded-[0.25rem]">
        <div className="h-[2.25rem] w-[2.25rem] bg-white/10 flex justify-center items-center rounded-[0.25rem]">
          <WalletCreditIcon />
        </div>
        <div className="text-white flex flex-col justify-center">
          <p className="leading-normal">Available Credits</p>
          <p className="leading-normal text-base font-medium">221.10</p>
        </div>
      </div>
    </div>
  );
};
