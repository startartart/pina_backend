var express = require('express');
var router = express.Router();
var fs = require('fs');
var app = express();
var connection = require('../config');
const Search = require('../models/search');

var users = require('./users');
router.use('/users', users);

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index.html', { title: 'Express' });
});

router.get('/address', function(req,res,next){
  res.render('address_ser');
});

router.get('/search', function(req,res,next){
  res.render('search');
});

router.post('/search', function(req,res){
  var word = req.body.des;
  const result = Search.create({
    id: word,
    search_result: word
  });
});

router.get('/search_result', function(req,res,next){
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

router.get('/mypage', function(req,res,next){
  res.render('mypage');
});

router.get('/register', function(req,res,next){
  res.render('register');
});

router.post('/register',function(req,res){
  var id = req.body.user_ID;
  var pw = req.body.user_PW1;
  var name = req.body.user_name;
  var age = 23;
  var adr1 = 1;
  var adr2 = 2;
  var adr3 = 3;
  var sellbuy = req.body.sellbuy;
  var gender = req.body.gender;
  var phonenum = req.body.user_phone;
  var email = req.body.user_email;
  var date = new Date().toISOString().slice(0, 10);

  var sql = `INSERT INTO privacy (user_id, user_pwd, user_name, user_age, user_adr1, user_adr2, user_adr3, user_sellbuy, user_phonenum, user_gender, user_email, user_date)
   VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
   var params = [id, pw, name, age, adr1, adr2, adr3, sellbuy, phonenum, gender, email, date];

   connection.query(sql, params, function(err, rows, fields) {
     if(err)
      console.log(err);
     else {
      console.log(rows);
      res.send('회원가입 완료');
      }
   })
});
  
module.exports = router;
