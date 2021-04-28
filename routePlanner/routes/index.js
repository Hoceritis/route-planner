const router = require("express").Router();
const Trip = require('../models/Trip');
const User = require('../models/User.model');

//middleware
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

// Signing up & Logging in
router.get('/signup', (req,res,next) => {
  res.render('signup');
});

router.get('/login', (req,res,next) => {
  res.render('login')
});


// Adding favourites to your route
router.get('/favorite/:id', loginCheck(), (req,res,next) => {
  let user = req.session.user._id
  console.log(user);
  console.log(req.params);
  User.findByIdAndUpdate(user, {'$push':{'favorite' : req.params.id}})
  .then(() => {
    res.redirect('/profile') 
  })
  .catch(err => {
    next(err);
  });
});

router.get('/profile', (req,res,next) => {
  let user = req.session.user
  User.findById(user._id).populate('favorite')
  .then(user => res.render('profile', {user}));
});

router.get('/details/:id', (req, res, next) => {
  Trip.findById(req.params.id)
  .then(trip => res.render('details', {trip}))
})

//This will get me the data/coordinates from the database
// router.get('/get-data', (req, res, next) => {
//   Trip.find()
//   .then(data => res.json(data))
// });

// router.get("/apply/:projectID/:webdevID/", (req, res, next) => {
//   Project.findByIdAndUpdate(req.params.projectID, 
//       {
//           "$push": { "applicants": req.params.webdevID },
//           "$pull": { "rejected": req.params.webdevID }
//       }, 
//       {new: true}).then(project => {    
//       res.redirect(`/webdev/${req.params.webdevID}/myprojects`);
//   }).catch(err => {
//       console.log('Error while finding a project by ID during application: ', err);
//   })
// });

module.exports = router;

