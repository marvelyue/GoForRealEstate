var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Go for Real Estate' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Go for Real Estate' });
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Go for Real Estate' });
});

router.post('/signup', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
})

module.exports = router;
