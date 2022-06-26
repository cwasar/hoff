/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/default/custom.js":
/*!**********************************!*\
  !*** ./src/js/default/custom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n//меню каталога\n\nconsole.log('custom');\nvar catalog = document.querySelector('.header-catalog');\nvar cross = document.querySelector('.header-bottom-catalog-btn > span');\nvar subMenu = document.querySelector('#submenu');\nvar allMenu = Array.from(document.querySelectorAll('.submenu-item'));\nvar btnCatalog = document.querySelector('.header-bottom-catalog').addEventListener('click', function () {\n  catalog.classList.toggle('active');\n  cross.classList.toggle('active');\n  allMenu.forEach(function (item) {\n    if (item.dataset.name === document.querySelector('.header-catalog-main-item').dataset.name) {\n      item.classList.add('active');\n    } else {\n      item.classList.remove('active');\n    }\n  });\n});\nvar menu = document.querySelector('.header-catalog-main').addEventListener('mouseover', function (e) {\n  if (e.target.className === 'header-catalog-main-item') {\n    var allitems = document.querySelectorAll('.header-catalog-main-item');\n    allitems.forEach(function (item) {\n      item.classList.remove('active');\n    });\n    e.target.classList.add('active');\n    subMenu.innerHTML = e.target.innerText;\n    allMenu.forEach(function (item) {\n      if (item.dataset.name === e.target.dataset.name) {\n        item.classList.add('active');\n      } else {\n        item.classList.remove('active');\n      }\n    });\n  }\n}); //main-slider\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\".carousel\").slick({\n  dots: true\n}); //блок Идеи для вдохновения\n\nvar blocks = document.querySelector('.main-ideas-content-blocks');\nvar block = document.querySelector('.main-ideas-content-block');\nblocks.addEventListener('mouseover', showPin);\n\nfunction showPin(e) {\n  var w = block.offsetWidth;\n  var h = block.offsetHeight;\n\n  if (e.target.classList.contains('main-ideas-content-block-pin')) {\n    e.target.classList.add('active');\n    e.target.nextElementSibling.classList.add('active');\n    var pinH = e.target.style.top.substring(0, e.target.style.top.length - 1);\n    var pinW = e.target.style.left.substring(0, e.target.style.left.length - 1);\n\n    if (pinH < 50) {\n      e.target.nextElementSibling.style.top = +pinH + 1 + '%';\n    } else {\n      e.target.nextElementSibling.style.top = +pinH + 1 - e.target.nextElementSibling.offsetHeight * 100 / h + '%';\n    }\n\n    if (pinW < 50) {\n      e.target.nextElementSibling.style.left = +pinW + 1 + '%';\n    } else {\n      e.target.nextElementSibling.style.left = +pinW + 1 - e.target.nextElementSibling.offsetWidth * 100 / w + '%';\n    }\n  }\n\n  if (e.target.tagName === 'IMG') {\n    blocks.querySelectorAll('.active').forEach(function (item) {\n      item.classList.remove('active');\n    });\n  }\n} //фиксируем шапку при прокрутке и смещаем кнопку каталога\n\n\nconsole.log(window.pageYOffset);\nwindow.addEventListener('scroll', function () {\n  var header = document.querySelector('.header-center');\n  var srch = document.querySelector('.header-center-content-logo');\n  var btn = document.querySelector('.header-bottom-catalog-btn');\n  var back = document.querySelector('.header-bottom-catalog');\n\n  if (window.pageYOffset > 45) {\n    header.style.position = 'fixed';\n    header.style.width = '100%';\n    header.style.zIndex = 1000;\n    srch.after(btn);\n  } else {\n    header.style.position = 'relative';\n    back.prepend(btn);\n  }\n});\n\n//# sourceURL=webpack://hoff/./src/js/default/custom.js?");

/***/ }),

/***/ "./src/js/default/index.js":
/*!*********************************!*\
  !*** ./src/js/default/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ \"./node_modules/slick-carousel/slick/slick.js\");\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_default_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/default/index.css */ \"./src/styles/default/index.css\");\n/* harmony import */ var _styles_sass_index_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/sass/index.sass */ \"./src/styles/sass/index.sass\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom */ \"./src/js/default/custom.js\");\n/* harmony import */ var _assets_img_img_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/img/img.png */ \"./src/assets/img/img.png\");\n/* harmony import */ var _assets_img_logo_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/img/logo.jpg */ \"./src/assets/img/logo.jpg\");\n\n\n\n\n\n\n\n\nconsole.log('index');\n\n//# sourceURL=webpack://hoff/./src/js/default/index.js?");

/***/ }),

/***/ "./src/assets/img/img.png":
/*!********************************!*\
  !*** ./src/assets/img/img.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"3a7c30b24087697f552a62358a7f0fea.png\");\n\n//# sourceURL=webpack://hoff/./src/assets/img/img.png?");

/***/ }),

/***/ "./src/assets/img/logo.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/logo.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"f6acd6301d7fe89cf405105db60ea24c.jpg\");\n\n//# sourceURL=webpack://hoff/./src/assets/img/logo.jpg?");

/***/ }),

/***/ "./src/styles/sass/index.sass":
/*!************************************!*\
  !*** ./src/styles/sass/index.sass ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hoff/./src/styles/sass/index.sass?");

/***/ }),

/***/ "./src/styles/default/index.css":
/*!**************************************!*\
  !*** ./src/styles/default/index.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hoff/./src/styles/default/index.css?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhoff"] = self["webpackChunkhoff"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_bootstrap_dist_css_bootstrap_mi-65cef8"], () => (__webpack_require__("./node_modules/@babel/polyfill/lib/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_bootstrap_dist_css_bootstrap_mi-65cef8"], () => (__webpack_require__("./src/js/default/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;