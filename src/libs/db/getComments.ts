"use server";

import CommentsModel, { ICommentsSchema } from "@/db-models/CommentsSchema";
import { IPostSchema } from "@/db-models/PostSchema";
import { IUserSchema } from "@/db-models/UserSchema";

interface IPosts extends Omit<IPostSchema, "author"> {
  author: IUserSchema;
}

interface IComments {
  _id: string;
  post: string;
  user: IUserSchema;
  comment: string;
  createdAt?: string;
  updatedAt?: string;
}

const getComments = async (post: IPosts): Promise<IComments[]> => {
  try {
    const comments = await CommentsModel.find({ post: post._id })
      .populate("user")
      .sort({ createdAt: -1 })
      .lean();

    return JSON.parse(JSON.stringify(comments)) as IComments[];
  } catch (err) {
    console.log("Failed to get comments", err);
    throw new Error("Failed to fetch comments");
  }
};

export default getComments;
export type { IPosts, IComments };
