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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var router = _express2.default.Router();

console.log(__dirname);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(_express2.default.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started ...");
});

exports.default = app;