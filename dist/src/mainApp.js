/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mainApp.js":
/*!************************!*\
  !*** ./src/mainApp.js ***!
  \************************/
/***/ (() => {

eval("const wrapper = document.querySelector(\".slider-wrapper\");\nconst cardContainer = document.querySelectorAll(\".item-card-container\");\nconst disiplayCart = document.querySelector(\".nav-display-cart\");\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n    displaySlider();\n    autoScroll();\n    mainUpdateCartCount();\n});\n\nfunction autoScroll() {\n    const totalWidth = wrapper.scrollWidth;\n\n    setInterval(() => {\n        wrapper.scrollLeft = wrapper.scrollLeft + 500;\n\n        if (wrapper.offsetWidth + wrapper.scrollLeft >= totalWidth) {\n            wrapper.scrollLeft = 0;\n        }\n    }, 2000);\n}\n\nfunction displaySlider() {\n    itemData.forEach(function (el) {\n        let createImgDom = document.createElement(\"img\");\n\n        createImgDom.classList = \"slideItems\";\n        createImgDom.id = el.id;\n        createImgDom.src = el.img;\n        wrapper.appendChild(createImgDom);\n\n        createImgDom.addEventListener(\"click\", function () {\n            console.log(el.name);\n        });\n    });\n}\n\nfunction mainUpdateCartCount() {\n    let totalItemCount = currCartBasket.reduce(function (curr, next) {\n        return curr + next.countItem;\n    }, 0);\n    disiplayCart.textContent = totalItemCount;\n}\n\nfunction displayMenuCard() {\n    const itemCard = document.createElement(\"a\");\n\n    linkData.forEach(function (el) {\n        itemCard.href = el;\n    });\n\n    itemCard.classList = \"item-card\";\n\n    const cardName = document.createElement(\"div\");\n\n    cardName.classList = \"item-card-name\";\n}\n\n\n//# sourceURL=webpack://vanilla_js_shopping_cart/./src/mainApp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/mainApp.js"]();
/******/ 	
/******/ })()
;