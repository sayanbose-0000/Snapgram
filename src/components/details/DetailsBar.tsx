import { jetBrainsMono } from "@/fonts/font";
import React from "react";
import Image from "next/image";
import LogOutComp from "../logout/LogOutComp";
import getUserDetails from "@/libs/auth/getUserDetails";

const DetailsBar = async () => {
  const userDetails = await getUserDetails();

  if (userDetails) {
    return (
      <div className={`drawer lp:drawer-open ${jetBrainsMono.className} w-fit h-screen fixed top-0 right-0 z-50 p-4`}>
        <input
          id="sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
          placeholder=""
        />

        <div className="drawer-side h-full w-full">
          <div className="author_details flex gap-2 justify-start items-center p-1 cursor-pointer">
            <div className="avatar flex-shrink-0">
              <div className="w-10 rounded-full">
                <Image
                  src={userDetails?.dp}
                  alt="Author DP"
                  height={100}
                  width={100}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-start text-sm min-w-0 flex-1 w-48">
              <span className="truncate w-full">{userDetails?.email}</span>
              <span className="text-gray-500 truncate w-full">
                {userDetails?.username}
              </span>
            </div>
          </div>
          <LogOutComp />
        </div>
      </div>
    );
  }
};

export default DetailsBar;
