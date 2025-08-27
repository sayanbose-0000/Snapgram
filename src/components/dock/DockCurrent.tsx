"use client";

import { dockList } from "@/libs/lists/dockList";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DockCurrent = ({ username }: { username?: string; }) => {
  const pathname = usePathname();

  return (
    <>
      {
        dockList.map((items, idx) => {
          return (
            <li key={idx} className={`flex flex-row justify-center items-center  ${(pathname === items.linkTo || pathname === `${items.linkTo}/${username}`) && "bg-neutral text-neutral-content"}`}>
              <Link href={items.linkTo === "/profile" ? `${items.linkTo}/${username}` : items.linkTo} className={`${pathname === items.linkTo ? "scale-110" : ""}`}>
                <items.icon />
              </Link>
            </li>
          );
        })
      }

    </>
  );
};

export default DockCurrent;
