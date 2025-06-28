import { logOut } from "@/libs/authentication";
import { LogOut } from "lucide-react";

const LogOutComp = () => {
  return (
    <div className="author_details flex gap-2 justify-end items-center p-1 w-full rounded-sm  *:text-red-500">
      <div className="flex justify-center items-center gap-1 cursor-pointer" onClick={logOut}>
        <span className="text-sm">Logout</span>
        {/* <button className="scale-75" > */}
        <LogOut className="scale-75" />
        {/* </button> */}
      </div>
    </div>
  );
};

export default LogOutComp;