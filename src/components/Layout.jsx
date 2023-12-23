import React from "react";
import { SideBar } from "./SideBar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="min-h-screen  w-full">
        <Navbar />
        <div className="mt-16  h-full p-8 bg-[#FAFAFA] ml-56 w-[calc(100%-14rem)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
