const fs = require('fs');
const path = require('path');

const tours = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../dev-data/data/tours-simple.json'),
    'utf8'
  )
);

const getAllTours = (req, res) => {
  res.status(200).json({ status: 'Success', data: { tours } });
};

const getTour = (req, res) => {
  const { id } = req.params;
  if (id > tours.length - 1) {
    res.status(404).json({ status: 'Error', message: 'Tour not found' });
    return;
  }
  const tour = tours.find((el) => el.id === Number(id));
  res.status(200).json({ status: 'Success', data: { tour } });
};

const addTour = (req, res) => {
  console.log(req.body);
  res.status(201).send('Done!');
};

const updateTour = (req, res) => {
  const { id } = req.params;
  if (id > tours.length - 1) {
    res.status(404).json({ status: 'Error', message: 'Tour not found' });
    return;
  }
  const tour = tours.find((el) => el.id === Number(id));
  res.status(200).json({ status: 'Tour updated!', data: { tour } });
};

const deleteTour = (req, res) => {
  const { id } = req.params;
  if (id > tours.length - 1) {
    res.status(404).json({ status: 'Error', message: 'Tour not found' });
    return;
  }
  const tour = tours.find((el) => el.id === Number(id));
  res.status(200).json({ status: 'Tour deleted!', data: null });
};

module.exports = { getAllTours, getTour, deleteTour, updateTour, addTour };
