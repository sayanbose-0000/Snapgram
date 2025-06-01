import { Schema, Types } from "mongoose";

interface INotificationSchemas {
  userId: Types.ObjectId,
  notifMessage: string,
  read: boolean,
}

const NotificationSchema: Schema<INotificationSchemas> = new Schema({
  userId: {
    
  },
  
  notifMessage: {
    type: String,
    required: true
  }
});