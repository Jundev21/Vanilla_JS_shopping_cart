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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './Data.js;'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n// menu 기능 1.\n// 기능 1. 첫번째 파트에 아이템 슬라이더로 메뉴를 보여준다.\n// 기능 2. 아이템들을 보여주고, 각 아이템들마다 가격, 설명, 상품 추가가 주어진다.\nconst bodyContainer = document.querySelector(\".item-body-container\");\nconst menuBtn = document.querySelector(\".menu-btn-container\");\nconst disiplayCart = document.querySelector(\".nav-display-cart\");\n\n\nlet currCartBasket = JSON.parse(sessionStorage.getItem(\"itemCart\")) || [];\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n    let currMenu = document.location.href.split(\"#\")[1];\n    let hasFilterMenu = \"\";\n\n    if (currMenu) {\n        hasFilterMenu = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './Data.js;'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function (el) {\n            return el.category === currMenu;\n        });\n    }\n\n    if (hasFilterMenu) {\n        displayMenuItems(hasFilterMenu);\n    } else {\n        displayMenuItems(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './Data.js;'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n    }\n    applyMenuBtn(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './Data.js;'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n    applyCountBtn(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './Data.js;'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n    updateCartCount();\n});\n\nfunction displayMenuItems(itemData) {\n    let dataStr = itemData\n        .map((el) => {\n            let searchItemInfo = currCartBasket.find((currBasket) => currBasket.id === el.id) || [];\n\n            return `\n        <div class=\"main-item\" id=product-id-${el.id} >\n        <div class=\"main-itemWrapper\">\n            <div class=\"left-section\">\n                <img\n                    class=\"item-img\"\n                    src=\"${el.img}\"\n                />\n            </div>\n\n            <div class=\"right-section\">\n                <div class=\"item-info\">\n                    <h4>${el.name}</h4>\n                    <h4>${makeMoneyComma(el.price)} 원</h4>\n                </div>\n                <div class=\"item-desc\">${el.desc}</div>\n                <div class=\"item-count\">\n                    <span onclick=\"decrement('${el.id}')\"  class=\"count-btn\">-</span>\n                    <span id = '${el.id}'> ${\n                searchItemInfo.countItem === undefined ? 0 : searchItemInfo.countItem\n            }</span>\n                    <span onclick=\"increment('${el.id}','${el.name}','${\n                el.price\n            }')\" class=\"count-btn\">+</span>\n                </div>\n            </div>\n        </div>\n        </div>\n        `;\n        })\n        .join(\"\");\n\n    bodyContainer.innerHTML = dataStr;\n\n    // bodyContainer.insertAdjacentHTML('afterend', dataStr.join(''));\n}\n\nfunction increment(itemId, itemName, itemPrice) {\n    let getItemCount = currCartBasket.find((el) => el.id === itemId);\n\n    if (getItemCount === undefined) {\n        currCartBasket.push({\n            id: itemId,\n            name: itemName,\n            price: itemPrice,\n            countItem: 1,\n        });\n    } else {\n        getItemCount.countItem += 1;\n    }\n\n    updateDom(itemId);\n    sessionStorage.setItem(\"itemCart\", JSON.stringify(currCartBasket));\n}\n\nfunction decrement(itemId) {\n    let getItemCount = currCartBasket.find((el) => el.id === itemId);\n\n    if (getItemCount === undefined) return;\n    else if (getItemCount.countItem === 0) return;\n    else {\n        getItemCount.countItem -= 1;\n    }\n\n    updateDom(itemId);\n    let isEmptyBasket = currCartBasket.filter(function (el) {\n        return el.countItem !== 0;\n    });\n\n    sessionStorage.setItem(\"itemCart\", JSON.stringify(isEmptyBasket));\n}\n\nfunction updateDom(id) {\n    let getItemCount = currCartBasket.find(function (el) {\n        return el.id === id;\n    });\n\n    console.log(id);\n\n    document.getElementById(id).innerHTML = getItemCount.countItem;\n    updateCartCount();\n}\n\nfunction updateCartCount() {\n    let totalItemCount = currCartBasket.reduce(function (curr, next) {\n        return curr + next.countItem;\n    }, 0);\n    disiplayCart.textContent = totalItemCount;\n}\nfunction applyCountBtn(itemData) {\n    let itemCount = document.querySelector(\".item-count\");\n}\n\nfunction applyMenuBtn(itemData) {\n    let data = itemData.reduce(\n        function (currVal, next) {\n            if (!currVal.includes(next.category)) {\n                currVal.push(next.category);\n            }\n            return currVal;\n        },\n        [\"전체\"]\n    );\n    // menuBtn\n    let displayData = data\n        .map(function (el) {\n            let changeLang = \"\";\n\n            switch (el) {\n                case \"china\":\n                    changeLang = \"중식\";\n                    break;\n\n                case \"usa\":\n                    changeLang = \"양식\";\n                    break;\n\n                case \"korea\":\n                    changeLang = \"한식\";\n                    break;\n\n                case \"japan\":\n                    changeLang = \"일식\";\n                    break;\n\n                case \"desert\":\n                    changeLang = \"디저트\";\n\n                    break;\n                default:\n                    changeLang = \"전체\";\n            }\n\n            return `\n        <button class=\"menu-btn\" data-btnid=${el} id=${el}>${changeLang}</button>\n        `;\n        })\n        .join(\"\");\n\n    menuBtn.innerHTML = displayData;\n\n    displayMenuBtn();\n}\n\nfunction displayMenuBtn() {\n    let filterBtn = menuBtn.querySelectorAll(\".menu-btn\");\n\n    filterBtn.forEach(function (el) {\n        el.addEventListener(\"click\", function (e) {\n            let categoryName = e.currentTarget.dataset.btnid;\n\n            let filterItems = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './Data.js;'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function (el2) {\n                return el2.category === categoryName;\n            });\n\n            if (categoryName === \"전체\") {\n                displayMenuItems(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './Data.js;'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n            } else {\n                displayMenuItems(filterItems);\n            }\n        });\n    });\n}\n\nfunction makeMoneyComma(beforeComma) {\n    return beforeComma.toLocaleString();\n}\n\n\n//# sourceURL=webpack://vanilla_js_shopping_cart/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/menu.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;