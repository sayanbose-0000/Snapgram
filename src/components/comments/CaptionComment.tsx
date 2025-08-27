import Image from "next/image";
import ReplySection from "./ReplySection";
import { PostProp } from "../home/Post";
import formatDate from "@/libs/helpers/date";

const CaptionComment = ({ post }: PostProp) => {
  return (
    <div className="overflow-x-hidden">
      <div className="author_details flex gap-2 justify-start items-start p-1 my-2">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <Image
              src={post.author.dp}
              alt="Author DP"
              height={100}
              width={100}
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-sm">
          <div className="mb-1">
            <span className="font-semibold cursor-pointer">{post.author.username}</span>
            <span className="pl-1">
              {post.caption}
            </span>
          </div>
          <div className="flex flex-row gap-4 justify-start items-center text-gray-500">
            <span>{formatDate(post.createdAt)}</span>
            <span>Like(0)</span>
            <span>Reply</span>
          </div>

          <ReplySection />
        </div>
      </div>
    </div>
  );
};

export default CaptionComment;
