
import { BadRequestError, NotFoundError} from "../../error";
import { TTour } from "./tour.interface";
import Tour from "./tour.model";


const fetchAllToursFromDB = async (): Promise<TTour[]> => { 
  const result = await Tour.find();
  if (!result || result.length === 0) {
    throw new NotFoundError("No tours found");
  }
  return result;
}

const fetchSingleTourFromDB = async (tourId: string): Promise<TTour> => { 
  if (!tourId) {
    throw new BadRequestError('Tour ID is required to fetch a tour');
  }

  const result = await Tour.findById(tourId);

  if (!result) {
    throw new NotFoundError(`Tour with ID ${tourId} not found`);
  }

  return result;
}

const storeTourInDB = async (tourData: TTour): Promise<TTour> => {
  if (!tourData) { 
    throw new BadRequestError("Tour data is required to create a tour");
  }
  const result = await Tour.create(tourData)

  return result;
}

const updateTourInDB = async (tourId: string, tourData: TTour): Promise<TTour> => {
  if (!tourId || !tourData) {
    throw new BadRequestError(
      'Tour id and tour data is required to update a tour',
    );
  }

  const result = await Tour.findByIdAndUpdate(tourId, tourData, { new: true, runValidators: true });

  if (!result) {
    throw new NotFoundError(`Tour with ID ${tourId} not found`);
  }

  return result;
}

const deleteTourFromDB = async (tourId: string): Promise<unknown> => {
  if (!tourId) {
    throw new BadRequestError('Tour ID is required to delete a tour');
  }

  const result = await Tour.findByIdAndDelete(tourId);

  if (!result) {
    throw new NotFoundError(`Tour with ID ${tourId} not found`);
  }

  return result;
}

export const tourService = {
  fetchAllToursFromDB,
  fetchSingleTourFromDB,
  storeTourInDB,
  updateTourInDB,
  deleteTourFromDB
}