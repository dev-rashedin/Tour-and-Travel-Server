import { Types } from "mongoose";

export type TRating = {
  userId: Types.ObjectId | string;
  tourId: Types.ObjectId | string;
  rating: number;
  comment?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
