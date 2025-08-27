"use client";

import commentDelete from "@/libs/db/commentDelete";
import { IComments } from "@/libs/db/getComments";
import { useSession } from "next-auth/react";

interface CommentProp {
  comment: IComments;
}

const DeleteComment = ({ comment }: CommentProp) => {
  const { data: session } = useSession();

  return (
    <>
      {
        comment._id && comment.user._id && comment.user.email === session?.user?.email &&

        <form action={commentDelete} >
          <input type="hidden" defaultValue={comment._id?.toString()} name="comment-id" />
          <input type="hidden" defaultValue={comment.user._id?.toString()} name="user-id" />
          <button className="cursor-pointer">Delete</button>
        </form >
      }
    </>
  );
};

export default DeleteComment;
