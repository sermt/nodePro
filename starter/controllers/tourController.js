const fs = require('fs');
const tourModel = require('../models/tours.model');
const path = require('path');

const tours = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../dev-data/data/tours-simple.json'),
    'utf8'
  )
);

const checkID = (req, res, next, val) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'error',
      message: 'Missing name or price',
    });
  }
  next();
};

const checkBody = (req, res, next, val) => {
  if (val > tours.length - 1) {
    return res.status(404).json({
      status: 'error',
      message: 'Invalid ID',
    });
  }
  next();
};
const getAllTours = (req, res) => {
  res.status(200).json({ status: 'Success', data: { tours } });
};

const getTour = (req, res) => {
  const { id } = req.params;

  const tour = tours.find((el) => el.id === Number(id));
  res.status(200).json({ status: 'Success', data: { tour } });
};

const addTour = (req, res) => {
  console.log(req.body);
  res.status(201).send('Done!');
};

const updateTour = (req, res) => {
  const { id } = req.params;
  const tour = tours.find((el) => el.id === Number(id));
  res.status(200).json({ status: 'Tour updated!', data: { tour } });
};

const deleteTour = (req, res) => {
  const { id } = req.params;
  const tour = tours.find((el) => el.id === Number(id));
  res.status(200).json({ status: 'Tour deleted!', data: null });
};

module.exports = {
  getAllTours,
  getTour,
  deleteTour,
  updateTour,
  addTour,
  checkBody,
  checkID,
};
