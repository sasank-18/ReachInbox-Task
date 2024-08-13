"use client"
import { sidebarLinks } from "@/constant";
import Image from "next/image";
import React from "react";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSideBar = () => {

    const pathname = usePathname()
  return (
    <div className=" px-3 py-4 background-light200_dark200  border-light_dark">
      <Image width={30} height={30} alt="logo" src="/icons/Logo 12.svg" />

      <div className="flex flex-1 mt-12 flex-col  items-center gap-14 ">
        {sidebarLinks.map((data) => (
          <div className={`relative group p-2  ${pathname === data.route ? ` border   shadow-sm dark:bg-gray-700 `: ``} rounded`}  key={data.route}>
            <Link  href={data.route}>
              <Image  width={17} height={17} alt="Icons" src={data.imgURL} />
            </Link>
            <Badge
              className="absolute  whitespace-nowrap group-hover:visible invisible left-10 -top-1  hover:flex text-xs font-light rounded bg-white dark:bg-black
           border-light_dark break-keep  text-black dark:text-slate-300 "
              variant="outline"
            >
              {data.label}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
