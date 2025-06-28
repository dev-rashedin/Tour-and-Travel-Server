import { model, Schema } from "mongoose";
import { TTour } from "./tour.interface";


const tourSchema = new Schema<TTour>({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [3, 'Title must be at least 3 characters long'],
  },
  durationHours: {
    type: Number,
    required: [true, 'Duration in hours is required'],
    min: [1, 'Duration must be at least 1 hour'],
  },
  averageRating: {
    type: Number,
    required: [true, 'Average rating is required'],
    min: [0, 'Rating must be at least 0'],
    max: [5, 'Rating cannot exceed 5'],
    default: 5
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative'],
  },
  coverImage: String,
  image: [String],
  startDate: {type: Date, required: [true, 'Start date is required']},
  endDate: {type: Date, required: [true, 'End date is required']},
  location: {
    type: String,
    required: [true, 'Location is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  }
}, {
  timestamps: true
})


const Tour = model<TTour>('Tour', tourSchema)

export default Tour;