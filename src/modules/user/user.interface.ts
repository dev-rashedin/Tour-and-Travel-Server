import { Model } from "mongoose";


export type TUser = {
  name: string;
  age: number;
  email: string;
  photo: string
  password: string;
  role: string;
  userStatus: string;
}

export interface UserModel extends Model<TUser> { }