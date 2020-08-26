(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AlchemyUI"] = factory();
	else
		root["AlchemyUI"] = factory();
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.umd.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/components/alerts.js":
/*!*********************************!*\
  !*** ./js/components/alerts.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Alert {
    constructor(content) {
        this._content = content;
    }

    duration(duration) {
        this._duration = duration;
    }
    
    icon(icon) {
        this._icon = icon;
    }

    warn() {
        this._style = 'warn';
        this._show();
    }

    primary() {
        this._style = 'primary';
        this._show();
    }

    success() {
        this._style = 'success';
        this._show();
    }

    error() {
        this._style = 'error';
        this._show();
    }

    info() {
        this._style = 'info';
        this._show();
    }
    
    _show() {
        if (!document.getElementById("alchemy-alerts")) {
            let container = document.createElement('div');
            container.id = "alchemy-alerts";
            container.className = "alerts";
            document.body.prepend(container);
        }
        let newDiv = document.createElement("div");
        newDiv.classList.add('alert');
        if (this._duration != null) {
            newDiv.classList.add('disappear');
            if (this._duration != "") newDiv.classList.add(this._duration);
        }
        newDiv.classList.add(this._style);
        let i = document.createElement("i");
        i.classList.add('fad');
        i.classList.add('m-r-compat');
        console.log(this._icon);
        i.classList.add(this._icon || 'fa-exclamation-circle');
        let newContent = document.createTextNode(this._content);
        newDiv.appendChild(i);
        newDiv.appendChild(newContent);
        document.getElementById("alchemy-alerts").appendChild(newDiv);
    }

    static dismissAll() {
        let container = document.getElementById("alchemy-alerts");
        container && document.body.removeChild(container);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ "./js/components/spinner.js":
/*!**********************************!*\
  !*** ./js/components/spinner.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Spinner {
    start() {
        if (document.body.hasAttribute('alchemy-spin-scene')) {
            throw new Exception("This webapp has already started spining");
        }
        let scene = document.createElement('div');
        scene.classList.add("scene");
        let div = document.createElement('div');
        div.classList.add("hero");
        div.style.left = '50%';
        div.style.transform = "translate(-50%, -50%)";
        let spinner = document.createElement('span');
        spinner.classList.add('spinner', 'low-profile');
        div.appendChild(spinner);
        scene.appendChild(div);
        document.body.appendChild(scene);
        document.body.setAttribute('alchemy-spin-scene', 'true');
        this.runningScene = scene;
    }

    stop() {
        document.body.removeChild(this.runningScene);
        document.body.removeAttribute("alchemy-spin-scene");
        delete this.runningScene;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./js/index.umd.js":
/*!*************************!*\
  !*** ./js/index.umd.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/spinner */ "./js/components/spinner.js");
/* harmony import */ var _components_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/alerts */ "./js/components/alerts.js");




/* harmony default export */ __webpack_exports__["default"] = ({
    Spinner: _components_spinner__WEBPACK_IMPORTED_MODULE_0__["default"],
    Alert: _components_alerts__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=alchemy.js.map