const promise = require('bluebird');
const options = { promiseLib: promise };

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/roamertour_db';
const db = pgp(process.env.DATABASE_URL || connectionString);

//-------------tours---------------


function getCityData(req, res, next){
  db.any('SELECT * FROM cities')
    .then((data) => {
      res.render('index', {
        data: data
      })
    })
}


function getCityTours(req, res, next){
  console.log('display tour')
  let cities_id =parseInt(req.params.id)
  db.any('SELECT * FROM tour WHERE cities_id = ' + cities_id)
  .then((data) => { 
    res.render('tours', {data: data})
    console.log(data);
  })
}

// function oneTour(req, res, next){
//   console.log('display tour')
//   let item = req.params.id 
//   db.one('SELECT * FROM tour WHERE idt = $1' , item)
//   .then((data) => { res.status(200).json({data: data}); })
//       .catch((err) => { return next(err); });
// };

function oneTour(req, res, next){
  console.log('display tour')
  let item = req.params.id 
  db.one('SELECT * FROM tour WHERE idt = $1' , item)
  .then((data) => { 
    res.render('tours', {data: data})
  })
}


function getTourDuration(req, res, next) {
 console.log('display tour duration');
 let cities_id = parseInt(req.params.cities_id)
 let duration = parseInt(req.params.duration)
 db.any('SELECT * FROM tour WHERE cities_id =' + cities_id + "and duration =" + duration )
 .then((data) => { res.status(200).json({tour: data}); })
  .catch((err) => { return next(err); });
};



module.exports = {
  getCityData: getCityData,
  oneTour: oneTour,
  getCityTours: getCityTours,
  getTourDuration: getTourDuration
 
};