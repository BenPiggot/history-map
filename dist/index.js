'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _connectFlash = require('connect-flash');

var _connectFlash2 = _interopRequireDefault(_connectFlash);

var _maps = require('./controllers/maps');

var _maps2 = _interopRequireDefault(_maps);

var _auth = require('./controllers/auth');

var _auth2 = _interopRequireDefault(_auth);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

_models2.default.map.create({ topic: 'Commerce', theme: 'mostlyGray', latitude: 47.6130284, longitude: -122.3420645 }).then(function (map) {
  console.log('success');
});

app.use(_express2.default.static(__dirname + "/public"));
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use((0, _expressSession2.default)({
  secret: 'erqewfp;adslfjaew.rqe;d@#@#$afjqew;l',
  resave: false,
  saveUninitialized: true
}));

app.use((0, _connectFlash2.default)());

// custom middleware - is user logged in?
app.use(function (req, res, next) {
  req.getUser = function () {
    return req.session.user || false;
  };
  next();
});

// get logged-in user info
app.use(function (req, res, next) {
  res.locals.loggedIn = req.getUser();
  next();
});

//custom middleware for alerts
app.use(function (req, res, next) {
  res.locals.alerts = req.flash();
  next();
});

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use("/maps", _maps2.default);
app.use("/auth", _auth2.default);

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started ...");
});

exports.default = app;