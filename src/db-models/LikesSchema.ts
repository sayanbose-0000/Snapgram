import { model, Model, models, Schema, Types } from "mongoose";

interface ILikesSchema {
  _id?: Types.ObjectId,
  post: Types.ObjectId,
  user: Types.ObjectId,
  createdAt?: Date,
  updatedAt?: Date;
}

const LikesSchema: Schema<ILikesSchema> = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: "snapgram_posts",
    required: [true, "Post Id is requried"],
  },

  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User Id is required"]
  }
}, { timestamps: true });

const LikesModel: Model<ILikesSchema> = models["snapgram_likes"] as Model<ILikesSchema> || model<ILikesSchema>("snapgram_likes", LikesSchema);

export default LikesModel;
