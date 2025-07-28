import { User } from "next-auth";
import connectDb from "./connectDb";
import UserModel from "@/db-models/UserSchema";
import { generateUsername } from "unique-username-generator";

const saveUserDb = async (user: User): Promise<boolean> => {
  await connectDb();

  const { email, name, image } = user;

  try {
    const userDoc = await UserModel.findOne({ email });

    if (userDoc) {
      return true;
    }

    await UserModel.create({
      username: generateUsername("", 5, 20),
      name,
      email,
      // bio: "",
      dp: image,
    });

    return true;
  } catch (err) {
    console.log("Mongodb: Couldn't create user.\n", err);
    return false;
  }
};

export default saveUserDb;
