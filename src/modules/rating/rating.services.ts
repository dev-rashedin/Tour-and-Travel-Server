import { BadRequestError, NotFoundError } from '../../error';
import { TRating } from './rating.interface';
import Rating from './rating.model';

// store rating in the database
const storeRatingInDB = async (ratingData: TRating, userId: string): Promise<TRating> => {
  if (!ratingData.rating || !userId || !ratingData.tourId) {
    throw new BadRequestError('Rating, User ID, and Tour ID are required');
  }

  const result = await Rating.create({
    ...ratingData,
    userId,
  });

  return result;
};

// fetch all ratings from the database
const fetchAllRatingsFromDB = async (): Promise<TRating[]> => { 
  const ratings = await Rating.find({}).populate('userId', 'name email').populate('tourId', 'title');

  if (!ratings || ratings.length === 0) { 
    throw new NotFoundError('No ratings found');
  }

  return ratings;
}

// fetch a single rating by ID from the database
const fetchRatingByIdFromDB = async (ratingId: string): Promise<TRating> => {
  if (!ratingId) {
    throw new BadRequestError('Rating ID is required');
  }

  const result = await Rating.findById(ratingId).populate('userId', 'name email').populate('tourId', 'title');

  if (!result) {
    throw new NotFoundError(`Rating with ID ${ratingId} not found`);
  }

  return result;
};

// update a rating by ID in the database
const updateRatingByIdInDB = async (ratingId: string, ratingData: Partial<TRating>): Promise<TRating> => {
  if (!ratingId) {
    throw new BadRequestError('Rating ID is required');
  }

  const result = await Rating.findByIdAndUpdate(ratingId, ratingData, { new: true });

  if (!result) {
    throw new NotFoundError(`Rating with ID ${ratingId} not found`);
  }

  return result;
};


// delete a rating by ID from the database
const deleteRatingByIdFromDB = async (ratingId: string): Promise<TRating> => {
  if (!ratingId) {
    throw new BadRequestError('Rating ID is required');
  } 

  const result = await Rating.findByIdAndDelete(ratingId);  

  if (!result) {
    throw new NotFoundError(`Rating with ID ${ratingId} not found`);
  }

  return result;    
};


const ratingServices = {
  storeRatingInDB,
  fetchAllRatingsFromDB,
  fetchRatingByIdFromDB,
  updateRatingByIdInDB,
  deleteRatingByIdFromDB
};

export default ratingServices;




