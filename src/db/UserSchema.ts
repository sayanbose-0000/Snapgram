import { model, Model, models, Schema } from "mongoose";

interface IUserSchema {
  userId: string,
  username: string,
  email: string,
  dp: string;
}

const UserSchema: Schema<IUserSchema> = new Schema({
  userId: {
    type: String,
    required: [true, "UserId is required"],
    unique: true
  },

  username: {
    type: String,
    required: [true, "Username is required"]
  },

  email: {
    type: String,
    required: [true, "Email is required"]
  },

  dp: {
    type: String,
    required: [true, "Dp is required"]
  }
}, { timestamps: true });


const UserModel: Model<IUserSchema> = models["snapgram_users"] as Model<IUserSchema> || model<IUserSchema>("snapgram_users", UserSchema);

export default UserModel;
