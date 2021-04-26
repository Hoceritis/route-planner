const router = require("express").Router();
const Trip = require('../models/Trip');

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

module.exports = router;
