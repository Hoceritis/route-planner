const router = require("express").Router();
const Trip = require('../models/Trip');
const uploader = require('../config/cloudinary');

router.get('/add', (req, res) => {
  res.render('add');
})

router.post('/add', uploader.single('Picture'), (req, res, next) => {
  const Picture = req.file.path;
  const {title, Address, District, Distance, Mode, location, Description} = req.body;
  Trip.create({
    title: title,
    Address: Address,
    District: District,
    Distance: Distance, 
    Mode: Mode,
    location: location,
    Picture: Picture,
    Description: Description
  })
  .then(newRoute => res.redirect(`/details/${newRoute._id}`))
  .catch(err => next(err))
});

module.exports = router;
