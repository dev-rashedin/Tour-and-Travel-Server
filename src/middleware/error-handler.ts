import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "../constants/httpStatus";

interface CustomError extends Error {
  statusCode?: number;
  details?: string | null;
}


const errorHandlerMiddleware = (err: CustomError, req: Request, res: Response, next: NextFunction) => { 
  let status = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  let message = err.message || "Something went wrong, please try again later.";


  const errorResponse: { success: boolean; error: string; details?: string | null} = {
    success: false,
    error: message,
  };

  if (err.details) {
    errorResponse.details = err.details;
  }

  res.status(status).json(errorResponse);
}

export default errorHandlerMiddleware;