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

/***/ "./src/conversion.js":
/*!***************************!*\
  !*** ./src/conversion.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertTimestamp\": () => (/* binding */ convertTimestamp),\n/* harmony export */   \"convertKelvin\": () => (/* binding */ convertKelvin),\n/* harmony export */   \"convertTemperature\": () => (/* binding */ convertTemperature)\n/* harmony export */ });\nfunction convertTimestamp(timestamp) {\n    return timestamp / 3600;\n}\n\nfunction convertKelvin(temperature) {\n    return parseInt(temperature - 273.15);\n}\n\nfunction convertTemperature(unit, degree) {\n    if (unit === 'fahrenheit') return parseInt((degree * 9) / 5 + 32);\n    else return parseInt(((degree - 32) * 5) / 9);\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/conversion.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayInfo\": () => (/* binding */ displayInfo),\n/* harmony export */   \"changeDegrees\": () => (/* binding */ changeDegrees)\n/* harmony export */ });\n/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ \"./src/conversion.js\");\n\n\nconst temperature = document.getElementById('degree');\n\nfunction displayInfo(response) {\n    if (handleNoValue(response) === false) return;\n    displayCity(response);\n    displayTime(response);\n    displayTemperature(response);\n    displayWeather(response);\n    displayWeatherIcon(response);\n}\n\nfunction displayCity({ name }) {\n    const city = document.getElementById('city');\n    city.innerText = name;\n}\n\nfunction displayTime({ timezone }) {\n    const time = document.getElementById('time');\n    const currentTime = new Date();\n    const currentHour = currentTime.getUTCHours() + (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.convertTimestamp)(timezone);\n    const currentMinute = currentTime.getUTCMinutes();\n\n    const currentHourConverted = currentHour > 12 ? currentHour - 12 : currentHour;\n    const clock = currentHour > 12 ? 'PM' : 'AM';\n    const minutes = currentMinute < 10 ? '0' + currentMinute : currentMinute;\n\n    time.innerText = `${currentHourConverted}:${minutes} ${clock}`;\n}\n\nfunction displayTemperature({ main: { temp } }) {\n    temperature.innerText = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.convertKelvin)(temp);\n}\n\nfunction displayWeather({ weather }) {\n    const condition = document.getElementById('condition');\n    condition.innerText = weather[0].main;\n}\n\nfunction displayWeatherIcon({ weather }) {\n    const icon = document.getElementById('conditionImg');\n    icon.className = `wi wi-owm-${weather[0].id}`;\n}\n\nfunction handleNoValue({ cod }) {\n    if (cod == '404') {\n        alert('Invalid city name');\n        return false;\n    }\n    return true;\n}\n\nfunction changeDegrees(degrees) {\n    const opposite = degrees == 'celsius' ? 'fahrenheit' : 'celsius';\n    const allOpposite = document.querySelectorAll(`.wi-${opposite}`);\n    let rest;\n    [, ...rest] = allOpposite;\n\n    rest.map((node) => (node.className = `wi wi-${degrees}`));\n    temperature.innerText = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.convertTemperature)(degrees, temperature.innerText);\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nasync function getAPI(location) {\n    const API_key = '780876c77a2ffc68569ba8637b985e4f';\n    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_key}`;\n\n    try {\n        const response = await fetch(url, { mode: 'cors' });\n        const data = await response.json();\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayInfo)(data);\n    } catch (error) {\n        console.error(error);\n    }\n}\n\nfunction addListener() {\n    const searchBar = document.getElementById('search');\n    const celsius = document.getElementById('celsius');\n    const fahrenheit = document.getElementById('fahrenheit');\n\n    searchBar.addEventListener('keypress', (e) => {\n        if (e.key != 'Enter') return;\n        e.preventDefault();\n        getAPI(searchBar.value);\n    });\n    celsius.addEventListener('click', () => (0,_dom__WEBPACK_IMPORTED_MODULE_0__.changeDegrees)('celsius'))\n    fahrenheit.addEventListener('click', () => (0,_dom__WEBPACK_IMPORTED_MODULE_0__.changeDegrees)('fahrenheit'));\n}\n\ngetAPI('New York');\naddListener();\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;