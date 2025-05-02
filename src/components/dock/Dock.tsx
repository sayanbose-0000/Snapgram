"use client";

import { sideBarList } from "@/libs/sideBarList";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Dock = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="dock sm:hidden">
      {
        sideBarList.map((items, idx) => {
          if (items.title == "Settings") return null;

          return (
            <li key={idx} className={`flex flex-row justify-center items-center ${pathname === items.linkTo ? "dock-active" : ""}`}>
              <Link href={items.linkTo}>
                <items.icon />
              </Link>
            </li>
          );
        })
      }
    </div>
  );
};

export default Dock;