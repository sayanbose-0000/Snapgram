"use server";

import CommentsLikesModel from "@/db-models/CommentsLikeSchema";

const likeComment = async (formdata: FormData) => {
  const commentId = formdata.get("comment-id");

  try {
    await CommentsLikesModel.insertOne({

    });
  }

  catch (err) {
    throw new Error("Error liking comment: " + (err as Error).message);
  }
};

export default likeComment;
