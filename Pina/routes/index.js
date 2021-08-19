const { resolveSoa } = require('dns');
var express = require('express');
var router = express.Router();
var fs = require('fs');
var app = express();
var Search = require('../models/search');
var User = require('../models/User');
// var users = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});

router.get('/address', function(req,res,next){
  res.render('address_ser');
});

router.get('/search', function(req,res,next){
  res.render('search');
});

router.get('/search_result', function(req,res,next){
  res.render('search_result');
});

router.post('/search_result', function(req,res,next){
  var search_word = req.body.des;
  Search.create({
    id: 'startart',
    search_result: search_word
  })
  res.render('search_result');
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

router.get('/products', function(req,res,next){
  res.render('products');
});

router.get('/product_info', function(req,res,next){
  res.render('product_info');
});

router.get('/mypage', function(req,res,next){
  //세션정보는 req.session 에 들어 있다
  if (req.user)       //세션에 유저가 있다면
  {
    res.render('all_product');
  }
  else
  {
    res.redirect('/users/login');
  }
});

router.get('/register', function(req,res,next){
  res.render('register');
});
  
module.exports = router;
