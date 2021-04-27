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



router.get('/favorite/:id', loginCheck(), (req,res,next) => {
  let user = req.session.user._id
  console.log(user)
  console.log(req.params);
  User.findByIdAndUpdate(user, {'$push':{'favorite' : req.params.id}})
  .then(() => {
    res.redirect('/profile') 
    console.log(user)
  })
  .catch(err => {
    next(err);
  });
});

router.get('/profile', (req,res,next) => {
  let user = req.session.user
  User.findById(user._id).populate('favorite')
  .then(user => {
    res.render('profile', {user})
  })
})

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

// router.get('/favorite/:id', (req,res,next) => {
//   console.log(req.params._id)
// })

//$push: { reviews: { user: user, comments: comments } }

module.exports = router;

