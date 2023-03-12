const router = require('express').Router();
let Driver = require('../models/driver.model');

router.route('/').get((req, res) => {
  Driver.find()
    .then(driver => res.json(driver))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
  Driver.findById(req.params.id)
    .then(driver => res.json(driver))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const driverName = req.body.driverName;
  const driverPhNo = req.body.driverPhNo;
  const userPhNo = req.body.userPhNo;
  const driverId = req.body.driverId;
  
  const newDriver = new Driver({
    driverName,
    driverPhNo,
    userPhNo,
    driverId


  });
  console.log(driverName)

  newDriver.save()
    .then(() => res.json('Travel confirmed!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;