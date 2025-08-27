import { model, Model, models, Schema, Types } from "mongoose";

interface IReplyLikesSchema {
  _id?: Types.ObjectId,
  comments: Types.ObjectId,
  user: Types.ObjectId,
  createdAt?: Date,
  updatedAt?: Date;
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
