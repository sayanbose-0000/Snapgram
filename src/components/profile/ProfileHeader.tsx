import { jetBrainsMono } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import { FiUserPlus } from "react-icons/fi";

const ProfileHeader = () => {
  return (
    <header className="flex flex-row flex-wrap gap-4 justify-center items-center">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <Image src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg" alt="Author DP" height={500} width={500} className="object-cover" />
        </div>
      </div>

      <div className={`flex flex-col gap-1 ${jetBrainsMono.className}`}>
        <span>johndoe45899</span>
        <span className="text-gray-500">johndoe@gmail.com</span>
      </div>

      <div className="flex flex-col w-[90%] tb:flex-row tb:w-auto gap-2">
        <button className="btn btn-neutral">Follow</button>
        <button className="btn btn-neutral"><FiUserPlus /></button>
      </div>

      <div className="basis-full flex flex-wrap justify-center items-center gap-4">
        <button className="btn btn-ghost">8000 <span className="text-gray-500">Posts</span></button>
        <button className="btn btn-ghost">2000 <span className="text-gray-500">Followers</span></button>
        <button className="btn btn-ghost">6000 <span className="text-gray-500">Following</span></button>
      </div>
    </header>
  );
};

export default ProfileHeader;