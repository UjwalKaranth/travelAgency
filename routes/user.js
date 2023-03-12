const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const userId = req.body.userId;
  const userName = req.body.userName;
  const resId = req.body.resId;
  const userEmail = req.body.userEmail;
  const userPhNo = req.body.userPhNo;
  const userCity = req.body.userCity;
  const budget = req.body.budget;
  const veg = req.body.veg;

  const newUser = new User({
    userId,
    userName,
    resId,
    userEmail,
    userPhNo,
    userCity,
    budget,
    veg
  });
  console.log(userName)

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;