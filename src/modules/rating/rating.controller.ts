import { Request, Response } from 'express';
import asyncHandler from '../../utils/asyncHandler';
import { BadRequestError } from '../../error';
import ratingServices from './rating.services';
import { StatusCodes } from '../../constants/httpStatus';
import { get } from 'http';

const createRating = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const ratingData = req.body;
    const userId = req.userId;

    if (!userId || !ratingData) {
      throw new BadRequestError('User ID and rating data are required');
      return;
    }

    const result = await ratingServices.storeRatingInDB(ratingData, userId);

    res.status(StatusCodes.CREATED).json({
      status: 'success',
      message: 'Rating created successfully',
      details: {
        data: result,
      },
    });
  },
);

const getAllRatings = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const result = await ratingServices.fetchAllRatingsFromDB();

    res.status(StatusCodes.OK).json({
      status: 'success',
      message: 'Ratings fetched successfully',
      details: {
        count: result.length,
        data: result,
      },
    });
  },
);

// getting a single rating by ID
const getRatingById = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const ratingId = req.params.id;

    const result = await ratingServices.fetchRatingByIdFromDB(ratingId);

    res.status(StatusCodes.OK).json({
      status: 'success',
      message: 'Rating fetched successfully',
      details: {
        data: result,
      },
    });
  },
);

// updating a rating by ID
const updateRatingById = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const ratingId = req.params.id;
    const ratingData = req.body;
    const result = await ratingServices.updateRatingByIdInDB(
      ratingId,
      ratingData,
    );

    res.status(StatusCodes.OK).json({
      status: 'success',
      message: 'Rating updated successfully',
      details: {
        data: result,
      },
    });
  },
);

// deleting a rating by ID
const deleteRatingById = asyncHandler(
  async (req: Request, res: Response): Promise<void> => { 
    const ratingId = req.params.id;
    const result = await ratingServices.deleteRatingByIdFromDB(ratingId); 

    res.status(StatusCodes.OK).json({
      status: 'success',
      message: 'Rating deleted successfully',
      details: {
        data: result,
      },
    })
  }
)

export const ratingController = {
  createRating,
  getAllRatings,
  getRatingById,
  updateRatingById,
  deleteRatingById,
};
