import { model, Model, models, Schema } from "mongoose";

interface IUserSchema {
  username: string,
  fullName: string,
  email: string,
  bio: string,
  dp: string;
}

const UserSchema: Schema<IUserSchema> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true
  },

  fullName: {
    type: String,
    required: [true, "Full Name is required"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },

  bio: {
    type: String,
    required: [true, "Bio is required"]
  },

  dp: {
    type: String,
    required: [true, "Dp is required"]
  }
}, { timestamps: true });


const UserModel: Model<IUserSchema> = models["snapgram_users"] as Model<IUserSchema> || model<IUserSchema>("snapgram_users", UserSchema);

export default UserModel;
