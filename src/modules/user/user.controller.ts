import { Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import { StatusCodes } from "../../constants/httpStatus";
import User from "./user.model";


export const createUser = asyncHandler(async (req: Request, res: Response) => {
  // Logic to create a user
  const userData = req.body;

  const result = await User.create(userData);

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: "User created successfully",
    details: {
      user: result,
    }
  });
})

