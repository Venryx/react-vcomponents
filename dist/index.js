(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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

	var _Div = __webpack_require__(31);

	Object.keys(_Div).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Div[key];
	    }
	  });
	});

	var _Button = __webpack_require__(2);

	Object.keys(_Button).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Button[key];
	    }
	  });
	});

	var _Column = __webpack_require__(32);

	Object.keys(_Column).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Column[key];
	    }
	  });
	});

	var _DropDown = __webpack_require__(33);

	Object.keys(_DropDown).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _DropDown[key];
	    }
	  });
	});

	var _Row = __webpack_require__(35);

	Object.keys(_Row).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Row[key];
	    }
	  });
	});

	var _Select = __webpack_require__(36);

	Object.keys(_Select).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Select[key];
	    }
	  });
	});

	var _Spinner = __webpack_require__(37);

	Object.keys(_Spinner).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Spinner[key];
	    }
	  });
	});

	var _Switch = __webpack_require__(38);

	Object.keys(_Switch).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Switch[key];
	    }
	  });
	});

	var _TextArea = __webpack_require__(39);

	Object.keys(_TextArea).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _TextArea[key];
	    }
	  });
	});

	var _TextInput = __webpack_require__(50);

	Object.keys(_TextInput).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _TextInput[key];
	    }
	  });
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Button = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _reactVextensions = __webpack_require__(3);

	var _CSSPropertyOperations = __webpack_require__(6);

	var _General = __webpack_require__(30);

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
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
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
	/*AddGlobalStyle(`
	.Button:hover { background-color: rgba(90,100,110,.8) !important; }
	`);*/
	var pseudoSelectorStyleKeys = {};
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
	            var finalStyle = E(styles.root, useOpacityForHover && styles.root_opacityHover, { padding: padding }, (width || height) && {
	                padding: 0, width: width, height: height,
	                backgroundPosition: (width - iconSize) / 2 + "px " + (height - iconSize) / 2 + "px",
	                backgroundSize: iconSize
	            }, iconPath && { backgroundImage: "url(" + iconPath + ")" }, hasCheckbox && styles.root_hasCheckbox, !enabled && styles.root_disabled, style);
	            // experimental pseudo-selector-capable styling system
	            var pseudoSelectors = [":hover"];
	            var currentPseudoSelectorStyleKeys = [];
	            if (enabled) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = pseudoSelectors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var selector = _step.value;

	                        if (finalStyle[selector] == null) continue;
	                        var styleText = (0, _CSSPropertyOperations.createMarkupForStyles)(finalStyle[selector]);
	                        var styleKey = (0, _General.ToJSON)(selector + "---" + styleText); // get a unique identifier for this particular pseudo-style
	                        styleKey = styleKey.replace(/[^a-zA-Z0-9-]/g, ""); // make sure key is a valid class-name
	                        currentPseudoSelectorStyleKeys.push(styleKey);
	                        // if <style> element for the given style-composite has not been created yet, create it 
	                        if (pseudoSelectorStyleKeys[styleKey] == null) {
	                            pseudoSelectorStyleKeys[styleKey] = true;
	                            (0, _reactVextensions.AddGlobalStyle)("\n\t\t\t.Button." + styleKey + selector + " {\n\t\t\t\t" + styleText.replace(/([^ ]+?);/g, "$1 !important;") + "\n\t\t\t}\n\t\t\t\t\t\t\t");
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
	            }
	            return React.createElement("div", Object.assign({}, rest, { title: title, onClick: this.OnClick, className: "Button " + currentPseudoSelectorStyleKeys.join(" ") + " " + (className || ""), style: finalStyle }), hasCheckbox ? React.createElement("span", { style: { verticalAlign: 4 } }, text) : text, children);
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(4), __webpack_require__(5));
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

		module.exports = __webpack_require__(4);

	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		module.exports = __webpack_require__(5);

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

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var CSSProperty = __webpack_require__(8);
	var ExecutionEnvironment = __webpack_require__(9);
	var ReactInstrumentation = __webpack_require__(10);

	var camelizeStyleName = __webpack_require__(24);
	var dangerousStyleValue = __webpack_require__(26);
	var hyphenateStyleName = __webpack_require__(27);
	var memoizeStringOnly = __webpack_require__(29);
	var warning = __webpack_require__(13);

	var processStyleName = memoizeStringOnly(function (styleName) {
	  return hyphenateStyleName(styleName);
	});

	var hasShorthandPropertyBug = false;
	var styleFloatAccessor = 'cssFloat';
	if (ExecutionEnvironment.canUseDOM) {
	  var tempStyle = document.createElement('div').style;
	  try {
	    // IE8 throws "Invalid argument." if resetting shorthand style properties.
	    tempStyle.font = '';
	  } catch (e) {
	    hasShorthandPropertyBug = true;
	  }
	  // IE8 only supports accessing cssFloat (standard) as styleFloat
	  if (document.documentElement.style.cssFloat === undefined) {
	    styleFloatAccessor = 'styleFloat';
	  }
	}

	if (process.env.NODE_ENV !== 'production') {
	  // 'msTransform' is correct, but the other prefixes should be capitalized
	  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

	  // style values shouldn't contain a semicolon
	  var badStyleValueWithSemicolonPattern = /;\s*$/;

	  var warnedStyleNames = {};
	  var warnedStyleValues = {};
	  var warnedForNaNValue = false;

	  var warnHyphenatedStyleName = function (name, owner) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), checkRenderMessage(owner)) : void 0;
	  };

	  var warnBadVendoredStyleName = function (name, owner) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
	  };

	  var warnStyleValueWithSemicolon = function (name, value, owner) {
	    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	      return;
	    }

	    warnedStyleValues[value] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
	  };

	  var warnStyleValueIsNaN = function (name, value, owner) {
	    if (warnedForNaNValue) {
	      return;
	    }

	    warnedForNaNValue = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
	  };

	  var checkRenderMessage = function (owner) {
	    if (owner) {
	      var name = owner.getName();
	      if (name) {
	        return ' Check the render method of `' + name + '`.';
	      }
	    }
	    return '';
	  };

	  /**
	   * @param {string} name
	   * @param {*} value
	   * @param {ReactDOMComponent} component
	   */
	  var warnValidStyle = function (name, value, component) {
	    var owner;
	    if (component) {
	      owner = component._currentElement._owner;
	    }
	    if (name.indexOf('-') > -1) {
	      warnHyphenatedStyleName(name, owner);
	    } else if (badVendoredStyleNamePattern.test(name)) {
	      warnBadVendoredStyleName(name, owner);
	    } else if (badStyleValueWithSemicolonPattern.test(value)) {
	      warnStyleValueWithSemicolon(name, value, owner);
	    }

	    if (typeof value === 'number' && isNaN(value)) {
	      warnStyleValueIsNaN(name, value, owner);
	    }
	  };
	}

	/**
	 * Operations for dealing with CSS properties.
	 */
	var CSSPropertyOperations = {

	  /**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @param {ReactDOMComponent} component
	   * @return {?string}
	   */
	  createMarkupForStyles: function (styles, component) {
	    var serialized = '';
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      var styleValue = styles[styleName];
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styleValue, component);
	      }
	      if (styleValue != null) {
	        serialized += processStyleName(styleName) + ':';
	        serialized += dangerousStyleValue(styleName, styleValue, component) + ';';
	      }
	    }
	    return serialized || null;
	  },

	  /**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   * @param {ReactDOMComponent} component
	   */
	  setValueForStyles: function (node, styles, component) {
	    if (process.env.NODE_ENV !== 'production') {
	      ReactInstrumentation.debugTool.onHostOperation({
	        instanceID: component._debugID,
	        type: 'update styles',
	        payload: styles
	      });
	    }

	    var style = node.style;
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styles[styleName], component);
	      }
	      var styleValue = dangerousStyleValue(styleName, styles[styleName], component);
	      if (styleName === 'float' || styleName === 'cssFloat') {
	        styleName = styleFloatAccessor;
	      }
	      if (styleValue) {
	        style[styleName] = styleValue;
	      } else {
	        var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
	        if (expansion) {
	          // Shorthand property that IE8 won't like unsetting, so unset each
	          // component to placate it
	          for (var individualStyleName in expansion) {
	            style[individualStyleName] = '';
	          }
	        } else {
	          style[styleName] = '';
	        }
	      }
	    }
	  }

	};

	module.exports = CSSPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 8 */
/***/ function(module, exports) {

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

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */

	var isUnitlessNumber = {
	  animationIterationCount: true,
	  borderImageOutset: true,
	  borderImageSlice: true,
	  borderImageWidth: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  floodOpacity: true,
	  stopOpacity: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}

	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});

	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundAttachment: true,
	    backgroundColor: true,
	    backgroundImage: true,
	    backgroundPositionX: true,
	    backgroundPositionY: true,
	    backgroundRepeat: true
	  },
	  backgroundPosition: {
	    backgroundPositionX: true,
	    backgroundPositionY: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  },
	  outline: {
	    outlineWidth: true,
	    outlineStyle: true,
	    outlineColor: true
	  }
	};

	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};

	module.exports = CSSProperty;

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	// Trust the developer to only use ReactInstrumentation with a __DEV__ check

	var debugTool = null;

	if (process.env.NODE_ENV !== 'production') {
	  var ReactDebugTool = __webpack_require__(11);
	  debugTool = ReactDebugTool;
	}

	module.exports = { debugTool: debugTool };
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var ReactInvalidSetStateWarningHook = __webpack_require__(12);
	var ReactHostOperationHistoryHook = __webpack_require__(15);
	var ReactComponentTreeHook = __webpack_require__(16);
	var ExecutionEnvironment = __webpack_require__(9);

	var performanceNow = __webpack_require__(22);
	var warning = __webpack_require__(13);

	var hooks = [];
	var didHookThrowForEvent = {};

	function callHook(event, fn, context, arg1, arg2, arg3, arg4, arg5) {
	  try {
	    fn.call(context, arg1, arg2, arg3, arg4, arg5);
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' ? warning(didHookThrowForEvent[event], 'Exception thrown by hook while handling %s: %s', event, e + '\n' + e.stack) : void 0;
	    didHookThrowForEvent[event] = true;
	  }
	}

	function emitEvent(event, arg1, arg2, arg3, arg4, arg5) {
	  for (var i = 0; i < hooks.length; i++) {
	    var hook = hooks[i];
	    var fn = hook[event];
	    if (fn) {
	      callHook(event, fn, hook, arg1, arg2, arg3, arg4, arg5);
	    }
	  }
	}

	var isProfiling = false;
	var flushHistory = [];
	var lifeCycleTimerStack = [];
	var currentFlushNesting = 0;
	var currentFlushMeasurements = [];
	var currentFlushStartTime = 0;
	var currentTimerDebugID = null;
	var currentTimerStartTime = 0;
	var currentTimerNestedFlushDuration = 0;
	var currentTimerType = null;

	var lifeCycleTimerHasWarned = false;

	function clearHistory() {
	  ReactComponentTreeHook.purgeUnmountedComponents();
	  ReactHostOperationHistoryHook.clearHistory();
	}

	function getTreeSnapshot(registeredIDs) {
	  return registeredIDs.reduce(function (tree, id) {
	    var ownerID = ReactComponentTreeHook.getOwnerID(id);
	    var parentID = ReactComponentTreeHook.getParentID(id);
	    tree[id] = {
	      displayName: ReactComponentTreeHook.getDisplayName(id),
	      text: ReactComponentTreeHook.getText(id),
	      updateCount: ReactComponentTreeHook.getUpdateCount(id),
	      childIDs: ReactComponentTreeHook.getChildIDs(id),
	      // Text nodes don't have owners but this is close enough.
	      ownerID: ownerID || parentID && ReactComponentTreeHook.getOwnerID(parentID) || 0,
	      parentID: parentID
	    };
	    return tree;
	  }, {});
	}

	function resetMeasurements() {
	  var previousStartTime = currentFlushStartTime;
	  var previousMeasurements = currentFlushMeasurements;
	  var previousOperations = ReactHostOperationHistoryHook.getHistory();

	  if (currentFlushNesting === 0) {
	    currentFlushStartTime = 0;
	    currentFlushMeasurements = [];
	    clearHistory();
	    return;
	  }

	  if (previousMeasurements.length || previousOperations.length) {
	    var registeredIDs = ReactComponentTreeHook.getRegisteredIDs();
	    flushHistory.push({
	      duration: performanceNow() - previousStartTime,
	      measurements: previousMeasurements || [],
	      operations: previousOperations || [],
	      treeSnapshot: getTreeSnapshot(registeredIDs)
	    });
	  }

	  clearHistory();
	  currentFlushStartTime = performanceNow();
	  currentFlushMeasurements = [];
	}

	function checkDebugID(debugID) {
	  var allowRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  if (allowRoot && debugID === 0) {
	    return;
	  }
	  if (!debugID) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDebugTool: debugID may not be empty.') : void 0;
	  }
	}

	function beginLifeCycleTimer(debugID, timerType) {
	  if (currentFlushNesting === 0) {
	    return;
	  }
	  if (currentTimerType && !lifeCycleTimerHasWarned) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
	    lifeCycleTimerHasWarned = true;
	  }
	  currentTimerStartTime = performanceNow();
	  currentTimerNestedFlushDuration = 0;
	  currentTimerDebugID = debugID;
	  currentTimerType = timerType;
	}

	function endLifeCycleTimer(debugID, timerType) {
	  if (currentFlushNesting === 0) {
	    return;
	  }
	  if (currentTimerType !== timerType && !lifeCycleTimerHasWarned) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
	    lifeCycleTimerHasWarned = true;
	  }
	  if (isProfiling) {
	    currentFlushMeasurements.push({
	      timerType: timerType,
	      instanceID: debugID,
	      duration: performanceNow() - currentTimerStartTime - currentTimerNestedFlushDuration
	    });
	  }
	  currentTimerStartTime = 0;
	  currentTimerNestedFlushDuration = 0;
	  currentTimerDebugID = null;
	  currentTimerType = null;
	}

	function pauseCurrentLifeCycleTimer() {
	  var currentTimer = {
	    startTime: currentTimerStartTime,
	    nestedFlushStartTime: performanceNow(),
	    debugID: currentTimerDebugID,
	    timerType: currentTimerType
	  };
	  lifeCycleTimerStack.push(currentTimer);
	  currentTimerStartTime = 0;
	  currentTimerNestedFlushDuration = 0;
	  currentTimerDebugID = null;
	  currentTimerType = null;
	}

	function resumeCurrentLifeCycleTimer() {
	  var _lifeCycleTimerStack$ = lifeCycleTimerStack.pop(),
	      startTime = _lifeCycleTimerStack$.startTime,
	      nestedFlushStartTime = _lifeCycleTimerStack$.nestedFlushStartTime,
	      debugID = _lifeCycleTimerStack$.debugID,
	      timerType = _lifeCycleTimerStack$.timerType;

	  var nestedFlushDuration = performanceNow() - nestedFlushStartTime;
	  currentTimerStartTime = startTime;
	  currentTimerNestedFlushDuration += nestedFlushDuration;
	  currentTimerDebugID = debugID;
	  currentTimerType = timerType;
	}

	var lastMarkTimeStamp = 0;
	var canUsePerformanceMeasure =
	// $FlowFixMe https://github.com/facebook/flow/issues/2345
	typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';

	function shouldMark(debugID) {
	  if (!isProfiling || !canUsePerformanceMeasure) {
	    return false;
	  }
	  var element = ReactComponentTreeHook.getElement(debugID);
	  if (element == null || typeof element !== 'object') {
	    return false;
	  }
	  var isHostElement = typeof element.type === 'string';
	  if (isHostElement) {
	    return false;
	  }
	  return true;
	}

	function markBegin(debugID, markType) {
	  if (!shouldMark(debugID)) {
	    return;
	  }

	  var markName = debugID + '::' + markType;
	  lastMarkTimeStamp = performanceNow();
	  performance.mark(markName);
	}

	function markEnd(debugID, markType) {
	  if (!shouldMark(debugID)) {
	    return;
	  }

	  var markName = debugID + '::' + markType;
	  var displayName = ReactComponentTreeHook.getDisplayName(debugID) || 'Unknown';

	  // Chrome has an issue of dropping markers recorded too fast:
	  // https://bugs.chromium.org/p/chromium/issues/detail?id=640652
	  // To work around this, we will not report very small measurements.
	  // I determined the magic number by tweaking it back and forth.
	  // 0.05ms was enough to prevent the issue, but I set it to 0.1ms to be safe.
	  // When the bug is fixed, we can `measure()` unconditionally if we want to.
	  var timeStamp = performanceNow();
	  if (timeStamp - lastMarkTimeStamp > 0.1) {
	    var measurementName = displayName + ' [' + markType + ']';
	    performance.measure(measurementName, markName);
	  }

	  performance.clearMarks(markName);
	  performance.clearMeasures(measurementName);
	}

	var ReactDebugTool = {
	  addHook: function (hook) {
	    hooks.push(hook);
	  },
	  removeHook: function (hook) {
	    for (var i = 0; i < hooks.length; i++) {
	      if (hooks[i] === hook) {
	        hooks.splice(i, 1);
	        i--;
	      }
	    }
	  },
	  isProfiling: function () {
	    return isProfiling;
	  },
	  beginProfiling: function () {
	    if (isProfiling) {
	      return;
	    }

	    isProfiling = true;
	    flushHistory.length = 0;
	    resetMeasurements();
	    ReactDebugTool.addHook(ReactHostOperationHistoryHook);
	  },
	  endProfiling: function () {
	    if (!isProfiling) {
	      return;
	    }

	    isProfiling = false;
	    resetMeasurements();
	    ReactDebugTool.removeHook(ReactHostOperationHistoryHook);
	  },
	  getFlushHistory: function () {
	    return flushHistory;
	  },
	  onBeginFlush: function () {
	    currentFlushNesting++;
	    resetMeasurements();
	    pauseCurrentLifeCycleTimer();
	    emitEvent('onBeginFlush');
	  },
	  onEndFlush: function () {
	    resetMeasurements();
	    currentFlushNesting--;
	    resumeCurrentLifeCycleTimer();
	    emitEvent('onEndFlush');
	  },
	  onBeginLifeCycleTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    emitEvent('onBeginLifeCycleTimer', debugID, timerType);
	    markBegin(debugID, timerType);
	    beginLifeCycleTimer(debugID, timerType);
	  },
	  onEndLifeCycleTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    endLifeCycleTimer(debugID, timerType);
	    markEnd(debugID, timerType);
	    emitEvent('onEndLifeCycleTimer', debugID, timerType);
	  },
	  onBeginProcessingChildContext: function () {
	    emitEvent('onBeginProcessingChildContext');
	  },
	  onEndProcessingChildContext: function () {
	    emitEvent('onEndProcessingChildContext');
	  },
	  onHostOperation: function (operation) {
	    checkDebugID(operation.instanceID);
	    emitEvent('onHostOperation', operation);
	  },
	  onSetState: function () {
	    emitEvent('onSetState');
	  },
	  onSetChildren: function (debugID, childDebugIDs) {
	    checkDebugID(debugID);
	    childDebugIDs.forEach(checkDebugID);
	    emitEvent('onSetChildren', debugID, childDebugIDs);
	  },
	  onBeforeMountComponent: function (debugID, element, parentDebugID) {
	    checkDebugID(debugID);
	    checkDebugID(parentDebugID, true);
	    emitEvent('onBeforeMountComponent', debugID, element, parentDebugID);
	    markBegin(debugID, 'mount');
	  },
	  onMountComponent: function (debugID) {
	    checkDebugID(debugID);
	    markEnd(debugID, 'mount');
	    emitEvent('onMountComponent', debugID);
	  },
	  onBeforeUpdateComponent: function (debugID, element) {
	    checkDebugID(debugID);
	    emitEvent('onBeforeUpdateComponent', debugID, element);
	    markBegin(debugID, 'update');
	  },
	  onUpdateComponent: function (debugID) {
	    checkDebugID(debugID);
	    markEnd(debugID, 'update');
	    emitEvent('onUpdateComponent', debugID);
	  },
	  onBeforeUnmountComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onBeforeUnmountComponent', debugID);
	    markBegin(debugID, 'unmount');
	  },
	  onUnmountComponent: function (debugID) {
	    checkDebugID(debugID);
	    markEnd(debugID, 'unmount');
	    emitEvent('onUnmountComponent', debugID);
	  },
	  onTestEvent: function () {
	    emitEvent('onTestEvent');
	  }
	};

	// TODO remove these when RN/www gets updated
	ReactDebugTool.addDevtool = ReactDebugTool.addHook;
	ReactDebugTool.removeDevtool = ReactDebugTool.removeHook;

	ReactDebugTool.addHook(ReactInvalidSetStateWarningHook);
	ReactDebugTool.addHook(ReactComponentTreeHook);
	var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
	if (/[?&]react_perf\b/.test(url)) {
	  ReactDebugTool.beginProfiling();
	}

	module.exports = ReactDebugTool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var warning = __webpack_require__(13);

	if (process.env.NODE_ENV !== 'production') {
	  var processingChildContext = false;

	  var warnInvalidSetState = function () {
	    process.env.NODE_ENV !== 'production' ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
	  };
	}

	var ReactInvalidSetStateWarningHook = {
	  onBeginProcessingChildContext: function () {
	    processingChildContext = true;
	  },
	  onEndProcessingChildContext: function () {
	    processingChildContext = false;
	  },
	  onSetState: function () {
	    warnInvalidSetState();
	  }
	};

	module.exports = ReactInvalidSetStateWarningHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(14);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
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

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var history = [];

	var ReactHostOperationHistoryHook = {
	  onHostOperation: function (operation) {
	    history.push(operation);
	  },
	  clearHistory: function () {
	    if (ReactHostOperationHistoryHook._preventClearing) {
	      // Should only be used for tests.
	      return;
	    }

	    history = [];
	  },
	  getHistory: function () {
	    return history;
	  }
	};

	module.exports = ReactHostOperationHistoryHook;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(17);

	var ReactCurrentOwner = __webpack_require__(18);

	var invariant = __webpack_require__(19);
	var warning = __webpack_require__(20);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;

	if (canUseCollections) {
	  var itemMap = new Map();
	  var rootIDSet = new Set();

	  setItem = function (id, item) {
	    itemMap.set(id, item);
	  };
	  getItem = function (id) {
	    return itemMap.get(id);
	  };
	  removeItem = function (id) {
	    itemMap['delete'](id);
	  };
	  getItemIDs = function () {
	    return Array.from(itemMap.keys());
	  };

	  addRoot = function (id) {
	    rootIDSet.add(id);
	  };
	  removeRoot = function (id) {
	    rootIDSet['delete'](id);
	  };
	  getRootIDs = function () {
	    return Array.from(rootIDSet.keys());
	  };
	} else {
	  var itemByKey = {};
	  var rootByKey = {};

	  // Use non-numeric keys to prevent V8 performance issues:
	  // https://github.com/facebook/react/pull/7232
	  var getKeyFromID = function (id) {
	    return '.' + id;
	  };
	  var getIDFromKey = function (key) {
	    return parseInt(key.substr(1), 10);
	  };

	  setItem = function (id, item) {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  };
	  getItem = function (id) {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  };
	  removeItem = function (id) {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  };
	  getItemIDs = function () {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  };

	  addRoot = function (id) {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  };
	  removeRoot = function (id) {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  };
	  getRootIDs = function () {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  };
	}

	var unmountedIDs = [];

	function purgeDeep(id) {
	  var item = getItem(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    removeItem(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = getItem(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent id is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    var item = {
	      element: element,
	      parentID: parentID,
	      text: null,
	      childIDs: [],
	      isMounted: false,
	      updateCount: 0
	    };
	    setItem(id, item);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = getItem(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = getItem(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var name = getDisplayName(topElement);
	      var owner = topElement._owner;
	      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = getItem(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = getItem(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = getItem(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = getItem(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = getItem(id);
	    return item ? item.updateCount : 0;
	  },


	  getRootIDs: getRootIDs,
	  getRegisteredIDs: getItemIDs
	};

	module.exports = ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(21);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
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

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var performance = __webpack_require__(23);

	var performanceNow;

	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (performance.now) {
	  performanceNow = function performanceNow() {
	    return performance.now();
	  };
	} else {
	  performanceNow = function performanceNow() {
	    return Date.now();
	  };
	}

	module.exports = performanceNow;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	var performance;

	if (ExecutionEnvironment.canUseDOM) {
	  performance = window.performance || window.msPerformance || window.webkitPerformance;
	}

	module.exports = performance || {};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var camelize = __webpack_require__(25);

	var msPattern = /^-ms-/;

	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}

	module.exports = camelizeStyleName;

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var CSSProperty = __webpack_require__(8);
	var warning = __webpack_require__(13);

	var isUnitlessNumber = CSSProperty.isUnitlessNumber;
	var styleWarnings = {};

	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @param {ReactDOMComponent} component
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value, component) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901

	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }

	  var isNonNumeric = isNaN(value);
	  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	    return '' + value; // cast to string
	  }

	  if (typeof value === 'string') {
	    if (process.env.NODE_ENV !== 'production') {
	      // Allow '0' to pass through without warning. 0 is already special and
	      // doesn't require units, so we don't need to warn about it.
	      if (component && value !== '0') {
	        var owner = component._currentElement._owner;
	        var ownerName = owner ? owner.getName() : null;
	        if (ownerName && !styleWarnings[ownerName]) {
	          styleWarnings[ownerName] = {};
	        }
	        var warned = false;
	        if (ownerName) {
	          var warnings = styleWarnings[ownerName];
	          warned = warnings[name];
	          if (!warned) {
	            warnings[name] = true;
	          }
	        }
	        if (!warned) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
	        }
	      }
	    }
	    value = value.trim();
	  }
	  return value + 'px';
	}

	module.exports = dangerousStyleValue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var hyphenate = __webpack_require__(28);

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;

/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 */

	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}

	module.exports = memoizeStringOnly;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.E = E;
	exports.ToJSON = ToJSON;
	exports.FromJSON = FromJSON;
	exports.RemoveDuplicates = RemoveDuplicates;
	exports.Assert = Assert;
	exports.AssertWarn = AssertWarn;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function G(entries) {
	    Object.assign(window, entries);
	}
	G({ React: _react2.default });
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
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }

	    return result;
	}
	G({ Assert: Assert });
	function Assert(condition, messageOrMessageFunc) {
	    if (condition) return;
	    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
	    //console.log(`Assert failed) ${message}\n\nStackTrace) ${GetStackTraceStr()}`);
	    console.error("Assert failed) " + message);
	    debugger;
	    throw new Error("Assert failed) " + message);
	}
	G({ AssertWarn: AssertWarn });
	function AssertWarn(condition, messageOrMessageFunc) {
	    if (condition) return;
	    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
	    console.warn("Assert-warn failed) " + message + "\n\nStackTrace)"); // ${GetStackTraceStr()}`);
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Div = exports.Pre = exports.Span = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _reactVextensions = __webpack_require__(3);

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
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
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
	            return React.createElement("span", Object.assign({}, rest, { style: E(style, pre && { whiteSpace: "pre" }) }));
	        }
	    }]);

	    return Span;
	}(_reactVextensions.BaseComponent);
	exports.Span = Span = __decorate([Global,
	//@SimpleShouldUpdate_Overridable // we can't make these "pure", as their children may need updating

	_reactVextensions.ApplyBasicStyles], Span);
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
	            return React.createElement("span", Object.assign({}, rest, { style: E({ whiteSpace: allowWrap ? "pre-wrap" : "pre" }, style) }), children);
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
	            return React.createElement("div", Object.assign({}, rest, { style: style }));
	        }
	    }]);

	    return Div;
	}(_reactVextensions.BaseComponent);
	exports.Div = Div = __decorate([Global, _reactVextensions.ApplyBasicStyles], Div);
	exports.Div = Div;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Column = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _reactVextensions = __webpack_require__(3);

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
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
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
	                style = _a.style,
	                rest = __rest(_a, ["style"]);
	            return React.createElement("div", Object.assign({}, rest, { style: E({ display: "flex", flexDirection: "column", flexShrink: 0 }, style) }));
	        }
	    }]);

	    return Column;
	}(_reactVextensions.BaseComponent);
	exports.Column = Column = __decorate([_reactVextensions.ApplyBasicStyles], Column);
	exports.Column = Column;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DropDownContent = exports.DropDownTrigger = exports.DropDown = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _reactVextensions = __webpack_require__(3);

	var _classnames = __webpack_require__(34);

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
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
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
	            var dropdownElement = (0, _reactVextensions.FindDOM)(this);
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
	            var boundChildren = React.Children.map(children, function (child) {
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
	            return React.createElement("div", Object.assign({}, cleanProps, { className: (0, _classnames2.default)("dropdown", { "dropdown--active": active }, className) }), boundChildren);
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
	            return React.createElement("div", Object.assign({}, rest, { className: (0, _classnames2.default)("dropdown__trigger", className) }), children);
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
	            return React.createElement("div", Object.assign({}, rest, { className: (0, _classnames2.default)("dropdown__content", className), style: E({ padding: 10, background: "rgba(0,0,0,.7)", borderRadius: "0 0 0 5px" }, style) }), children);
	        }
	    }]);

	    return DropDownContent;
	}(_reactVextensions.BaseComponent);

/***/ },
/* 34 */
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RowLR = exports.Row = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _reactVextensions = __webpack_require__(3);

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
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
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
	                style = _a.style,
	                rest = __rest(_a, ["style"]);
	            return React.createElement("div", Object.assign({}, rest, { style: E({ display: "flex", alignItems: "center" }, style) }));
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
	            Assert(children.length == 2, "Row child-count must be 2. (one for left-side, one for right-side)");
	            return React.createElement("div", Object.assign({}, rest, { style: E({ display: "flex", flexShrink: 0 }, style) }), React.createElement("div", { style: E({ display: "flex", alignItems: "center" }, { width: typeof splitAt == "string" ? splitAt + "%" : splitAt }, leftStyle) }, children[0]), React.createElement("div", { style: E({ display: "flex", alignItems: "center" }, { width: typeof splitAt == "string" ? 100 - parseInt(splitAt.slice(0, -1)) + "%" : "calc(100% - " + splitAt + "px)" }, rightStyle) }, children[1]));
	        }
	    }]);

	    return RowLR;
	}(_reactVextensions.BaseComponent);
	RowLR.defaultProps = { splitAt: "50%" };
	exports.RowLR = RowLR = __decorate([_reactVextensions.ApplyBasicStyles], RowLR);
	exports.RowLR = RowLR;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ButtonBar_OptionUI = exports.Dropdown_OptionUI = exports.Select = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactVextensions = __webpack_require__(3);

	var _General = __webpack_require__(30);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*export class Option {
	    constructor(name, value, style?) {
	        this.name = name;
	        this.value = value;
	        this.style = style;
	    }
	    name;
	    value;
	    style;
	}*/
	var Select = exports.Select = function (_BaseComponent) {
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
	            Assert(this.props.displayType == "dropdown");
	            var selectedIndex = (0, _reactVextensions.FindDOM)(this.refs.root).selectedIndex;
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
	            Assert((0, _General.RemoveDuplicates)(options.map(function (a) {
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
	            var valueValid = this.GetIndexOfValue(value) != -1;
	            // if there are no options yet, or value provided is null, don't require match, since this may be a pre-data render
	            if (options.length && value != null && verifyValue) {
	                AssertWarn(valueValid, "Select's value must match one of the options. @options(" + options.map(function (a) {
	                    return a.name + ":" + a.value;
	                }).join(", ") + ") @value(" + value + ")");
	            }
	            /*var newChildren = this.FlattenedChildren.map((child: any, index)=> {
	                //return React.cloneElement(child, {key: index, index: index});
	                return <Option key={index} index={index} style={child.props.style}>{child.props.children}</Option>;
	            });*/
	            if (displayType == "dropdown") {
	                return React.createElement("select", { ref: "root", disabled: enabled == false, value: "value" + this.GetIndexOfValue(value), className: className, title: title, style: E({ color: "#000" }, style), onChange: function onChange(e) {
	                        return _onChange(_this2.GetSelectedValue());
	                    } }, options.map(function (option, index) {
	                    return React.createElement(Dropdown_OptionUI, { key: option.name, index: index, style: E(childStyle, option.style) }, option.name);
	                }));
	            }
	            return React.createElement("div", { style: E({}, style) }, options.map(function (option, index) {
	                return React.createElement(ButtonBar_OptionUI, { key: option.name, first: index == 0, last: index == options.length - 1, selected: option.value === value, style: E(childStyle, option.style), onSelect: function onSelect(e) {
	                        return _onChange(option.value);
	                    } }, option.name);
	            }));
	        }
	    }, {
	        key: "OptionsList",
	        get: function get() {
	            var options_raw = this.props.options;

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

	            return React.createElement("option", { value: "value" + index, style: E({ color: "#000" }, style) }, children);
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

	            return React.createElement("div", { className: "ButtonBar_OptionUI", onMouseEnter: function onMouseEnter() {
	                    return _this5.SetState({ hovered: true });
	                }, onMouseLeave: function onMouseLeave() {
	                    return _this5.SetState({ hovered: false });
	                }, style: E({ display: "inline-block", background: "rgba(255,255,255,.3)", padding: "5px 12px", cursor: "pointer" }, hovered && { background: "rgba(255,255,255,.5)" }, first && { borderRadius: "4px 0 0 4px" }, !first && { border: "solid #222", borderWidth: "0 0 0 1px" }, last && { borderRadius: "0 4px 4px 0" }, first && last && { borderRadius: "4px" }, selected && { background: "rgba(255,255,255,.5)" }, style), onClick: onSelect }, children);
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

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Spinner = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactVextensions = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Spinner = exports.Spinner = function (_BaseComponent) {
	    _inherits(Spinner, _BaseComponent);

	    function Spinner() {
	        _classCallCheck(this, Spinner);

	        return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
	    }

	    _createClass(Spinner, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props,
	                step = _props.step,
	                min = _props.min,
	                max = _props.max,
	                value = _props.value,
	                enabled = _props.enabled,
	                title = _props.title,
	                style = _props.style,
	                onChange = _props.onChange,
	                onFocus = _props.onFocus;

	            return React.createElement("input", { ref: "root", type: "number", step: step, min: min, max: max, value: value, disabled: !enabled, title: title, style: E({ color: "#000" }, style), onChange: this.OnChange, onFocus: onFocus });
	        }
	    }, {
	        key: "OnChange",
	        value: function OnChange(e) {
	            var onChange = this.props.onChange;

	            this.value = this.refs.root.value;
	            if (onChange) onChange(parseFloat(this.value), e);
	        }
	    }]);

	    return Spinner;
	}(_reactVextensions.BaseComponent);

	Spinner.defaultProps = { step: 1, min: 0, max: Number.MAX_SAFE_INTEGER, value: 0, enabled: true };
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

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Switch = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactVextensions = __webpack_require__(3);

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
	            var children = this.props.children;

	            var firstChild = children.find(function (a) {
	                return !!a;
	            });
	            return firstChild;
	        }
	    }]);

	    return Switch;
	}(_reactVextensions.BaseComponent);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TextArea_AutoSize = exports.TextArea = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactVextensions = __webpack_require__(3);

	var _reactTextareaAutosize = __webpack_require__(40);

	var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __rest = undefined && undefined.__rest || function (s, e) {
	    var t = {};
	    for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
	};

	var styles = {
	    root: {
	        margin: 0,
	        /*border: "1px solid #A9A9A9",*/
	        padding: "3 5",
	        border: "none",
	        //background: "url(/Main/Packages/Images/Tiling/Menu/Menu.png)",
	        //color: "#888",
	        cursor: "text",
	        resize: "none",
	        display: "inline-block",
	        boxSizing: "border-box",
	        whiteSpace: "pre",
	        wordWrap: "normal",
	        width: "100%"
	    },
	    root_disabled: {
	        /*background: "white",*/
	        opacity: .7,
	        cursor: "default"
	    }
	};

	var TextArea = exports.TextArea = function (_BaseComponent) {
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
	                editable = _a.editable,
	                className = _a.className,
	                style = _a.style,
	                _onChange = _a.onChange,
	                delayChangeTillDefocus = _a.delayChangeTillDefocus,
	                rest = __rest(_a, ["value", "defaultValue", "editable", "className", "style", "onChange", "delayChangeTillDefocus"]);var editedValue = this.state.editedValue;
	            // if defaultValue is not specified, assume we're using value; then, if we see value is null, set to "" instead, so it clears any stale content

	            if (defaultValue === undefined && value == null) value = "";
	            return React.createElement("textarea", Object.assign({}, rest, { ref: "root", readOnly: !editable, className: "simpleText selectable " + className, style: E(styles.root, style), value: editedValue != null ? editedValue : value, defaultValue: defaultValue, onChange: function onChange(e) {
	                    var newVal = e.target.value;
	                    if (delayChangeTillDefocus) {
	                        _this2.SetState({ editedValue: newVal });
	                    } else {
	                        _onChange(newVal, e);
	                        _this2.SetState({ editedValue: null });
	                    }
	                }, onBlur: function onBlur(e) {
	                    var newVal = e.target["value"];
	                    if (delayChangeTillDefocus && _onChange) {
	                        _onChange(newVal, e);
	                        _this2.SetState({ editedValue: null });
	                    }
	                } }));
	        }
	    }]);

	    return TextArea;
	}(_reactVextensions.BaseComponent);

	TextArea.defaultProps = {
	    editable: true
	};

	var TextArea_AutoSize = exports.TextArea_AutoSize = function (_BaseComponent2) {
	    _inherits(TextArea_AutoSize, _BaseComponent2);

	    function TextArea_AutoSize() {
	        _classCallCheck(this, TextArea_AutoSize);

	        return _possibleConstructorReturn(this, (TextArea_AutoSize.__proto__ || Object.getPrototypeOf(TextArea_AutoSize)).apply(this, arguments));
	    }

	    _createClass(TextArea_AutoSize, [{
	        key: "render",
	        value: function render() {
	            var _this4 = this;

	            var _a = this.props,
	                enabled = _a.enabled,
	                style = _a.style,
	                _onChange2 = _a.onChange,
	                rest = __rest(_a, ["enabled", "style", "onChange"]);
	            return React.createElement(_reactTextareaAutosize2.default, Object.assign({}, rest, { ref: "root", disabled: enabled == false, style: E({ resize: "none" }, style), onChange: function onChange(e) {
	                    return _onChange2(_this4.refs.root.value);
	                } }));
	        }
	    }]);

	    return TextArea_AutoSize;
	}(_reactVextensions.BaseComponent);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

	var React = _interopDefault(__webpack_require__(4));
	var PropTypes = _interopDefault(__webpack_require__(41));

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

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

	var isIE = isBrowser ? !!document.documentElement.currentStyle : false;
	var hiddenTextarea = isBrowser && document.createElement('textarea');
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
	  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function (key) {
	    hiddenTextarea.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], 'important');
	  });
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
	  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

	  if (minRows !== null || maxRows !== null) {
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
	  }

	  var rowCount = Math.floor(height / singleRowHeight);
	  return {
	    height: height,
	    minHeight: minHeight,
	    maxHeight: maxHeight,
	    rowCount: rowCount
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
	  var boxSizing = sizingStyle['box-sizing']; // IE (Edge has already correct behaviour) returns content width as computed width
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
	  return delete computedStyleCache[uid];
	};

	function autoInc(seed) {
	  if (seed === void 0) {
	    seed = 0;
	  }

	  return function () {
	    return ++seed;
	  };
	}

	var uid = autoInc();

	/**
	 * <TextareaAutosize />
	 */
	var noop = function noop() {}; // IE11 has a problem with eval source maps, can be reproduced with:
	// eval('"use strict"; var onNextFrame = window.cancelAnimationFrame; onNextFrame(4);')
	// so we bind window as context in dev modes


	var _ref = isBrowser && window.requestAnimationFrame ? process.env.NODE_ENV !== 'development' ? [window.requestAnimationFrame, window.cancelAnimationFrame] : [window.requestAnimationFrame.bind(window), window.cancelAnimationFrame.bind(window)] : [setTimeout, clearTimeout];
	var onNextFrame = _ref[0];
	var clearNextFrameAction = _ref[1];

	var TextareaAutosize =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(TextareaAutosize, _React$Component);

	  function TextareaAutosize(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this._resizeLock = false;

	    _this._onRootDOMNode = function (node) {
	      _this._rootDOMNode = node;

	      if (_this.props.inputRef) {
	        _this.props.inputRef(node);
	      }
	    };

	    _this._onChange = function (event) {
	      if (!_this._controlled) {
	        _this._resizeComponent();
	      }

	      _this.props.onChange(event);
	    };

	    _this._resizeComponent = function (callback) {
	      if (callback === void 0) {
	        callback = noop;
	      }

	      if (typeof _this._rootDOMNode === 'undefined') {
	        callback();
	        return;
	      }

	      var nodeHeight = calculateNodeHeight(_this._rootDOMNode, _this._uid, _this.props.useCacheForDOMMeasurements, _this.props.minRows, _this.props.maxRows);

	      if (nodeHeight === null) {
	        callback();
	        return;
	      }

	      var height = nodeHeight.height,
	          minHeight = nodeHeight.minHeight,
	          maxHeight = nodeHeight.maxHeight,
	          rowCount = nodeHeight.rowCount;
	      _this.rowCount = rowCount;

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
	    _this._uid = uid();
	    _this._controlled = typeof props.value === 'string';
	    return _this;
	  }

	  var _proto = TextareaAutosize.prototype;

	  _proto.render = function render() {
	    var _props = this.props,
	        _minRows = _props.minRows,
	        _maxRows = _props.maxRows,
	        _onHeightChange = _props.onHeightChange,
	        _useCacheForDOMMeasurements = _props.useCacheForDOMMeasurements,
	        _inputRef = _props.inputRef,
	        props = _objectWithoutProperties(_props, ["minRows", "maxRows", "onHeightChange", "useCacheForDOMMeasurements", "inputRef"]);
	    props.style = _extends({}, props.style, {
	      height: this.state.height
	    });
	    var maxHeight = Math.max(props.style.maxHeight || Infinity, this.state.maxHeight);

	    if (maxHeight < this.state.height) {
	      props.style.overflow = 'hidden';
	    }

	    return React.createElement("textarea", _extends({}, props, {
	      onChange: this._onChange,
	      ref: this._onRootDOMNode
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
	        return _this2._resizeLock = false;
	      });
	    };

	    window.addEventListener('resize', this._resizeListener);
	  };

	  _proto.componentWillReceiveProps = function componentWillReceiveProps() {
	    var _this3 = this;

	    this._clearNextFrame();

	    this._onNextFrameActionId = onNextFrame(function () {
	      return _this3._resizeComponent();
	    });
	  };

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
	    if (this.state.height !== prevState.height) {
	      this.props.onHeightChange(this.state.height, this);
	    }
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this._clearNextFrame();

	    window.removeEventListener('resize', this._resizeListener);
	    purgeCache(this._uid);
	  };

	  _proto._clearNextFrame = function _clearNextFrame() {
	    clearNextFrameAction(this._onNextFrameActionId);
	  };

	  return TextareaAutosize;
	}(React.Component);

	TextareaAutosize.propTypes = {
	  value: PropTypes.string,
	  onChange: PropTypes.func,
	  onHeightChange: PropTypes.func,
	  useCacheForDOMMeasurements: PropTypes.bool,
	  minRows: PropTypes.number,
	  maxRows: PropTypes.number,
	  inputRef: PropTypes.func
	};
	TextareaAutosize.defaultProps = {
	  onChange: noop,
	  onHeightChange: noop,
	  useCacheForDOMMeasurements: false
	};

	module.exports = TextareaAutosize;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
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
	  module.exports = __webpack_require__(42)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(49)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(43);
	var invariant = __webpack_require__(44);
	var warning = __webpack_require__(45);
	var assign = __webpack_require__(46);

	var ReactPropTypesSecret = __webpack_require__(47);
	var checkPropTypes = __webpack_require__(48);

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
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
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
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
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
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
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
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(43);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
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

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 46 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
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


/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(44);
	  var warning = __webpack_require__(45);
	  var ReactPropTypesSecret = __webpack_require__(47);
	  var loggedTypeFailures = {};
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
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(43);
	var invariant = __webpack_require__(44);
	var ReactPropTypesSecret = __webpack_require__(47);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TextInput = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactVextensions = __webpack_require__(3);

	var _keycode = __webpack_require__(51);

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
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
	};

	var TextInput = function (_BaseComponent) {
	    _inherits(TextInput, _BaseComponent);

	    function TextInput() {
	        _classCallCheck(this, TextInput);

	        return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
	    }

	    _createClass(TextInput, [{
	        key: "render",

	        /*ComponentWillReceiveProps(props) {
	            // if value changing, and "delayChangeTillDefocus" is not enabled
	            if (!props.delayChangeTillDefocus && props.value != this.props.value) {
	                this.SetState({editedValue: null});
	            }
	        }*/
	        value: function render() {
	            var _this2 = this;

	            var _a = this.props,
	                value = _a.value,
	                enabled = _a.enabled,
	                _onChange = _a.onChange,
	                _onKeyDown = _a.onKeyDown,
	                delayChangeTillDefocus = _a.delayChangeTillDefocus,
	                useEscape = _a.useEscape,
	                style = _a.style,
	                rest = __rest(_a, ["value", "enabled", "onChange", "onKeyDown", "delayChangeTillDefocus", "useEscape", "style"]);var editedValue = this.state.editedValue;

	            return _react2.default.createElement("input", Object.assign({}, rest, { ref: "root", disabled: enabled == false, style: E({ color: "black" }, style), value: editedValue != null ? editedValue : value || "", onChange: function onChange(e) {
	                    var newVal = e.target.value;
	                    if (delayChangeTillDefocus) {
	                        _this2.SetState({ editedValue: newVal });
	                    } else {
	                        _onChange(newVal, e);
	                        _this2.SetState({ editedValue: null });
	                    }
	                }, onBlur: function onBlur(e) {
	                    var newVal = e.target["value"];
	                    if (delayChangeTillDefocus && _onChange) {
	                        _onChange(newVal, e);
	                        _this2.SetState({ editedValue: null });
	                    }
	                }, onKeyDown: function onKeyDown(e) {
	                    if (useEscape && e.keyCode == keycode.codes.esc) return void _this2.SetState({ editedValue: null });
	                    if (_onKeyDown) return _onKeyDown(e);
	                } }));
	        }
	    }, {
	        key: "GetValue",
	        value: function GetValue() {
	            return this.refs.root.value;
	        }
	    }]);

	    return TextInput;
	}(_reactVextensions.BaseComponent);
	TextInput.defaultProps = { type: "text" };
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

/***/ },
/* 51 */
/***/ function(module, exports) {

	// Source: http://jsfiddle.net/vWx8V/
	// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

	/**
	 * Conenience method returns corresponding value for given keyName or keyCode.
	 *
	 * @param {Mixed} keyCode {Number} or keyName {String}
	 * @return {Mixed}
	 * @api public
	 */

	exports = module.exports = function(searchInput) {
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


/***/ }
/******/ ])
});
;