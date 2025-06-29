export type TRating = {
  userId: string;
  tourId: string;
  rating: number;
  comment?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
