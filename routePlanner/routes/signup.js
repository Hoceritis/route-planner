const router = require("express").Router();
const User = require('../models/User.model');
const bcrypt = require('bcrypt');

router.post('/signup', (req,res,next) => {
  console.log('test')
  const {username, password} = req.body
  if(password.length <= 7) {
    res.render('signup', {message : 'Your password should be longer than 7 characters'})
    return
  }
  if (username === '') {
    res.render('signup', {message : 'Your username cannot be empty'})
    return
  }
  User.findOne({username : username})
  .then(dataFromDB => {
    if(dataFromDB !== null) {
      res.render('signup', {message : 'This username is not available'})
    } else {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);
      User.create({username : username, password : hash})
        res.redirect('/')
    }
  })
  .catch(error => next(error));
})

module.exports = router;