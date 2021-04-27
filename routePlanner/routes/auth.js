const router = require("express").Router();
const User = require('../models/User.model');
const bcrypt = require('bcrypt');

//signup

router.post('/signup', (req,res,next) => {
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

//login

router.post('/login', (req,res,next) => {
  const {username, password} = req.body
  if(username === '' || password === ''){
    res.render('login', {message : 'Please complete both field'})
    return
  }
  User.findOne({ username })
  .then(dataFromDB => {
    if (!dataFromDB){
      res.render('login', {message : 'Wrong credentials'})
      return;
    }
    if (bcrypt.compareSync(password, dataFromDB.password)) {
      req.session.user = dataFromDB;
      res.redirect('/profile');
    
    } else {
      res.render('login', {message : 'Wrong credentials'})
    }
    return;
  })
  .catch(error => next(error));
})

//logout

router.get('/logout', (req, res, next) => {
  req.session.destroy(error => {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  })
});

module.exports = router;