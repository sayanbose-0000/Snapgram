import { model, Model, models, Schema, Types } from "mongoose";

interface IReplyLikesSchema {
  comments: Types.ObjectId,
  user: Types.ObjectId;
}

const ReplyLikesSchema: Schema<IReplyLikesSchema> = new Schema({
  comments: {
    type: Schema.Types.ObjectId,
    ref: "snapgram_replies",
    required: [true, "Post Id is requried"],
  },

  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User Id is required"]
  }
}, { timestamps: true });

const LikesModel: Model<IReplyLikesSchema> = models["snapgram_repliey_likes"] as Model<IReplyLikesSchema> || model<IReplyLikesSchema>("snapgram_repliey_likes", ReplyLikesSchema);

export default LikesModel;