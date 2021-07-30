var express = require('express');
var router = express.Router();
var fs = require('fs');
var app = express();

var users = require('./users');
router.use('/users', users);

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("query")
  res.render('index.html', { title: 'Express' });
});

router.get('/address', function(req,res,next){
  res.render('address_ser');
});

router.get('/search', function(req,res,next){
  res.render('../views/search');
});

router.get('/address/map', function(req,res,next){
  res.render('map');
});

router.get('/address', function(req,res,next){
  res.render('address');
});

router.get('/all_market', function(req,res,next){
  res.render('all_market');
});

router.get('/all_product', function(req,res,next){
  res.render('all_product');
});

router.get('/mypage', function(req,res,next){
  res.render('mypage');
});

router.get('/register', function(req,res,next){
  res.render('register');
  
});

module.exports = router;
