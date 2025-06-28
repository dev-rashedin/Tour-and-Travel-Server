import { NotFoundError } from "../../error";
import { TUser } from "./user.interface";
import User from "./user.model"



export const storeUserInDB = async (userData : TUser) => {
  if (!userData) { 
    throw new NotFoundError("User data is required to create a user");
  }
  const result = await User.create(userData);
  return result;
} 