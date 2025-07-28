"use client";

import { jetBrainsMono, pacifico } from "@/fonts/font";
import Link from "next/link";
import { sideBarList } from "@/libs/lists/sideBarList";
import React from "react";
import DarkMode from "../darkmode/DarkMode";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className={`drawer lp:drawer-open ${jetBrainsMono.className} w-fit h-screen fixed top-0 left-0 z-50 border-r border-r-light-line dark:border-r-dark-line`}>
      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" placeholder="" />

      <div className="drawer-side h-full">
        <ul className="menu text-base-content p-4 bg-base-100 flex flex-col gap-2 h-full">

          {/* <label htmlFor="sidebar-drawer" aria-label="close sidebar" className="drawer-overlay"></label> */}
          <div className="text-2xl font-bold self-center lg-tb:self-start">
            <Link href={"/"} className={`${pacifico.className}`}>Snapgram</Link>
          </div>

          {
            sideBarList.map((items, idx) => (
              <React.Fragment key={idx}>
                <li className={`flex flex-row items-center ${pathname === items.linkTo && "bg-neutral text-neutral-content rounded-sm"}`}>
                  <Link href={items.linkTo} className="w-full rounded-sm lg-lp:pr-10">
                    <items.icon />
                    <p>{items.title}</p>
                  </Link>
                </li>
                {/* {items.divider && <div className="w-full h-0.5 bg-base-300 mt-2 mb-2" />} */}
                {items.divider && <div className="divider m-1"></div>}
              </React.Fragment>
            ))
          }

          {/* <div className="w-full h-0.5 bg-base-300 mt-auto" /> */}
          <div className="divider mt-auto mb-1"></div>

          {/* <li className="flex flex-row justify-start items-center"> */}
          <DarkMode />
          {/* </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;;