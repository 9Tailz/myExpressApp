/////////////////////////////////////
// Send HTML File
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.sendFile('index.html',{root:__dirname});
});

module.exports = router;

//////////////////////////////////
// Use PUG Temnplates 

// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;