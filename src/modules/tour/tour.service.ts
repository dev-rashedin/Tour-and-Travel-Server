
import { BadRequestError} from "../../error";
import { TTour } from "./tour.interface";
import Tour from "./tour.model";


const createTour = async (tourData: TTour): Promise<TTour> => {
  if (!tourData) { 
    throw new BadRequestError("Tour data is required to create a tour");
  }
  const result = await Tour.create(tourData)
  return result;
}