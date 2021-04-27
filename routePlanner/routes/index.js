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
  .then(trips => {
    console.log(trips);
    res.render("index", {trips})
  })
  .catch(err => {
    next(err);
  })
});

router.get('/signup', (req,res,next) => {
  res.render('signup');
})

router.get('/login', (req,res,next) => {
  res.render('login')
})

router.get('/profile', loginCheck(), (req,res,next) => {
    let user = req.session.user
    res.render('profile', {user})
  })

module.exports = router;

