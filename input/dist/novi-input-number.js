module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomNumberInput = function (_Component) {
    _inherits(CustomNumberInput, _Component);

    function CustomNumberInput(props) {
        _classCallCheck(this, CustomNumberInput);

        var _this = _possibleConstructorReturn(this, (CustomNumberInput.__proto__ || Object.getPrototypeOf(CustomNumberInput)).call(this, props));

        _this.state = {
            value: '0'
        };

        _this.allowedValue = ['-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        _this.onChanged = _this.onChanged.bind(_this);
        _this.onKeyDown = _this.onKeyDown.bind(_this);
        _this.incrementValue = _this.incrementValue.bind(_this);
        _this.decrementValue = _this.decrementValue.bind(_this);
        return _this;
    }

    _createClass(CustomNumberInput, [{
        key: 'onChanged',
        value: function onChanged(e) {
            this.state.value = e.target.value;
            this.validateValue();
            this.setState({ value: this.state.value });
        }
    }, {
        key: 'onKeyDown',
        value: function onKeyDown(e) {
            var keyCode = e.keyCode;

            switch (true) {
                case keyCode === 40:
                    this.decrementValue(e);
                    break;
                case keyCode === 38:
                    this.incrementValue(e);
            }
        }
    }, {
        key: 'validateValue',
        value: function validateValue() {
            var value = this.state.value.split('');
            var allowedValue = this.allowedValue;
            var newValue = [];
            var max = this.props.max ? this.props.max : '';
            var min = this.props.min ? this.props.min : '';

            for (var i = 0; i < value.length; i++) {
                for (var j = 0; j < allowedValue.length; j++) {
                    if (value[i] === allowedValue[j]) {
                        newValue.push(value[i]);
                    }
                }
            }

            newValue = parseInt(newValue.join(''));

            if (max !== '' && max <= newValue) {
                newValue = max;
            }

            if (min !== '' && min >= newValue) {
                newValue = min;
            }

            this.state.value = newValue.toString();
        }
    }, {
        key: 'incrementValue',
        value: function incrementValue(e) {
            var value = parseInt(this.state.value);

            switch (true) {
                case e.shiftKey:
                    value = value + 10;
                    break;
                case e.ctrlKey || e.metaKey:
                    value = value + 100;
                    break;
                case e.altKey:
                    value = value + 1000;
                    break;
                default:
                    value++;
            }

            this.state.value = value.toString();
            this.validateValue();
            this.setState({ value: this.state.value });
        }
    }, {
        key: 'decrementValue',
        value: function decrementValue(e) {
            var value = parseInt(this.state.value);

            switch (true) {
                case e.shiftKey:
                    value = value - 10;
                    break;
                case e.ctrlKey || e.metaKey:
                    value = value - 100;
                    break;
                case e.altKey:
                    value = value - 1000;
                    break;
                default:
                    value--;
            }

            this.state.value = value.toString();
            this.validateValue();
            this.setState({ value: this.state.value });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'novi-input-number' },
                _react2.default.createElement('input', _extends({
                    className: 'novi-input-number',
                    onChange: this.onChanged,
                    onKeyDown: this.onKeyDown,
                    value: this.state.value
                }, this.props)),
                _react2.default.createElement(
                    'div',
                    { className: 'novi-input-number-arrows' },
                    _react2.default.createElement(
                        'div',
                        { className: 'novi-input-number-arrow-up', onClick: this.incrementValue },
                        _react2.default.createElement(
                            'svg',
                            { viewBox: '0 0 20 20' },
                            _react2.default.createElement('path', {
                                d: 'M0 15c0 0.128 0.049 0.256 0.146 0.354 0.195 0.195 0.512 0.195 0.707 0l8.646-8.646 8.646 8.646c0.195 0.195 0.512 0.195 0.707 0s0.195-0.512 0-0.707l-9-9c-0.195-0.195-0.512-0.195-0.707 0l-9 9c-0.098 0.098-0.146 0.226-0.146 0.354z' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'novi-input-number-arrow-down', onClick: this.decrementValue },
                        _react2.default.createElement(
                            'svg',
                            { viewBox: '0 0 20 20' },
                            _react2.default.createElement('path', {
                                d: 'M0 6c0-0.128 0.049-0.256 0.146-0.354 0.195-0.195 0.512-0.195 0.707 0l8.646 8.646 8.646-8.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-9 9c-0.195 0.195-0.512 0.195-0.707 0l-9-9c-0.098-0.098-0.146-0.226-0.146-0.354z' })
                        )
                    )
                )
            );
        }
    }]);

    return CustomNumberInput;
}(_react.Component);

exports.default = CustomNumberInput;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);