const router = require("express").Router();
const Trip = require('../models/Trip');

router.get('/search', (req, res, next) => {
  res.render('search');
})

router.post('/search', (req, res, next) => {
  const {District, Distance, Mode} = req.body
  const updatedMode = Mode[0].toUpperCase() + Mode.slice(1)
  let distanceUpdated ='';
  switch (Distance) {
    case '10':
      Trip.find({$and: [ { District: District }, { Mode: updatedMode },{Distance:{$lte : 9}}]})
      .then(filteredRoute => {
        console.log(filteredRoute, '10')
        res.render('search', {filteredRoute});
      })
      .catch(error => req.next(error));
      case '20':
      Trip.find({$and: [{ District: District }, { Mode: updatedMode },{$and:[{Distance:{$gte : 10}}, {Distance:{$lte: 20}} ]}]} )
      .then(filteredRoute => {
        console.log(filteredRoute, '10-20')
        res.render('search', {filteredRoute});
      })
      .catch(error => req.next(error));
      case '30':
        Trip.find({$and: [ { District: District }, { Mode: updatedMode },{Distance:{$lte : 30}}]})
      .then(filteredRoute => {
        console.log(filteredRoute, '30')
        res.render('search', {filteredRoute});
      })
      .catch(error => req.next(error));
      case '31':
        Trip.find({$and: [ { District: District }, { Mode: updatedMode },{Distance:{$lte : 30}}]})
        .then(filteredRoute => {
          console.log(filteredRoute, '31')
          res.render('search', {filteredRoute});
        })
        .catch(error => req.next(error));
  }
  console.log(distanceUpdated)

});

module.exports = router;

//"District": req.body.District