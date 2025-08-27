'use client';

import { logOut } from "@/libs/auth/authenticate";
import { LogOut } from "lucide-react";
import {  useState } from "react";
import { CgSpinnerAlt } from "react-icons/cg";

const LogOutComp = () => {
  const [loading, setLoading] = useState(false);

  const handleLoggingOut = async () => {
    setLoading(true);
    try {
      await logOut();
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="author_details flex gap-2 justify-end items-center p-1 w-full rounded-sm  *:text-red-500">
      <div className="flex justify-center items-center gap-1 cursor-pointer" onClick={handleLoggingOut}>
        {/* <button className="scale-75" > */}
        {
          !loading ?
            <>
              <span className="text-sm">Logout</span>
              <LogOut className="scale-75" />
            </>
            :
            <>
              <span className="text-sm text-gray-400">Logging out</span>
              <CgSpinnerAlt className="animate-spin scale-125 text-gray-400" />
            </>
        }
        {/* </button> */}
      </div>
    </div>
  );
};

export default LogOutComp;
