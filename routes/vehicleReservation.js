const router = require('express').Router();
let VehicleReservation = require('../models/vehicleReservation.model');

router.route('/').get((req, res) => {
    VehicleReservation.find()
    .then(vehicleReservation => res.json(vehicleReservation))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    VehicleReservation.findById(req.params.id)
    .then(vehicleReservation => res.json(vehicleReservation))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const resId = req.body.resId;
  const seatDescription = req.body.seatDescription;
  
  const newvehicleReservation = new VehicleReservation({
    resId,
    seatDescription,

  });
  console.log(resId)

  newvehicleReservation.save()
    .then(() => res.json('Vehicle Reserved!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;