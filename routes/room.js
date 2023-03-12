const router = require('express').Router();
let Room = require('../models/room.model');

router.route('/').get((req, res) => {
  Room.find()
    .then(room => res.json(room))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
  room.findById(req.params.id)
    .then(room => res.json(room))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const roomNo = req.body.roomNo;
  const noOfPeoplesInRoom = req.body.noOfPeoplesInRoom;
  const userId = req.body.userId;
 
  const newRoom = new Room({
    roomNo,
    noOfPeoplesInRoom,
    userId

  });
  console.log(roomNo)

  newRoom.save()
    .then(() => res.json('Room Booked!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;