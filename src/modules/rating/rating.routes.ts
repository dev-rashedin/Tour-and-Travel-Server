import { ratingController } from "./rating.controller";

const express = require('express');


const ratingRouter = express.Router();

ratingRouter.post('/create-rating', ratingController.createRating);
ratingRouter.get('/', ratingController.getAllRatings);
ratingRouter.get('/:id', ratingController.getRatingById);
ratingRouter.put('/:id', ratingController.updateRatingById);
ratingRouter.delete('/:id', ratingController.deleteRatingById);


export default ratingRouter;