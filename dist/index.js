(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "http://localhost:8080/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Div = __webpack_require__(2);

Object.keys(_Div).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Div[key];
    }
  });
});

var _Button = __webpack_require__(5);

Object.keys(_Button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Button[key];
    }
  });
});

var _CheckBox = __webpack_require__(6);

Object.keys(_CheckBox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CheckBox[key];
    }
  });
});

var _ColorPickerBox = __webpack_require__(9);

Object.keys(_ColorPickerBox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ColorPickerBox[key];
    }
  });
});

var _Column = __webpack_require__(10);

Object.keys(_Column).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Column[key];
    }
  });
});

var _DropDown = __webpack_require__(11);

Object.keys(_DropDown).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DropDown[key];
    }
  });
});

var _Grid = __webpack_require__(13);

Object.keys(_Grid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Grid[key];
    }
  });
});

var _Row = __webpack_require__(7);

Object.keys(_Row).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Row[key];
    }
  });
});

var _Select = __webpack_require__(14);

Object.keys(_Select).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Select[key];
    }
  });
});

var _Spinner = __webpack_require__(15);

Object.keys(_Spinner).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Spinner[key];
    }
  });
});

var _Switch = __webpack_require__(17);

Object.keys(_Switch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Switch[key];
    }
  });
});

var _Text = __webpack_require__(18);

Object.keys(_Text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Text[key];
    }
  });
});

var _TextArea = __webpack_require__(19);

Object.keys(_TextArea).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TextArea[key];
    }
  });
});

var _TextInput = __webpack_require__(30);

Object.keys(_TextInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TextInput[key];
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Div = exports.Pre = exports.Span = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactVextensions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};

function Global(target) {
    Object.assign(window, _defineProperty({}, target.name, target));
}
var Span = function (_BaseComponent) {
    _inherits(Span, _BaseComponent);

    function Span() {
        _classCallCheck(this, Span);

        return _possibleConstructorReturn(this, (Span.__proto__ || Object.getPrototypeOf(Span)).apply(this, arguments));
    }

    _createClass(Span, [{
        key: "render",
        value: function render() {
            var _a = this.props,
                pre = _a.pre,
                style = _a.style,
                rest = __rest(_a, ["pre", "style"]);
            return _react2.default.createElement("span", Object.assign({}, rest, { style: (0, _reactVextensions.E)(style, pre && { whiteSpace: "pre" }) }));
        }
    }]);

    return Span;
}(_reactVextensions.BaseComponent);
exports.Span = Span = __decorate([Global, _reactVextensions.ApplyBasicStyles], Span);
exports.Span = Span;

var Pre = function (_BaseComponent2) {
    _inherits(Pre, _BaseComponent2);

    function Pre() {
        _classCallCheck(this, Pre);

        return _possibleConstructorReturn(this, (Pre.__proto__ || Object.getPrototypeOf(Pre)).apply(this, arguments));
    }

    _createClass(Pre, [{
        key: "render",
        value: function render() {
            var _a = this.props,
                allowWrap = _a.allowWrap,
                style = _a.style,
                children = _a.children,
                rest = __rest(_a, ["allowWrap", "style", "children"]);
            return _react2.default.createElement("span", Object.assign({}, rest, { style: (0, _reactVextensions.E)({ whiteSpace: allowWrap ? "pre-wrap" : "pre" }, style) }), children);
        }
    }]);

    return Pre;
}(_reactVextensions.BaseComponent);
exports.Pre = Pre = __decorate([Global, _reactVextensions.ApplyBasicStyles], Pre);
exports.Pre = Pre;

var Div = function (_BaseComponent3) {
    _inherits(Div, _BaseComponent3);

    function Div() {
        _classCallCheck(this, Div);

        return _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).apply(this, arguments));
    }

    _createClass(Div, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            var shouldUpdate = this.props.shouldUpdate;

            return shouldUpdate ? shouldUpdate(nextProps, nextState) : true;
            //return (shouldUpdate && shouldUpdate(nextProps, nextState)) || ShallowCompare(this, nextProps, nextState);
        }
    }, {
        key: "render",
        value: function render() {
            var _a = this.props,
                shouldUpdate = _a.shouldUpdate,
                style = _a.style,
                rest = __rest(_a, ["shouldUpdate", "style"]);
            return _react2.default.createElement("div", Object.assign({}, rest, { style: style }));
        }
    }]);

    return Div;
}(_reactVextensions.BaseComponent);
exports.Div = Div = __decorate([Global
//@SimpleShouldUpdate_Overridable // we can't make these "pure", as their children may need updating

, _reactVextensions.ApplyBasicStyles], Div);
exports.Div = Div;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-vextensions");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactVextensions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};

var styles = {
    root: {
        //display: "inline-block",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(90,100,110,.6)",
        backgroundRepeat: "no-repeat",
        borderRadius: 5,
        border: "1px solid rgba(210,210,230,.12)",
        color: "#AAA",
        /*fontFamily: "fancyFontSemibold, Trebuchet MS, Tahoma, sans-serif",*/
        fontSize: 14, textAlign: "center",
        cursor: "pointer",
        ":hover": {
            //backgroundColor: "rgba(0,0,0,.7)"
            backgroundColor: "rgba(90,100,110,.8)"
        }
    },
    root_opacityHover: {
        opacity: .6,
        ":hover": {
            opacity: 1
        }
    },
    root_hasCheckbox: { paddingTop: 4, verticalAlign: 1 },
    root_disabled: {
        opacity: .5, cursor: "default"
    },
    checkbox: { marginLeft: -6 }
};
//@Radium
var Button = function (_BaseComponent) {
    _inherits(Button, _BaseComponent);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: "render",
        value: function render() {
            var _a = this.props,
                enabled = _a.enabled,
                text = _a.text,
                title = _a.title,
                className = _a.className,
                style = _a.style,
                size = _a.size,
                width = _a.width,
                height = _a.height,
                iconSize = _a.iconSize,
                iconPath = _a.iconPath,
                useOpacityForHover = _a.useOpacityForHover,
                hasCheckbox = _a.hasCheckbox,
                checked = _a.checked,
                checkboxStyle = _a.checkboxStyle,
                checkboxLabelStyle = _a.checkboxLabelStyle,
                onCheckedChanged = _a.onCheckedChanged,
                onLeftClick = _a.onLeftClick,
                children = _a.children,
                rest = __rest(_a, ["enabled", "text", "title", "className", "style", "size", "width", "height", "iconSize", "iconPath", "useOpacityForHover", "hasCheckbox", "checked", "checkboxStyle", "checkboxLabelStyle", "onCheckedChanged", "onLeftClick", "children"]);
            width = width || size;
            height = height || size;
            var padding = "5px 15px";
            if (height) {
                var baseHeight = 20;
                var heightDifPerSide = (height - baseHeight) / 2;
                padding = heightDifPerSide + "px 15px";
            }
            var borderThickness = (style || {}).borderWidth || 1;
            var finalStyle = (0, _reactVextensions.E)(styles.root, useOpacityForHover && styles.root_opacityHover, { padding: padding, width: width, height: height }, iconSize && (width || height) && {
                padding: 0,
                backgroundPosition: (width - borderThickness * 2 - iconSize) / 2 + "px " + (height - borderThickness * 2 - iconSize) / 2 + "px",
                backgroundSize: iconSize
            }, iconPath && { backgroundImage: "url(" + iconPath + ")" }, hasCheckbox && styles.root_hasCheckbox, !enabled && styles.root_disabled, style);
            return _react2.default.createElement("div", Object.assign({}, rest, { title: title, onClick: this.OnClick, className: "Button " + (enabled ? (0, _reactVextensions.ClassBasedStyles)(finalStyle) : "") + " " + (className || ""), style: finalStyle }), hasCheckbox ? _react2.default.createElement("span", { style: { verticalAlign: 4 } }, text) : text, children);
        }
    }, {
        key: "OnClick",
        value: function OnClick(e) {
            var _props = this.props,
                enabled = _props.enabled,
                onClick = _props.onClick,
                onLeftClick = _props.onLeftClick,
                onDirectClick = _props.onDirectClick;

            if (!enabled) return;
            if (onDirectClick && (e.target == e.currentTarget || e.target.parentElement == e.currentTarget)) onDirectClick(e);
            if (onClick) onClick(e);
            if (onLeftClick && e.button == 0) onLeftClick(e);
        }
    }]);

    return Button;
}(_reactVextensions.BaseComponent);
Button.defaultProps = { enabled: true };
exports.Button = Button = __decorate([_reactVextensions.ApplyBasicStyles], Button);
exports.Button = Button;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CheckBox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactVextensions = __webpack_require__(4);

var _Row = __webpack_require__(7);

var _General = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CheckBox_1;

var CheckBox = CheckBox_1 = function (_BaseComponent) {
    _inherits(CheckBox, _BaseComponent);

    function CheckBox(props) {
        _classCallCheck(this, CheckBox);

        var _this = _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, props));

        _this.id = ++CheckBox_1.lastID;
        return _this;
    }

    _createClass(CheckBox, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                text = _props.text,
                wrap = _props.wrap,
                title = _props.title,
                checked = _props.checked,
                enabled = _props.enabled,
                style = _props.style,
                checkboxStyle = _props.checkboxStyle,
                labelStyle = _props.labelStyle,
                internalChanging = _props.internalChanging,
                _onChange = _props.onChange;
            var editedValue = this.state.editedValue;

            var textStr = (0, _General.ReactChildrenAsText)(text, "");
            var textHasEdgeSpaces = textStr.startsWith(" ") || textStr.endsWith(" ");
            // if text starts/ends with a space, apply "pre" by default, since otherwise the space gets trimmed
            var applyPre = wrap == false || wrap != true && textHasEdgeSpaces;
            return _react2.default.createElement(_Row.Row, { center: true, style: (0, _reactVextensions.E)({ position: "relative" }, style) }, _react2.default.createElement("input", { ref: function ref(c) {
                    return _this2.input = c;
                }, id: "checkBox_" + this.id, type: "checkbox", disabled: !enabled, checked: checked || false, onChange: function onChange(e) {
                    return _onChange && _onChange(_this2.input.checked, e);
                }, style: checkboxStyle }), _react2.default.createElement("label", { htmlFor: "checkBox_" + this.id, title: title, style: (0, _reactVextensions.E)({ marginLeft: 3 }, applyPre && { whiteSpace: "pre" }, labelStyle) }, _react2.default.createElement("span", null), text))
            /*<input ref={c=>this.input = c} type="checkbox"
                checked={editedValue != null ? editedValue : (checked || false)}
                disabled={enabled == false}
                onChange={e=> {
                    var newVal = this.input.checked;
                    if (internalChanging) {
                        this.SetState({editedValue: newVal});
                    } else {
                        onChange(newVal, e);
                    }
                }}/>*/
            ;
        }
    }, {
        key: "PostRender",
        value: function PostRender() {
            var indeterminate = this.props.indeterminate;

            this.input.indeterminate = indeterminate;
        }
    }, {
        key: "Checked",
        get: function get() {
            return this.input.checked;
        }
    }]);

    return CheckBox;
}(_reactVextensions.BaseComponent);
CheckBox.defaultProps = { enabled: true };
CheckBox.lastID = -1;
exports.CheckBox = CheckBox = CheckBox_1 = __decorate([_reactVextensions.ApplyBasicStyles], CheckBox);
exports.CheckBox = CheckBox;
/*export class CheckBox_Auto extends BaseComponent<
        {text?, title?, style?, labelStyle?,
            path: ()=>any, onChange?: (val: boolean)=>void}, {}> {
    ComponentWillMountOrReceiveProps(props) {
        var {path} = props;
        let {node, key: propName} = path();
        this.AddChangeListeners(node,
            (propName + "_PostSet").Func(this.Update),
        );
    }

    render() {
        var {path, onChange, ...rest} = this.props;
        let {node, key: propName} = path();
        return (
            <CheckBox {...rest} checked={node[propName]}
                onChange={val=> {
                    node.a(propName).set = val;
                    if (onChange) onChange(val);
                }}/>
        );
    }
}*/

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RowLR = exports.Row = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactVextensions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};

/*export class Row extends BaseComponent<any, any> {
    render() {
        var {style, height, children, ...otherProps} = this.props;
        height = height != null ? height : (style||{}).height;
        return (
            <div {...otherProps} style={E(BasicStyles(this.props), style,
                    //height != null ? {height} : {flex: 1})}>
                    height != null && {height})}>
                {children}
            </div>
        );
    }
}
@ApplyBasicStyles
export class RowLR extends BaseComponent<{height?, className?, rowStyle?, leftStyle?, rightStyle?}, {}> {
    render() {
        var {height, className, rowStyle, leftStyle, rightStyle, children} = this.props;
        Assert((children as any).length == 2, "Row child-count must be 2. (one for left-side, one for right-side)");
        return (
            <div className={"row3 clear " + (className || "")} style={E(height != null && {height}, rowStyle)}>
                <div style={E({float: "left", width: "50%"}, leftStyle)}>
                    {children[0]}
                </div>
                <div style={E({float: "right", width: "50%"}, rightStyle)}>
                    {children[1]}
                </div>
            </div>
        );
    }
}*/
var Row = function (_BaseComponent) {
    _inherits(Row, _BaseComponent);

    function Row() {
        _classCallCheck(this, Row);

        return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
    }

    _createClass(Row, [{
        key: "render",
        value: function render() {
            var _a = this.props,
                noShrink = _a.noShrink,
                center = _a.center,
                style = _a.style,
                rest = __rest(_a, ["noShrink", "center", "style"]);
            return _react2.default.createElement("div", Object.assign({}, rest, { style: (0, _reactVextensions.E)({ display: "flex" }, noShrink && { flexShrink: 0 }, center && { alignItems: "center" }, style) }));
        }
    }]);

    return Row;
}(_reactVextensions.BaseComponent);
exports.Row = Row = __decorate([_reactVextensions.ApplyBasicStyles], Row);
exports.Row = Row;

var RowLR = function (_BaseComponent2) {
    _inherits(RowLR, _BaseComponent2);

    function RowLR() {
        _classCallCheck(this, RowLR);

        return _possibleConstructorReturn(this, (RowLR.__proto__ || Object.getPrototypeOf(RowLR)).apply(this, arguments));
    }

    _createClass(RowLR, [{
        key: "render",
        value: function render() {
            var _a = this.props,
                splitAt = _a.splitAt,
                height = _a.height,
                className = _a.className,
                style = _a.style,
                leftStyle = _a.leftStyle,
                rightStyle = _a.rightStyle,
                children = _a.children,
                rest = __rest(_a, ["splitAt", "height", "className", "style", "leftStyle", "rightStyle", "children"]);
            //Assert((children as any).length == 2, "Row child-count must be 2. (one for left-side, one for right-side)");
            // if a child has "just-wrapper" tag, take out the wrapper and use its children directly (temp helper for React <16)
            /*if (children[1].props.className && children[1].props.className == "just-wrapper") {
                children[1] = children[1].props.children;
            }*/
            var childrenList = children;
            return _react2.default.createElement("div", Object.assign({}, rest, { style: (0, _reactVextensions.E)({ display: "flex", flexShrink: 0 }, style) }), _react2.default.createElement(Row, { center: true, style: (0, _reactVextensions.E)({ width: typeof splitAt == "string" ? splitAt + "%" : splitAt }, leftStyle) }, children[0]), _react2.default.createElement(Row, { center: true, style: (0, _reactVextensions.E)({ width: typeof splitAt == "string" ? 100 - parseInt(splitAt.slice(0, -1)) + "%" : "calc(100% - " + splitAt + "px)" }, rightStyle) }, childrenList.length == 2 && childrenList[1], childrenList.length > 2 && childrenList.slice(1)));
        }
    }]);

    return RowLR;
}(_reactVextensions.BaseComponent);
RowLR.defaultProps = { splitAt: "50%" };
exports.RowLR = RowLR = __decorate([_reactVextensions.ApplyBasicStyles], RowLR);
exports.RowLR = RowLR;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ToJSON = ToJSON;
exports.FromJSON = FromJSON;
exports.RemoveDuplicates = RemoveDuplicates;
exports.Assert = Assert;
exports.AssertWarn = AssertWarn;
exports.ReactChildrenAsText = ReactChildrenAsText;
function ToJSON(obj) {
    return JSON.stringify(obj);
}
function FromJSON(json) {
    return JSON.parse(json);
}
function RemoveDuplicates(items) {
    var result = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (result.indexOf(item) == -1) {
                result.push(item);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return result;
}
function Assert(condition, messageOrMessageFunc) {
    if (condition) return;
    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
    //console.log(`Assert failed) ${message}\n\nStackTrace) ${GetStackTraceStr()}`);
    console.error("Assert failed) " + message);
    debugger;
    throw new Error("Assert failed) " + message);
}
function AssertWarn(condition, messageOrMessageFunc) {
    if (condition) return;
    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
    console.warn("Assert-warn failed) " + message + "\n\nStackTrace)"); // ${GetStackTraceStr()}`);
}
function IsArrayOfStrings(obj) {
    return obj instanceof Array && obj.every(function (a) {
        return IsString(a);
    });
}
function IsString(obj) {
    return typeof obj == "string";
}
function ReactChildrenAsText(children, valueIfFailed) {
    if (IsString(children)) return children;
    if (IsArrayOfStrings(children)) return children.join("");
    return valueIfFailed;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ColorPickerBox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactVextensions = __webpack_require__(4);

var _General = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//declare var require;
//declare var __webpack_require__;
//declare var Require; // custom function added by webpack-runtime-require (we assume user project has this installed)
var SketchPicker = void 0,
    chroma = void 0;
/*function DynamicImports() {
    //let req = eval("require");
    //let req = __webpack_require__;
    Assert(Require, "webpack-runtime-require package must be installed (and initialized) to use the ColorPickerBox component.");
    let req = Require;

    Assert(typeof req("react-color") != "string", "react-color package must be installed (and imported) to use the ColorPickerBox component.");
    SketchPicker = req("react-color").SketchPicker;
    Assert(typeof req("chroma-js") != "string", "chroma-js package must be installed (and imported) to use the ColorPickerBox component.");
    chroma = req("chroma-js");
}*/
var ColorPickerBox = function (_BaseComponent) {
    _inherits(ColorPickerBox, _BaseComponent);

    function ColorPickerBox(props) {
        _classCallCheck(this, ColorPickerBox);

        var _this = _possibleConstructorReturn(this, (ColorPickerBox.__proto__ || Object.getPrototypeOf(ColorPickerBox)).call(this, props));

        (0, _General.Assert)(SketchPicker != null && chroma != null, "You must call ColorPickerBox.Init with the react-color and chroma-js module-exports before creating an instance.");
        return _this;
    }
    /*constructor(props) {
        DynamicImports();
        super(props);
    }*/


    _createClass(ColorPickerBox, [{
        key: "ComponentWillMountOrReceiveProps",
        value: function ComponentWillMountOrReceiveProps(props) {
            var color = props.color;

            this.SetState({ color: color });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                onChange = _props.onChange,
                popupStyle = _props.popupStyle;
            var _state = this.state,
                show = _state.show,
                color = _state.color;

            var presetColors = [chroma.hsl(0, 0, 0).css(), chroma.hsl(0, 0, .5).css(), chroma.hsl(0, 0, 1).css()];
            for (var h = 0; h < 360; h = parseInt(h + 360 / 15 + "")) {
                //for (let s = 0; s <= 1; s += 1 / 2) {
                var s = 1;
                var _arr = [.25, .5, .75];
                for (var _i = 0; _i < _arr.length; _i++) {
                    var l = _arr[_i];
                    presetColors.push(chroma.hsl(h, s, l).css());
                }
            }
            return _react2.default.createElement("div", null, _react2.default.createElement("div", { style: { padding: 5, background: "#fff", borderRadius: 1, boxShadow: "0 0 0 1px rgba(0,0,0,.1)", display: "inline-block", cursor: "pointer" }, onClick: function onClick() {
                    return _this2.SetState({ show: !show });
                } }, _react2.default.createElement("div", { style: { width: 36, height: 14, borderRadius: 2, background: "rgba(" + color + ")" } })), show && _react2.default.createElement("div", { style: (0, _reactVextensions.E)({ position: "absolute", zIndex: 2 }, popupStyle) }, _react2.default.createElement("div", { style: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0 }, onClick: function onClick() {
                    return _this2.SetState({ show: false });
                } }), _react2.default.createElement(SketchPicker, { presetColors: presetColors, color: { r: color.split(",")[0], g: color.split(",")[1], b: color.split(",")[2], a: color.split(",")[3] }, onChange: function onChange(color) {
                    var colorStr = color.rgb.VValues().join(",");
                    _this2.SetState({ color: colorStr });
                }, onChangeComplete: function onChangeComplete(color) {
                    var colorStr = color.rgb.VValues().join(",");
                    onChange(colorStr);
                } })));
        }
    }], [{
        key: "Init",
        value: function Init(react_color, chroma_js) {
            SketchPicker = react_color.SketchPicker;
            chroma = chroma_js;
        }
    }]);

    return ColorPickerBox;
}(_reactVextensions.BaseComponent);
exports.ColorPickerBox = ColorPickerBox = __decorate([_reactVextensions.ApplyBasicStyles], ColorPickerBox);
exports.ColorPickerBox = ColorPickerBox;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Column = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactVextensions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};

var Column = function (_BaseComponent) {
    _inherits(Column, _BaseComponent);

    function Column() {
        _classCallCheck(this, Column);

        return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
    }

    _createClass(Column, [{
        key: "render",
        value: function render() {
            var _a = this.props,
                noShrink = _a.noShrink,
                center = _a.center,
                style = _a.style,
                rest = __rest(_a, ["noShrink", "center", "style"]);
            return _react2.default.createElement("div", Object.assign({}, rest, { style: (0, _reactVextensions.E)({ display: "flex", flexDirection: "column" }, noShrink && { flexShrink: 0 }, center && { alignItems: "center" }, style) }));
        }
    }]);

    return Column;
}(_reactVextensions.BaseComponent);
exports.Column = Column = __decorate([_reactVextensions.ApplyBasicStyles], Column);
exports.Column = Column;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DropDownContent = exports.DropDownTrigger = exports.DropDown = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactVextensions = __webpack_require__(4);

var _classnames = __webpack_require__(12);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};

(0, _reactVextensions.AddGlobalStyle)("\n.dropdown {\n    display: inline-block;\n}\n.dropdown__content {\n    display: none;\n    position: absolute;\n}\n.dropdown--active > .dropdown__content {\n    display: block;\n}\n/*\n.dropdown__content > * { pointer-events: auto; }\n.dropdown__content { pointer-events: none; }\n*/\n");

var DropDown = exports.DropDown = function (_BaseComponent) {
    _inherits(DropDown, _BaseComponent);

    _createClass(DropDown, [{
        key: "ComponentDidMount",
        value: function ComponentDidMount() {
            window.addEventListener("click", this._onWindowClick);
            window.addEventListener("touchstart", this._onWindowClick);
        }
    }, {
        key: "ComponentWillUnmount",
        value: function ComponentWillUnmount() {
            window.removeEventListener("click", this._onWindowClick);
            window.removeEventListener("touchstart", this._onWindowClick);
        }
    }]);

    function DropDown(props) {
        _classCallCheck(this, DropDown);

        var _this = _possibleConstructorReturn(this, (DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call(this, props));

        _this.state = {
            active: false
        };
        _this._onWindowClick = _this._onWindowClick.bind(_this);
        _this._onToggleClick = _this._onToggleClick.bind(_this);
        return _this;
    }

    _createClass(DropDown, [{
        key: "isActive",
        value: function isActive() {
            return this.props.active != null ? this.props.active : this.state.active;
        }
    }, {
        key: "hide",
        value: function hide() {
            var _this2 = this;

            this.SetState({
                active: false
            }, function () {
                if (_this2.props.onHide) {
                    _this2.props.onHide();
                }
            });
        }
    }, {
        key: "show",
        value: function show() {
            var _this3 = this;

            this.SetState({
                active: true
            }, function () {
                if (_this3.props.onShow) {
                    _this3.props.onShow();
                }
            });
        }
    }, {
        key: "_onWindowClick",
        value: function _onWindowClick(event) {
            var dropdownElement = (0, _reactVextensions.GetDOM)(this);
            if (event.target !== dropdownElement && !dropdownElement.contains(event.target) && this.isActive()) {
                this.hide();
            }
        }
    }, {
        key: "_onToggleClick",
        value: function _onToggleClick(event) {
            event.preventDefault();
            if (this.isActive()) {
                this.hide();
            } else {
                this.show();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this,
                _arguments = arguments;

            var _props = this.props,
                children = _props.children,
                className = _props.className;
            // create component classes

            var active = this.isActive();
            // stick callback on trigger element
            var boundChildren = _react2.default.Children.map(children, function (child) {
                if (child.type === DropDownTrigger) {
                    var originalOnClick = child.props.onClick;
                    child = (0, _react.cloneElement)(child, {
                        ref: "trigger",
                        onClick: function onClick(event) {
                            _this4._onToggleClick(event);
                            if (originalOnClick) {
                                originalOnClick.apply(child, _arguments);
                            }
                        }
                    });
                }
                return child;
            });
            var cleanProps = Object.assign({}, this.props);
            delete cleanProps.active;
            delete cleanProps.onShow;
            delete cleanProps.onHide;
            return _react2.default.createElement("div", Object.assign({}, cleanProps, { className: (0, _classnames2.default)("dropdown", { "dropdown--active": active }, className) }), boundChildren);
        }
    }]);

    return DropDown;
}(_reactVextensions.BaseComponent);

var DropDownTrigger = exports.DropDownTrigger = function (_BaseComponent2) {
    _inherits(DropDownTrigger, _BaseComponent2);

    function DropDownTrigger() {
        _classCallCheck(this, DropDownTrigger);

        return _possibleConstructorReturn(this, (DropDownTrigger.__proto__ || Object.getPrototypeOf(DropDownTrigger)).apply(this, arguments));
    }

    _createClass(DropDownTrigger, [{
        key: "render",
        value: function render() {
            var _a = this.props,
                children = _a.children,
                className = _a.className,
                rest = __rest(_a, ["children", "className"]);
            return _react2.default.createElement("div", Object.assign({}, rest, { className: (0, _classnames2.default)("dropdown__trigger", className) }), children);
        }
    }]);

    return DropDownTrigger;
}(_reactVextensions.BaseComponent);

var DropDownContent = exports.DropDownContent = function (_BaseComponent3) {
    _inherits(DropDownContent, _BaseComponent3);

    function DropDownContent() {
        _classCallCheck(this, DropDownContent);

        return _possibleConstructorReturn(this, (DropDownContent.__proto__ || Object.getPrototypeOf(DropDownContent)).apply(this, arguments));
    }

    _createClass(DropDownContent, [{
        key: "render",
        value: function render() {
            var _a = this.props,
                children = _a.children,
                className = _a.className,
                style = _a.style,
                rest = __rest(_a, ["children", "className", "style"]);
            return _react2.default.createElement("div", Object.assign({}, rest, { className: (0, _classnames2.default)("dropdown__content", className), style: (0, _reactVextensions.E)({ padding: 10, background: "rgba(0,0,0,.7)", borderRadius: "0 0 0 5px" }, style) }), children);
        }
    }]);

    return DropDownContent;
}(_reactVextensions.BaseComponent);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Grid = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactVextensions = __webpack_require__(4);

var _classnames = __webpack_require__(12);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};

(0, _reactVextensions.AddGlobalStyle)("\n.Grid_WithSingleItem > * { grid-area: 1/1/1/1; }\n");
var Grid = function (_BaseComponent) {
    _inherits(Grid, _BaseComponent);

    function Grid() {
        _classCallCheck(this, Grid);

        return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
    }

    _createClass(Grid, [{
        key: "render",
        value: function render() {
            var _a = this.props,
                single = _a.single,
                centerY = _a.centerY,
                className = _a.className,
                style = _a.style,
                rest = __rest(_a, ["single", "centerY", "className", "style"]);
            return _react2.default.createElement("div", Object.assign({}, rest, { className: (0, _classnames2.default)(className, single && "Grid_WithSingleItem"), style: (0, _reactVextensions.E)({ display: "grid" }, centerY && { alignItems: "center" }, style) }));
        }
    }]);

    return Grid;
}(_reactVextensions.BaseComponent);
exports.Grid = Grid = __decorate([_reactVextensions.ApplyBasicStyles], Grid);
exports.Grid = Grid;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ButtonBar_OptionUI = exports.Dropdown_OptionUI = exports.Select = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactVextensions = __webpack_require__(4);

var _General = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Select_1;

var Select = Select_1 = function (_BaseComponent) {
    _inherits(Select, _BaseComponent);

    function Select() {
        _classCallCheck(this, Select);

        return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
    }

    _createClass(Select, [{
        key: "GetIndexOfOption",
        value: function GetIndexOfOption(option) {
            return this.OptionsList.indexOf(option);
        }
    }, {
        key: "GetIndexOfValue",
        value: function GetIndexOfValue(value) {
            var compareBy = this.props.compareBy;

            var options = this.OptionsList;
            return options.findIndex(function (option) {
                if (compareBy == "name") return option.name === value;
                if (compareBy == "value") return option.value === value;
                return option.value == null ? value == null : option.value.toString() === value.toString();
            });
        }
        //GetIndexForValue(value) { return this.FlattenedChildren.FindIndex(a=>a.props.value == value); }

    }, {
        key: "GetSelectedOption",
        value: function GetSelectedOption() {
            (0, _General.Assert)(this.props.displayType == "dropdown");
            var selectedIndex = this.root.selectedIndex;
            return this.OptionsList[selectedIndex];
        }
    }, {
        key: "GetSelectedValue",
        value: function GetSelectedValue() {
            return this.GetSelectedOption().value;
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                displayType = _props.displayType,
                value = _props.value,
                verifyValue = _props.verifyValue,
                enabled = _props.enabled,
                className = _props.className,
                title = _props.title,
                style = _props.style,
                childStyle = _props.childStyle,
                _onChange = _props.onChange;

            var options = this.OptionsList;
            var valueValid = this.GetIndexOfValue(value) != -1;
            // if there are no options yet, or value provided is null, don't require match, since this may be a pre-data render
            if (options.length && value != null && verifyValue) {
                (0, _General.AssertWarn)(valueValid, "Select's value must match one of the options. @options(" + options.map(function (a) {
                    return a.name + ":" + a.value;
                }).join(", ") + ") @value(" + value + ")");
            }
            /*var newChildren = this.FlattenedChildren.map((child: any, index)=> {
                //return React.cloneElement(child, {key: index, index: index});
                return <Option key={index} index={index} style={child.props.style}>{child.props.children}</Option>;
            });*/
            if (displayType == "dropdown") {
                return _react2.default.createElement("select", { ref: function ref(c) {
                        return _this2.root = c;
                    }, disabled: enabled == false, value: "value" + this.GetIndexOfValue(value), className: className, title: title, style: (0, _reactVextensions.E)({ color: "#000" }, style), onChange: function onChange(e) {
                        return _onChange(_this2.GetSelectedValue());
                    } }, options.map(function (option, index) {
                    return _react2.default.createElement(Dropdown_OptionUI, { key: index, index: index, style: (0, _reactVextensions.E)(childStyle, option.style) }, option.name);
                }));
            }
            return _react2.default.createElement("div", { style: (0, _reactVextensions.E)({/*borderRadius: 4, background: "rgba(255,255,255,.3)"*/}, style) }, options.map(function (option, index) {
                return _react2.default.createElement(ButtonBar_OptionUI, { key: index, first: index == 0, last: index == options.length - 1, selected: option.value === value, style: (0, _reactVextensions.E)(childStyle, option.style), onSelect: function onSelect(e) {
                        return _onChange(option.value);
                    } }, option.name);
            }));
        }
    }, {
        key: "OptionsList",
        get: function get() {
            return Select_1.GetOptionsListFromProps(this.props);
        }
    }], [{
        key: "ValidateProps",
        value: function ValidateProps(props) {
            var options = this.GetOptionsListFromProps(props);
            (0, _General.Assert)((0, _General.RemoveDuplicates)(options.map(function (a) {
                return a.name;
            })).length == options.length, function () {
                var optionsWithNonUniqueNames = options.filter(function (a) {
                    return options.filter(function (b) {
                        return b.name == a.name;
                    }).length > 1;
                });
                return "Select options must have unique names. (shared: " + optionsWithNonUniqueNames.map(function (a) {
                    return a.name;
                }).join(", ") + ")";
            });
        }
    }, {
        key: "GetOptionsListFromProps",
        value: function GetOptionsListFromProps(props) {
            var options_raw = props.options;

            var result = [];
            if (options_raw instanceof Array) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = options_raw[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var option_raw = _step.value;

                        if (option_raw && option_raw instanceof Object && "name" in option_raw && "value" in option_raw) {
                            result.push(option_raw);
                        } else {
                            result.push({ name: option_raw["name"] || option_raw.toString(), value: option_raw });
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            } /*else if (IsConstructor(options_raw)) {
                Assert(options_raw.prototype instanceof Enum, "Class provided must derive from class 'Enum'.");
                result = (options_raw as any).options;
              }*/
            else {
                    var optionsMap = options_raw;
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = optionsMap.Props()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var _step2$value = _step2.value,
                                name = _step2$value.name,
                                value = _step2$value.value;

                            //result.push(new Option(name, value));
                            result.push({ name: name, value: value });
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            return result;
        }
    }]);

    return Select;
}(_reactVextensions.BaseComponent);
Select.defaultProps = {
    displayType: "dropdown",
    compareBy: "value",
    verifyValue: true
};
exports.Select = Select = Select_1 = __decorate([_reactVextensions.ApplyBasicStyles], Select);
exports.Select = Select;

var Dropdown_OptionUI = exports.Dropdown_OptionUI = function (_BaseComponent2) {
    _inherits(Dropdown_OptionUI, _BaseComponent2);

    function Dropdown_OptionUI() {
        _classCallCheck(this, Dropdown_OptionUI);

        return _possibleConstructorReturn(this, (Dropdown_OptionUI.__proto__ || Object.getPrototypeOf(Dropdown_OptionUI)).apply(this, arguments));
    }

    _createClass(Dropdown_OptionUI, [{
        key: "render",
        value: function render() {
            var _props2 = this.props,
                index = _props2.index,
                style = _props2.style,
                children = _props2.children;

            return _react2.default.createElement("option", { value: "value" + index, style: (0, _reactVextensions.E)({ color: "#000" }, style) }, children);
        }
    }]);

    return Dropdown_OptionUI;
}(_reactVextensions.BaseComponent);

var ButtonBar_OptionUI = exports.ButtonBar_OptionUI = function (_BaseComponent3) {
    _inherits(ButtonBar_OptionUI, _BaseComponent3);

    function ButtonBar_OptionUI() {
        _classCallCheck(this, ButtonBar_OptionUI);

        return _possibleConstructorReturn(this, (ButtonBar_OptionUI.__proto__ || Object.getPrototypeOf(ButtonBar_OptionUI)).apply(this, arguments));
    }

    _createClass(ButtonBar_OptionUI, [{
        key: "render",
        value: function render() {
            var _this5 = this;

            var _props3 = this.props,
                first = _props3.first,
                last = _props3.last,
                selected = _props3.selected,
                style = _props3.style,
                children = _props3.children,
                onSelect = _props3.onSelect;
            var hovered = this.state.hovered;

            return _react2.default.createElement("div", { className: "ButtonBar_OptionUI", onMouseEnter: function onMouseEnter() {
                    return _this5.SetState({ hovered: true });
                }, onMouseLeave: function onMouseLeave() {
                    return _this5.SetState({ hovered: false });
                }, style: (0, _reactVextensions.E)({ display: "inline-block", background: "rgba(255,255,255,.3)", padding: "5px 12px", cursor: "pointer" }, hovered && { background: "rgba(255,255,255,.5)" }, first && { borderRadius: "4px 0 0 4px" }, !first && { border: "solid #222", borderWidth: "0 0 0 1px" }, last && { borderRadius: "0 4px 4px 0" }, first && last && { borderRadius: "4px" }, selected && { background: "rgba(255,255,255,.5)" }, style), onClick: onSelect }, children);
        }
    }]);

    return ButtonBar_OptionUI;
}(_reactVextensions.BaseComponent);
/*export class Select_Auto extends BaseComponent<
        {options: {name: string, value, style?}[] | string[] | (new()=>Enum) | {[s: string]: any},
            displayType?: "dropdown" | "button bar",
            compareBy?: "name" | "value" | "value toString",
            className?, title?, style?, childStyle?,
            path: ()=>any, onChange?: (val)=>void}, {}> {
    ComponentWillMountOrReceiveProps(props) {
        var {path} = props;
        let {node, key: propName} = path();
        this.AddChangeListeners(node,
            (propName + "_PostSet").Func(this.Update),
        );
    }

    render() {
        var {path, onChange, ...rest} = this.props;
        let {node, key: propName} = path();
        return (
            <Select {...rest} value={node[propName]} onChange={val=> {
                node.a(propName).set = val;
                if (onChange) onChange(val);
            }}/>
        );
    }
}*/

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Spinner = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactVextensions = __webpack_require__(4);

var _keycode = __webpack_require__(16);

var _keycode2 = _interopRequireDefault(_keycode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};

var Spinner = function (_BaseComponent) {
    _inherits(Spinner, _BaseComponent);

    function Spinner() {
        _classCallCheck(this, Spinner);

        return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
    }

    _createClass(Spinner, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                step = _a.step,
                min = _a.min,
                max = _a.max,
                value = _a.value,
                enabled = _a.enabled,
                title = _a.title,
                style = _a.style,
                delayChangeTillDefocus = _a.delayChangeTillDefocus,
                useEscape = _a.useEscape,
                _onChange = _a.onChange,
                _onBlur = _a.onBlur,
                _onKeyDown = _a.onKeyDown,
                rest = __rest(_a, ["step", "min", "max", "value", "enabled", "title", "style", "delayChangeTillDefocus", "useEscape", "onChange", "onBlur", "onKeyDown"]);var editedValue = this.state.editedValue;

            style = (0, _reactVextensions.E)({ color: "#000" }, style);
            if (max == Number.MAX_SAFE_INTEGER && !("width" in style)) {
                style.width = 70;
            }
            return _react2.default.createElement("input", Object.assign({}, rest, { ref: function ref(c) {
                    return _this2.root = c;
                }, type: "number", step: step, min: min, max: max, value: editedValue != null ? editedValue : value || 0, disabled: !enabled, title: title, style: style, onChange: function onChange(e) {
                    var newVal = Number(e.target.value);
                    if (newVal == editedValue) return; // if no change, ignore event
                    if (delayChangeTillDefocus) {
                        _this2.SetState({ editedValue: newVal });
                    } else {
                        _onChange(newVal, e);
                        _this2.SetState({ editedValue: null });
                    }
                }, onBlur: function onBlur(e) {
                    var newVal = Number(e.target.value);
                    if (newVal == value) return; // if no change, ignore event
                    if (delayChangeTillDefocus && _onChange) {
                        _onChange(newVal, e);
                        _this2.SetState({ editedValue: null });
                    }
                    if (_onBlur) return _onBlur(e);
                }, onKeyDown: function onKeyDown(e) {
                    if (useEscape && e.keyCode == _keycode2.default.codes.esc) return void _this2.SetState({ editedValue: null });
                    if (_onKeyDown) return _onKeyDown(e);
                } }));
        }
    }]);

    return Spinner;
}(_reactVextensions.BaseComponent);
Spinner.defaultProps = { step: 1, min: 0, max: Number.MAX_SAFE_INTEGER, value: 0, enabled: true };
exports.Spinner = Spinner = __decorate([_reactVextensions.ApplyBasicStyles], Spinner);
exports.Spinner = Spinner;
/*export class Spinner_Auto extends BaseComponent
        <{step?, min?, max?, enabled?, title?, style?, onFocus?,
            path: ()=>any, onChange?: (val: number)=>void}, {}> {
    static defaultProps = {step: 1, min: 0, max: Number.MAX_SAFE_INTEGER};

    ComponentWillMountOrReceiveProps(props) {
        var {path} = props;
        let {node, key: propName} = path();
        this.AddChangeListeners(node,
            (propName + "_PostSet").Func(this.Update),
        );
    }

    render() {
        var {path, onChange, ...rest} = this.props;
        let {node, key: propName} = path();
        return (
            <Spinner {...rest} value={node[propName]} onChange={val=> {
                node.a(propName).set = val;
                if (onChange) onChange(val);
            }}/>
        );
    }
}*/

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

function keyCode(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Compares a keyboard event with a given keyCode or keyName.
 *
 * @param {Event} event Keyboard event that should be tested
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Boolean}
 * @api public
 */
keyCode.isEventKey = function isEventKey(event, nameOrCode) {
  if (event && 'object' === typeof event) {
    var keyCode = event.which || event.keyCode || event.charCode
    if (keyCode === null || keyCode === undefined) { return false; }
    if (typeof nameOrCode === 'string') {
      // check codes
      var foundNamedKey = codes[nameOrCode.toLowerCase()]
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    
      // check aliases
      var foundNamedKey = aliases[nameOrCode.toLowerCase()]
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    } else if (typeof nameOrCode === 'number') {
      return nameOrCode === keyCode;
    }
    return false;
  }
}

exports = module.exports = keyCode;

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'spacebar': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
}

/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Switch = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactVextensions = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = exports.Switch = function (_BaseComponent) {
    _inherits(Switch, _BaseComponent);

    function Switch() {
        _classCallCheck(this, Switch);

        return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
    }

    _createClass(Switch, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                preferLater = _props.preferLater,
                children = _props.children;

            var existentChildren = this.FlattenedChildren.filter(function (a) {
                return !!a;
            });
            return preferLater ? existentChildren[existentChildren.length - 1] : existentChildren[0];
        }
    }]);

    return Switch;
}(_reactVextensions.BaseComponent);

Switch.defaultProps = { preferLater: true };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Text = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactVextensions = __webpack_require__(4);

var _General = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};

var Text = function (_BaseComponent) {
    _inherits(Text, _BaseComponent);

    function Text() {
        _classCallCheck(this, Text);

        return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
    }

    _createClass(Text, [{
        key: "render",
        value: function render() {
            var _a = this.props,
                wrap = _a.wrap,
                style = _a.style,
                children = _a.children,
                rest = __rest(_a, ["wrap", "style", "children"]);
            var textStr = (0, _General.ReactChildrenAsText)(children, "");
            var textHasEdgeSpaces = textStr.startsWith(" ") || textStr.endsWith(" ");
            // if text starts/ends with a space, apply "pre" by default, since otherwise the space gets trimmed
            var applyPre = wrap == false || wrap != true && textHasEdgeSpaces;
            return _react2.default.createElement("span", Object.assign({}, rest, { style: (0, _reactVextensions.E)({ display: "flex", alignItems: "center" }, applyPre && { whiteSpace: "pre" }, style) }), children);
        }
    }]);

    return Text;
}(_reactVextensions.BaseComponent);
exports.Text = Text = __decorate([_reactVextensions.ApplyBasicStyles], Text);
exports.Text = Text;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextArea = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactVextensions = __webpack_require__(4);

var _reactTextareaAutosize = __webpack_require__(20);

var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

var _keycode = __webpack_require__(16);

var keycode = _interopRequireWildcard(_keycode);

var _classnames = __webpack_require__(12);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};

var styles = {
    root: {
        margin: 0,
        /*border: "1px solid #A9A9A9",*/
        padding: "3 5",
        border: "none",
        //background: "url(/Main/Packages/Images/Tiling/Menu/Menu.png)",
        //color: "#888",
        //cursor: "text",
        resize: "none",
        display: "inline-block",
        boxSizing: "border-box",
        //whiteSpace: "pre",
        overflowWrap: "normal",
        width: "100%"
    },
    root_disabled: {
        /*background: "white",*/
        opacity: .7,
        cursor: "default"
    }
};
(0, _reactVextensions.AddGlobalStyle)("\n.autoSize_minHeight {\n\theight: unset !important;\n}\n");
// Note: Where possible, use something like "React.TextareaHTMLAttributes<HTMLTextAreaElement>". For the rest (eg. HTMLDivElement), use eg. "React.HTMLAttributes<HTMLDivElement>"
var TextArea = function (_BaseComponent) {
    _inherits(TextArea, _BaseComponent);

    function TextArea() {
        _classCallCheck(this, TextArea);

        return _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));
    }

    _createClass(TextArea, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                value = _a.value,
                defaultValue = _a.defaultValue,
                enabled = _a.enabled,
                editable = _a.editable,
                className = _a.className,
                style = _a.style,
                pattern = _a.pattern,
                _onChange = _a.onChange,
                delayChangeTillDefocus = _a.delayChangeTillDefocus,
                useEscape = _a.useEscape,
                autoSize = _a.autoSize,
                autoSize_minHeight = _a.autoSize_minHeight,
                allowLineBreaks = _a.allowLineBreaks,
                _onKeyDown = _a.onKeyDown,
                rest = __rest(_a, ["value", "defaultValue", "enabled", "editable", "className", "style", "pattern", "onChange", "delayChangeTillDefocus", "useEscape", "autoSize", "autoSize_minHeight", "allowLineBreaks", "onKeyDown"]);var _state = this.state,
                editedValue = _state.editedValue,
                minHeight = _state.minHeight;
            // if defaultValue is not specified, assume we're using value; then, if we see value is null, set to "" instead, so it clears any stale content

            if (defaultValue === undefined && value == null) value = "";
            //let Comp = autoSize ? TextAreaAutoSize : "textarea";
            //let Comp: React.HTMLFactory<HTMLTextAreaElement> = autoSize ? TextAreaAutoSize : "textarea";
            var Comp = autoSize ? _reactTextareaAutosize2.default : "textarea";
            return _react2.default.createElement(Comp, Object.assign({}, rest, { ref: function ref(c) {
                    return _this2.root = c;
                }, disabled: enabled == false, readOnly: !editable, className: (0, _classnames2.default)("simpleText selectable", className, autoSize_minHeight && "autoSize_minHeight"), style: (0, _reactVextensions.E)(styles.root, autoSize && {
                    resize: "none",
                    overflow: "hidden"
                }, autoSize_minHeight && minHeight != null && { minHeight: minHeight }, style) }, autoSize_minHeight && { onHeightChange: function onHeightChange(height) {
                    if (autoSize_minHeight) {
                        _this2.SetState({ minHeight: height });
                    }
                } }, { value: editedValue != null ? editedValue : value, defaultValue: defaultValue, onChange: function onChange(e) {
                    var newVal = e.target.value;
                    if (!allowLineBreaks) newVal = newVal.replace(/[\r\n]/g, "");
                    if (newVal == editedValue) return; // if no text change, ignore event
                    if (pattern) {
                        var valid = newVal.match(pattern) != null;
                        if (_this2.DOM && _this2.DOM["setCustomValidity"]) {
                            _this2.DOM["setCustomValidity"](valid ? "" : "Please match the requested format.");
                        }
                    }
                    if (delayChangeTillDefocus) {
                        _this2.SetState({ editedValue: newVal });
                    } else {
                        _onChange(newVal, e);
                        _this2.SetState({ editedValue: null });
                    }
                }, onBlur: function onBlur(e) {
                    var newVal = e.target.value;
                    if (newVal == value) return; // if no text change, ignore event
                    if (delayChangeTillDefocus && _onChange) {
                        _onChange(newVal, e);
                        _this2.SetState({ editedValue: null });
                    }
                }, onKeyDown: function onKeyDown(e) {
                    if (useEscape && e.keyCode == keycode.codes.esc) return void _this2.SetState({ editedValue: null });
                    if (_onKeyDown) return _onKeyDown(e);
                } }));
        }
    }]);

    return TextArea;
}(_reactVextensions.BaseComponent);
TextArea.defaultProps = { editable: true, allowLineBreaks: true };
exports.TextArea = TextArea = __decorate([_reactVextensions.ApplyBasicStyles], TextArea);
exports.TextArea = TextArea;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);







var isIE = !!document.documentElement.currentStyle;
var HIDDEN_TEXTAREA_STYLE = {
  'min-height': '0',
  'max-height': 'none',
  height: '0',
  visibility: 'hidden',
  overflow: 'hidden',
  position: 'absolute',
  'z-index': '-1000',
  top: '0',
  right: '0'
};
var SIZING_STYLE = ['letter-spacing', 'line-height', 'font-family', 'font-weight', 'font-size', 'font-style', 'tab-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width', 'box-sizing'];
var computedStyleCache = {};
var hiddenTextarea = document.createElement('textarea');

var forceHiddenStyles = function forceHiddenStyles(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function (key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], 'important');
  });
};

{
  forceHiddenStyles(hiddenTextarea);
}

function calculateNodeHeight(uiTextNode, uid, useCache, minRows, maxRows) {
  if (useCache === void 0) {
    useCache = false;
  }

  if (minRows === void 0) {
    minRows = null;
  }

  if (maxRows === void 0) {
    maxRows = null;
  }

  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  } // Copy all CSS properties that have an impact on the height of the content in
  // the textbox


  var nodeStyling = calculateNodeStyling(uiTextNode, uid, useCache);

  if (nodeStyling === null) {
    return null;
  }

  var paddingSize = nodeStyling.paddingSize,
      borderSize = nodeStyling.borderSize,
      boxSizing = nodeStyling.boxSizing,
      sizingStyle = nodeStyling.sizingStyle; // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content

  Object.keys(sizingStyle).forEach(function (key) {
    hiddenTextarea.style[key] = sizingStyle[key];
  });
  forceHiddenStyles(hiddenTextarea);
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || 'x';
  var minHeight = -Infinity;
  var maxHeight = Infinity;
  var height = hiddenTextarea.scrollHeight;

  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height = height - paddingSize;
  } // measure height of a textarea with a single row


  hiddenTextarea.value = 'x';
  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize; // Stores the value's rows count rendered in `hiddenTextarea`,
  // regardless if `maxRows` or `minRows` props are passed

  var valueRowCount = Math.floor(height / singleRowHeight);

  if (minRows !== null) {
    minHeight = singleRowHeight * minRows;

    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }

    height = Math.max(minHeight, height);
  }

  if (maxRows !== null) {
    maxHeight = singleRowHeight * maxRows;

    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }

    height = Math.min(maxHeight, height);
  }

  var rowCount = Math.floor(height / singleRowHeight);
  return {
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    rowCount: rowCount,
    valueRowCount: valueRowCount
  };
}

function calculateNodeStyling(node, uid, useCache) {
  if (useCache === void 0) {
    useCache = false;
  }

  if (useCache && computedStyleCache[uid]) {
    return computedStyleCache[uid];
  }

  var style = window.getComputedStyle(node);

  if (style === null) {
    return null;
  }

  var sizingStyle = SIZING_STYLE.reduce(function (obj, name) {
    obj[name] = style.getPropertyValue(name);
    return obj;
  }, {});
  var boxSizing = sizingStyle['box-sizing']; // probably node is detached from DOM, can't read computed dimensions

  if (boxSizing === '') {
    return null;
  } // IE (Edge has already correct behaviour) returns content width as computed width
  // so we need to add manually padding and border widths


  if (isIE && boxSizing === 'border-box') {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(style['border-right-width']) + parseFloat(style['border-left-width']) + parseFloat(style['padding-right']) + parseFloat(style['padding-left']) + 'px';
  }

  var paddingSize = parseFloat(sizingStyle['padding-bottom']) + parseFloat(sizingStyle['padding-top']);
  var borderSize = parseFloat(sizingStyle['border-bottom-width']) + parseFloat(sizingStyle['border-top-width']);
  var nodeInfo = {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };

  if (useCache) {
    computedStyleCache[uid] = nodeInfo;
  }

  return nodeInfo;
}

var purgeCache = function purgeCache(uid) {
  delete computedStyleCache[uid];
};

var noop = function noop() {};

var uid = 0;

var TextareaAutosize =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(TextareaAutosize, _React$Component);

  function TextareaAutosize(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this._onRef = function (node) {
      _this._ref = node;
      var inputRef = _this.props.inputRef;

      if (typeof inputRef === 'function') {
        inputRef(node);
        return;
      }

      inputRef.current = node;
    };

    _this._onChange = function (event) {
      if (!_this._controlled) {
        _this._resizeComponent();
      }

      _this.props.onChange(event, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this)));
    };

    _this._resizeComponent = function (callback) {
      if (callback === void 0) {
        callback = noop;
      }

      var nodeHeight = calculateNodeHeight(_this._ref, _this._uid, _this.props.useCacheForDOMMeasurements, _this.props.minRows, _this.props.maxRows);

      if (nodeHeight === null) {
        callback();
        return;
      }

      var height = nodeHeight.height,
          minHeight = nodeHeight.minHeight,
          maxHeight = nodeHeight.maxHeight,
          rowCount = nodeHeight.rowCount,
          valueRowCount = nodeHeight.valueRowCount;
      _this.rowCount = rowCount;
      _this.valueRowCount = valueRowCount;

      if (_this.state.height !== height || _this.state.minHeight !== minHeight || _this.state.maxHeight !== maxHeight) {
        _this.setState({
          height: height,
          minHeight: minHeight,
          maxHeight: maxHeight
        }, callback);

        return;
      }

      callback();
    };

    _this.state = {
      height: props.style && props.style.height || 0,
      minHeight: -Infinity,
      maxHeight: Infinity
    };
    _this._uid = uid++;
    _this._controlled = props.value !== undefined;
    _this._resizeLock = false;
    return _this;
  }

  var _proto = TextareaAutosize.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        _inputRef = _this$props.inputRef,
        _maxRows = _this$props.maxRows,
        _minRows = _this$props.minRows,
        _onHeightChange = _this$props.onHeightChange,
        _useCacheForDOMMeasurements = _this$props.useCacheForDOMMeasurements,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["inputRef", "maxRows", "minRows", "onHeightChange", "useCacheForDOMMeasurements"]);

    props.style = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.style, {
      height: this.state.height
    });
    var maxHeight = Math.max(props.style.maxHeight || Infinity, this.state.maxHeight);

    if (maxHeight < this.state.height) {
      props.style.overflow = 'hidden';
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onChange: this._onChange,
      ref: this._onRef
    }));
  };

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._resizeComponent(); // Working around Firefox bug which runs resize listeners even when other JS is running at the same moment
    // causing competing rerenders (due to setState in the listener) in React.
    // More can be found here - facebook/react#6324


    this._resizeListener = function () {
      if (_this2._resizeLock) {
        return;
      }

      _this2._resizeLock = true;

      _this2._resizeComponent(function () {
        _this2._resizeLock = false;
      });
    };

    window.addEventListener('resize', this._resizeListener);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this._resizeComponent();
    }

    if (this.state.height !== prevState.height) {
      this.props.onHeightChange(this.state.height, this);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this._resizeListener);
    purgeCache(this._uid);
  };

  return TextareaAutosize;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

TextareaAutosize.defaultProps = {
  inputRef: noop,
  onChange: noop,
  onHeightChange: noop,
  useCacheForDOMMeasurements: false
};
 true ? TextareaAutosize.propTypes = {
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any
  })]),
  maxRows: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  minRows: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onHeightChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  style: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  useCacheForDOMMeasurements: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
} : undefined;

/* harmony default export */ __webpack_exports__["default"] = (TextareaAutosize);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(26)(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(27);

var ReactPropTypesSecret = __webpack_require__(28);
var checkPropTypes = __webpack_require__(29);

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(28);
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactVextensions = __webpack_require__(4);

var _keycode = __webpack_require__(16);

var keycode = _interopRequireWildcard(_keycode);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};

var TextInput = function (_BaseComponent) {
    _inherits(TextInput, _BaseComponent);

    function TextInput() {
        _classCallCheck(this, TextInput);

        return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
    }

    _createClass(TextInput, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                value = _a.value,
                enabled = _a.enabled,
                editable = _a.editable,
                _onChange = _a.onChange,
                delayChangeTillDefocus = _a.delayChangeTillDefocus,
                useEscape = _a.useEscape,
                style = _a.style,
                _onBlur = _a.onBlur,
                _onKeyDown = _a.onKeyDown,
                rest = __rest(_a, ["value", "enabled", "editable", "onChange", "delayChangeTillDefocus", "useEscape", "style", "onBlur", "onKeyDown"]);var editedValue = this.state.editedValue;

            return _react2.default.createElement("input", Object.assign({}, rest, { ref: function ref(c) {
                    return _this2.root = c;
                }, disabled: enabled == false, readOnly: !editable, style: (0, _reactVextensions.E)({ color: "black" }, style), value: editedValue != null ? editedValue : value || "", onChange: function onChange(e) {
                    var newVal = e.target.value;
                    if (newVal == editedValue) return; // if no text change, ignore event
                    if (delayChangeTillDefocus) {
                        _this2.SetState({ editedValue: newVal });
                    } else {
                        _onChange(newVal, e);
                        _this2.SetState({ editedValue: null });
                    }
                }, onBlur: function onBlur(e) {
                    var newVal = e.target["value"];
                    if (newVal == value) return; // if no text change, ignore event
                    if (delayChangeTillDefocus && _onChange) {
                        _onChange(newVal, e);
                        _this2.SetState({ editedValue: null });
                    }
                    if (_onBlur) return _onBlur(e);
                }, onKeyDown: function onKeyDown(e) {
                    if (useEscape && e.keyCode == keycode.codes.esc) return void _this2.SetState({ editedValue: null });
                    if (_onKeyDown) return _onKeyDown(e);
                } }));
        }
    }, {
        key: "GetValue",
        value: function GetValue() {
            return this.root.value;
        }
    }]);

    return TextInput;
}(_reactVextensions.BaseComponent);
TextInput.defaultProps = { editable: true, type: "text" };
exports.TextInput = TextInput = __decorate([_reactVextensions.ApplyBasicStyles], TextInput);
exports.TextInput = TextInput;
/*export class TextInput_Auto extends BaseComponent<
        {style?, delayChangeTillDefocus?,
            path: ()=>any, onChange?: (val: string)=>void}, {}> {
    ComponentWillMountOrReceiveProps(props) {
        var {path} = props;
        let {node, key: propName} = path();
        this.AddChangeListeners(node,
            (propName + "_PostSet").Func(this.Update),
        );
    }

    render() {
        var {path, onChange, ...rest} = this.props;
        let {node, key: propName} = path();
        return (
            <TextInput {...rest} value={node[propName]} onChange={val=> {
                node.a(propName).set = val;
                if (onChange) onChange(val);
            }}/>
        );
    }
}*/

/***/ })
/******/ ]);
});