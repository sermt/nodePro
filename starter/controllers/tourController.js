const fs = require('fs');
const tourModel = require('../models/tours.model');
const path = require('path');
const Tour = require('../models/tours.model');

const tours = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../dev-data/data/tours-simple.json'),
    'utf8'
  )
);

const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res
      .status(200)
      .json({ status: 'Success', results: tours.length, data: { tours } });
  } catch (error) {
    res.status(500).json({ status: 'Fail', message: 'Something went wrong' });
  }
};

const getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({ status: 'Success', data: { tour } });
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: 'Tour not found',
    });
  }
};

const addTour = async (req, res) => {
  try {
    console.log(req.body);
    const newTour = await tourModel.create(req.body);
    res.status(201).json({ status: 'Success', data: { newTour } });
  } catch (error) {
    res.status(400).json({ status: 'Fail', message: 'Invalid data sent' });
  }
};

const updateTour = async (req, res) => {
  try {
    const updatedTour = await tourModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({ status: 'Tour updated', data: { updatedTour } });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: 'Invalid data sent',
    });
  }
};

const deleteTour = async (req, res) => {
  try {
    await tourModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: 'Tour updated', data: null });
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: 'Tour not found',
    });
  }
};

module.exports = {
  getAllTours,
  getTour,
  deleteTour,
  updateTour,
  addTour,
};
