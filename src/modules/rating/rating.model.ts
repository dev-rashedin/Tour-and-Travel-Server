import { model, Schema } from "mongoose";
import { TRating } from "./rating.interface";


const ratingSchema = new Schema<TRating>({
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, 'User ID is required'],
    ref: 'User',
  },
  tourId: {
    type: Schema.Types.ObjectId,
    required: [true, 'Tour ID is required'],
    ref: 'Tour'
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5'],
    default: 5
  },
  comment: String,
}, {timestamps: true});


const Rating = model<TRating>('Rating', ratingSchema);

export default Rating;
