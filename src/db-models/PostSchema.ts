import { model, Model, models, Schema, Types } from "mongoose";

interface IPostSchema {
  _id?: Types.ObjectId,
  author: Types.ObjectId,
  imageUrl: string,
  caption: string,
  createdAt?: Date,
  updatedAt?: Date;
}

const PostSchema: Schema<IPostSchema> = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "snapgram_users",
    required: [true, "Author of post is required"]
  },

  imageUrl: {
    type: String,
    required: [true, "Image is required"]
  },

  caption: {
    type: String,
    required: [true, "Caption is required"]
  }
}, { timestamps: true });

const PostModel: Model<IPostSchema> = models["snapgram_posts"] as Model<IPostSchema> || model<IPostSchema>("snapgram_posts", PostSchema);

export default PostModel;
export type { IPostSchema };
