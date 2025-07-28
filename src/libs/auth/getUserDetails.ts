import { auth } from "~/auth";
import connectDb from "../db/connectDb";
import UserModel, { IUserSchema } from "@/db-models/UserSchema";
import { HydratedDocument } from "mongoose";

let userDetails: HydratedDocument<IUserSchema> | null = null;

const getUserDetails = async () => {
  const session = await auth();
  await connectDb();

  if (userDetails) {
    console.log("userDetails already present");
    return userDetails;
  }

  userDetails = await UserModel.findOne({ email: session?.user?.email });
  console.log("userDetails fetched")
  return userDetails;
};

export default getUserDetails;
