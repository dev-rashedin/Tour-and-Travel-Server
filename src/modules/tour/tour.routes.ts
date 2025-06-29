import { get } from "http";
import { tourController } from "./tour.controller";

const express = require('express');


const tourRouter = express.Router();

tourRouter.get('/', tourController.getAllTours);
tourRouter.get('/:tourId', tourController.getSingleTour);
tourRouter.post('/create-tour', tourController.createTour);
tourRouter.put('/:tourId', tourController.updateTour);
tourRouter.delete('/:tourId', tourController.deleteTour);

export default tourRouter; 