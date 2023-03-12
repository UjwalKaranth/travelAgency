const router = require('express').Router();
let User = require('../models/travel.model');

router.route('/').get((req, res) => {
  User.find()
    .then(travel => res.json(travel))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(travel => res.json(travel))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const userId = req.body.userId;
  const destination = req.body.destination;
  const date = req.body.date;
  const days = req.body.days;
  const noOfPeoples = req.body.noOfPeoples;
  const vacationType = req.body.vacationType;
  const hotelId = req.body.hotelId;

  const newTravel = new Travel({
      userId,
      destination,
      date,
      days,
      noOfPeoples,
      vacationType,
      hotelId

  });
  console.log(destination)

  newTravel.save()
    .then(() => res.json('Travel confirmed!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;