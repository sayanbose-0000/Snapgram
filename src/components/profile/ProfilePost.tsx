import { Heart, MessageCircle, Send } from "lucide-react";
import Image from "next/image";
import { IPosts } from "@/libs/db/getAllPosts";

const ProfilePost = ({ item }: { item: IPosts }) => {
  return (
    <div className="post rounded-lg p-2 m-2 tb:w-52 lg-tb:w-52 lp:w-sm lg-lp:w-xs hover:cursor-pointer h-52 w-52">
      <div className="card shadow-sm dark:bg-accent-content rounded-lg w-full h-full">
        <figure className="w-full h-full">
          <Image src={item.imageUrl} alt="Post Image" height={2000} width={2000} className="object-cover h-full w-full relative rounded-lg" blurDataURL="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg"/>
          <div className="absolute h-full w-full hover:backdrop-blur-xl flex justify-center items-center rounded-lg opacity-0 hover:opacity-100">
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

export default ProfilePost;
