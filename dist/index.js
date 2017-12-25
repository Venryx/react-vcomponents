(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _General = __webpack_require__(2);

	Object.defineProperty(exports, "FindDOM", {
	  enumerable: true,
	  get: function get() {
	    return _General.FindDOM;
	  }
	});
	Object.defineProperty(exports, "FindReact", {
	  enumerable: true,
	  get: function get() {
	    return _General.FindReact;
	  }
	});
	Object.defineProperty(exports, "GetInnerComp", {
	  enumerable: true,
	  get: function get() {
	    return _General.GetInnerComp;
	  }
	});
	Object.defineProperty(exports, "BasicStyles", {
	  enumerable: true,
	  get: function get() {
	    return _General.BasicStyles;
	  }
	});
	Object.defineProperty(exports, "ApplyBasicStyles", {
	  enumerable: true,
	  get: function get() {
	    return _General.ApplyBasicStyles;
	  }
	});
	Object.defineProperty(exports, "SimpleShouldUpdate", {
	  enumerable: true,
	  get: function get() {
	    return _General.SimpleShouldUpdate;
	  }
	});
	Object.defineProperty(exports, "SimpleShouldUpdate_Overridable", {
	  enumerable: true,
	  get: function get() {
	    return _General.SimpleShouldUpdate_Overridable;
	  }
	});
	Object.defineProperty(exports, "Instant", {
	  enumerable: true,
	  get: function get() {
	    return _General.Instant;
	  }
	});
	Object.defineProperty(exports, "ShallowEquals", {
	  enumerable: true,
	  get: function get() {
	    return _General.ShallowEquals;
	  }
	});
	Object.defineProperty(exports, "ShallowChanged", {
	  enumerable: true,
	  get: function get() {
	    return _General.ShallowChanged;
	  }
	});
	Object.defineProperty(exports, "AddGlobalElement", {
	  enumerable: true,
	  get: function get() {
	    return _General.AddGlobalElement;
	  }
	});
	Object.defineProperty(exports, "AddGlobalStyle", {
	  enumerable: true,
	  get: function get() {
	    return _General.AddGlobalStyle;
	  }
	});
	Object.defineProperty(exports, "HasSealedProps", {
	  enumerable: true,
	  get: function get() {
	    return _General.HasSealedProps;
	  }
	});
	Object.defineProperty(exports, "Sealed", {
	  enumerable: true,
	  get: function get() {
	    return _General.Sealed;
	  }
	});

	var _BaseComponent = __webpack_require__(8);

	Object.defineProperty(exports, "BaseComponent", {
	  enumerable: true,
	  get: function get() {
	    return _BaseComponent.BaseComponent;
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.basePropFullKeys = exports.ShallowCompare = undefined;
	exports.FindDOM = FindDOM;
	exports.FindReact = FindReact;
	exports.GetInnerComp = GetInnerComp;
	exports.BasicStyles = BasicStyles;
	exports.ApplyBasicStyles = ApplyBasicStyles;
	exports.SimpleShouldUpdate = SimpleShouldUpdate;
	exports.SimpleShouldUpdate_Overridable = SimpleShouldUpdate_Overridable;
	exports.Instant = Instant;
	exports.ShallowEquals = ShallowEquals;
	exports.ShallowChanged = ShallowChanged;
	exports.AddGlobalElement = AddGlobalElement;
	exports.AddGlobalStyle = AddGlobalStyle;
	exports.HasSealedProps = HasSealedProps;
	exports.Sealed = Sealed;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _shallowCompare = __webpack_require__(5);

	var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.ShallowCompare = _shallowCompare2.default;

	function G(entries) {
	    Object.assign(window, entries);
	}
	G({ E: E });
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
	    //return StyleSheet.create(result);
	}
	//var ReactInstanceMap = require("react/lib/ReactInstanceMap");
	G({ ShallowCompare: _shallowCompare2.default });
	G({ React: _react2.default, Text: Text });
	function FindDOM(comp) {
	    return _reactDom2.default.findDOMNode(comp);
	}
	;
	G({ FindDOM: FindDOM });
	/*declare var $;
	export function FindDOM_(comp) { return $(FindDOM(comp)) as JQuery; };
	G({FindDOM_});*/
	function FindReact(dom) {
	    for (var key in dom) {
	        if (key.startsWith("__reactInternalInstance$")) {
	            var compInternals = dom[key]._currentElement;
	            var compWrapper = compInternals._owner;
	            var comp = compWrapper._instance;
	            //return comp as React.Component<any, any>;
	            return comp;
	        }
	    }return null;
	}
	G({ FindReact: FindReact });
	// needed for wrapper-components that don't provide way of accessing inner-component
	function GetInnerComp(wrapperComp) {
	    return FindReact(FindDOM(wrapperComp));
	}
	G({ GetInnerComp: GetInnerComp });
	var basePropFullKeys = exports.basePropFullKeys = {
	    m: "margin", ml: "marginLeft", mr: "marginRight", mt: "marginTop", mb: "marginBottom",
	    mlr: null, mtb: null,
	    p: "padding", pl: "paddingLeft", pr: "paddingRight", pt: "paddingTop", pb: "paddingBottom",
	    plr: null, ptb: null,
	    sel: null,
	    ct: null,
	    tabLabel: null, active: null,
	    page: null, match: null,
	    firebase: null
	};
	function RemoveBasePropKeys(restObj) {
	    for (var key in basePropFullKeys) {
	        delete restObj[key];
	    }
	}
	function BasicStyles(props) {
	    var result = {};
	    for (var key in props) {
	        if (basePropFullKeys[key] != null) {
	            var fullKey = basePropFullKeys[key];
	            result[fullKey] = props[key];
	        } else if (key == "mlr") {
	            result.marginLeft = props[key];
	            result.marginRight = props[key];
	        } else if (key == "mtb") {
	            result.marginTop = props[key];
	            result.marginBottom = props[key];
	        } else if (key == "plr") {
	            result.paddingLeft = props[key];
	            result.paddingRight = props[key];
	        } else if (key == "ptb") {
	            result.paddingTop = props[key];
	            result.paddingBottom = props[key];
	        }
	    }
	    return result;
	}
	function ApplyBasicStyles(target) {
	    var oldRender = target.prototype.render;
	    target.prototype.render = function () {
	        var result = oldRender.call(this);
	        var props = this.props;
	        result.props.className = (0, _classnames2.default)({ selectable: props.sel, clickThrough: props.ct }, result.props.className);
	        result.props.style = E(BasicStyles(props), result.props.style);
	        RemoveBasePropKeys(result.props);
	        return result;
	    };
	}
	/*export function ApplyBasicStyles(target: React.ComponentClass<any>, funcName: string) {
	    let oldRender = target.prototype.render;
	    target.prototype.render = function() {
	        let result = oldRender.call(this) as JSX.Element;
	        result.props.style = E(BasicStyles(result.props), result.props.style);
	        RemoveBasePropKeys(result.props);
	        return result;
	    }
	}*/
	function SimpleShouldUpdate(target) {
	    target.prototype.shouldComponentUpdate = function (newProps, newState) {
	        /*if (ShallowCompare(this, newProps, newState))
	            Log("Changed: " + this.props.Props().Where(a=>a.value !== newProps[a.name]).Select(a=>a.name) + ";" + g.ToJSON(this.props) + ";" + g.ToJSON(newProps));*/
	        return (0, _shallowCompare2.default)(this, newProps, newState);
	    };
	}
	//export function SimpleShouldUpdate_Overridable(target: Component<{shouldUpdate: (newProps: React.Props<any>, newState: any)=>boolean}, {}>) {
	function SimpleShouldUpdate_Overridable(target) {
	    target.prototype.shouldComponentUpdate = function (newProps, newState) {
	        var shouldUpdate = newProps.shouldUpdate;

	        if (typeof shouldUpdate == "boolean") return shouldUpdate;
	        if (typeof shouldUpdate == "function") return shouldUpdate(newProps, newState);
	        return (0, _shallowCompare2.default)(this, newProps, newState);
	    };
	}
	// for PostRender() func
	function Instant(target, name) {
	    target[name].instant = true;
	}
	function ShallowEquals(objA, objB) {
	    if (objA === objB) return true;
	    var keysA = Object.keys(objA || {});
	    var keysB = Object.keys(objB || {});
	    if (keysA.length !== keysB.length) return false;
	    // Test for A's keys different from B.
	    var hasOwn = Object.prototype.hasOwnProperty;
	    for (var i = 0; i < keysA.length; i++) {
	        if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	            return false;
	        }
	        var valA = objA[keysA[i]];
	        var valB = objB[keysA[i]];
	        if (valA !== valB) return false;
	    }
	    return true;
	}
	G({ ShallowChanged: ShallowChanged });
	function ShallowChanged(objA, objB) {
	    for (var _len = arguments.length, propsToCompareMoreDeeply = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        propsToCompareMoreDeeply[_key - 2] = arguments[_key];
	    }

	    if (propsToCompareMoreDeeply.length) {
	        if (ShallowChanged(objA.Excluding.apply(objA, propsToCompareMoreDeeply), objB.Excluding.apply(objB, propsToCompareMoreDeeply))) {
	            return true;
	        }
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;

	        try {
	            for (var _iterator2 = propsToCompareMoreDeeply[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var key = _step2.value;

	                // for "children", shallow-compare at two levels deeper
	                if (key == "children") {
	                    var _iteratorNormalCompletion3 = true;
	                    var _didIteratorError3 = false;
	                    var _iteratorError3 = undefined;

	                    try {
	                        for (var _iterator3 = (objA.children || {}).VKeys().concat((objB.children || {}).VKeys())[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                            var childKey = _step3.value;

	                            if (ShallowChanged(objA.children[childKey], objB.children[childKey])) return true;
	                        }
	                    } catch (err) {
	                        _didIteratorError3 = true;
	                        _iteratorError3 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                                _iterator3.return();
	                            }
	                        } finally {
	                            if (_didIteratorError3) {
	                                throw _iteratorError3;
	                            }
	                        }
	                    }
	                } else {
	                    if (ShallowChanged(objA[key], objB[key])) return true;
	                }
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

	        return false;
	    }
	    return !ShallowEquals(objA, objB);
	}
	//require("./GlobalStyles");
	var loaded = false;
	function AddGlobalElement(html) {
	    /*$(()=> {
	        $(html).appendTo("#hidden_early");
	    });*/
	    var proceed = function proceed() {
	        loaded = true;
	        var nodeType = html.trim().substring(1, html.trim().IndexOfAny(" ", ">"));
	        var element = document.createElement(nodeType);
	        document.querySelector("#hidden_early").appendChild(element);
	        element.outerHTML = html;
	    };
	    if (loaded) proceed();else window.addEventListener("load", proceed);
	}
	;
	function AddGlobalStyle(str) {
	    AddGlobalElement("\n<style>\n" + str + "\n</style>\n\t");
	}
	;
	/*AddGlobalStyle(`
	*:not(.ignoreBaseCSS) {
	    color: rgba(255,255,255,.7);
	}
	`);*/
	/** Tunnels into Radium wrapper-class, and retrieves the original class, letting you access its static props. */
	/*export function PreRadium<T>(typeGetterFunc: ()=>T, setFunc: Function): T {
	    WaitXThenRun(0, ()=> {
	        debugger;
	        let type = typeGetterFunc() as any;
	        setFunc(type.DecoratedComponent);
	    });
	    return {} as any;
	}*/
	/*export function PreRadium<T>(_: T, wrapperClass: Function): T {
	    return (wrapperClass as any).DecoratedComponent;
	}*/
	/*export function GetErrorMessagesUnderElement(element: HTMLElement) {
	    return $(element).find(":invalid").ToList().map(node=>(node[0] as any).validationMessage || `Invalid value.`);
	    return element.querySelector(":invalid").ToList().map(node=>(node[0] as any).validationMessage || `Invalid value.`);
	}*/
	function HasSealedProps(target) {
	    var oldConstructor = target.constructor;
	    target.constructor = function () {
	        for (var key in target["prototype"]) {
	            var method = target["prototype"][key];
	            if (method.sealed && this[key] != method) {
	                throw new Error("Cannot override sealed method \"" + key + "\".");
	            }
	        }
	        return oldConstructor.apply(this, arguments);
	    };
	}
	function Sealed(target, key) {
	    target[key].sealed = true;
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var shallowEqual = __webpack_require__(6);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
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
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
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

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.BaseComponent = exports.RenderSource = exports.ShallowCompare = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactAutobind = __webpack_require__(9);

	var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

	var _shallowCompare = __webpack_require__(5);

	var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

	var _General = __webpack_require__(2);

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
	exports.ShallowCompare = _shallowCompare2.default;

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
	var RenderSource = exports.RenderSource = undefined;
	(function (RenderSource) {
	    RenderSource[RenderSource["Mount"] = 0] = "Mount";
	    RenderSource[RenderSource["PropChange"] = 1] = "PropChange";
	    RenderSource[RenderSource["SetState"] = 2] = "SetState";
	    RenderSource[RenderSource["Update"] = 3] = "Update";
	})(RenderSource || (exports.RenderSource = RenderSource = {}));
	var BaseComponent = BaseComponent_1 = function (_Component) {
	    _inherits(BaseComponent, _Component);

	    function BaseComponent(props) {
	        _classCallCheck(this, BaseComponent);

	        // helper for debugging
	        var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

	        _this.GetPropsChanged_lastProps = {};
	        _this.GetStateChanged_lastState = {};
	        _this.changeListeners = [];
	        _this.autoRemoveChangeListeners = true;
	        _this.mounted = false;
	        (0, _reactAutobind2.default)(_this);
	        // if had @Radium decorator, then "this" is actually an instance of a class-specific "RadiumEnhancer" derived-class
	        //		so reach in to original class, and set up auto-binding for its prototype members as well
	        if (_this.constructor.name == "RadiumEnhancer") (0, _reactAutobind2.default)(Object.getPrototypeOf(_this));
	        //this.state = this.state || this.defaultState || {} as any;
	        _this.state = _this.constructor["defaultState"] || {};
	        // if using PreRender, wrap render func
	        if (_this.PreRender != BaseComponent_1.prototype.PreRender) {
	            var oldRender = _this.render;
	            _this.render = function () {
	                this.PreRender();
	                return oldRender.apply(this, arguments);
	            };
	        }
	        // you know what, let's just always wrap the render() method, in this project; solves the annoying firebase-gobbling-errors issue
	        /*let oldRender = this.render;
	        this.render = function() {
	            try {
	                this.PreRender();
	                return oldRender.apply(this, arguments);
	            } catch (ex) {
	                debugger;
	                throw ex;
	            }
	        };*/
	        return _this;
	    }
	    //timers = [] as Timer[];


	    _createClass(BaseComponent, [{
	        key: "GetPropsChanged",
	        value: function GetPropsChanged() {
	            var _this2 = this;

	            var keys = RemoveDuplicates(Object.keys(this.props).concat(Object.keys(this.GetPropsChanged_lastProps)));
	            var result = keys.filter(function (key) {
	                return !Object.is(_this2.props[key], _this2.GetPropsChanged_lastProps[key]);
	            });
	            this.GetPropsChanged_lastProps = Object.assign({}, this.props);
	            return result;
	        }
	    }, {
	        key: "GetPropsChanged_Data",
	        value: function GetPropsChanged_Data() {
	            var _this3 = this;

	            return ToJSON(this.GetPropsChanged().reduce(function (result, key) {
	                return result[key] = _this3.props[key];
	            }, {}));
	        }
	    }, {
	        key: "GetStateChanged",
	        value: function GetStateChanged() {
	            var _this4 = this;

	            var keys = RemoveDuplicates(Object.keys(this.state).concat(Object.keys(this.GetStateChanged_lastState)));
	            var result = keys.filter(function (key) {
	                return !Object.is(_this4.state[key], _this4.GetStateChanged_lastState[key]);
	            });
	            this.GetStateChanged_lastState = Object.assign({}, this.state);
	            return result;
	        }
	    }, {
	        key: "GetStateChanged_Data",
	        value: function GetStateChanged_Data() {
	            var _this5 = this;

	            return ToJSON(this.GetStateChanged().reduce(function (result, key) {
	                return result[key] = _this5.state[key];
	            }, {}));
	        }
	    }, {
	        key: "forceUpdate",
	        value: function forceUpdate(_) {
	            //throw new Error("Do not call this. Call Update() instead.");
	        }
	    }, {
	        key: "Update",
	        value: function Update(postUpdate) {
	            //if (!this.Mounted) return;
	            this.lastRender_source = RenderSource.Update;
	            //this.forceUpdate(postUpdate);
	            _react.Component.prototype.forceUpdate.call(this, postUpdate);
	        }
	    }, {
	        key: "Clear",
	        value: function Clear(postClear) {
	            var oldRender = this.render;
	            this.render = function () {
	                var _this6 = this;

	                this.render = oldRender;
	                //WaitXThenRun(0, this.Update);
	                setTimeout(function () {
	                    return _this6.Update();
	                });
	                return _react2.default.createElement("div", null);
	            };
	            postClear();
	        }
	    }, {
	        key: "ClearThenUpdate",
	        value: function ClearThenUpdate() {
	            var _this7 = this;

	            //this.Clear(this.Update);
	            this.Clear(function () {
	                return _this7.Update();
	            });
	        }
	        /** Shortcut for "()=>(this.forceUpdate(), this.ComponentWillMountOrReceiveProps(props))". */

	    }, {
	        key: "UpdateAndReceive",
	        value: function UpdateAndReceive(props) {
	            var _this8 = this,
	                _arguments = arguments;

	            return function () {
	                //if (!this.Mounted) return;
	                //this.forceUpdate();
	                _react.Component.prototype.forceUpdate.apply(_this8, _arguments);
	                if (_this8.autoRemoveChangeListeners) _this8.RemoveChangeListeners();
	                _this8.ComponentWillMountOrReceiveProps(props);
	            };
	        }
	        //setState(_: ()=>"Do not call this. Call SetState() instead.") {
	        /*setState() {
	            throw new Error("Do not call this. Call SetState() instead.");
	        }*/

	    }, {
	        key: "setState",
	        value: function setState() {
	            return null;
	        }
	    }, {
	        key: "SetState",
	        value: function SetState(newState, callback) {
	            var _this9 = this;

	            var cancelIfStateSame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	            var deepCompare = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	            if (cancelIfStateSame) {
	                // we only care about new-state's keys -- setState() leaves unmentioned keys untouched
	                var oldState_forNewStateKeys = Object.keys(newState).reduce(function (result, a) {
	                    return result[a] = _this9.state[a];
	                }, {});
	                if (deepCompare) {
	                    if (ToJSON(newState) == ToJSON(oldState_forNewStateKeys)) return [];
	                } else {
	                    //if (ShallowEquals(newState, oldState_forNewStateKeys)) return [];
	                    // use a looser comparison (we want a missing prop to be equivalent to null and undefined)
	                    var same = true;
	                    var _iteratorNormalCompletion2 = true;
	                    var _didIteratorError2 = false;
	                    var _iteratorError2 = undefined;

	                    try {
	                        for (var _iterator2 = RemoveDuplicates(Object.keys(this.state).concat(Object.keys(newState)))[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                            var key = _step2.value;

	                            var valA = this.state[key];
	                            var valB = newState[key];
	                            if (valA == null && valB == null) continue;
	                            if (valA !== valB) {
	                                same = false;
	                                break;
	                            }
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

	                    if (same) return [];
	                }
	            }
	            this.lastRender_source = RenderSource.SetState;
	            //this.setState(newState as S, callback);
	            _react.Component.prototype.setState.apply(this, arguments);
	        }
	    }, {
	        key: "AddChangeListeners",
	        value: function AddChangeListeners(host) {
	            if (host == null) return; // maybe temp
	            /*host.extraMethods = funcs;
	            for (let func of funcs)
	                this.changeListeners.push({host: host, func: func});*/

	            for (var _len = arguments.length, funcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                funcs[_key - 1] = arguments[_key];
	            }

	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = funcs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var func = _step3.value;

	                    if (typeof func == "string") func = func.Func(this.Update);
	                    // if actual function, add it (else, ignore entry--it must have been a failed conditional)
	                    if (func instanceof Function) {
	                        //if (!host.HasExtraMethod(func)) {
	                        host.extraMethod = func;
	                        this.changeListeners.push({ host: host, func: func });
	                    }
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "RemoveChangeListeners",
	        value: function RemoveChangeListeners() {
	            //this.changeListeners = this.changeListeners || []; // temp fix for odd "is null" issue
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;

	            try {
	                for (var _iterator4 = this.changeListeners[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var changeListener = _step4.value;

	                    changeListener.host.removeExtraMethod = changeListener.func;
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }

	            this.changeListeners = [];
	        }
	    }, {
	        key: "RemoveChangeListenersFor",
	        value: function RemoveChangeListenersFor(host) {
	            var changeListenersToRemove = this.changeListeners.filter(function (a) {
	                return a.host == host;
	            });
	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;

	            try {
	                for (var _iterator5 = changeListenersToRemove[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var listener = _step5.value;

	                    listener.host.removeExtraMethod = listener.func;
	                    this.changeListeners.splice(this.changeListeners.indexOf(listener), 1);
	                }
	            } catch (err) {
	                _didIteratorError5 = true;
	                _iteratorError5 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                        _iterator5.return();
	                    }
	                } finally {
	                    if (_didIteratorError5) {
	                        throw _iteratorError5;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "ComponentWillMount",
	        value: function ComponentWillMount() {}
	    }, {
	        key: "ComponentWillMountOrReceiveProps",
	        value: function ComponentWillMountOrReceiveProps(newProps, forMount) {}
	    }, {
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            if (this.autoRemoveChangeListeners) this.RemoveChangeListeners();
	            this.ComponentWillMount();
	            this.ComponentWillMountOrReceiveProps(this.props, true);
	            this.lastRender_source = RenderSource.Mount;
	        }
	    }, {
	        key: "ComponentDidMount",
	        value: function ComponentDidMount() {}
	    }, {
	        key: "ComponentDidMountOrUpdate",
	        value: function ComponentDidMountOrUpdate(lastProps, lastState) {}
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.ComponentDidMount.apply(this, arguments);
	            this.ComponentDidMountOrUpdate(this.ComponentDidMountOrUpdate_lastProps, this.ComponentDidMountOrUpdate_lastState);
	            this.ComponentDidMountOrUpdate_lastProps = this.props;
	            this.ComponentDidMountOrUpdate_lastState = this.state;
	            /*let {Ref} = this.props;
	            if (Ref) Ref(this);*/
	            this.mounted = true;
	            this.CallPostRender();
	        }
	    }, {
	        key: "ComponentWillUnmount",
	        value: function ComponentWillUnmount() {}
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.ComponentWillUnmount();
	            /*for (let timer of this.timers) {
	                timer.Stop();
	            }
	            this.timers = [];*/
	            /*let {Ref} = this.props;
	            if (Ref) Ref(null);*/
	            this.mounted = false;
	        }
	    }, {
	        key: "ComponentWillReceiveProps",
	        value: function ComponentWillReceiveProps(newProps) {}
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(newProps) {
	            if (this.autoRemoveChangeListeners) this.RemoveChangeListeners();
	            this.ComponentWillReceiveProps(newProps);
	            this.ComponentWillMountOrReceiveProps(newProps, false);
	            this.lastRender_source = RenderSource.PropChange;
	        }
	    }, {
	        key: "ComponentDidUpdate",
	        value: function ComponentDidUpdate() {}
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate() {
	            this.ComponentDidUpdate.apply(this, arguments);
	            this.ComponentDidMountOrUpdate(this.ComponentDidMountOrUpdate_lastProps, this.ComponentDidMountOrUpdate_lastState);
	            this.ComponentDidMountOrUpdate_lastProps = this.props;
	            this.ComponentDidMountOrUpdate_lastState = this.state;
	            this.CallPostRender();
	        }
	    }, {
	        key: "CallPostRender",
	        value: function CallPostRender() {
	            var _this10 = this;

	            if (this.PostRender == BaseComponent_1.prototype.PostRender) return;
	            var renderSource = this.lastRender_source;
	            var ownPostRender = this.PostRender;
	            // can be different, for wrapped components (apparently they copy the inner type's PostRender as their own PostRender -- except as a new function, for some reason)
	            var prototypePostRender = this.constructor.prototype.PostRender;
	            if (ownPostRender.instant || prototypePostRender.instant) {
	                this.PostRender(renderSource);
	            } else {
	                /*if (QuickIncrement("PostRenderLog") <= 1)
	                    Log("Calling PostRender for: " + this.constructor.name + ";" + V.GetStackTraceStr());*/
	                //Log("Calling PostRender for: " + this.constructor.name);
	                setTimeout(function () {
	                    return window.requestAnimationFrame(function () {
	                        //WaitXThenRun(0, ()=>g.requestIdleCallback(()=> {
	                        if (!_this10.mounted) return;
	                        _this10.PostRender(renderSource);
	                    });
	                });
	                /*WaitXThenRun(0, ()=> {
	                    this.PostRender();
	                });*/
	            }
	        }
	    }, {
	        key: "PreRender",
	        value: function PreRender() {}
	    }, {
	        key: "PostRender",
	        value: function PostRender(source) {}
	    }, {
	        key: "DOM",
	        get: function get() {
	            return this.mounted ? (0, _General.FindDOM)(this) : null;
	        }
	        //get DOM_() { return this.mounted ? $(this.DOM) : null; }
	        // needed for wrapper-components that don't provide way of accessing inner-component
	        //get InnerComp() { return FindReact(this.DOM); }
	        // make all these optional, so fits Component type definition/shape

	    }, {
	        key: "FlattenedChildren",
	        get: function get() {
	            var children = children instanceof Array ? this.props.children : [this.props.children];
	            return _react2.default.Children.map(children.filter(function (a) {
	                return a;
	            }), function (a) {
	                return a;
	            });
	        }
	    }]);

	    return BaseComponent;
	}(_react.Component);
	__decorate([_General.Sealed], BaseComponent.prototype, "componentWillMount", null);
	__decorate([_General.Sealed], BaseComponent.prototype, "componentDidMount", null);
	__decorate([_General.Sealed], BaseComponent.prototype, "componentWillUnmount", null);
	__decorate([_General.Sealed], BaseComponent.prototype, "componentWillReceiveProps", null);
	__decorate([_General.Sealed], BaseComponent.prototype, "componentDidUpdate", null);
	exports.BaseComponent = BaseComponent = BaseComponent_1 = __decorate([_General.HasSealedProps], BaseComponent);
	exports.BaseComponent = BaseComponent;

	var BaseComponent_1;
	//G({Component2: Component, BaseComponent: Component});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);


/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = autoBind;
	var wontBind = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

	var toBind = [];

	function autoBind(context) {
	  if (context === undefined) {
	    console.error('Autobind error: No context provided.');
	    return;
	  }

	  var objPrototype = Object.getPrototypeOf(context);

	  if (arguments.length > 1) {
	    // If a list of methods to bind is provided, use it.
	    toBind = Array.prototype.slice.call(arguments, 1);
	  } else {
	    // If no list of methods to bind is provided, bind all available methods in class.
	    toBind = Object.getOwnPropertyNames(objPrototype);
	  }

	  toBind.forEach(function (method) {
	    var descriptor = Object.getOwnPropertyDescriptor(objPrototype, method);

	    if (descriptor === undefined) {
	      console.warn('Autobind: "' + method + '" method not found in class.');
	      return;
	    }

	    // Return if it's special case function or if not a function at all
	    if (wontBind.indexOf(method) !== -1 || typeof descriptor.value !== 'function') {
	      return;
	    }

	    Object.defineProperty(objPrototype, method, boundMethod(objPrototype, method, descriptor));
	  });
	}

	/**
	* From autobind-decorator (https://github.com/andreypopp/autobind-decorator/tree/master)
	* Return a descriptor removing the value and returning a getter
	* The getter will return a .bind version of the function
	* and memoize the result against a symbol on the instance
	*/
	function boundMethod(objPrototype, method, descriptor) {
	  var fn = descriptor.value;

	  return {
	    configurable: true,
	    get: function get() {
	      if (this === objPrototype || this.hasOwnProperty(method)) {
	        return fn;
	      }

	      var boundFn = fn.bind(this);
	      Object.defineProperty(this, method, {
	        value: boundFn,
	        configurable: true,
	        writable: true
	      });
	      return boundFn;
	    }
	  };
	}
	module.exports = exports['default'];


/***/ }
/******/ ])
});
;