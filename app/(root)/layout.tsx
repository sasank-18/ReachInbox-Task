import LeftSideBar from "@/components/sharedComponents/LeftSideBar";
import Navbar from "@/components/sharedComponents/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="flex w-full absolute top-0 justify-between h-screen ">
        <LeftSideBar />
        <div className="flex-1 mt-14">
        {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
