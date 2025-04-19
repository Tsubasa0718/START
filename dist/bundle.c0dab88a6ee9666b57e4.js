/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_hambuger.js":
/*!*****************************!*\
  !*** ./src/js/_hambuger.js ***!
  \*****************************/
/***/ (() => {

const Hamburger = document.getElementById('hamburger-menu');
const Nav = document.querySelector('.nav')

Hamburger.addEventListener('click',()=>{
  const Expanded = Hamburger.getAttribute('aria-expanded');
  if(Expanded === 'false'){
    Hamburger.setAttribute('aria-expanded', 'true')
    Hamburger.classList.add('is-active')
    Nav.setAttribute('aria-hidden', 'false')
    Nav.classList.add('is-active')
  } else{
    Hamburger.setAttribute('aria-expanded', 'false')
    Hamburger.classList.remove('is-active')
    Nav.setAttribute('aria-hidden', 'true');
    Nav.classList.remove('is-active')
  }
})

// 画面幅でaria属性の切替
const mediaQuery = window.matchMedia('(min-width: 992px)');

const AriaHandler = (e) =>{
  if(e.matches){
    Nav.setAttribute('aria-hidden', 'false')
    Hamburger.setAttribute('aria-expanded', 'false')
    Hamburger.setAttribute('aria-hidden', 'true')
  } else{
    Nav.setAttribute('aria-hidden', 'false')
    Hamburger.setAttribute('aria-expanded', 'false')
    Hamburger.setAttribute('aria-hidden', 'false')
  }
}

mediaQuery.addEventListener('change',AriaHandler);
AriaHandler(mediaQuery);

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _hambuger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hambuger.js */ "./src/js/_hambuger.js");
/* harmony import */ var _hambuger_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hambuger_js__WEBPACK_IMPORTED_MODULE_1__);
// scssファイル


// jsファイル

})();

/******/ })()
;
//# sourceMappingURL=bundle.c0dab88a6ee9666b57e4.js.map