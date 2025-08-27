import { model, Model, models, Schema, Types } from "mongoose";

interface IReplySchema {
  _id?: Types.ObjectId,
  comment: Types.ObjectId,
  user: Types.ObjectId,
  reply: string,
  createdAt?: Date,
  updatedAt?: Date;
}

const ReplySchema: Schema<IReplySchema> = new Schema({
  comment: {
    type: Schema.Types.ObjectId,
    ref: "snapgram_comments",
    required: [true, "Comment Id is requried"],
  },

  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User Id is required"]
  },

  reply: {
    type: String,
    required: [true, "Reply is needed"]
  }
}, { timestamps: true });

const ReplyModel: Model<IReplySchema> = models["snapgram_replies"] as Model<IReplySchema> || model<IReplySchema>("snapgram_replies", ReplySchema);

export default ReplyModel;
