const car = require("../models/car");

//display a list of cars
exports.carList = function (req, res) {
  car.find({}, (err, tasks) => {
    if (err) res.send(err);
    res.json(tasks);
  });
};

//create a car
exports.carCreate = function (req, res) {
  const newCar = new car({
    name: req.body.name,
    model: req.body.model,
    price: req.body.price,
    year: req.body.year,
  });
  newCar.save((err, car) => {
    if (err) res.send(err);
    res.json(car);
  });
};

//update car details
exports.carUpdate = function (req, res) {
  car.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, car) => {
      if (err) res.send(err);
      res.json(car);
    }
  );
};

//delete car
exports.carDelete = function (req, res) {
  car.deleteOne({ _id: req.params.id }, (err) => {
    if (err) res.send(err);
    res.json({
      message: "car deleted successful",
      _id: req.params.id,
    });
  });
};
