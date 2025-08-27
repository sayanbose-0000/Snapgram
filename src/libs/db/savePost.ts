"use server";

import PostModel from "@/db-models/PostSchema";
import getUserDetails from "../auth/getUserDetails";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const savePost = async (url: string, caption: string) => {
  if (!url) {
    throw new Error("Url is required");
  };

  if (!caption) {
    throw new Error("Caption is required");
  }

  const user = await getUserDetails();
  try {
    // throw new Error("Error saving in database");
    await PostModel.create({
      author: user?._id,
      imageUrl: url,
      caption
    });

    revalidatePath(`/profile/${user?.username}`);
    revalidatePath('/');
    redirect(`/profile/${user?.username}`);
  }
  
  catch (err) {
    console.log(err);
    throw new Error("Error posting");
  }
  
};

export default savePost;
