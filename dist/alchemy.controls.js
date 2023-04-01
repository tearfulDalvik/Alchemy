(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AlchemyUI"] = factory();
	else
		root["AlchemyUI"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/controls/_base.js":
/*!******************************!*\
  !*** ./js/controls/_base.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlchemyBase)
/* harmony export */ });
class AlchemyBase {
    constructor(alchemyCSS = null) {
        this._css = alchemyCSS;
    }

    css(className) {
        return this._css ? this._css[className] : className;
    }
}

/***/ }),

/***/ "./js/controls/alerts.js":
/*!*******************************!*\
  !*** ./js/controls/alerts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_base */ "./js/controls/_base.js");


class Alert extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(content, css=null) {
        super(css);
        this._content = content;
    }

    duration(duration) {
        this._duration = duration;
        return this;
    }
    
    icon(icon) {
        this._icon = icon;
        return this;
    }

    warn() {
        this._icon = this._icon || "fa-exclamation-circle";
        this._style = super.css('warn');
        this._show();
    }

    primary() {
        this._icon = this._icon || "fa-info-circle";
        this._style = null;
        this._show();
    }

    success() {
        this._icon = this._icon || "fa-check";
        this._style = super.css('success');
        this._show();
    }

    error() {
        this._icon = this._icon || "fa-times-octagon";
        this._style = super.css('error');
        this._show();
    }

    info() {
        this._icon = this._icon || "fa-info-circle";
        this._style = super.css('info');
        this._show();
    }
    
    _show() {
        if (!document.getElementById("alchemy-alerts")) {
            let container = document.createElement('div');
            container.id = "alchemy-alerts";
            container.className = super.css('alerts');
            document.body.prepend(container);
        }
        let newDiv = document.createElement("div");
        newDiv.classList.add(super.css('alert'));
        if (this._duration != null) {
            newDiv.classList.add(super.css('disappear'));
            if (this._duration != "") newDiv.classList.add(this._duration);
        }
        this._style && newDiv.classList.add(this._style);
        let i = document.createElement("i");
        i.classList.add('fad');
        i.classList.add(super.css('m-r-compat'));
        i.classList.add(this._icon);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);

/***/ }),

/***/ "./js/controls/spinner.js":
/*!********************************!*\
  !*** ./js/controls/spinner.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_base */ "./js/controls/_base.js");


class Spinner extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(css=null) {
        super(css);
    }

    start() {
        if (document.body.hasAttribute('alchemy-spin-scene')) {
            throw new Exception("This webapp has already started spining");
        }
        let scene = document.createElement('div');
        scene.classList.add(super.css("scene"));
        let div = document.createElement('div');
        div.classList.add(super.css("hero"));
        div.style.left = '50%';
        div.style.transform = "translate(-50%, -50%)";
        let spinner = document.createElement('span');
        spinner.classList.add(super.css('spinner'), super.css('low-profile'));
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./js/controls/tab.js":
/*!****************************!*\
  !*** ./js/controls/tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Tab {
    static attach(element) {
        if (!element || !element.classList.contains("tab")) {
            throw "This element has to be a tab.";
        }
        return new Tab(element);
    }

    constructor(element) {
        this.element = element;
        this.items = [];
        this.active = null;
        for (let i = 0; i < element.children.length; i++) {
            let item = element.children[i];
            if (item.classList.contains("item")) {
                if (item.hasAttribute("name")) {
                    this.items.push(item);
                    if (item.classList.contains("active")) {
                        this.active = item;
                    }
                    item.addEventListener("click", (() => {
                        this.select(item.getAttribute("name"));
                    }).bind(this));
                }
            }
        }
    }

    select(name) {
        if (this.active) {
            this.active.classList.remove("active");
            this.active = null;
        }
        let item = this.element.querySelector(`.item[name=${name}]`);
        if (item && this.items.indexOf(item) > -1) {
            item.classList.add("active");
            this.active = item;
        } else {
            throw "Item not found"
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./js/index.umd.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controls_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/spinner */ "./js/controls/spinner.js");
/* harmony import */ var _controls_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls/alerts */ "./js/controls/alerts.js");
/* harmony import */ var _controls_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/tab */ "./js/controls/tab.js");
/*eslint-env es6*/
/*!
 * Alchemy UI v1.0.0 (https://github.com/tearfulDalvik/Alchemy)
 * Copyright 2020 Gufeng Shen
 * Licensed under MIT (https://github.com/tearfulDalvik/Alchemy/blob/main/LICENSE)
 */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    Spinner: _controls_spinner__WEBPACK_IMPORTED_MODULE_0__["default"],
    Alert: _controls_alerts__WEBPACK_IMPORTED_MODULE_1__["default"],
    Tab: _controls_tab__WEBPACK_IMPORTED_MODULE_2__["default"],
});

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=alchemy.controls.js.map