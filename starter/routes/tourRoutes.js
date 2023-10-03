const express = require('express');
const {
  getAllTours,
  getTour,
  addTour,
  updateTour,
  deleteTour,
} = require('../controllers/tourController');
const tourRouter = express.Router();

tourRouter.route('/').get(getAllTours).post(addTour);
tourRouter.route('/:id').get(getTour).delete(deleteTour).patch(updateTour);

module.exports = tourRouter;
