const router = require("express").Router();
const Trip = require('../models/Trip');

router.post('/search', (req, res, next) => {
  res.redirect('/search');
});

router.get('/search', (req, res, next) => {
  console.log(req.body)
  Trip.find()
  .then(result => res.render('search'))
})

module.exports = router;

//"District": req.body.District