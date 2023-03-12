const router = require('express').Router();
let Package = require('../models/packages.model');

router.route('/').get((req, res) => {
    Package.find()
    .then(package => res.json(package))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Package.findById(req.params.id)
    .then(package => res.json(package))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const packageId = req.body.packageId;
  const packageName = req.body.packageName;
  const destination = req.body.destination;
  const description = req.body.description;
  const vacationType = req.body.vacationType;
  const amount = req.body.amount;
  const transportType = req.body.transportType;
  const vehicleNo = req.body.vehicleNo;
  
  const newpackage = new Package({
    packageId,
    packageName,
    destination,
    description,
    vacationType,
    amount,
    transportType,
    vehicleNo
    
  });
  console.log(packageName)

  newpackage.save()
    .then(() => res.json('Package Confirmed!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;