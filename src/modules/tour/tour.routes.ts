import { get } from "http";
import { tourController } from "./tour.controller";

const express = require('express');


const tourRouter = express.Router();

tourRouter.get('/tours', tourController.getAllTours);
tourRouter.get('/tours/:tourId', tourController.getSingleTour);
tourRouter.post('/tours/create-tour', tourController.createTour);
tourRouter.put('/tours/:tourId', tourController.updateTour);
tourRouter.delete('/tours/:tourId', tourController.deleteTour);

export default tourRouter;