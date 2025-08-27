"use server";

import CommentsModel from "@/db-models/CommentsSchema";
import getUserDetails from "../auth/getUserDetails";
import { revalidatePath, revalidateTag } from "next/cache";

const postComments = async (formdata: FormData) => {
  const postId = formdata.get("post-id");
  const postComment = formdata.get("post-comment");

  if (!postId || !postComment) {
    throw new Error("");
  }

  const user = await getUserDetails();
  try {
    await CommentsModel.create({
      post: postId,
      user: user?._id,
      comment: postComment
    });

    revalidatePath("/");
  }

  catch (err) {
    console.log(err);
    throw new Error("Error commenting");
  }
};

export default postComments;
