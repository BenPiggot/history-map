'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FirstPage = function (_Component) {
  _inherits(FirstPage, _Component);

  function FirstPage() {
    _classCallCheck(this, FirstPage);

    return _possibleConstructorReturn(this, (FirstPage.__proto__ || Object.getPrototypeOf(FirstPage)).apply(this, arguments));
  }

  _createClass(FirstPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'p',
        null,
        'Lorem ipsum dolor sit amet, per falli doctus in, accusam propriae ius ea. Ei duo debet everti appellantur, an sed alii quodsi feugiat. Eos id sint justo rationibus, cu iusto melius usu, ad pri velit audire eligendi. Putent oportere interpretaris at mea, usu modus summo albucius in. An possim voluptatum nec, ei usu adhuc utinam interesset, ea omnis suavitate complectitur nam. His ei iuvaret tacimates, ludus sadipscing ne sed, mei eu debet consetetur quaerendum.'
      );
    }
  }]);

  return FirstPage;
}(_react.Component);

var SecondPage = function (_Component2) {
  _inherits(SecondPage, _Component2);

  function SecondPage() {
    _classCallCheck(this, SecondPage);

    return _possibleConstructorReturn(this, (SecondPage.__proto__ || Object.getPrototypeOf(SecondPage)).apply(this, arguments));
  }

  _createClass(SecondPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'p',
        null,
        'Choro nostrud ex eos, posse graeco verterem et his, vide veritus minimum in per. Vis ut graece antiopam interpretaris, cum in mollis partiendo, mea definiebas consequuntur an. Saepe aeterno ius ex, choro scaevola maluisset mel at. Alienum scriptorem qui id, labitur eripuit ad usu. Ipsum gloriatur intellegam duo no. Quo eu aliquam iudicabit, ei nulla aeque vitae vel, sumo oblique consectetuer ea sea.'
      );
    }
  }]);

  return SecondPage;
}(_react.Component);

var ThirdPage = function (_Component3) {
  _inherits(ThirdPage, _Component3);

  function ThirdPage() {
    _classCallCheck(this, ThirdPage);

    return _possibleConstructorReturn(this, (ThirdPage.__proto__ || Object.getPrototypeOf(ThirdPage)).apply(this, arguments));
  }

  _createClass(ThirdPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'p',
        null,
        'Ei urbanitas liberavisse suscipiantur vim. Porro paulo alterum et eam, ea enim quodsi invenire vix. Aeterno fuisset constituto est et. Ea partem tibique persequeris mei. Eam in sint intellegebat. Eam eu suas harum tantas, exerci quaestio sit et, per ea amet meis salutandi. Ei inimicus intellegebat eos, animal omittam patrioque eam ut. Novum aeque docendi ea eam, duo sale illum recusabo id, id qui sumo dico viris. Habeo propriae mediocrem eam at, ius cu percipit antiopam disputationi.'
      );
    }
  }]);

  return ThirdPage;
}(_react.Component);

var Explainer = function (_Component4) {
  _inherits(Explainer, _Component4);

  function Explainer(props) {
    _classCallCheck(this, Explainer);

    var _this4 = _possibleConstructorReturn(this, (Explainer.__proto__ || Object.getPrototypeOf(Explainer)).call(this, props));

    _this4.state = {
      view: 0
    };
    return _this4;
  }

  _createClass(Explainer, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      e.stopPropagation();
      this.changeView((this.state.view + 1) % 3);
    }
  }, {
    key: 'changeView',
    value: function changeView(view) {
      this.setState({ view: view });
    }
  }, {
    key: 'renderView',
    value: function renderView() {
      switch (this.state.view) {
        case 0:
          return _react2.default.createElement(FirstPage, null);
          break;
        case 1:
          return _react2.default.createElement(SecondPage, null);
          break;
        case 2:
          return _react2.default.createElement(ThirdPage, null);
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderView(),
        _react2.default.createElement(
          'button',
          { onClick: this.handleClick.bind(this), className: 'btn front-page-btn' },
          'Change View'
        )
      );
    }
  }]);

  return Explainer;
}(_react.Component);

exports.default = Explainer;