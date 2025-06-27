import { StatusCodes } from "../constants/httpStatus";
import CustomAPIError from "./custom-api";


class NotFoundError extends CustomAPIError {
  constructor(message: string, details: string | null = null) {
    super(message, StatusCodes.NOT_FOUND, details);
  }
}

export default NotFoundError;