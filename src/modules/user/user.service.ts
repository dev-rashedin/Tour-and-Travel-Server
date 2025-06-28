import { NotFoundError } from "../../error";
import { TUser } from "./user.interface";
import User from "./user.model"


export const fetchAllUsersFromDB = async (): Promise<TUser[]> => { 
  const result = await User.find();
  if (!result || result.length === 0) {
    throw new NotFoundError("No users found");
  }
  return result; 
}

export const storeUserInDB = async (userData : TUser): Promise<TUser>  => {
  if (!userData) { 
    throw new NotFoundError("User data is required to create a user");
  }
  const result = await User.create(userData);
  return result;
} 


export const fetchSingleUserFromDB = async (userId: string): Promise<TUser> => { 
  if (!userId) {
    throw new NotFoundError("User ID is required to fetch a user");
  }

  const result = await User.findById(userId);

  if (!result) {
    throw new NotFoundError(`User with ID ${userId} not found`);
  }

  return result;
}


export const UpdateUserInDB = async (userId: string, userData: TUser): Promise<TUser> => {
  if (!userId || !userData) {
    throw new NotFoundError('User id and user data  is required to update a user');
  }

  const result = await User.findByIdAndUpdate(userId, userData, {new: true, runValidators: true});

  if (!result) {
    throw new NotFoundError(`User with ID ${userId} failed to update`);
  }
 
  return result;
};

export const deleteUserFromDB = async (userId: string): Promise<unknown> => {
  if (!userId) {
    throw new NotFoundError('User ID is required to delete a user');
  }

  const result = await User.findByIdAndDelete(userId);

  if (!result) {
    throw new NotFoundError(`User with ID ${userId} failed to delete`);
  }

  return result;
}