const router = require('express').Router();
let AdminHotel = require('../models/admin_hotel.model');

router.route('/').get((req, res) => {
    AdminHotel.find()
    .then(adminhotel => res.json(adminhotel))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    AdminHotel.findById(req.params.id)
    .then(adminhotel => res.json(adminhotel))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const hotelId = req.body.hotelId;
  const hotelName = req.body.hotelName;
  const hotelAddress = req.body.hotelAddress;
  const roomNo = req.body.roomNo;
    
  const newadminhotel = new AdminHotel({
    hotelId,
    hotelName,
    hotelAddress,
    roomNo,
        
  });
  console.log(hotelName)

  newadminhotel.save()
    .then(() => res.json('Hotel Confirmed!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;