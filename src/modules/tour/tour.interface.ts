

export type TTour = {
  title: string;
  durationHours: number;
  averageRating: number;
  price: number;
  coverImage?: string;
  image: string[];
  startDate: Date;
  endDate: Date;
  location: string;
  description: string;
  createdAt?: Date; 
  updatedAt?: Date;
};
