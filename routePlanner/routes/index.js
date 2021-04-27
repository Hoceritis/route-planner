const router = require("express").Router();
const Trip = require('../models/Trip');

/* GET home page */
router.get("/", (req, res, next) => {
  Trip.find()
  .then(trips => res.render("index", {trips}))
  .catch(err => next(err))
});

router.get('/signup', (req,res,next) => {
  res.render('signup');
})

router.get('/login', (req,res,next) => {
  res.render('login')
})

router.get('/details/:id', (req, res, next) => {
  Trip.findById(req.params.id)
  .then(trip => res.render('details', {trip}))
})


//This will get me the data/coordinates from the database
router.get('/get-data', (req, res, next) => {
  Trip.find()
  .then(data => res.json(data))
});

module.exports = router;
