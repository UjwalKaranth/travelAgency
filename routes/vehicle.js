const router = require('express').Router();
let Vehicle = require('../models/vehicle.model');

router.route('/').get((req, res) => {
  Vehicle.find()
    .then(vehicle => res.json(vehicle))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
  room.findById(req.params.id)
    .then(room => res.json(room))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const vehicleNo = req.body.vehicleNo;
  const vehicleType = req.body.vehicleType;
  const driverId = req.body.driverId;
 
  const newVehicle = new Vehicle({
    vehicleNo,
    vehicleType,
    driverId

  });
  console.log(vehicleNo)

  newVehicle.save()
    .then(() => res.json('Vehicle Confirmed!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;