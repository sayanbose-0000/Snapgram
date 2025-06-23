import { model, Model, models, Schema, Types } from "mongoose";

interface IFollowerSchema {
  userId: Types.ObjectId,
  followerId: Types.ObjectId,
  followingId: Types.ObjectId;
}

const FollowerSchema: Schema<IFollowerSchema> = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "snapgram_users",
    required: [true, "UserId is required"]
  },

  followerId: {
    type: Schema.Types.ObjectId,
    ref: "snapgram_users",
    required: [true, "UserId is required"]
  },

  followingId: {
    type: Schema.Types.ObjectId,
    ref: "snapgram_users",
    required: [true, "UserId is required"]
  }
}, { timestamps: true });

const FollowerModel: Model<IFollowerSchema> = models["snapgram_followers"] as Model<IFollowerSchema> || model<IFollowerSchema>("snapgram_followers", FollowerSchema);

export default FollowerModel;