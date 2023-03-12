const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

const createUser = asyncWrapper(async (req, res, next) => {
    const { id: userId } = req.params;
    req.body.user_id = String(userId)
    const user = await Candidates.create(req.body);
    res.status(400).json({ user });
  });

module.exports = router;