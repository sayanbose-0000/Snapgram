import { pacifico, jetBrainsMono } from "@/fonts/font";
import Link from "next/link";
import { Bell, CirclePlus, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className={`${jetBrainsMono.className}`}>
      <nav className="navbar bg-base-100 flex justify-between items-center min-h-0 p-2.5 lp:hidden">
        {/* <label htmlFor="sidebar-drawer" className="drawer-button block sm:hidden"> */}
        {/* </label> */}

        <div className="text-2xl font-extrabold">
          <Link href={"/"} className={`${pacifico.className}`}>Snapgram</Link>
        </div>

        <ul className="flex gap-2">
          <li>
            <Link href={"/create"} className="w-full rounded-sm">
              <CirclePlus />
            </Link>
          </li>

          <li>
            <Link href={"/notifications"} className="w-full rounded-sm">
              <Bell />
            </Link>
          </li>
        </ul>


      </nav>
      {/* <div className="w-full h-0.5 bg-base-300" /> */}
      <div className="divider h-0 m-0"></div>
    </header>
  );
};

export default Navbar;