import { Model } from "mongoose";


export type TUser = {
  name: string;
  age: number;
  email: string;
  photo?: string | null;
  password: string;
  role: "user" | "admin";
  userStatus: "active" | "inactive" | "banned";
}
