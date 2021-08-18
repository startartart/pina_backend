var express = require('express');
var router = express.Router();
var fs = require('fs');
var app = express();
var index = require('./index')
const { request } = require('../app');
const { User } = require('../models');

module.exports = function(passport){
  router.get('/login', function(req,res,next){
    var fmsg = req.flash();
    console.log(fmsg);
    var feedback = '';
    if(fmsg.error){
      feedback = fmsg.error[0];
    }
    if (req.user)       
    {
      res.send('이미 로그인 하셨네요');
    }
    else
    {
      res.render('login');
    }
  
  });
  
  router.get('/logout', function (request, response) {
    request.logout();
    request.session.save(function(){
      response.redirect('/');
    });
  });
  
  /*
  router.post('/login_process', function(req,res,next){
    var post = req.body;
    var email = post.email;
    var password = post.pwd;
    if(email === authData.email && password === authData.password){
      req.session.is_logined = true;
      req.session.nickname = authData.nickname;
      req.session.save(function(){                               (2)
        res.redirect('/');
    });
    }
     else {
      res.send('Who?');
    }
  
  });
  */
  
  router.post('/login_process',
    passport.authenticate('local', {
      failureRedirect: '/users/login',
      failureFlash:true,
      successFlash:true
    }),(req,res) => {
        req.session.save(() => {
        res.redirect(`/`);
        });
    });
  
  router.get('/register', function(req,res,next){
      res.render('register');
  });
  
  router.post('/register_process', function (req, res) {
    var post = req.body;
    var ID = post.user_ID;
    var pwd = post.user_PW1;
    var pwd2 = post.user_PW2;
    var Name = post.user_name;
    var Gender = post.gender;
    var Age = post.age;
    User.create({
      id:ID,
      pw:pwd,
      name:Name,
      age:Age,
      gender:Gender
    });
    res.redirect('/');
  });

  return router;

}
