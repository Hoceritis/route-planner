const router = require("express").Router();
const Trip = require('../models/Trip');
const User = require('../models/User.model');

router.get('/add', (req, res, next) => {
  res.render('add');
})

router.post('/post', (req, res, next) => {
  Trip.create()
  .then()
  .catch(err => next(err))
});

module.exports = router;
