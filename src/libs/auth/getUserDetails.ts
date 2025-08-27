"use server";

import { auth } from "~/auth";
import connectDb from "../db/connectDb";
import UserModel, { IUserSchema } from "@/db-models/UserSchema";

let userDetails: IUserSchema | null = null;

const getUserDetails = async () => {
  const session = await auth();
  await connectDb();

  if (userDetails) {
    console.log("userDetails already present");
    return userDetails;
  }

  // .lean() converts userDetails to a plain object so that it can be sent to client component
  userDetails = await UserModel.findOne({ email: session?.user?.email }).lean();
  console.log("userDetails fetched");
  return userDetails;
};

export default getUserDetails;
