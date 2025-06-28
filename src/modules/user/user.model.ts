import { model, Schema } from "mongoose";
import { TUser, UserModel } from "./user.interface";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
photo: String,
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  userStatus: {
    type: String,
    required: true,
    enum: ["active", "inactive", "banned"],
    default: "active",
  },
});


const User = model<TUser, UserModel>('User', userSchema)

export default User;