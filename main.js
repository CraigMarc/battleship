/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    text-align: center;
    background-color: #09046b;
}

h1 {
    font-size: 45px;
    color: wheat;
}

#container {
    height: 300px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

#computerContainer {
    width: 290px;
    height: 290px;
    display: flex;
    flex-wrap: wrap;
    background-color: wheat;
}

#playerContainer {
    width: 290px;
    height: 290px;
    display: flex;
    flex-wrap: wrap;
    background-color: wheat;
}


.grid, .grid2 {
    border: solid;
    border-width: 0.8px;
    font-size: 22px;
    width: 27px;
    height: 27px;
}

#buttonContainer {
    padding-top: 15px;
    display: flex;
    width: 275px;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

#changeBoard, #startGame, #newGame {
    width: 200px;
    border-radius: 10px;
    font-size: 17px;
    background-color: wheat;
}

h2 {
    font-size: 35px;
    margin: 0;
    margin-bottom: 10px;
    color: wheat;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,aAAa;IACb,eAAe;IACf,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,eAAe;IACf,uBAAuB;AAC3B;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,SAAS;IACT,mBAAmB;IACnB,YAAY;AAChB","sourcesContent":["body {\n    text-align: center;\n    background-color: #09046b;\n}\n\nh1 {\n    font-size: 45px;\n    color: wheat;\n}\n\n#container {\n    height: 300px;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n    justify-content: center;\n}\n\n#computerContainer {\n    width: 290px;\n    height: 290px;\n    display: flex;\n    flex-wrap: wrap;\n    background-color: wheat;\n}\n\n#playerContainer {\n    width: 290px;\n    height: 290px;\n    display: flex;\n    flex-wrap: wrap;\n    background-color: wheat;\n}\n\n\n.grid, .grid2 {\n    border: solid;\n    border-width: 0.8px;\n    font-size: 22px;\n    width: 27px;\n    height: 27px;\n}\n\n#buttonContainer {\n    padding-top: 15px;\n    display: flex;\n    width: 275px;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n}\n\n#changeBoard, #startGame, #newGame {\n    width: 200px;\n    border-radius: 10px;\n    font-size: 17px;\n    background-color: wheat;\n}\n\nh2 {\n    font-size: 35px;\n    margin: 0;\n    margin-bottom: 10px;\n    color: wheat;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buttons: () => (/* binding */ buttons),
/* harmony export */   createComputerGrid: () => (/* binding */ createComputerGrid),
/* harmony export */   createPlayerGrid: () => (/* binding */ createPlayerGrid),
/* harmony export */   removeBoard: () => (/* binding */ removeBoard),
/* harmony export */   removeButtons: () => (/* binding */ removeButtons),
/* harmony export */   removeWinner: () => (/* binding */ removeWinner),
/* harmony export */   winner: () => (/* binding */ winner)
/* harmony export */ });


function createPlayerGrid(array) {
    const outerContainer = document.querySelector('#container');
    const containerCreate = document.createElement('div');
    containerCreate.id = 'playerContainer'
    outerContainer.appendChild(containerCreate);

    for (let i = 0; i < array.board.length; i++) {

        for (let y = 0; y < array.board[i].length; y++) {

            const container = document.querySelector('#playerContainer');
            const grid2 = document.createElement('div');

            grid2.classList.add('grid2');

            if (
                typeof array.board[i][y] === 'object'
            ) {
                grid2.style.backgroundColor = 'grey';
            }

            if (
                array.board[i][y] === '*'
            ) {
                grid2.style.backgroundColor = 'red';
            }

            if (
                array.board[i][y] == 'x'
            ) {
                grid2.style.backgroundColor = 'green';
            }



            container.appendChild(grid2);
        }

    }

}

function createComputerGrid(array) {

    const outerContainer = document.querySelector('#container');
    const containerCreate = document.createElement('div');
    containerCreate.id = 'computerContainer'
    outerContainer.appendChild(containerCreate);


    for (let i = 0; i < array.board.length; i++) {

        for (let y = 0; y < array.board[i].length; y++) {

            const container = document.querySelector('#computerContainer');
            const grid = document.createElement('div');

            grid.classList.add('grid');
            grid.value = (i + "," + y)

         /*   if (
                typeof array.board[i][y] === 'object'
            ) {
                grid.style.backgroundColor = 'grey';
            }*/

            if (
                array.board[i][y] === '*'
            ) {
                grid.style.backgroundColor = 'red';
            }

            if (
                array.board[i][y] == 'x'
            ) {
                grid.style.backgroundColor = 'green';
            }

            container.appendChild(grid);
        }

    }

}

function removeBoard() {
    const removePlayer = document.getElementById("playerContainer");
    const removeComputer = document.getElementById("computerContainer");
    removeComputer.remove()
    removePlayer.remove()
}

function winner(message) {

    const container = document.querySelector('#message');
    const heading = document.createElement('h2');
    heading.id = 'heading'
    heading.textContent = message;
    const newGame = document.createElement('button');
    newGame.id = 'newGame'
    newGame.textContent = 'Play Another Game'
    container.appendChild(heading);
    container.appendChild(newGame);

}

function removeWinner () {
    const removeWinner = document.getElementById("heading");
    const removeButton = document.getElementById("newGame");
    removeWinner.remove()
    removeButton.remove()
}

function buttons() {
    const container = document.querySelector('#playerContainer');
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'buttonContainer'
    const changeBoard = document.createElement('button');
    changeBoard.id = 'changeBoard'
    changeBoard.textContent = 'Select Board'
    const startGame = document.createElement('button');
    startGame.id = 'startGame'
    startGame.textContent = 'Start Game'
    buttonContainer.appendChild(changeBoard)
    buttonContainer.appendChild(startGame)
    container.appendChild(buttonContainer)

}

function removeButtons () {
    const buttonContainer = document.getElementById("buttonContainer");
    
    buttonContainer.remove()

}





/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Board: () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



class Board {



    constructor() {
        this.board =
            [
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", "", ""]
            ]

    }

    checkPlacement(x, y, ship, position) {

        let length = ship.length


        if (position == 'h' && x + length >= 10) {
            return 'no'
        }
        if (position == 'v' && y + length >= 10) {
            return 'no'
        }
        if (position == 'h') {

            for (let i = 0; i < length + 1; i++) {

                if (typeof this.board[y][i + x] === 'object') {
                    return 'no'
                }
            }
        }
        if (position == 'v') {

            for (let i = 0; i < length + 1; i++) {
               
                    if (typeof this.board[i + y][x] === 'object') {
                    return 'no'
                }

            }

        }
        return 'yes'
    }


    placeShip(x, y, ship, position) {

        let length = ship.length

        if (position == 'h') {
            for (let i = 0; i < length; i++) {
                this.board[y][x + i] = ship

            }

        }

        if (position == 'v') {

            for (let i = 0; i < length; i++) {
                this.board[y + i][x] = ship

            }

        }
        return this.board

    }

    attack(x, y) {

        if (this.board[y][x] == "" && this.board[y][x] != 'x' && this.board[y][x] != '*') {

            this.board[y][x] = 'x'
            return 'not hit'
        }
        if (this.board[y][x] == 'x' || this.board[y][x] == '*') {

            return 'taken'
        }

        else {


            this.board[y][x].hit(1)

            this.board[y][x] = '*'

            return 'hit'

        }




    }

}





/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computerPlayer: () => (/* binding */ computerPlayer)
/* harmony export */ });


function computerPlayer(board) {


  function getRandom() {
    let rand = Math.floor(Math.random() * 10);


    return (rand)
  }


  function makePlacement() {

    let x = getRandom()
    let y = getRandom()

    let attack = board.attack(x, y)
    if (attack == 'taken') {
      makePlacement()
    }


  }
  makePlacement()

}





/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    
  
    constructor(length) {
      this.length = length
      
      this.hits = []
    }
  
   hit(position) {
    this.hits.push(position)
        return
      
    }
  
    sunk() {
        if (this.hits.length == this.length)
      return 'sunk'
    else {
       return 'not sunk'
    }
    }
  }

 

  

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ "./src/player.js");
//change later when want to use css ******













// create player fleet

let destroyer = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3)
let carrier = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(5)
let battleship = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(4)
let sub = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3)
let patrol = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(2)


// create computer fleet

let cDestroyer = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3)
let cCarrier = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(5)
let cBattleship = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(4)
let cSub = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3)
let cPatrol = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(2)


// create computer Board
let computerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_2__.Board

// place computer ships

function placeShipsRandomly(ship, board) {

  function getRandomCoor() {
    let x = Math.floor(Math.random() * 10);


    return (x)
  }
  function getRandomOrr() {
    let orr = Math.floor(Math.random() * 2);

    if (orr == 0) {

      return 'v'
    }
    else {
      return 'h'
    }

  }


  function checkShip(ship) {
    let coorArr = []
    let x = getRandomCoor()
    let y = getRandomCoor()
    let cOrr = getRandomOrr()



    let check = board.checkPlacement(x, y, ship, cOrr)

    if (check == 'yes') {
      coorArr.push(x)
      coorArr.push(y)

      board.placeShip(x, y, ship, cOrr)

      return coorArr
    }
    if (check == 'no') {
      checkShip(ship)

    }
  }

  checkShip(ship)

}
//place computer ships

function placeComputerShips() {
  placeShipsRandomly(cSub, computerBoard)
  placeShipsRandomly(cPatrol, computerBoard)
  placeShipsRandomly(cDestroyer, computerBoard)
  placeShipsRandomly(cCarrier, computerBoard)
  placeShipsRandomly(cBattleship, computerBoard)
}

placeComputerShips()
// place player ships

function placePlayerShips() {

  placeShipsRandomly(sub, playerBoard)
  placeShipsRandomly(patrol, playerBoard)
  placeShipsRandomly(destroyer, playerBoard)
  placeShipsRandomly(carrier, playerBoard)
  placeShipsRandomly(battleship, playerBoard)

}

(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createComputerGrid)(computerBoard)

//create player board
let playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_2__.Board
;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createPlayerGrid)(playerBoard)

//add player round function

function playRound(board) {

  const spot = document.querySelectorAll(".grid");

  spot.forEach((cell) => {
    cell.addEventListener("click", playerPlacement);
  });

  function removeListener() {
    const spot = document.querySelectorAll(".grid");
    spot.forEach((cell) => {
      cell.removeEventListener("click", playerPlacement);
    });
  }

  function playerPlacement(e) {

    let coor = e.target.value
    let arr = coor.split(",")
    let y = arr[0]
    let x = arr[1]


    
    if (board.board[y][x] == 'x' || board.board[y][x] == '*') {
      
      (0,_dom__WEBPACK_IMPORTED_MODULE_3__.removeBoard)()
      ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createComputerGrid)(computerBoard)
      ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createPlayerGrid)(playerBoard)

    }
    else {
      board.attack(x, y)
      ;(0,_player__WEBPACK_IMPORTED_MODULE_4__.computerPlayer)(playerBoard)
      ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.removeBoard)()
      ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createComputerGrid)(computerBoard)
      ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createPlayerGrid)(playerBoard)
    }

    if (destroyer.sunk() == 'sunk' && carrier.sunk() == 'sunk' && battleship.sunk() == 'sunk'
      && sub.sunk() == 'sunk' && patrol.sunk() == 'sunk') {

      (0,_dom__WEBPACK_IMPORTED_MODULE_3__.winner)('Computer Wins')
      removeListener()
      newGame()
    }

    else if (cDestroyer.sunk() == 'sunk' && cCarrier.sunk() == 'sunk' && cBattleship.sunk() == 'sunk'
      && cSub.sunk() == 'sunk' && cPatrol.sunk() == 'sunk') {

      (0,_dom__WEBPACK_IMPORTED_MODULE_3__.winner)('You Win')
      removeListener()
      newGame()
    }
    else {
      playRound(computerBoard)
    }

  }


}

// change board listener and function

function changeBoard() {
  const btn = document.getElementById("changeBoard");

  btn.addEventListener("click", () => {


    playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_2__.Board
    placePlayerShips()
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.removeBoard)()
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createComputerGrid)(computerBoard)
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createPlayerGrid)(playerBoard)
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.buttons)()
    startGame()
    changeBoard()

  });
}

//start game listener and function

function startGame() {
  const btn = document.getElementById("startGame");

  btn.addEventListener("click", () => {
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.removeButtons)()
    playRound(computerBoard)


  });
}

// new game listener and function

function newGame() {
  const btn = document.getElementById("newGame");

  btn.addEventListener("click", () => {


    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.removeBoard)()
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.removeWinner)()
    destroyer = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3)
    carrier = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(5)
    battleship = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(4)
    sub = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3)
    patrol = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(2)
    cDestroyer = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3)
    cCarrier = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(5)
    cBattleship = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(4)
    cSub = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3)
    cPatrol = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(2)
    computerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_2__.Board
    placeComputerShips()
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createComputerGrid)(computerBoard)
    playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_2__.Board
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createPlayerGrid)(playerBoard)
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.buttons)()
    changeBoard()
  });
}


//call button and change board functs
(0,_dom__WEBPACK_IMPORTED_MODULE_3__.buttons)()
changeBoard()






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtCQUFrQix1Q0FBSTtBQUN0QixxQkFBcUIsdUNBQUk7QUFDekIsY0FBYyx1Q0FBSTtBQUNsQixpQkFBaUIsdUNBQUk7QUFDckIscUJBQXFCLHVDQUFJO0FBQ3pCLG1CQUFtQix1Q0FBSTtBQUN2QixzQkFBc0IsdUNBQUk7QUFDMUIsZUFBZSx1Q0FBSTtBQUNuQixrQkFBa0IsdUNBQUk7QUFDdEIsd0JBQXdCLDZDQUFLO0FBQzdCO0FBQ0EsSUFBSSx5REFBa0I7QUFDdEIsc0JBQXNCLDZDQUFLO0FBQzNCLElBQUksdURBQWdCO0FBQ3BCLElBQUksOENBQU87QUFDWDtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQSw2Q0FBTztBQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDQ2Yjtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICBjb2xvcjogd2hlYXQ7XG59XG5cbiNjb250YWluZXIge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jY29tcHV0ZXJDb250YWluZXIge1xuICAgIHdpZHRoOiAyOTBweDtcbiAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xufVxuXG4jcGxheWVyQ29udGFpbmVyIHtcbiAgICB3aWR0aDogMjkwcHg7XG4gICAgaGVpZ2h0OiAyOTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbn1cblxuXG4uZ3JpZCwgLmdyaWQyIHtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMC44cHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHdpZHRoOiAyN3B4O1xuICAgIGhlaWdodDogMjdweDtcbn1cblxuI2J1dHRvbkNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMjc1cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbn1cblxuI2NoYW5nZUJvYXJkLCAjc3RhcnRHYW1lLCAjbmV3R2FtZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiB3aGVhdDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTA0NmI7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcbiAgICBjb2xvcjogd2hlYXQ7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29tcHV0ZXJDb250YWluZXIge1xcbiAgICB3aWR0aDogMjkwcHg7XFxuICAgIGhlaWdodDogMjkwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxufVxcblxcbiNwbGF5ZXJDb250YWluZXIge1xcbiAgICB3aWR0aDogMjkwcHg7XFxuICAgIGhlaWdodDogMjkwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxufVxcblxcblxcbi5ncmlkLCAuZ3JpZDIge1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDAuOHB4O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIHdpZHRoOiAyN3B4O1xcbiAgICBoZWlnaHQ6IDI3cHg7XFxufVxcblxcbiNidXR0b25Db250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDI3NXB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbiNjaGFuZ2VCb2FyZCwgI3N0YXJ0R2FtZSwgI25ld0dhbWUge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGNvbG9yOiB3aGVhdDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllckdyaWQoYXJyYXkpIHtcbiAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICBjb25zdCBjb250YWluZXJDcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXJDcmVhdGUuaWQgPSAncGxheWVyQ29udGFpbmVyJ1xuICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckNyZWF0ZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5LmJvYXJkLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBhcnJheS5ib2FyZFtpXS5sZW5ndGg7IHkrKykge1xuXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQ29udGFpbmVyJyk7XG4gICAgICAgICAgICBjb25zdCBncmlkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBncmlkMi5jbGFzc0xpc3QuYWRkKCdncmlkMicpO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdHlwZW9mIGFycmF5LmJvYXJkW2ldW3ldID09PSAnb2JqZWN0J1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZ3JpZDIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYXJyYXkuYm9hcmRbaV1beV0gPT09ICcqJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZ3JpZDIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBhcnJheS5ib2FyZFtpXVt5XSA9PSAneCdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGdyaWQyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZDIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZXJHcmlkKGFycmF5KSB7XG5cbiAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICBjb25zdCBjb250YWluZXJDcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXJDcmVhdGUuaWQgPSAnY29tcHV0ZXJDb250YWluZXInXG4gICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyQ3JlYXRlKTtcblxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5ib2FyZC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgYXJyYXkuYm9hcmRbaV0ubGVuZ3RoOyB5KyspIHtcblxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyQ29udGFpbmVyJyk7XG4gICAgICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuICAgICAgICAgICAgZ3JpZC52YWx1ZSA9IChpICsgXCIsXCIgKyB5KVxuXG4gICAgICAgICAvKiAgIGlmIChcbiAgICAgICAgICAgICAgICB0eXBlb2YgYXJyYXkuYm9hcmRbaV1beV0gPT09ICdvYmplY3QnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBncmlkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmV5JztcbiAgICAgICAgICAgIH0qL1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYXJyYXkuYm9hcmRbaV1beV0gPT09ICcqJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZ3JpZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGFycmF5LmJvYXJkW2ldW3ldID09ICd4J1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZ3JpZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5mdW5jdGlvbiByZW1vdmVCb2FyZCgpIHtcbiAgICBjb25zdCByZW1vdmVQbGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllckNvbnRhaW5lclwiKTtcbiAgICBjb25zdCByZW1vdmVDb21wdXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcHV0ZXJDb250YWluZXJcIik7XG4gICAgcmVtb3ZlQ29tcHV0ZXIucmVtb3ZlKClcbiAgICByZW1vdmVQbGF5ZXIucmVtb3ZlKClcbn1cblxuZnVuY3Rpb24gd2lubmVyKG1lc3NhZ2UpIHtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy5pZCA9ICdoZWFkaW5nJ1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIGNvbnN0IG5ld0dhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdHYW1lLmlkID0gJ25ld0dhbWUnXG4gICAgbmV3R2FtZS50ZXh0Q29udGVudCA9ICdQbGF5IEFub3RoZXIgR2FtZSdcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0dhbWUpO1xuXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVdpbm5lciAoKSB7XG4gICAgY29uc3QgcmVtb3ZlV2lubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkaW5nXCIpO1xuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3R2FtZVwiKTtcbiAgICByZW1vdmVXaW5uZXIucmVtb3ZlKClcbiAgICByZW1vdmVCdXR0b24ucmVtb3ZlKClcbn1cblxuZnVuY3Rpb24gYnV0dG9ucygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQ29udGFpbmVyJyk7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmlkID0gJ2J1dHRvbkNvbnRhaW5lcidcbiAgICBjb25zdCBjaGFuZ2VCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNoYW5nZUJvYXJkLmlkID0gJ2NoYW5nZUJvYXJkJ1xuICAgIGNoYW5nZUJvYXJkLnRleHRDb250ZW50ID0gJ1NlbGVjdCBCb2FyZCdcbiAgICBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydEdhbWUuaWQgPSAnc3RhcnRHYW1lJ1xuICAgIHN0YXJ0R2FtZS50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lJ1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFuZ2VCb2FyZClcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRHYW1lKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpXG5cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQnV0dG9ucyAoKSB7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25Db250YWluZXJcIik7XG4gICAgXG4gICAgYnV0dG9uQ29udGFpbmVyLnJlbW92ZSgpXG5cbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVQbGF5ZXJHcmlkLFxuICAgIGNyZWF0ZUNvbXB1dGVyR3JpZCxcbiAgICByZW1vdmVCb2FyZCxcbiAgICB3aW5uZXIsXG4gICAgYnV0dG9ucyxcbiAgICByZW1vdmVXaW5uZXIsXG4gICAgcmVtb3ZlQnV0dG9ucyxcbn07XG5cbiIsImltcG9ydCB7XG4gICAgU2hpcCxcbn0gZnJvbSBcIi4vc2hpcFwiO1xuXG5cbmNsYXNzIEJvYXJkIHtcblxuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdXG4gICAgICAgICAgICBdXG5cbiAgICB9XG5cbiAgICBjaGVja1BsYWNlbWVudCh4LCB5LCBzaGlwLCBwb3NpdGlvbikge1xuXG4gICAgICAgIGxldCBsZW5ndGggPSBzaGlwLmxlbmd0aFxuXG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09ICdoJyAmJiB4ICsgbGVuZ3RoID49IDEwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ25vJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAndicgJiYgeSArIGxlbmd0aCA+PSAxMCkge1xuICAgICAgICAgICAgcmV0dXJuICdubydcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPT0gJ2gnKSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoICsgMTsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuYm9hcmRbeV1baSArIHhdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ25vJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPT0gJ3YnKSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoICsgMTsgaSsrKSB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmJvYXJkW2kgKyB5XVt4XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdubydcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAneWVzJ1xuICAgIH1cblxuXG4gICAgcGxhY2VTaGlwKHgsIHksIHNoaXAsIHBvc2l0aW9uKSB7XG5cbiAgICAgICAgbGV0IGxlbmd0aCA9IHNoaXAubGVuZ3RoXG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09ICdoJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beCArIGldID0gc2hpcFxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAndicpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeSArIGldW3hdID0gc2hpcFxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFxuXG4gICAgfVxuXG4gICAgYXR0YWNrKHgsIHkpIHtcblxuICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PSBcIlwiICYmIHRoaXMuYm9hcmRbeV1beF0gIT0gJ3gnICYmIHRoaXMuYm9hcmRbeV1beF0gIT0gJyonKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beF0gPSAneCdcbiAgICAgICAgICAgIHJldHVybiAnbm90IGhpdCdcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PSAneCcgfHwgdGhpcy5ib2FyZFt5XVt4XSA9PSAnKicpIHtcblxuICAgICAgICAgICAgcmV0dXJuICd0YWtlbidcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuXG5cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beF0uaGl0KDEpXG5cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beF0gPSAnKidcblxuICAgICAgICAgICAgcmV0dXJuICdoaXQnXG5cbiAgICAgICAgfVxuXG5cblxuXG4gICAgfVxuXG59XG5cblxuXG5leHBvcnQge1xuICAgIEJvYXJkLFxuXG59OyIsIlxuXG5mdW5jdGlvbiBjb21wdXRlclBsYXllcihib2FyZCkge1xuXG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tKCkge1xuICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG5cbiAgICByZXR1cm4gKHJhbmQpXG4gIH1cblxuXG4gIGZ1bmN0aW9uIG1ha2VQbGFjZW1lbnQoKSB7XG5cbiAgICBsZXQgeCA9IGdldFJhbmRvbSgpXG4gICAgbGV0IHkgPSBnZXRSYW5kb20oKVxuXG4gICAgbGV0IGF0dGFjayA9IGJvYXJkLmF0dGFjayh4LCB5KVxuICAgIGlmIChhdHRhY2sgPT0gJ3Rha2VuJykge1xuICAgICAgbWFrZVBsYWNlbWVudCgpXG4gICAgfVxuXG5cbiAgfVxuICBtYWtlUGxhY2VtZW50KClcblxufVxuXG5cblxuZXhwb3J0IHtcbiAgY29tcHV0ZXJQbGF5ZXIsXG5cbn07IiwiY2xhc3MgU2hpcCB7XG4gICAgXG4gIFxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgICAgIFxuICAgICAgdGhpcy5oaXRzID0gW11cbiAgICB9XG4gIFxuICAgaGl0KHBvc2l0aW9uKSB7XG4gICAgdGhpcy5oaXRzLnB1c2gocG9zaXRpb24pXG4gICAgICAgIHJldHVyblxuICAgICAgXG4gICAgfVxuICBcbiAgICBzdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5oaXRzLmxlbmd0aCA9PSB0aGlzLmxlbmd0aClcbiAgICAgIHJldHVybiAnc3VuaydcbiAgICBlbHNlIHtcbiAgICAgICByZXR1cm4gJ25vdCBzdW5rJ1xuICAgIH1cbiAgICB9XG4gIH1cblxuIFxuXG4gIGV4cG9ydCB7XG4gICBTaGlwLFxuICAgIFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL2NoYW5nZSBsYXRlciB3aGVuIHdhbnQgdG8gdXNlIGNzcyAqKioqKipcblxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5pbXBvcnQge1xuICBTaGlwLFxufSBmcm9tIFwiLi9zaGlwXCI7XG5cbmltcG9ydCB7XG4gIEJvYXJkLFxufSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuaW1wb3J0IHtcbiAgY3JlYXRlUGxheWVyR3JpZCxcbiAgY3JlYXRlQ29tcHV0ZXJHcmlkLFxuICByZW1vdmVCb2FyZCxcbiAgd2lubmVyLFxuICBidXR0b25zLFxuICByZW1vdmVXaW5uZXIsXG4gIHJlbW92ZUJ1dHRvbnMsXG59IGZyb20gXCIuL2RvbVwiO1xuXG5pbXBvcnQge1xuICBjb21wdXRlclBsYXllcixcblxufSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuXG5cbi8vIGNyZWF0ZSBwbGF5ZXIgZmxlZXRcblxubGV0IGRlc3Ryb3llciA9IG5ldyBTaGlwKDMpXG5sZXQgY2FycmllciA9IG5ldyBTaGlwKDUpXG5sZXQgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpXG5sZXQgc3ViID0gbmV3IFNoaXAoMylcbmxldCBwYXRyb2wgPSBuZXcgU2hpcCgyKVxuXG5cbi8vIGNyZWF0ZSBjb21wdXRlciBmbGVldFxuXG5sZXQgY0Rlc3Ryb3llciA9IG5ldyBTaGlwKDMpXG5sZXQgY0NhcnJpZXIgPSBuZXcgU2hpcCg1KVxubGV0IGNCYXR0bGVzaGlwID0gbmV3IFNoaXAoNClcbmxldCBjU3ViID0gbmV3IFNoaXAoMylcbmxldCBjUGF0cm9sID0gbmV3IFNoaXAoMilcblxuXG4vLyBjcmVhdGUgY29tcHV0ZXIgQm9hcmRcbmxldCBjb21wdXRlckJvYXJkID0gbmV3IEJvYXJkXG5cbi8vIHBsYWNlIGNvbXB1dGVyIHNoaXBzXG5cbmZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seShzaGlwLCBib2FyZCkge1xuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbUNvb3IoKSB7XG4gICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cblxuICAgIHJldHVybiAoeClcbiAgfVxuICBmdW5jdGlvbiBnZXRSYW5kb21PcnIoKSB7XG4gICAgbGV0IG9yciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gICAgaWYgKG9yciA9PSAwKSB7XG5cbiAgICAgIHJldHVybiAndidcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gJ2gnXG4gICAgfVxuXG4gIH1cblxuXG4gIGZ1bmN0aW9uIGNoZWNrU2hpcChzaGlwKSB7XG4gICAgbGV0IGNvb3JBcnIgPSBbXVxuICAgIGxldCB4ID0gZ2V0UmFuZG9tQ29vcigpXG4gICAgbGV0IHkgPSBnZXRSYW5kb21Db29yKClcbiAgICBsZXQgY09yciA9IGdldFJhbmRvbU9ycigpXG5cblxuXG4gICAgbGV0IGNoZWNrID0gYm9hcmQuY2hlY2tQbGFjZW1lbnQoeCwgeSwgc2hpcCwgY09ycilcblxuICAgIGlmIChjaGVjayA9PSAneWVzJykge1xuICAgICAgY29vckFyci5wdXNoKHgpXG4gICAgICBjb29yQXJyLnB1c2goeSlcblxuICAgICAgYm9hcmQucGxhY2VTaGlwKHgsIHksIHNoaXAsIGNPcnIpXG5cbiAgICAgIHJldHVybiBjb29yQXJyXG4gICAgfVxuICAgIGlmIChjaGVjayA9PSAnbm8nKSB7XG4gICAgICBjaGVja1NoaXAoc2hpcClcblxuICAgIH1cbiAgfVxuXG4gIGNoZWNrU2hpcChzaGlwKVxuXG59XG4vL3BsYWNlIGNvbXB1dGVyIHNoaXBzXG5cbmZ1bmN0aW9uIHBsYWNlQ29tcHV0ZXJTaGlwcygpIHtcbiAgcGxhY2VTaGlwc1JhbmRvbWx5KGNTdWIsIGNvbXB1dGVyQm9hcmQpXG4gIHBsYWNlU2hpcHNSYW5kb21seShjUGF0cm9sLCBjb21wdXRlckJvYXJkKVxuICBwbGFjZVNoaXBzUmFuZG9tbHkoY0Rlc3Ryb3llciwgY29tcHV0ZXJCb2FyZClcbiAgcGxhY2VTaGlwc1JhbmRvbWx5KGNDYXJyaWVyLCBjb21wdXRlckJvYXJkKVxuICBwbGFjZVNoaXBzUmFuZG9tbHkoY0JhdHRsZXNoaXAsIGNvbXB1dGVyQm9hcmQpXG59XG5cbnBsYWNlQ29tcHV0ZXJTaGlwcygpXG4vLyBwbGFjZSBwbGF5ZXIgc2hpcHNcblxuZnVuY3Rpb24gcGxhY2VQbGF5ZXJTaGlwcygpIHtcblxuICBwbGFjZVNoaXBzUmFuZG9tbHkoc3ViLCBwbGF5ZXJCb2FyZClcbiAgcGxhY2VTaGlwc1JhbmRvbWx5KHBhdHJvbCwgcGxheWVyQm9hcmQpXG4gIHBsYWNlU2hpcHNSYW5kb21seShkZXN0cm95ZXIsIHBsYXllckJvYXJkKVxuICBwbGFjZVNoaXBzUmFuZG9tbHkoY2FycmllciwgcGxheWVyQm9hcmQpXG4gIHBsYWNlU2hpcHNSYW5kb21seShiYXR0bGVzaGlwLCBwbGF5ZXJCb2FyZClcblxufVxuXG5jcmVhdGVDb21wdXRlckdyaWQoY29tcHV0ZXJCb2FyZClcblxuLy9jcmVhdGUgcGxheWVyIGJvYXJkXG5sZXQgcGxheWVyQm9hcmQgPSBuZXcgQm9hcmRcbmNyZWF0ZVBsYXllckdyaWQocGxheWVyQm9hcmQpXG5cbi8vYWRkIHBsYXllciByb3VuZCBmdW5jdGlvblxuXG5mdW5jdGlvbiBwbGF5Um91bmQoYm9hcmQpIHtcblxuICBjb25zdCBzcG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkXCIpO1xuXG4gIHNwb3QuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXllclBsYWNlbWVudCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgIGNvbnN0IHNwb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyaWRcIik7XG4gICAgc3BvdC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5ZXJQbGFjZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheWVyUGxhY2VtZW50KGUpIHtcblxuICAgIGxldCBjb29yID0gZS50YXJnZXQudmFsdWVcbiAgICBsZXQgYXJyID0gY29vci5zcGxpdChcIixcIilcbiAgICBsZXQgeSA9IGFyclswXVxuICAgIGxldCB4ID0gYXJyWzFdXG5cblxuICAgIFxuICAgIGlmIChib2FyZC5ib2FyZFt5XVt4XSA9PSAneCcgfHwgYm9hcmQuYm9hcmRbeV1beF0gPT0gJyonKSB7XG4gICAgICBcbiAgICAgIHJlbW92ZUJvYXJkKClcbiAgICAgIGNyZWF0ZUNvbXB1dGVyR3JpZChjb21wdXRlckJvYXJkKVxuICAgICAgY3JlYXRlUGxheWVyR3JpZChwbGF5ZXJCb2FyZClcblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJvYXJkLmF0dGFjayh4LCB5KVxuICAgICAgY29tcHV0ZXJQbGF5ZXIocGxheWVyQm9hcmQpXG4gICAgICByZW1vdmVCb2FyZCgpXG4gICAgICBjcmVhdGVDb21wdXRlckdyaWQoY29tcHV0ZXJCb2FyZClcbiAgICAgIGNyZWF0ZVBsYXllckdyaWQocGxheWVyQm9hcmQpXG4gICAgfVxuXG4gICAgaWYgKGRlc3Ryb3llci5zdW5rKCkgPT0gJ3N1bmsnICYmIGNhcnJpZXIuc3VuaygpID09ICdzdW5rJyAmJiBiYXR0bGVzaGlwLnN1bmsoKSA9PSAnc3VuaydcbiAgICAgICYmIHN1Yi5zdW5rKCkgPT0gJ3N1bmsnICYmIHBhdHJvbC5zdW5rKCkgPT0gJ3N1bmsnKSB7XG5cbiAgICAgIHdpbm5lcignQ29tcHV0ZXIgV2lucycpXG4gICAgICByZW1vdmVMaXN0ZW5lcigpXG4gICAgICBuZXdHYW1lKClcbiAgICB9XG5cbiAgICBlbHNlIGlmIChjRGVzdHJveWVyLnN1bmsoKSA9PSAnc3VuaycgJiYgY0NhcnJpZXIuc3VuaygpID09ICdzdW5rJyAmJiBjQmF0dGxlc2hpcC5zdW5rKCkgPT0gJ3N1bmsnXG4gICAgICAmJiBjU3ViLnN1bmsoKSA9PSAnc3VuaycgJiYgY1BhdHJvbC5zdW5rKCkgPT0gJ3N1bmsnKSB7XG5cbiAgICAgIHdpbm5lcignWW91IFdpbicpXG4gICAgICByZW1vdmVMaXN0ZW5lcigpXG4gICAgICBuZXdHYW1lKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwbGF5Um91bmQoY29tcHV0ZXJCb2FyZClcbiAgICB9XG5cbiAgfVxuXG5cbn1cblxuLy8gY2hhbmdlIGJvYXJkIGxpc3RlbmVyIGFuZCBmdW5jdGlvblxuXG5mdW5jdGlvbiBjaGFuZ2VCb2FyZCgpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2VCb2FyZFwiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuXG4gICAgcGxheWVyQm9hcmQgPSBuZXcgQm9hcmRcbiAgICBwbGFjZVBsYXllclNoaXBzKClcbiAgICByZW1vdmVCb2FyZCgpXG4gICAgY3JlYXRlQ29tcHV0ZXJHcmlkKGNvbXB1dGVyQm9hcmQpXG4gICAgY3JlYXRlUGxheWVyR3JpZChwbGF5ZXJCb2FyZClcbiAgICBidXR0b25zKClcbiAgICBzdGFydEdhbWUoKVxuICAgIGNoYW5nZUJvYXJkKClcblxuICB9KTtcbn1cblxuLy9zdGFydCBnYW1lIGxpc3RlbmVyIGFuZCBmdW5jdGlvblxuXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRHYW1lXCIpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZUJ1dHRvbnMoKVxuICAgIHBsYXlSb3VuZChjb21wdXRlckJvYXJkKVxuXG5cbiAgfSk7XG59XG5cbi8vIG5ldyBnYW1lIGxpc3RlbmVyIGFuZCBmdW5jdGlvblxuXG5mdW5jdGlvbiBuZXdHYW1lKCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dhbWVcIik7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cblxuICAgIHJlbW92ZUJvYXJkKClcbiAgICByZW1vdmVXaW5uZXIoKVxuICAgIGRlc3Ryb3llciA9IG5ldyBTaGlwKDMpXG4gICAgY2FycmllciA9IG5ldyBTaGlwKDUpXG4gICAgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpXG4gICAgc3ViID0gbmV3IFNoaXAoMylcbiAgICBwYXRyb2wgPSBuZXcgU2hpcCgyKVxuICAgIGNEZXN0cm95ZXIgPSBuZXcgU2hpcCgzKVxuICAgIGNDYXJyaWVyID0gbmV3IFNoaXAoNSlcbiAgICBjQmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpXG4gICAgY1N1YiA9IG5ldyBTaGlwKDMpXG4gICAgY1BhdHJvbCA9IG5ldyBTaGlwKDIpXG4gICAgY29tcHV0ZXJCb2FyZCA9IG5ldyBCb2FyZFxuICAgIHBsYWNlQ29tcHV0ZXJTaGlwcygpXG4gICAgY3JlYXRlQ29tcHV0ZXJHcmlkKGNvbXB1dGVyQm9hcmQpXG4gICAgcGxheWVyQm9hcmQgPSBuZXcgQm9hcmRcbiAgICBjcmVhdGVQbGF5ZXJHcmlkKHBsYXllckJvYXJkKVxuICAgIGJ1dHRvbnMoKVxuICAgIGNoYW5nZUJvYXJkKClcbiAgfSk7XG59XG5cblxuLy9jYWxsIGJ1dHRvbiBhbmQgY2hhbmdlIGJvYXJkIGZ1bmN0c1xuYnV0dG9ucygpXG5jaGFuZ2VCb2FyZCgpXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9