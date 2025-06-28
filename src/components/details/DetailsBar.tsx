import { jetBrainsMono, pacifico } from "@/fonts/font";
import React from "react";
import Image from "next/image";
import LogOutComp from "../logout/LogOutComp";

const DetailsBar = () => {
  return (
    <div className={`drawer lp:drawer-open ${jetBrainsMono.className} w-fit h-screen fixed top-0 right-0 z-50 p-4`}>

      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" placeholder="" />

      <div className="drawer-side h-full w-full">
        <div className="author_details flex gap-2 justify-start items-center p-1">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <Image src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg" alt="Author DP" height={100} width={100} className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-start text-sm">
            <span>johndoe@gmail.com</span>
            <span className="text-gray-500">johndoe45899</span>
          </div>
        </div>

        <LogOutComp />
      </div>
    </div>
  );
};

export default DetailsBar;