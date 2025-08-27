import { model, Model, models, Schema, Types } from "mongoose";

interface ICommentsLikeSchema {
  _id?: Types.ObjectId,
  comments: Types.ObjectId;
  user: Types.ObjectId,
  createdAt?: Date,
  updatedAt?: Date;
}

const CommentsLikeSchema: Schema<ICommentsLikeSchema> = new Schema(
  {
    comments: {
      type: Schema.Types.ObjectId,
      ref: "snapgram_comments",
      required: [true, "Post Id is requried"],
    },

    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User Id is required"],
    },
  },
  { timestamps: true },
);

const CommentsLikesModel: Model<ICommentsLikeSchema> =
  (models["snapgram_comments_likes"] as Model<ICommentsLikeSchema>) ||
  model<ICommentsLikeSchema>("snapgram_comments_likes", CommentsLikeSchema);

export default CommentsLikesModel;
