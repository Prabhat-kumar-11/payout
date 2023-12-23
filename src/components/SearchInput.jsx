import React from "react";
import SearchIcon from "../assets/NavbarIcons/SearchIcon";

const SearchInput = ({ placeholder, className }) => {
  return (
    <div
      className={`px-4 py-[0.56rem] flex items-center  rounded-[0.375rem] gap-2 w-full ${className}`}
    >
      <SearchIcon />
      <input
        className="w-full outline-none bg-transparent"
        type="text"
        placeholder={placeholder ?? ""}
      />
    </div>
  );
};

export default SearchInput;
