import React from "react";
import SearchIcon from "../assets/NavbarIcons/SearchIcon";
import { twMerge } from "tailwind-merge";

const SearchInput = ({ placeholder, className }) => {
  return (
    <div
      className={twMerge(
        `px-4 py-[0.56rem] flex items-center  rounded-[0.375rem] gap-2 w-full `,
        className
      )}
    >
      <SearchIcon />
      <input
        className="w-full outline-none bg-transparent text-[ 0.9375rem] text-[#808080]"
        type="text"
        placeholder={placeholder ?? ""}
      />
    </div>
  );
};

export default SearchInput;
