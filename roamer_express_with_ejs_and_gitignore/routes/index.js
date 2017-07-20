const express = require('express');
const router = express.Router();
const db = require('../queries');

// router.get('/cities', db.getAllCities); // Made route to access the Read function for tours

//--------------------------------------

// router.get('/', db.getAllTours); // Made route to access the Read function for tours

// router.post('/', db.createTour); // Made route to access the Create function for tours

// router.put('/:id', db.updateTour); // Made route to access the Update function for tours

// router.get('/', function(req, res, next) {
//   res.render('index', db.getCityData);
// })

router.get('/', db.getCityData);

router.get('/tours/:id', db.getCityTours); // Made route to access the Update function for tours

router.get('/tours/', db.getCityTours);

 // Made route to access the Update function for tours

router.get('/haha/:cities_id/:duration', db.getTourDuration); // Made route to access the Update function for tours
  
// router.delete('/:id', db.removeTour); // Made route to access the Delete function for tours


module.exports = router;