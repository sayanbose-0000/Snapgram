"use client";

import { dockList } from "@/libs/dockList";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Dock = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="dock lp:hidden lg-tb:w-lg rounded-2xl mx-auto">
      {
        dockList.map((items, idx) => {
          return (
            <li key={idx} className={`flex flex-row justify-center items-center ${pathname === items.linkTo ? "bg-neutral text-neutral-content" : ""}`}>
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