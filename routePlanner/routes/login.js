const router = require("express").Router();
const User = require('../models/User.model');
const bcrypt = require('bcrypt');

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
    } else if (bcrypt.compareSync(password, dataFromDB.password)) {
      res.render('user-page', {username})
    } else {
      res.render('login', {message : 'Wrong credentials'})
    }
  })
  .catch(error => next(error));
})


module.exports = router;