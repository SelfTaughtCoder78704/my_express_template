const express = require('express');
const { ensureAuthenticated } = require('../config/auth');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {user: req.user });
});

router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);


module.exports = router;
