const router = require("express").Router();
const Trip = require('../models/Trip');
const User = require('../models/User.model');

router.get('/add', (req, res, next) => {
  res.render('add');
})

router.post('/add', (req, res, next) => {
  console.log(req.body)
  const {title, Address, District, Distance, Mode, location, Description} = req.body
  Trip.create({
    title: title,
    Address: Address,
    District: District,
    Distance: Distance, 
    Mode: Mode,
    location: location,
    Description: Description
  })
  .then(newRoute => res.redirect(`/details/${newRoute._id}`))
  .catch(err => next(err))
});

module.exports = router;
