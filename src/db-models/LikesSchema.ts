import { model, Model, models, Schema, Types } from "mongoose";

interface ILikesSchema {
  post: Types.ObjectId,
  user: Types.ObjectId;
}

const LikesSchema: Schema<ILikesSchema> = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    required: [true, "Post Id is requried"],
  },

  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User Id is required"]
  }
}, { timestamps: true });

const LikesModel: Model<ILikesSchema> = models["snapgram_likes"] as Model<ILikesSchema> || model<ILikesSchema>("snapgram_likes", LikesSchema);

export default LikesModel;