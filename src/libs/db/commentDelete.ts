"use server";

import CommentsModel, { ICommentsSchema } from "@/db-models/CommentsSchema";
import { revalidatePath } from "next/cache";

const commentDelete = async (formdata: FormData) => {
  const commentId = formdata.get("comment-id");
  const userId = formdata.get("user-id");

  try {
    const commentDetails = await CommentsModel.findOne({ _id: commentId }) as unknown as ICommentsSchema;

    if (!commentDetails) {
      throw new Error("Comment not found");
    }

    if (commentDetails.user.id.toString() !== userId) {
      throw new Error("You can't delete other's posts");
    }

    await CommentsModel.deleteOne({ _id: commentId });
    revalidatePath("/");
  }

  catch (err) {
    throw new Error("Error in deleting post: " + (err as Error).message);
  }
};

export default commentDelete;
