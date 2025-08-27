import { model, Model, models, Schema, Types } from "mongoose";

interface IViewSchema {
  _id?: Types.ObjectId,
  post: Types.ObjectId,
  user: Types.ObjectId,
  createdAt?: Date,
  updatedAt?: Date;
}

const ViewSchema: Schema<IViewSchema> = new Schema({
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

const ViewModel: Model<IViewSchema> = models["snapgram_comments"] as Model<IViewSchema> || model<IViewSchema>("snapgram_comments", ViewSchema);

export default ViewModel;
