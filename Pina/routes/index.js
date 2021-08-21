const { resolveSoa } = require('dns');
var express = require('express');
var router = express.Router();
var fs = require('fs');
const models = require('../models');
var app = express();
const multer = require('multer');
const path = require('path');
const upload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, 'public/pictures/');
    },
    filename: function(req, file, cb){
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    }
  }),
});

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
});

router.post('/search_result', function(req,res,next){
  var search_word = req.body.des;
  models.User.findOne({
    attributes: ['id'],
    where: {
      age: 29
    }
  }).then(result => {
    models.Search.create({
      id: result.id,
      search_result: search_word
    })
  });
  models.Prize.findAll({
    where: {title: search_word}
  }).then(result2 => {
    res.render('search_result', {
      search_flower: result2
    })
  })
});

router.get('/address/map', function(req,res,next){
  res.render('map');
});

router.get('/address', function(req,res,next){
  res.render('address');
});

router.get('/all_market', function(req,res,next){
  models.Prize.findAll().then( result => {
    res.render('all_market', {
      prizes: result
    })
  })
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
  
router.get('/prizetest', function(req,res,next){
  res.render('prizetest');
});

router.post('/prizetest_process', upload.single('price_picture'), function(req,res,next){
  console.log(req.file);
  var id = req.body.id;
  var price_id = req.body.price_id;
  var price_picture = req.file.filename;
  var title = req.body.title;
  var litle_title = req.body.litle_title;
  var flower_name = req.body.flower_name;
  var comment = req.body.comment;
  var color = req.body.color;
  var discount = req.body.discount;
  var flower_price = req.body.flower_price;
  var deliver_price = req.body.deliver_price;
  var size = req.body.size;
  var grade = req.body.grade;
  models.Prize.create({
    id: id,
    price_id: price_id,
    price_picture: price_picture,
    title: title,
    litle_title: litle_title,
    flower_name: flower_name,
    comment: comment,
    color: color,
    discount: discount,
    flower_price: flower_price,
    deliver_price: deliver_price,
    Size: size,
    Grade: grade
  })
  res.redirect('/');

});


module.exports = router;
