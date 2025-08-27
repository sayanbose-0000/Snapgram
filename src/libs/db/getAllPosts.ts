"use server";

import PostModel, { IPostSchema } from "@/db-models/PostSchema";
import { IUserSchema } from "@/db-models/UserSchema";

interface IPosts extends Omit<IPostSchema, 'author'> {
  author: IUserSchema;
}

const getAllPosts = async (): Promise<IPosts[]> => {
  try {
    const posts = await PostModel.find().populate("author").sort({ createdAt: -1 }).lean() as unknown as IPosts[];
    console.log(posts[0].author.dp);
    // return posts;
    return JSON.parse(JSON.stringify(posts));
  }

  catch (err) {
    console.log("Failed to get all posts", err);
    throw new Error("Failed to fetch posts");
  }
};

export default getAllPosts;
export type { IPosts };
