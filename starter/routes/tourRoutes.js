const express = require('express');
const {
  getAllTours,
  getTour,
  addTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody,
} = require('../controllers/tourController');
const tourRouter = express.Router();
tourRouter.param('id', checkID);

tourRouter.route('/').get(getAllTours).post(checkBody, addTour);
tourRouter.route('/:id').get(getTour).delete(deleteTour).patch(updateTour);

module.exports = tourRouter;
