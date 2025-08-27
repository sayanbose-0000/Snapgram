import { Heart, Star } from "lucide-react";
import Image from "next/image";
import CommentsModal from "../modals/CommentsModal";
import ShareModal from "../modals/ShareModal";
import { IPosts } from "@/libs/db/getAllPosts";
import formatDate from "@/libs/helpers/date";
import CommentBox from "../comments/CommentBox";

interface PostProp {
  post: IPosts;
}

const Post = ({ post }: PostProp) => {
  return (
    <li className="rounded-xl p-2 m-2 lg-tb:w-sm lp:w-sm lg-lp:w-lg">
      <div className="author_details flex gap-2 justify-start items-center p-1">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <Image
              src={post.author.dp}
              alt="Author DP"
              height={100}
              width={100}
              className="object-cover h-4 w-4"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start text-sm">
          <span>{post.author.username}</span>
          <span className="text-gray-500">{formatDate(post.createdAt)}</span>
        </div>
      </div>

      <div className="post p-1 dark:bg-gray-950 rounded-xl">
        <div className="card shadow-sm dark:bg-accent-content rounded-xl">
          <figure className="h-96 w-full">
            <Image
              src={post.imageUrl}
              alt="Post Image"
              height={2000}
              width={2000}
              className="object-cover h-full w-full relative rounded-lg"
            />
          </figure>
          <div className="card-body">
            <div className="flex flex-row">
              <p className="line-clamp-3 text-left">{post.caption}</p>
            </div>
            
            <div className="card-actions flex justify-start items-center mt-2 *:p-0 *:h-fit *:w-fit *:bg-transparent *:border-none">
              <button className="btn">
                <Heart />
              </button>

              <CommentsModal post={post}>
                <CommentBox post={post} />
              </CommentsModal>

              <ShareModal />

              <button className="btn ml-auto shadow-none">
                <Star />
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Post;
export type { PostProp };
