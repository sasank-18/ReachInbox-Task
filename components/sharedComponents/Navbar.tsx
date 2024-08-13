"use client";
import { sidebarLinks } from "@/constant";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="h-14 flex justify-between gap-4 pl-20 font-semibold items-center background-light200_dark200">
      <div className="text-black dark:text-white">
        {sidebarLinks.map((data)=>{
           if(pathname === data.route ) 
            return <div>{data.label}</div>
        })}
      </div>
      <div className="flex justify-between gap-4 pr-14 font-medium">
        <div>Theme</div>
        <div>Tim's Workspace</div>
      </div>
    </div>
  );
};

export default Navbar;
