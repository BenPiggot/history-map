'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _models = require('../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.get("/", function (req, res) {
  res.render("auth/login");
});

router.post("/", function (req, res) {
  _models2.default.user.find({ where: { email: req.body.email } }).then(function (user) {
    if (user) {
      //check password
      _bcrypt2.default.compare(req.body.password, user.password, function (err, result) {
        if (err) throw err;

        if (result) {
          //store user to session!!
          req.session.user = {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
          };
          console.log('logged in!');
          // req.flash('success','You have been logged in.');
          res.redirect('/maps');
        } else {
          console.log('wrong password');
          // req.flash('danger','Invalid password.');
          res.redirect('/');
        }
      });
    } else {
      console.log('no user');
      req.flash('danger', 'Unknown user.');
      res.redirect('/');
    }
  });
});

router.get("/register", function (req, res) {
  res.render("auth/register");
});

router.post("/register", function (req, res) {
  console.log(req.body);
  _models2.default.user.findOrCreate({ where: { firstName: req.body.firstName, lastName: req.body.lastName,
      password: req.body.password, email: req.body.email } }).then(function (user, created) {
    console.log('yo');
    user.save().then(function () {
      req.flash('success', 'Account succesfully created!');
      res.redirect('/');
    });
  }).catch(function (error) {
    if (error) {
      req.flash('danger', 'Please enter a valid email and password.');
      res.redirect('/');
    }
  });
});

// User log Out
router.get('/logout', function (req, res) {
  delete req.session.user;
  req.flash('info', 'You are now logged out.');
  res.redirect('/');
});

exports.default = router;