import { model, Schema } from "mongoose";
import { TRating } from "./rating.interface";


const ratingSchema = new Schema<TRating>({
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, 'User ID is required'],
    ref: 'User'
  }
})


const Rating = model<TRating>('Rating', ratingSchema);

export default Rating;
