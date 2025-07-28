import { model, Model, models, Schema, Types } from "mongoose";

interface ICommentsSchema {
  post: Types.ObjectId;
  user: Types.ObjectId;
  comment: string;
}

const CommentsSchema: Schema<ICommentsSchema> = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: "snapgram_posts",
      required: [true, "Post Id is requried"],
    },

    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User Id is required"],
    },

    comment: {
      type: String,
      required: [true, "Comment is needed"],
    },
  },
  { timestamps: true },
);

const CommentsModel: Model<ICommentsSchema> =
  (models["snapgram_comments"] as Model<ICommentsSchema>) ||
  model<ICommentsSchema>("snapgram_comments", CommentsSchema);

export default CommentsModel;
