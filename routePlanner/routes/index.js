const router = require("express").Router();
const Trip = require('../models/Trip');
const User = require('../models/User.model');

//middlewear
const loginCheck = () => {
  return (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      res.redirect('/login')
    }
  }
}

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

router.get('/profile', loginCheck(), (req,res,next) => {
    let user = req.session.user
    res.render('profile', {user})
  })

module.exports = router;

