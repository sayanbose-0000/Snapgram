import { model, Model, models, Schema, Types } from "mongoose";

interface INotificationSchema {
  _id?: Types.ObjectId,
  user: Types.ObjectId,
  message: string,
  isRead: boolean,
  createdAt?: Date,
  updatedAt?: Date;
}

const NotificationSchema: Schema<INotificationSchema> = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "snapgram_users",
    required: [true, "User is required"]
  },

  message: {
    type: String,
    required: [true, "Message is required"]
  },

  isRead: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const NotificationModel: Model<INotificationSchema> = models["snapgram_notifications"] as Model<INotificationSchema> || model<INotificationSchema>("snapgram_notifications", NotificationSchema);

export default NotificationModel;
