const router = require('express').Router();
let Places = require('../models/places.model');

router.route('/').get((req, res) => {
  Places.find()
    .then(places => res.json(places))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
  Places.findById(req.params.id)
    .then(Places => res.json(Places))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const placeName = req.body.placeName;
  const placeDescription = req.body.placeDescription;
  const packageId = req.body.packageId;
  const mapsUrl = req.body.mapsUrl;
  
  const newPlaces = new Places({
    placeName,
    placeDescription,
    packageId,
    mapsUrl


  });
  console.log(placeDescription)

  newPlaces.save()
    .then(() => res.json('Place Description!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;