const router = require("express").Router();
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
  res.render("index");
});

router.get('/signup', (req,res,next) => {
  res.render('signup');
})

router.get('/login', (req,res,next) => {
  res.render('login')
})

router.get('/profile', loginCheck(), (req,res,next) => {
    res.render('profile')
  })

module.exports = router;

