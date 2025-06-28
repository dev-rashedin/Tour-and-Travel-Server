import { Request, Response } from 'express';
import asyncHandler from '../../utils/asyncHandler';
import { StatusCodes } from '../../constants/httpStatus';
import User from './user.model';
import {
  deleteUserFromDB,
  fetchAllUsersFromDB,
  fetchSingleUserFromDB,
  storeUserInDB,
  UpdateUserInDB,
} from './user.service';

export const getAllUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // Logic to get all users

    const result = await fetchAllUsersFromDB();

    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Users fetched successfully',
      details: {
        count: result.length,
        users: result,
      },
    });
  },
);

export const createUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // Logic to create a user
    const userData = req.body;

    const result = await storeUserInDB(userData);

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'User created successfully',
      details: {
        user: result,
      },
    });
  },
);

export const getSingleUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // Logic to get a single user by ID
    const userId = req.params.userId;

    const result = await fetchSingleUserFromDB(userId);

    res.status(StatusCodes.OK).json({
      success: true,
      message: ` User with Name ${result.name} and _id ${userId} fetched successfully`,
      details: {
        user: result,
      },
    });
  },
);

export const updateUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.userId;
    const userData = req.body;

    const result = await UpdateUserInDB(userId, userData);

    res.status(StatusCodes.OK).json({
      success: true,
      message: `User with ID ${userId} updated successfully`,
      details: {
        user: result,
      },
    });
  },
);

export const deleteUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.userId;

    const result = await deleteUserFromDB(userId);
    console.log(result)
    

    res.status(StatusCodes.OK).json({
      success: true,
      message: `User with ID ${userId} deleted successfully`,
      details: {
        user: null
      }
    });
  },
);
 