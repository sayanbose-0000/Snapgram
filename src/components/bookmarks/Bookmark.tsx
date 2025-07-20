import { Heart, MessageCircle, Send } from "lucide-react";
import Image from "next/image";

const Bookmark = () => {
  return (
    <div className="post rounded-lg p-2 m-2 tb:w-52 lg-tb:w-52 lp:w-sm lg-lp:w-xs hover:cursor-pointer">
      <div className="card shadow-sm dark:bg-accent-content rounded-lg">
        <figure>
          <Image src="https://images.pexels.com/photos/753266/pexels-photo-753266.jpeg" alt="Post Image" height={2000} width={2000} className="object-cover h-full w-full relative rounded-lg" />
          <div className="absolute h-full w-full hover:backdrop-blur-xl flex justify-center items-center rounded-lg">
            <div className="card-actions flex justify-start items-center *:p-0 *:m-0 *:bg-transparent *:border-none">
              <button className="btn shadow-none"><Heart className="text-white" /></button>
              <button className="btn shadow-none"><MessageCircle className="text-white" /></button>
              <button className="btn shadow-none"><Send className="text-white" /></button>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Bookmark;