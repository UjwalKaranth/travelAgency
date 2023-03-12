const router = require('express').Router();
let Hotel = require('../models/hotel.model');

router.route('/').get((req, res) => {
  User.find()
    .then(hotel => res.json(hotel))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
  Hotel.findById(req.params.id)
    .then(hotel => res.json(hotel))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const hotelId = req.body.hotelId;
  const roomNo = req.body.roomNo;
  const hotelName = req.body.hotelName;
  const description = req.body.description;

  const newHotel = new Hotel({
      hotelId,
      roomNo,
      hotelName,
      description

  });
  console.log(hotelName)

  newHotel.save()
    .then(() => res.json('Hotel Booked!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;