import { jetBrainsMono } from "@/fonts/font";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className={`${jetBrainsMono.className}`}>
      <nav className="navbar bg-base-100 flex justify-start items-center min-h-0 p-2.5">
        <label htmlFor="sidebar-drawer" className="drawer-button block sm:hidden">
        </label>

        <div className="ml-auto mr-auto text-xl font-bold">
          <Link href={"/"} className="ml-auto mr-auto">Snapgram</Link>
        </div>

      </nav>
      {/* <div className="w-full h-0.5 bg-base-300" /> */}
      <div className="divider h-0 m-0"></div>
    </header>
  );
};

export default Navbar;