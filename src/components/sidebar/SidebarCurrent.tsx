"use client";

import { sideBarList } from "@/libs/lists/sideBarList";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarCurrent = ({ username }: { username?: string; }) => {
  const pathname = usePathname();

  return (
    <>
      {
        sideBarList.map((items, idx) => (
          <React.Fragment key={idx}>
            <li className={`flex flex-row items-center ${(pathname === items.linkTo || pathname === `${items.linkTo}/${username}`) && "bg-neutral text-neutral-content rounded-sm"}`}>
              <Link href={items.linkTo === "/profile" ? `${items.linkTo}/${username}` : items.linkTo} className="w-full rounded-sm lg-lp:pr-10">
                <items.icon />
                <p>{items.title}</p>
              </Link>
            </li>
            {/* {items.divider && <div className="w-full h-0.5 bg-base-300 mt-2 mb-2" />} */}
            {items.divider && <div className="divider m-1"></div>}
          </React.Fragment>
        ))
      }
    </>
  );
};

export default SidebarCurrent;
