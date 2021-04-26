const router = require("express").Router();
const User = require('../models/User.model');
const bcrypt = require('bcrypt');

router.post('/signup', (req,res,next) => {
  const {username, password} = req.body
  if(password.length < 8) {
    res.render('signup', {message : 'Your password should be longer than 8 characters'})
  }
  if (username === '') {
    res.render('signup', {message : 'Your username cannot be empty'})
  }
  User.findOne({username : username})
  .then(dataFromDB => {
    if(dataFromDB !== null) {
      res.render('signup', {message : 'This username is not available'})
    } else {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);
      User.create({username : username, password : salt})
      .then(newUser => {
        res.redirect('/')
      })
    }
  })
})

module.exports = router;