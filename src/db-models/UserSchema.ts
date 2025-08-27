import { model, Model, models, Schema, Types } from "mongoose";

interface IUserSchema {
  _id?: Types.ObjectId,
  username: string;
  name: string;
  email: string;
  bio: string;
  dp: string;
  joinedOn: Date,
  createdAt?: Date,
  updatedAt?: Date;
}

const UserSchema: Schema<IUserSchema> = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },

    name: {
      type: String,
      required: [true, "Full Name is required"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },

    bio: {
      type: String,
    },

    dp: {
      type: String,
      required: [true, "Dp is required"],
    },

    joinedOn: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const UserModel: Model<IUserSchema> =
  (models["snapgram_users"] as Model<IUserSchema>) ||
  model<IUserSchema>("snapgram_users", UserSchema);

export default UserModel;
export type { IUserSchema };
