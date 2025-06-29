import { Request, Response } from 'express';
import asyncHandler from '../../utils/asyncHandler';
import { BadRequestError } from '../../error';
import ratingServices from './rating.services';
import { StatusCodes } from '../../constants/httpStatus';


const createRating = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  
  const ratingData = req.body;
  const userId = req.user?._id;

  if (!userId || !ratingData) {
    throw new BadRequestError('User ID and rating data are required');
    return;
  }

  const result = await ratingServices.storeRatingInDB(ratingData, userId);


  res.status(StatusCodes.CREATED).json({
    status: 'success',
    message: 'Rating created successfully',
    details: {
      data: result
    }
  });
}
)