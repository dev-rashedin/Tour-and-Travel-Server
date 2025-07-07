import { Request, Response } from 'express';
import { tourService } from './tour.service';
import { StatusCodes, asyncHandler } from 'express-error-toolkit';

const createTour = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const tourData = req.body;
    const result = await tourService.storeTourInDB(tourData);

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Tour created successfully',
      details: {
        tour: result,
      },
    });
  },
);

const getAllTours = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const result = await tourService.fetchAllToursFromDB();
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Tours fetched successfully',
      details: {
        count: result.length,
        tours: result,
      },
    });
  },
);

const getSingleTour = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const tourId = req.params.tourId;
    const result = await tourService.fetchSingleTourFromDB(tourId);
    res.status(StatusCodes.OK).json({
      success: true,
      message: `Tour with ID ${tourId} fetched successfully`,
      details: {
        tour: result,
      },
    });
  },
);

const updateTour = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const tourId = req.params.tourId;
    const tourData = req.body;
    const result = await tourService.updateTourInDB(tourId, tourData);
    res.status(StatusCodes.OK).json({
      success: true,
      message: `Tour with ID ${tourId} updated successfully`,
      details: {
        tour: result,
      },
    });
  },
);

const deleteTour = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const tourId = req.params.tourId;
    const result = await tourService.deleteTourFromDB(tourId);
    res.status(StatusCodes.OK).json({
      success: true,
      message: `Tour with ID ${tourId} deleted successfully`,
      details: {
        tour: result,
      },
    });
  },
);

export const tourController = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
};
