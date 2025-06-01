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
            <li key={idx} className={`flex flex-row justify-center items-center ${pathname === items.linkTo ? "bg-neutral" : ""}`}>
              <Link href={items.linkTo} className={`${pathname === items.linkTo ? "scale-110" : ""}`}>
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