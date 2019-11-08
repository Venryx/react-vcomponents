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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Components_Button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony import */ var _Components_CheckBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return _Components_CheckBox__WEBPACK_IMPORTED_MODULE_1__["CheckBox"]; });

/* harmony import */ var _Components_ColorPickerBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerBox", function() { return _Components_ColorPickerBox__WEBPACK_IMPORTED_MODULE_2__["ColorPickerBox"]; });

/* harmony import */ var _Components_Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return _Components_Column__WEBPACK_IMPORTED_MODULE_3__["Column"]; });

/* harmony import */ var _Components_Div__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return _Components_Div__WEBPACK_IMPORTED_MODULE_4__["Span"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pre", function() { return _Components_Div__WEBPACK_IMPORTED_MODULE_4__["Pre"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return _Components_Div__WEBPACK_IMPORTED_MODULE_4__["Div"]; });

/* harmony import */ var _Components_DropDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropDown", function() { return _Components_DropDown__WEBPACK_IMPORTED_MODULE_5__["DropDown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropDownTrigger", function() { return _Components_DropDown__WEBPACK_IMPORTED_MODULE_5__["DropDownTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropDownContent", function() { return _Components_DropDown__WEBPACK_IMPORTED_MODULE_5__["DropDownContent"]; });

/* harmony import */ var _Components_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _Components_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"]; });

/* harmony import */ var _Components_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _Components_Row__WEBPACK_IMPORTED_MODULE_7__["Row"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RowLR", function() { return _Components_Row__WEBPACK_IMPORTED_MODULE_7__["RowLR"]; });

/* harmony import */ var _Components_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _Components_Select__WEBPACK_IMPORTED_MODULE_8__["Select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown_OptionUI", function() { return _Components_Select__WEBPACK_IMPORTED_MODULE_8__["Dropdown_OptionUI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonBar_OptionUI", function() { return _Components_Select__WEBPACK_IMPORTED_MODULE_8__["ButtonBar_OptionUI"]; });

/* harmony import */ var _Components_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return _Components_Spinner__WEBPACK_IMPORTED_MODULE_9__["Spinner"]; });

/* harmony import */ var _Components_Switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Components_Switch__WEBPACK_IMPORTED_MODULE_10__["Switch"]; });

/* harmony import */ var _Components_Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Components_Text__WEBPACK_IMPORTED_MODULE_11__["Text"]; });

/* harmony import */ var _Components_TextArea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return _Components_TextArea__WEBPACK_IMPORTED_MODULE_12__["TextArea"]; });

/* harmony import */ var _Components_TextInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return _Components_TextInput__WEBPACK_IMPORTED_MODULE_13__["TextInput"]; });

/* harmony import */ var _Components_TimeSpanInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeSpanInput", function() { return _Components_TimeSpanInput__WEBPACK_IMPORTED_MODULE_14__["TimeSpanInput"]; });







 //export * from "./Components/ResizeSensor";

 //export * from "./Components/RowAndColumn";









/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vextensions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    fontSize: 14,
    textAlign: "center",
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
  root_hasCheckbox: {
    paddingTop: 4,
    verticalAlign: 1
  },
  root_disabled: {
    opacity: .5,
    cursor: "default"
  },
  checkbox: {
    marginLeft: -6
  }
}; //@Radium

var Button =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Button, _BaseComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          enabled = _this$props.enabled,
          text = _this$props.text,
          title = _this$props.title,
          className = _this$props.className,
          style = _this$props.style,
          size = _this$props.size,
          width = _this$props.width,
          height = _this$props.height,
          iconSize = _this$props.iconSize,
          iconPath = _this$props.iconPath,
          useOpacityForHover = _this$props.useOpacityForHover,
          hasCheckbox = _this$props.hasCheckbox,
          checked = _this$props.checked,
          checkboxStyle = _this$props.checkboxStyle,
          checkboxLabelStyle = _this$props.checkboxLabelStyle,
          onCheckedChanged = _this$props.onCheckedChanged,
          onLeftClick = _this$props.onLeftClick,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["enabled", "text", "title", "className", "style", "size", "width", "height", "iconSize", "iconPath", "useOpacityForHover", "hasCheckbox", "checked", "checkboxStyle", "checkboxLabelStyle", "onCheckedChanged", "onLeftClick", "children"]);

      width = width || size;
      height = height || size;
      var padding = "5px 15px";

      if (height) {
        var baseHeight = 20;
        var heightDifPerSide = (height - baseHeight) / 2;
        padding = "".concat(heightDifPerSide, "px 15px");
      }

      var borderThickness = (style || {}).borderWidth || 1;
      var finalStyle = Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["E"])(styles.root, useOpacityForHover && styles.root_opacityHover, {
        padding: padding,
        width: width,
        height: height
      }, iconSize && (width || height) && {
        padding: 0,
        backgroundPosition: "".concat((width - borderThickness * 2 - iconSize) / 2, "px ").concat((height - borderThickness * 2 - iconSize) / 2, "px"),
        backgroundSize: iconSize
      }, iconPath && {
        backgroundImage: "url(".concat(iconPath, ")")
      }, hasCheckbox && styles.root_hasCheckbox, !enabled && styles.root_disabled, style);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, rest, {
        title: title,
        onClick: this.OnClick,
        className: "Button ".concat(enabled ? Object(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["ClassBasedStyles"])(finalStyle) : "", " ").concat(className || ""),
        style: finalStyle
      }), hasCheckbox ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          verticalAlign: 4
        }
      }, text) : text, children);
    }
  }, {
    key: "OnClick",
    value: function OnClick(e) {
      var _this$props2 = this.props,
          enabled = _this$props2.enabled,
          onClick = _this$props2.onClick,
          onLeftClick = _this$props2.onLeftClick,
          onDirectClick = _this$props2.onDirectClick;
      if (!enabled) return;
      if (onDirectClick && (e.target == e.currentTarget || e.target.parentElement == e.currentTarget)) onDirectClick(e);
      if (onClick) onClick(e);
      if (onLeftClick && e.button == 0) onLeftClick(e);
    }
  }]);

  return Button;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

Button.defaultProps = {
  enabled: true
};
Button = __decorate([react_vextensions__WEBPACK_IMPORTED_MODULE_1__["ApplyBasicStyles"]], Button);


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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToJSON", function() { return ToJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromJSON", function() { return FromJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveDuplicates", function() { return RemoveDuplicates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assert", function() { return Assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertWarn", function() { return AssertWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactChildrenAsText", function() { return ReactChildrenAsText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clone", function() { return Clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNaN", function() { return IsNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNumber", function() { return IsNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToNumber", function() { return ToNumber; });
function E(e1, e2, e3, e4, e5, e6, e7, e8) {
  var result = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var extend = _step.value;
      result.Extend(extend);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result; //return StyleSheet.create(result);
}
function ToJSON(obj) {
  return JSON.stringify(obj);
}
function FromJSON(json) {
  return JSON.parse(json);
}
function RemoveDuplicates(items) {
  var result = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var item = _step2.value;

      if (result.indexOf(item) == -1) {
        result.push(item);
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result;
}
function Assert(condition, messageOrMessageFunc) {
  if (condition) return;
  var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc; //console.log(`Assert failed) ${message}\n\nStackTrace) ${GetStackTraceStr()}`);

  console.error("Assert failed) " + message);
  debugger;
  throw new Error("Assert failed) " + message);
}
function AssertWarn(condition, messageOrMessageFunc) {
  if (condition) return;
  var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
  console.warn("Assert-warn failed) ".concat(message, "\n\nStackTrace)")); // ${GetStackTraceStr()}`);
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
function Clone(obj) {
  var keepPrototype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (obj == null) return obj;
  var result = FromJSON(ToJSON(obj));

  if (keepPrototype == true) {
    Object.setPrototypeOf(result, Object.getPrototypeOf(obj));
  }

  return result;
}
function IsNaN(obj) {
  return typeof obj == "number" && obj != obj;
}
function IsNumber(obj) {
  var allowNumberObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var allowNaN = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!allowNaN && IsNaN(obj)) return false;
  return typeof obj == "number" || allowNumberObj && obj instanceof Number;
}
function ToNumber(stringOrFloatVal) {
  var valIfConversionFails = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
  if (!IsString(stringOrFloatVal) && !IsNumber(stringOrFloatVal)) return valIfConversionFails;
  if (IsString(stringOrFloatVal) && stringOrFloatVal.length == 0) return valIfConversionFails;
  return Number(stringOrFloatVal);
}
/*export function Math_Truncate(value: number) {
    if (value >= 0) return Math.floor(value);
    return Math.ceil(value);
}*/

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return CheckBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vextensions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CheckBox_1;





var CheckBox = CheckBox_1 =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(CheckBox, _BaseComponent);

  function CheckBox(props) {
    var _this;

    _classCallCheck(this, CheckBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckBox).call(this, props));
    _this.id = ++CheckBox_1.lastID;
    return _this;
  }

  _createClass(CheckBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          text = _this$props.text,
          wrap = _this$props.wrap,
          title = _this$props.title,
          checked = _this$props.checked,
          enabled = _this$props.enabled,
          style = _this$props.style,
          checkboxStyle = _this$props.checkboxStyle,
          labelStyle = _this$props.labelStyle,
          internalChanging = _this$props.internalChanging,
          _onChange = _this$props.onChange;
      var editedValue = this.state.editedValue;
      var textStr = Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_3__["ReactChildrenAsText"])(text, "");
      var textHasEdgeSpaces = textStr.startsWith(" ") || textStr.endsWith(" "); // if text starts/ends with a space, apply "pre" by default, since otherwise the space gets trimmed

      var applyPre = wrap == false || wrap != true && textHasEdgeSpaces;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Row__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        center: true,
        title: title,
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_3__["E"])({
          position: "relative"
        }, style)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        ref: function ref(c) {
          return _this2.input = c;
        },
        id: "checkBox_" + this.id,
        type: "checkbox",
        disabled: !enabled,
        checked: checked || false,
        onChange: function onChange(e) {
          return _onChange && _onChange(_this2.input.checked, e);
        },
        style: checkboxStyle
      }), text && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "checkBox_" + this.id,
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_3__["E"])({
          marginLeft: 3
        }, applyPre && {
          whiteSpace: "pre"
        }, labelStyle)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), text))
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
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

CheckBox.defaultProps = {
  enabled: true
};
CheckBox.lastID = -1;
CheckBox = CheckBox_1 = __decorate([react_vextensions__WEBPACK_IMPORTED_MODULE_1__["ApplyBasicStyles"]], CheckBox);

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowLR", function() { return RowLR; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vextensions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Row =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Row, _BaseComponent);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, _getPrototypeOf(Row).apply(this, arguments));
  }

  _createClass(Row, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          noShrink = _this$props.noShrink,
          center = _this$props.center,
          style = _this$props.style,
          rest = _objectWithoutProperties(_this$props, ["noShrink", "center", "style"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, rest, {
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["E"])({
          display: "flex"
        }, noShrink && {
          flexShrink: 0
        }, center && {
          alignItems: "center"
        }, style)
      }));
    }
  }]);

  return Row;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

Row = __decorate([react_vextensions__WEBPACK_IMPORTED_MODULE_1__["ApplyBasicStyles"]], Row);


var RowLR =
/*#__PURE__*/
function (_BaseComponent2) {
  _inherits(RowLR, _BaseComponent2);

  function RowLR() {
    _classCallCheck(this, RowLR);

    return _possibleConstructorReturn(this, _getPrototypeOf(RowLR).apply(this, arguments));
  }

  _createClass(RowLR, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          splitAt = _this$props2.splitAt,
          height = _this$props2.height,
          className = _this$props2.className,
          style = _this$props2.style,
          leftStyle = _this$props2.leftStyle,
          rightStyle = _this$props2.rightStyle,
          children = _this$props2.children,
          rest = _objectWithoutProperties(_this$props2, ["splitAt", "height", "className", "style", "leftStyle", "rightStyle", "children"]); //Assert((children as any).length == 2, "Row child-count must be 2. (one for left-side, one for right-side)");
      // if a child has "just-wrapper" tag, take out the wrapper and use its children directly (temp helper for React <16)

      /*if (children[1].props.className && children[1].props.className == "just-wrapper") {
          children[1] = children[1].props.children;
      }*/


      var childrenList = children;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, rest, {
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["E"])({
          display: "flex",
          flexShrink: 0
        }, style)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, {
        center: true,
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["E"])({
          width: typeof splitAt == "string" ? splitAt + "%" : splitAt
        }, leftStyle)
      }, children[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, {
        center: true,
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["E"])({
          width: typeof splitAt == "string" ? 100 - parseInt(splitAt.slice(0, -1)) + "%" : "calc(100% - ".concat(splitAt, "px)")
        }, rightStyle)
      }, childrenList.length == 2 && childrenList[1], childrenList.length > 2 && childrenList.slice(1)));
    }
  }]);

  return RowLR;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

RowLR.defaultProps = {
  splitAt: "50%"
};
RowLR = __decorate([react_vextensions__WEBPACK_IMPORTED_MODULE_1__["ApplyBasicStyles"]], RowLR);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerBox", function() { return ColorPickerBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vextensions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //declare var require;
//declare var __webpack_require__;
//declare var Require; // custom function added by webpack-runtime-require (we assume user project has this installed)

var SketchPicker, chroma;
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

var ColorPickerBox =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(ColorPickerBox, _BaseComponent);

  function ColorPickerBox(props) {
    var _this;

    _classCallCheck(this, ColorPickerBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColorPickerBox).call(this, props));
    Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["Assert"])(SketchPicker != null && chroma != null, "You must call ColorPickerBox.Init with the react-color and chroma-js module-exports before creating an instance.");
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
      this.SetState({
        color: color
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          onChange = _this$props.onChange,
          popupStyle = _this$props.popupStyle;
      var _this$state = this.state,
          show = _this$state.show,
          color = _this$state.color;
      var presetColors = [chroma.hsl(0, 0, 0).css(), chroma.hsl(0, 0, .5).css(), chroma.hsl(0, 0, 1).css()];

      for (var h = 0; h < 360; h = parseInt(h + 360 / 15 + "")) {
        //for (let s = 0; s <= 1; s += 1 / 2) {
        var s = 1;

        for (var _i = 0, _arr = [.25, .5, .75]; _i < _arr.length; _i++) {
          var l = _arr[_i];
          presetColors.push(chroma.hsl(h, s, l).css());
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: 5,
          background: "#fff",
          borderRadius: 1,
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer"
        },
        onClick: function onClick() {
          return _this2.SetState({
            show: !show
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: 36,
          height: 14,
          borderRadius: 2,
          background: "rgba(".concat(color, ")")
        }
      })), show && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["E"])({
          position: "absolute",
          zIndex: 2
        }, popupStyle)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        onClick: function onClick() {
          return _this2.SetState({
            show: false
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SketchPicker, {
        presetColors: presetColors,
        color: {
          r: color.split(",")[0],
          g: color.split(",")[1],
          b: color.split(",")[2],
          a: color.split(",")[3]
        },
        onChange: function onChange(color) {
          var colorStr = color.rgb.VValues().join(",");

          _this2.SetState({
            color: colorStr
          });
        },
        onChangeComplete: function onChangeComplete(color) {
          var colorStr = color.rgb.VValues().join(",");
          if (onChange) onChange(colorStr);
        }
      })));
    }
  }], [{
    key: "Init",
    value: function Init(react_color, chroma_js) {
      SketchPicker = react_color.SketchPicker;
      chroma = chroma_js;
    }
  }]);

  return ColorPickerBox;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

ColorPickerBox = __decorate([react_vextensions__WEBPACK_IMPORTED_MODULE_1__["ApplyBasicStyles"]], ColorPickerBox);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vextensions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Column =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Column, _BaseComponent);

  function Column() {
    _classCallCheck(this, Column);

    return _possibleConstructorReturn(this, _getPrototypeOf(Column).apply(this, arguments));
  }

  _createClass(Column, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          noShrink = _this$props.noShrink,
          center = _this$props.center,
          style = _this$props.style,
          rest = _objectWithoutProperties(_this$props, ["noShrink", "center", "style"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, rest, {
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["E"])({
          display: "flex",
          flexDirection: "column"
        }, noShrink && {
          flexShrink: 0
        }, center && {
          alignItems: "center"
        }, style)
      }));
    }
  }]);

  return Column;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

Column = __decorate([react_vextensions__WEBPACK_IMPORTED_MODULE_1__["ApplyBasicStyles"]], Column);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pre", function() { return Pre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return Div; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vextensions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





function Global(target) {
  Object.assign(window, _defineProperty({}, target.name, target));
}

var Span =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Span, _BaseComponent);

  function Span() {
    _classCallCheck(this, Span);

    return _possibleConstructorReturn(this, _getPrototypeOf(Span).apply(this, arguments));
  }

  _createClass(Span, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pre = _this$props.pre,
          style = _this$props.style,
          rest = _objectWithoutProperties(_this$props, ["pre", "style"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", Object.assign({}, rest, {
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["E"])(style, pre && {
          whiteSpace: "pre"
        })
      }));
    }
  }]);

  return Span;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

Span = __decorate([Global, react_vextensions__WEBPACK_IMPORTED_MODULE_1__["ApplyBasicStyles"]], Span);


var Pre =
/*#__PURE__*/
function (_BaseComponent2) {
  _inherits(Pre, _BaseComponent2);

  function Pre() {
    _classCallCheck(this, Pre);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pre).apply(this, arguments));
  }

  _createClass(Pre, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          allowWrap = _this$props2.allowWrap,
          style = _this$props2.style,
          children = _this$props2.children,
          rest = _objectWithoutProperties(_this$props2, ["allowWrap", "style", "children"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", Object.assign({}, rest, {
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["E"])({
          whiteSpace: allowWrap ? "pre-wrap" : "pre"
        }, style)
      }), children);
    }
  }]);

  return Pre;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

Pre = __decorate([Global, react_vextensions__WEBPACK_IMPORTED_MODULE_1__["ApplyBasicStyles"]], Pre);


var Div =
/*#__PURE__*/
function (_BaseComponent3) {
  _inherits(Div, _BaseComponent3);

  function Div() {
    _classCallCheck(this, Div);

    return _possibleConstructorReturn(this, _getPrototypeOf(Div).apply(this, arguments));
  }

  _createClass(Div, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var shouldUpdate = this.props.shouldUpdate;
      return shouldUpdate ? shouldUpdate(nextProps, nextState) : true; //return (shouldUpdate && shouldUpdate(nextProps, nextState)) || ShallowCompare(this, nextProps, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          shouldUpdate = _this$props3.shouldUpdate,
          style = _this$props3.style,
          rest = _objectWithoutProperties(_this$props3, ["shouldUpdate", "style"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, rest, {
        style: style
      }));
    }
  }]);

  return Div;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

Div = __decorate([Global //@SimpleShouldUpdate_Overridable // we can't make these "pure", as their children may need updating
, react_vextensions__WEBPACK_IMPORTED_MODULE_1__["ApplyBasicStyles"]], Div);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDown", function() { return DropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownTrigger", function() { return DropDownTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownContent", function() { return DropDownContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vextensions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






Object(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["AddGlobalStyle"])("\n.dropdown {\n    display: inline-block;\n}\n.dropdown__content {\n    display: none;\n    position: absolute;\n}\n.dropdown--active > .dropdown__content {\n    display: block;\n}\n/*\n.dropdown__content > * { pointer-events: auto; }\n.dropdown__content { pointer-events: none; }\n*/\n"); // avoiding BaseComponentPlus for now, since seems to cause error when used in parent project (need to investigate)
//export class DropDown extends BaseComponentPlus({} as {className?, onShow?, onHide?, active?: boolean} & React.HTMLAttributes<HTMLDivElement>, {active: false}) {

var DropDown =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(DropDown, _BaseComponent);

  function DropDown() {
    var _this;

    _classCallCheck(this, DropDown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropDown).apply(this, arguments));

    _this.OnWindowClick = function (event) {
      var dropdownElement = Object(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["GetDOM"])(_assertThisInitialized(_this));

      if (event.target !== dropdownElement && !dropdownElement.contains(event.target) && _this.IsActive()) {
        _this.Hide();
      }
    };

    _this.OnToggleClick = function (event) {
      event.preventDefault();

      if (_this.IsActive()) {
        _this.Hide();
      } else {
        _this.Show();
      }
    };

    return _this;
  }

  _createClass(DropDown, [{
    key: "ComponentDidMount",
    value: function ComponentDidMount() {
      window.addEventListener("click", this.OnWindowClick);
      window.addEventListener("touchstart", this.OnWindowClick);
    }
  }, {
    key: "ComponentWillUnmount",
    value: function ComponentWillUnmount() {
      window.removeEventListener("click", this.OnWindowClick);
      window.removeEventListener("touchstart", this.OnWindowClick);
    }
  }, {
    key: "IsActive",
    value: function IsActive() {
      return this.props.active != null ? this.props.active : this.state.active;
    }
  }, {
    key: "Show",
    value: function Show() {
      var onShow = this.props.onShow;
      this.SetState({
        active: true
      }, function () {
        if (onShow) onShow();
      });
    }
  }, {
    key: "Hide",
    value: function Hide() {
      var onHide = this.props.onHide;
      this.SetState({
        active: false
      }, function () {
        if (onHide) onHide();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _arguments = arguments;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className; // create component classes

      var active = this.IsActive(); // stick callback on trigger element

      var boundChildren = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
        if (child.type === DropDownTrigger) {
          var originalOnClick = child.props.onClick;
          child = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
            ref: "trigger",
            onClick: function onClick(event) {
              _this2.OnToggleClick(event);

              if (originalOnClick) {
                originalOnClick.apply(child, _arguments);
              }
            }
          });
        }

        return child;
      });

      var cleanProps = _objectSpread({}, this.props);

      delete cleanProps.active;
      delete cleanProps.onShow;
      delete cleanProps.onHide;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, cleanProps, {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("dropdown", {
          "dropdown--active": active
        }, className)
      }), boundChildren);
    }
  }]);

  return DropDown;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);
DropDown.defaultState = {
  active: false
}; //export class DropDownTrigger extends BaseComponent<{className?} & React.HTMLAttributes<HTMLDivElement>, {}> {

var DropDownTrigger =
/*#__PURE__*/
function (_BaseComponent2) {
  _inherits(DropDownTrigger, _BaseComponent2);

  function DropDownTrigger() {
    _classCallCheck(this, DropDownTrigger);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropDownTrigger).apply(this, arguments));
  }

  _createClass(DropDownTrigger, [{
    key: "render",
    value: function render() {
      /* const {children, className, ...rest} = this.props;
      return (
          <div {...rest} className={classNames("dropdown__trigger", className)}>
              {children}
          </div>
      ); */
      var _this$props2 = this.props,
          children = _this$props2.children,
          rest = _objectWithoutProperties(_this$props2, ["children"]); // whatever properties were passed to this DropDownTrigger (eg. the onClick handler from DropDown.render), add them onto the children


      var childrenWithPassedProps = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, rest);
      });
      return childrenWithPassedProps;
    }
  }]);

  return DropDownTrigger;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);
var DropDownContent =
/*#__PURE__*/
function (_BaseComponent3) {
  _inherits(DropDownContent, _BaseComponent3);

  function DropDownContent() {
    _classCallCheck(this, DropDownContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropDownContent).apply(this, arguments));
  }

  _createClass(DropDownContent, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          className = _this$props3.className,
          style = _this$props3.style,
          rest = _objectWithoutProperties(_this$props3, ["children", "className", "style"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, rest, {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("dropdown__content", className),
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_3__["E"])({
          padding: 10,
          background: "rgba(0,0,0,.7)",
          borderRadius: "0 0 0 5px"
        }, style)
      }), children);
    }
  }]);

  return DropDownContent;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vextensions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





Object(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["AddGlobalStyle"])("\n.Grid_WithSingleItem > * { grid-area: 1/1/1/1; }\n");

var Grid =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Grid, _BaseComponent);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, _getPrototypeOf(Grid).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          single = _this$props.single,
          centerY = _this$props.centerY,
          className = _this$props.className,
          style = _this$props.style,
          rest = _objectWithoutProperties(_this$props, ["single", "centerY", "className", "style"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, rest, {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, single && "Grid_WithSingleItem"),
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_3__["E"])({
          display: "grid"
        }, centerY && {
          alignItems: "center"
        }, style)
      }));
    }
  }]);

  return Grid;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

Grid = __decorate([react_vextensions__WEBPACK_IMPORTED_MODULE_1__["ApplyBasicStyles"]], Grid);


/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown_OptionUI", function() { return Dropdown_OptionUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBar_OptionUI", function() { return ButtonBar_OptionUI; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vextensions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Select_1;




var Select = Select_1 =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Select, _BaseComponent);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, _getPrototypeOf(Select).apply(this, arguments));
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
    } //GetIndexForValue(value) { return this.FlattenedChildren.FindIndex(a=>a.props.value == value); }

  }, {
    key: "GetSelectedOption",
    value: function GetSelectedOption() {
      Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["Assert"])(this.props.displayType == "dropdown");
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
      var _this = this;

      var _this$props = this.props,
          displayType = _this$props.displayType,
          value = _this$props.value,
          verifyValue = _this$props.verifyValue,
          enabled = _this$props.enabled,
          className = _this$props.className,
          title = _this$props.title,
          style = _this$props.style,
          childStyle = _this$props.childStyle,
          _onChange = _this$props.onChange;
      var options = this.OptionsList;
      var valueValid = this.GetIndexOfValue(value) != -1; // if there are no options yet, or value provided is null, don't require match, since this may be a pre-data render

      if (options.length && value != null && verifyValue) {
        Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["AssertWarn"])(valueValid, "Select's value must match one of the options. @options(".concat(options.map(function (a) {
          return a.name + ":" + a.value;
        }).join(", "), ") @value(").concat(value, ")"));
      }
      /*var newChildren = this.FlattenedChildren.map((child: any, index)=> {
          //return React.cloneElement(child, {key: index, index: index});
          return <Option key={index} index={index} style={child.props.style}>{child.props.children}</Option>;
      });*/


      if (displayType == "dropdown") {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
          ref: function ref(c) {
            return _this.root = c;
          },
          disabled: enabled == false,
          value: "value" + this.GetIndexOfValue(value),
          className: className,
          title: title,
          style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["E"])({
            color: "#000"
          }, style),
          onChange: function onChange(e) {
            return _onChange && _onChange(_this.GetSelectedValue());
          }
        }, options.map(function (option, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown_OptionUI, {
            key: index,
            index: index,
            style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["E"])(childStyle, option.style)
          }, option.name);
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["E"])({
          /*borderRadius: 4, background: "rgba(255,255,255,.3)"*/
        }, style)
      }, options.map(function (option, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonBar_OptionUI, {
          key: index,
          first: index == 0,
          last: index == options.length - 1,
          selected: option.value === value,
          style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["E"])(childStyle, option.style),
          onSelect: function onSelect(e) {
            return _onChange && _onChange(option.value);
          }
        }, option.name);
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
      Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["Assert"])(Object(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["RemoveDuplicates"])(options.map(function (a) {
        return a.name;
      })).length == options.length, function () {
        var optionsWithNonUniqueNames = options.filter(function (a) {
          return options.filter(function (b) {
            return b.name == a.name;
          }).length > 1;
        });
        return "Select options must have unique names. (shared: ".concat(optionsWithNonUniqueNames.map(function (a) {
          return a.name;
        }).join(", "), ")");
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
              result.push({
                name: option_raw["name"] || option_raw.toString(),
                value: option_raw
              });
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      /*else if (IsConstructor(options_raw)) {
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
              result.push({
                name: name,
                value: value
              });
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
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
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

Select.defaultProps = {
  displayType: "dropdown",
  compareBy: "value",
  verifyValue: true
};
Select = Select_1 = __decorate([react_vextensions__WEBPACK_IMPORTED_MODULE_1__["ApplyBasicStyles"]], Select);

var Dropdown_OptionUI =
/*#__PURE__*/
function (_BaseComponent2) {
  _inherits(Dropdown_OptionUI, _BaseComponent2);

  function Dropdown_OptionUI() {
    _classCallCheck(this, Dropdown_OptionUI);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dropdown_OptionUI).apply(this, arguments));
  }

  _createClass(Dropdown_OptionUI, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          index = _this$props2.index,
          style = _this$props2.style,
          children = _this$props2.children;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "value".concat(index),
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["E"])({
          color: "#000"
        }, style)
      }, children);
    }
  }]);

  return Dropdown_OptionUI;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);
var ButtonBar_OptionUI =
/*#__PURE__*/
function (_BaseComponent3) {
  _inherits(ButtonBar_OptionUI, _BaseComponent3);

  function ButtonBar_OptionUI() {
    _classCallCheck(this, ButtonBar_OptionUI);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonBar_OptionUI).apply(this, arguments));
  }

  _createClass(ButtonBar_OptionUI, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          first = _this$props3.first,
          last = _this$props3.last,
          selected = _this$props3.selected,
          style = _this$props3.style,
          children = _this$props3.children,
          onSelect = _this$props3.onSelect;
      var hovered = this.state.hovered;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ButtonBar_OptionUI",
        onMouseEnter: function onMouseEnter() {
          return _this2.SetState({
            hovered: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.SetState({
            hovered: false
          });
        },
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["E"])({
          display: "inline-block",
          background: "rgba(255,255,255,.3)",
          padding: "5px 12px",
          cursor: "pointer"
        }, hovered && {
          background: "rgba(255,255,255,.5)"
        }, first && {
          borderRadius: "4px 0 0 4px"
        }, !first && {
          border: "solid #222",
          borderWidth: "0 0 0 1px"
        }, last && {
          borderRadius: "0 4px 4px 0"
        }, first && last && {
          borderRadius: "4px"
        }, selected && {
          background: "rgba(255,255,255,.5)"
        }, style),
        onClick: onSelect
      }, children);
    }
  }]);

  return ButtonBar_OptionUI;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vextensions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var keycode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var keycode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(keycode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Spinner =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Spinner, _BaseComponent);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, _getPrototypeOf(Spinner).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          step = _this$props.step,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value,
          enabled = _this$props.enabled,
          title = _this$props.title,
          autoSize = _this$props.autoSize,
          style = _this$props.style,
          delayChangeTillDefocus = _this$props.delayChangeTillDefocus,
          useEscape = _this$props.useEscape,
          _onChange = _this$props.onChange,
          _onBlur = _this$props.onBlur,
          _onKeyDown = _this$props.onKeyDown,
          rest = _objectWithoutProperties(_this$props, ["step", "min", "max", "value", "enabled", "title", "autoSize", "style", "delayChangeTillDefocus", "useEscape", "onChange", "onBlur", "onKeyDown"]);

      var editedValue = this.state.editedValue;
      style = Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_3__["E"])({
        color: "#000"
      }, style); //if (max == Number.MAX_SAFE_INTEGER && !("width" in style)) {

      if (!autoSize && !("width" in style)) {
        style.width = 60;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", Object.assign({}, rest, {
        ref: function ref(c) {
          return _this.root = c;
        },
        type: "number",
        step: step,
        min: min,
        max: max,
        value: editedValue != null ? editedValue : value || 0,
        disabled: !enabled,
        title: title,
        style: style,
        onChange: function onChange(e) {
          var newVal = Number(e.target.value);
          if (newVal == editedValue) return; // if no change, ignore event

          if (delayChangeTillDefocus) {
            _this.SetState({
              editedValue: newVal
            });
          } else {
            if (_onChange) _onChange(newVal, e);

            _this.SetState({
              editedValue: null
            });
          }
        },
        onBlur: function onBlur(e) {
          var newVal = Number(e.target.value);
          if (newVal == value) return; // if no change, ignore event

          if (delayChangeTillDefocus) {
            if (_onChange) _onChange(newVal, e);

            _this.SetState({
              editedValue: null
            });
          }

          if (_onBlur) return _onBlur(e);
        },
        onKeyDown: function onKeyDown(e) {
          if (delayChangeTillDefocus && useEscape && e.keyCode == keycode__WEBPACK_IMPORTED_MODULE_2___default.a.codes.esc) return void _this.SetState({
            editedValue: null
          });
          if (_onKeyDown) return _onKeyDown(e);
        }
      }));
    }
  }]);

  return Spinner;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

Spinner.defaultProps = {
  step: 1,
  min: 0,
  max: Number.MAX_SAFE_INTEGER,
  value: 0,
  enabled: true,
  useEscape: true
};
Spinner = __decorate([react_vextensions__WEBPACK_IMPORTED_MODULE_1__["ApplyBasicStyles"]], Spinner);

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
/* 17 */
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_vextensions__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Switch =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Switch, _BaseComponent);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _getPrototypeOf(Switch).apply(this, arguments));
  }

  _createClass(Switch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          preferLater = _this$props.preferLater,
          children = _this$props.children;
      var existentChildren = this.FlattenedChildren.filter(function (a) {
        return !!a;
      });
      return preferLater ? existentChildren[existentChildren.length - 1] : existentChildren[0];
    }
  }]);

  return Switch;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]);
Switch.defaultProps = {
  preferLater: true
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vextensions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Text =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Text, _BaseComponent);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, _getPrototypeOf(Text).apply(this, arguments));
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          wrap = _this$props.wrap,
          style = _this$props.style,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["wrap", "style", "children"]);

      var textStr = Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["ReactChildrenAsText"])(children, "");
      var textHasEdgeSpaces = textStr.startsWith(" ") || textStr.endsWith(" "); // if text starts/ends with a space, apply "pre" by default, since otherwise the space gets trimmed

      var applyPre = wrap == false || wrap != true && textHasEdgeSpaces;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", Object.assign({}, rest, {
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["E"])({
          display: "flex",
          alignItems: "center"
        }, applyPre && {
          whiteSpace: "pre"
        }, style)
      }), children);
    }
  }]);

  return Text;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

Text = __decorate([react_vextensions__WEBPACK_IMPORTED_MODULE_1__["ApplyBasicStyles"]], Text);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vextensions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var keycode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var keycode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(keycode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
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
Object(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["AddGlobalStyle"])("\n.autoSize_minHeight {\n\theight: unset !important;\n}\n"); // Note: Where possible, use something like "React.TextareaHTMLAttributes<HTMLTextAreaElement>". For the rest (eg. HTMLDivElement), use eg. "React.HTMLAttributes<HTMLDivElement>"

var TextArea =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(TextArea, _BaseComponent);

  function TextArea() {
    _classCallCheck(this, TextArea);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextArea).apply(this, arguments));
  }

  _createClass(TextArea, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          enabled = _this$props.enabled,
          editable = _this$props.editable,
          className = _this$props.className,
          style = _this$props.style,
          pattern = _this$props.pattern,
          _onChange = _this$props.onChange,
          delayChangeTillDefocus = _this$props.delayChangeTillDefocus,
          useEscape = _this$props.useEscape,
          autoSize = _this$props.autoSize,
          autoSize_minHeight = _this$props.autoSize_minHeight,
          allowLineBreaks = _this$props.allowLineBreaks,
          _onKeyDown = _this$props.onKeyDown,
          rest = _objectWithoutProperties(_this$props, ["value", "defaultValue", "enabled", "editable", "className", "style", "pattern", "onChange", "delayChangeTillDefocus", "useEscape", "autoSize", "autoSize_minHeight", "allowLineBreaks", "onKeyDown"]);

      var _this$state = this.state,
          editedValue = _this$state.editedValue,
          minHeight = _this$state.minHeight; // if defaultValue is not specified, assume we're using value; then, if we see value is null, set to "" instead, so it clears any stale content

      if (defaultValue === undefined && value == null) value = ""; //let Comp = autoSize ? TextAreaAutoSize : "textarea";
      //let Comp: React.HTMLFactory<HTMLTextAreaElement> = autoSize ? TextAreaAutoSize : "textarea";

      var Comp = autoSize ? react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"] : "textarea";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, Object.assign({}, rest, {
        ref: function ref(c) {
          return _this.root = c;
        },
        disabled: enabled == false,
        readOnly: !editable,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("simpleText selectable", className, autoSize_minHeight && "autoSize_minHeight"),
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_5__["E"])(styles.root, autoSize && {
          resize: "none",
          overflow: "hidden"
        }, autoSize_minHeight && minHeight != null && {
          minHeight: minHeight
        }, style)
      }, autoSize_minHeight && {
        onHeightChange: function onHeightChange(height) {
          if (autoSize_minHeight) {
            _this.SetState({
              minHeight: height
            });
          }
        }
      }, {
        value: editedValue != null ? editedValue : value,
        defaultValue: defaultValue,
        onChange: function onChange(e) {
          var newVal = e.target.value;
          if (!allowLineBreaks) newVal = newVal.replace(/[\r\n]/g, "");
          if (newVal == editedValue) return; // if no text change, ignore event

          if (pattern) {
            var valid = newVal.match(pattern) != null;

            if (_this.DOM && _this.DOM["setCustomValidity"]) {
              _this.DOM["setCustomValidity"](valid ? "" : "Please match the requested format.");
            }
          }

          if (delayChangeTillDefocus) {
            _this.SetState({
              editedValue: newVal
            });
          } else {
            if (_onChange) _onChange(newVal, e);

            _this.SetState({
              editedValue: null
            });
          }
        },
        onBlur: function onBlur(e) {
          var newVal = e.target.value;
          if (newVal == value) return; // if no text change, ignore event

          if (delayChangeTillDefocus) {
            if (_onChange) _onChange(newVal, e);

            _this.SetState({
              editedValue: null
            });
          }
        },
        onKeyDown: function onKeyDown(e) {
          if (delayChangeTillDefocus && useEscape && e.keyCode == keycode__WEBPACK_IMPORTED_MODULE_3__["codes"].esc) return void _this.SetState({
            editedValue: null
          });
          if (_onKeyDown) return _onKeyDown(e);
        }
      }));
    }
  }]);

  return TextArea;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

TextArea.defaultProps = {
  editable: true,
  allowLineBreaks: true,
  useEscape: true
};
TextArea = __decorate([react_vextensions__WEBPACK_IMPORTED_MODULE_1__["ApplyBasicStyles"]], TextArea);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
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
  module.exports = __webpack_require__(27)(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(28);

var ReactPropTypesSecret = __webpack_require__(29);
var checkPropTypes = __webpack_require__(30);

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
/* 28 */
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
/* 29 */
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
/* 30 */
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
  var ReactPropTypesSecret = __webpack_require__(29);
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vextensions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var keycode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var keycode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(keycode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TextInput =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(TextInput, _BaseComponent);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextInput).apply(this, arguments));
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          value = _this$props.value,
          enabled = _this$props.enabled,
          editable = _this$props.editable,
          _onChange = _this$props.onChange,
          delayChangeTillDefocus = _this$props.delayChangeTillDefocus,
          useEscape = _this$props.useEscape,
          style = _this$props.style,
          _onBlur = _this$props.onBlur,
          _onKeyDown = _this$props.onKeyDown,
          rest = _objectWithoutProperties(_this$props, ["value", "enabled", "editable", "onChange", "delayChangeTillDefocus", "useEscape", "style", "onBlur", "onKeyDown"]);

      var editedValue = this.state.editedValue;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", Object.assign({}, rest, {
        ref: function ref(c) {
          return _this.root = c;
        },
        disabled: enabled == false,
        readOnly: !editable,
        style: Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_3__["E"])({
          color: "black"
        }, style),
        value: editedValue != null ? editedValue : value || "",
        onChange: function onChange(e) {
          var newVal = e.target.value;
          if (newVal == editedValue) return; // if no text change, ignore event

          if (delayChangeTillDefocus) {
            _this.SetState({
              editedValue: newVal
            });
          } else {
            if (_onChange) _onChange(newVal, e);

            _this.SetState({
              editedValue: null
            });
          }
        },
        onBlur: function onBlur(e) {
          var newVal = e.target["value"];
          if (newVal == value) return; // if no text change, ignore event

          if (delayChangeTillDefocus) {
            if (_onChange) _onChange(newVal, e);

            _this.SetState({
              editedValue: null
            });
          }

          if (_onBlur) return _onBlur(e);
        },
        onKeyDown: function onKeyDown(e) {
          if (delayChangeTillDefocus && useEscape && e.keyCode == keycode__WEBPACK_IMPORTED_MODULE_2__["codes"].esc) return void _this.SetState({
            editedValue: null
          });
          if (_onKeyDown) return _onKeyDown(e);
        }
      }));
    }
  }, {
    key: "GetValue",
    value: function GetValue() {
      return this.root.value;
    }
  }]);

  return TextInput;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

TextInput.defaultProps = {
  editable: true,
  type: "text",
  useEscape: true
};
TextInput = __decorate([react_vextensions__WEBPACK_IMPORTED_MODULE_1__["ApplyBasicStyles"]], TextInput);

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

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSpanInput", function() { return TimeSpanInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_vextensions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vextensions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var TimeSpanInput =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(TimeSpanInput, _BaseComponent);

  function TimeSpanInput() {
    _classCallCheck(this, TimeSpanInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(TimeSpanInput).apply(this, arguments));
  }

  _createClass(TimeSpanInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          smallUnit = _this$props.smallUnit,
          showUnits = _this$props.showUnits,
          value = _this$props.value,
          _onChange = _this$props.onChange,
          rest = _objectWithoutProperties(_this$props, ["smallUnit", "showUnits", "value", "onChange"]);

      var valueAbs = Math.abs(value);
      var unitLabels = showUnits ? {
        minutes: ["h", "m"],
        seconds: ["m", "s"]
      }[smallUnit] : ["", ""];
      var valueStr = null;

      if (value != null) {
        valueStr = "".concat(value < 0 ? "-" : "").concat(Math.floor(valueAbs / 60)).concat(unitLabels[0], ":").concat(valueAbs % 60).concat(unitLabels[1]);
      }

      var inputItself = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_3__["TextInput"], Object.assign({}, rest, {
        style: {
          width: 70
        },
        value: valueStr,
        onChange: function onChange(valStr) {
          var isNegative = valStr.includes("-");
          var strNoSign = isNegative ? valStr.replace(/-/g, "") : valStr; //const parts = strNoSign.includes(":") ? strNoSign.split(":") : [valStr, "0"];

          var parts = strNoSign.split(":").map(function (a) {
            return a.trim();
          });
          /*let bigUnits = ToNumber(parts[0], 0);
          let smallUnits = ToNumber(parts[1], 0);*/

          var totalSeconds = 0;
          parts.forEach(function (part, index) {
            var hasUnitLabel = "hms".split("").includes(part[part.length - 1]);
            var numberStr = hasUnitLabel ? part.slice(0, -1) : part;
            var unitLabel = hasUnitLabel ? part[part.length - 1] : unitLabels[index == 0 ? 0 : 1]; // if no unit specified, assume it's: bigUnit (if part 1), or smallUnit (if part 2+)

            var unitAsSeconds = unitLabel == "h" ? 1 * 60 * 60 : unitLabel == "m" ? 1 * 60 :
            /*unitLabel == "s" ?*/
            1;
            var valueAsSeconds = Object(_Internals_FromJSVE__WEBPACK_IMPORTED_MODULE_2__["ToNumber"])(numberStr) * unitAsSeconds;
            totalSeconds += valueAsSeconds;
          }); //const totalSmallUnits = Math.round(smallUnits + (bigUnits * 60)) * (isNegative ? -1 : 1);

          var totalSmallUnits = (smallUnit == "seconds" ? totalSeconds : totalSeconds / 60) * (isNegative ? -1 : 1);
          if (_onChange) _onChange(totalSmallUnits);
        }
      }));
      /*if (!showUnits) {
          return inputItself;
      }
      /*return (
          <Row style={{position: "relative"}}>
              {inputItself}
              <Row style={{position: "absolute", left: 0, bottom: 0, right: 0, height: 10, pointerEvents: "none"}}>
                  <div style={{flex: 1, fontSize: 11, textAlign: "center", color: "black"}}>{smallUnit == "seconds" ? "m" : "h"}</div>
                  <div style={{flex: 1, fontSize: 11, textAlign: "center", color: "black"}}>{smallUnit == "seconds" ? "s" : "m"}</div>
              </Row>
          </Row>
      );*#/
      return (
          <Row center>
              {inputItself}
              <Text ml={3} style={{fontSize: 12}}>{smallUnit == "minutes" ? "h:m" : "m:s"}</Text>
          </Row>
      );*/

      return inputItself;
    }
  }]);

  return TimeSpanInput;
}(react_vextensions__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);
TimeSpanInput.defaultProps = {
  smallUnit: "seconds",
  showUnits: true
};

/***/ })
/******/ ]);
});