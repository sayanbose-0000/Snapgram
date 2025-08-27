// "use client";

import { jetBrainsMono, pacifico } from "@/fonts/font";
import Link from "next/link";
import React from "react";
import DarkMode from "../darkmode/DarkMode";
import SidebarCurrent from "./SidebarCurrent";
import getUserDetails from "@/libs/auth/getUserDetails";

// interface SideBarProps {
//   userId: string,
//   currentPath: string;
// }

const Sidebar = async () => {
  const user = await getUserDetails();

  return (
    <div className={`drawer lp:drawer-open ${jetBrainsMono.className} w-fit h-screen fixed top-0 left-0 z-50 border-r border-r-light-line dark:border-r-dark-line`}>
      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" placeholder="" />

      <div className="drawer-side h-full">
        <ul className="menu text-base-content p-4 bg-base-100 flex flex-col gap-2 h-full">

          {/* <label htmlFor="sidebar-drawer" aria-label="close sidebar" className="drawer-overlay"></label> */}
          <div className="text-2xl font-bold self-center lg-tb:self-start">
            <Link href={"/"} className={`${pacifico.className}`}>Snapgram</Link>
          </div>

          <SidebarCurrent username={user?.username}/>


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
