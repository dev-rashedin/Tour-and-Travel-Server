import { Request, Response } from 'express';
import { StatusCodes } from '../constants/httpStatus';



const notFoundMiddleware = (req: Request, res: Response, ) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .json({
      success: false,
      error: "Not Found",
      message: `Route not found: ${req.originalUrl}`,
    });
}

export default notFoundMiddleware;