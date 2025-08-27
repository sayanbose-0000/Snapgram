import Image from "next/image";
import ReplySection from "./ReplySection";
import formatDate from "@/libs/helpers/date";
import { IComments } from "@/libs/db/getComments";
import likeComment from "@/libs/db/likeComment";
import { SessionProvider } from "next-auth/react";
import DeleteComment from "./DeleteComment";

interface CommentProp {
  comment: IComments;
}

const SingleComment = ({ comment }: CommentProp) => {
  console.log(comment);

  if (comment) {
    return (
      <div className="overflow-x-hidden">
        <div className="author_details flex gap-2 justify-start items-start p-1 my-2">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <Image
                src={comment.user.dp}
                alt="Author DP"
                height={100}
                width={100}
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-sm">
            <div className="mb-1">
              <span className="font-semibold cursor-pointer">{comment.user.username}</span>
              <span className="pl-1">
                {comment.comment}
              </span>
            </div>
            <div className="flex flex-row gap-4 justify-start items-center text-gray-500">
              <span>{formatDate(comment.createdAt ? new Date(comment.createdAt) : undefined)}</span>

              <form action={likeComment}>
                <input type="hidden" defaultValue={comment._id?.toString()} name="comment-id" />
                <input type="hidden" defaultValue={comment._id?.toString()} name="comment-id" />
                <span className="cursor-pointer">Like(0)</span>
              </form>

              <form action="">
                <button className="cursor-pointer">Reply</button>
              </form>

              <SessionProvider>
                <DeleteComment comment={comment} />
              </SessionProvider>
            </div>

            <ReplySection />
          </div>
        </div>
      </div>
    );
  };
};

export default SingleComment;
