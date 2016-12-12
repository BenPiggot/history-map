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

router.get("/register", function (req, res) {
    res.render("auth/register");
});

router.post("/register", function (req, res) {
    console.log('nothing happens yet');
});

exports.default = router;