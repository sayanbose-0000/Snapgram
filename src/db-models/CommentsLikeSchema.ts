import { model, Model, models, Schema, Types } from "mongoose";

interface ICommentsLikeSchema {
  comments: Types.ObjectId;
  user: Types.ObjectId;
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

const LikesModel: Model<ICommentsLikeSchema> =
  (models["snapgram_comments_likes"] as Model<ICommentsLikeSchema>) ||
  model<ICommentsLikeSchema>("snapgram_comments_likes", CommentsLikeSchema);

export default LikesModel;
