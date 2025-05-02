"use client";

import { jetBrainsMono } from "@/fonts/font";
import Link from "next/link";
import { sideBarList } from "@/libs/sideBarList";
import React from "react";
import DarkMode from "../darkmode/DarkMode";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className={`drawer sm:drawer-open ${jetBrainsMono.className} w-fit h-[inherit]`}>

      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" placeholder="" />

      <div className="drawer-side h-full">
        <label htmlFor="sidebar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

        <ul className="menu text-base-content w-64 p-4 bg-base-100 flex flex-col gap-2 h-full">
          {
            sideBarList.map((items, idx) => (
              <React.Fragment key={idx}>
                <li className={`flex flex-row items-center ${pathname === items.linkTo && "bg-accent rounded-sm"}`}>
                  <Link href={items.linkTo} className="w-full">
                    <items.icon />
                    <p>{items.title}</p>
                  </Link>
                </li>
                {items.divider && <div className="w-full h-0.5 bg-base-300 mt-2 mb-2" />}
              </React.Fragment>
            ))
          }

          <div className="w-full h-0.5 bg-base-300 mt-auto" />

          <li className=" flex flex-row justify-start items-center">
            <span>Dark Mode</span>
            <DarkMode />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;