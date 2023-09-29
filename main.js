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
    gap: 10px;
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,aAAa;IACb,eAAe;IACf,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,eAAe;IACf,uBAAuB;AAC3B;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,SAAS;IACT,mBAAmB;IACnB,YAAY;AAChB","sourcesContent":["body {\n    text-align: center;\n    background-color: #09046b;\n}\n\nh1 {\n    font-size: 45px;\n    color: wheat;\n}\n\n#container {\n    height: 300px;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    justify-content: center;\n}\n\n#computerContainer {\n    width: 290px;\n    height: 290px;\n    display: flex;\n    flex-wrap: wrap;\n    background-color: wheat;\n}\n\n#playerContainer {\n    width: 290px;\n    height: 290px;\n    display: flex;\n    flex-wrap: wrap;\n    background-color: wheat;\n}\n\n\n.grid, .grid2 {\n    border: solid;\n    border-width: 0.8px;\n    font-size: 22px;\n    width: 27px;\n    height: 27px;\n}\n\n#buttonContainer {\n    padding-top: 15px;\n    display: flex;\n    width: 275px;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n}\n\n#changeBoard, #startGame, #newGame {\n    width: 200px;\n    border-radius: 10px;\n    font-size: 17px;\n    background-color: wheat;\n}\n\nh2 {\n    font-size: 35px;\n    margin: 0;\n    margin-bottom: 10px;\n    color: wheat;\n}\n"],"sourceRoot":""}]);
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

            if (
                typeof array.board[i][y] === 'object'
            ) {
                grid.style.backgroundColor = 'grey';
            }

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
    changeBoard.textContent = 'Change Board'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0IsdUNBQUk7QUFDdEIscUJBQXFCLHVDQUFJO0FBQ3pCLGNBQWMsdUNBQUk7QUFDbEIsaUJBQWlCLHVDQUFJO0FBQ3JCLHFCQUFxQix1Q0FBSTtBQUN6QixtQkFBbUIsdUNBQUk7QUFDdkIsc0JBQXNCLHVDQUFJO0FBQzFCLGVBQWUsdUNBQUk7QUFDbkIsa0JBQWtCLHVDQUFJO0FBQ3RCLHdCQUF3Qiw2Q0FBSztBQUM3QjtBQUNBLElBQUkseURBQWtCO0FBQ3RCLHNCQUFzQiw2Q0FBSztBQUMzQixJQUFJLHVEQUFnQjtBQUNwQixJQUFJLDhDQUFPO0FBQ1g7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0EsNkNBQU87QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTA0NmI7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgY29sb3I6IHdoZWF0O1xufVxuXG4jY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2NvbXB1dGVyQ29udGFpbmVyIHtcbiAgICB3aWR0aDogMjkwcHg7XG4gICAgaGVpZ2h0OiAyOTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbn1cblxuI3BsYXllckNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDI5MHB4O1xuICAgIGhlaWdodDogMjkwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG59XG5cblxuLmdyaWQsIC5ncmlkMiB7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDAuOHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB3aWR0aDogMjdweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG59XG5cbiNidXR0b25Db250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDI3NXB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG59XG5cbiNjaGFuZ2VCb2FyZCwgI3N0YXJ0R2FtZSwgI25ld0dhbWUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogd2hlYXQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwNDZiO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogNDVweDtcXG4gICAgY29sb3I6IHdoZWF0O1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbXB1dGVyQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDI5MHB4O1xcbiAgICBoZWlnaHQ6IDI5MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbn1cXG5cXG4jcGxheWVyQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDI5MHB4O1xcbiAgICBoZWlnaHQ6IDI5MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbn1cXG5cXG5cXG4uZ3JpZCwgLmdyaWQyIHtcXG4gICAgYm9yZGVyOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwLjhweDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICB3aWR0aDogMjdweDtcXG4gICAgaGVpZ2h0OiAyN3B4O1xcbn1cXG5cXG4jYnV0dG9uQ29udGFpbmVyIHtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyNzVweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jY2hhbmdlQm9hcmQsICNzdGFydEdhbWUsICNuZXdHYW1lIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBjb2xvcjogd2hlYXQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXJHcmlkKGFycmF5KSB7XG4gICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgY29uc3QgY29udGFpbmVyQ3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyQ3JlYXRlLmlkID0gJ3BsYXllckNvbnRhaW5lcidcbiAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJDcmVhdGUpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5ib2FyZC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgYXJyYXkuYm9hcmRbaV0ubGVuZ3RoOyB5KyspIHtcblxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckNvbnRhaW5lcicpO1xuICAgICAgICAgICAgY29uc3QgZ3JpZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgZ3JpZDIuY2xhc3NMaXN0LmFkZCgnZ3JpZDInKTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHR5cGVvZiBhcnJheS5ib2FyZFtpXVt5XSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGdyaWQyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmV5JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGFycmF5LmJvYXJkW2ldW3ldID09PSAnKidcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGdyaWQyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYXJyYXkuYm9hcmRbaV1beV0gPT0gJ3gnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBncmlkMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWQyKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVyR3JpZChhcnJheSkge1xuXG4gICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgY29uc3QgY29udGFpbmVyQ3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyQ3JlYXRlLmlkID0gJ2NvbXB1dGVyQ29udGFpbmVyJ1xuICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckNyZWF0ZSk7XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkuYm9hcmQubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGFycmF5LmJvYXJkW2ldLmxlbmd0aDsgeSsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wdXRlckNvbnRhaW5lcicpO1xuICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICAgICAgICAgIGdyaWQudmFsdWUgPSAoaSArIFwiLFwiICsgeSlcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHR5cGVvZiBhcnJheS5ib2FyZFtpXVt5XSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGdyaWQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYXJyYXkuYm9hcmRbaV1beV0gPT09ICcqJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZ3JpZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGFycmF5LmJvYXJkW2ldW3ldID09ICd4J1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZ3JpZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5mdW5jdGlvbiByZW1vdmVCb2FyZCgpIHtcbiAgICBjb25zdCByZW1vdmVQbGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllckNvbnRhaW5lclwiKTtcbiAgICBjb25zdCByZW1vdmVDb21wdXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcHV0ZXJDb250YWluZXJcIik7XG4gICAgcmVtb3ZlQ29tcHV0ZXIucmVtb3ZlKClcbiAgICByZW1vdmVQbGF5ZXIucmVtb3ZlKClcbn1cblxuZnVuY3Rpb24gd2lubmVyKG1lc3NhZ2UpIHtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy5pZCA9ICdoZWFkaW5nJ1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIGNvbnN0IG5ld0dhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdHYW1lLmlkID0gJ25ld0dhbWUnXG4gICAgbmV3R2FtZS50ZXh0Q29udGVudCA9ICdQbGF5IEFub3RoZXIgR2FtZSdcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0dhbWUpO1xuXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVdpbm5lciAoKSB7XG4gICAgY29uc3QgcmVtb3ZlV2lubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkaW5nXCIpO1xuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3R2FtZVwiKTtcbiAgICByZW1vdmVXaW5uZXIucmVtb3ZlKClcbiAgICByZW1vdmVCdXR0b24ucmVtb3ZlKClcbn1cblxuZnVuY3Rpb24gYnV0dG9ucygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQ29udGFpbmVyJyk7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmlkID0gJ2J1dHRvbkNvbnRhaW5lcidcbiAgICBjb25zdCBjaGFuZ2VCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNoYW5nZUJvYXJkLmlkID0gJ2NoYW5nZUJvYXJkJ1xuICAgIGNoYW5nZUJvYXJkLnRleHRDb250ZW50ID0gJ0NoYW5nZSBCb2FyZCdcbiAgICBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydEdhbWUuaWQgPSAnc3RhcnRHYW1lJ1xuICAgIHN0YXJ0R2FtZS50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lJ1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFuZ2VCb2FyZClcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRHYW1lKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpXG5cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQnV0dG9ucyAoKSB7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25Db250YWluZXJcIik7XG4gICAgXG4gICAgYnV0dG9uQ29udGFpbmVyLnJlbW92ZSgpXG5cbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVQbGF5ZXJHcmlkLFxuICAgIGNyZWF0ZUNvbXB1dGVyR3JpZCxcbiAgICByZW1vdmVCb2FyZCxcbiAgICB3aW5uZXIsXG4gICAgYnV0dG9ucyxcbiAgICByZW1vdmVXaW5uZXIsXG4gICAgcmVtb3ZlQnV0dG9ucyxcbn07XG5cbiIsImltcG9ydCB7XG4gICAgU2hpcCxcbn0gZnJvbSBcIi4vc2hpcFwiO1xuXG5cbmNsYXNzIEJvYXJkIHtcblxuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdXG4gICAgICAgICAgICBdXG5cbiAgICB9XG5cbiAgICBjaGVja1BsYWNlbWVudCh4LCB5LCBzaGlwLCBwb3NpdGlvbikge1xuXG4gICAgICAgIGxldCBsZW5ndGggPSBzaGlwLmxlbmd0aFxuXG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09ICdoJyAmJiB4ICsgbGVuZ3RoID49IDEwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ25vJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAndicgJiYgeSArIGxlbmd0aCA+PSAxMCkge1xuICAgICAgICAgICAgcmV0dXJuICdubydcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPT0gJ2gnKSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoICsgMTsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuYm9hcmRbeV1baSArIHhdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ25vJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPT0gJ3YnKSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoICsgMTsgaSsrKSB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmJvYXJkW2kgKyB5XVt4XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdubydcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAneWVzJ1xuICAgIH1cblxuXG4gICAgcGxhY2VTaGlwKHgsIHksIHNoaXAsIHBvc2l0aW9uKSB7XG5cbiAgICAgICAgbGV0IGxlbmd0aCA9IHNoaXAubGVuZ3RoXG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09ICdoJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beCArIGldID0gc2hpcFxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAndicpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeSArIGldW3hdID0gc2hpcFxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFxuXG4gICAgfVxuXG4gICAgYXR0YWNrKHgsIHkpIHtcblxuICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PSBcIlwiICYmIHRoaXMuYm9hcmRbeV1beF0gIT0gJ3gnICYmIHRoaXMuYm9hcmRbeV1beF0gIT0gJyonKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beF0gPSAneCdcbiAgICAgICAgICAgIHJldHVybiAnbm90IGhpdCdcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PSAneCcgfHwgdGhpcy5ib2FyZFt5XVt4XSA9PSAnKicpIHtcblxuICAgICAgICAgICAgcmV0dXJuICd0YWtlbidcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuXG5cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beF0uaGl0KDEpXG5cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beF0gPSAnKidcblxuICAgICAgICAgICAgcmV0dXJuICdoaXQnXG5cbiAgICAgICAgfVxuXG5cblxuXG4gICAgfVxuXG59XG5cblxuXG5leHBvcnQge1xuICAgIEJvYXJkLFxuXG59OyIsIlxuXG5mdW5jdGlvbiBjb21wdXRlclBsYXllcihib2FyZCkge1xuXG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tKCkge1xuICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG5cbiAgICByZXR1cm4gKHJhbmQpXG4gIH1cblxuXG4gIGZ1bmN0aW9uIG1ha2VQbGFjZW1lbnQoKSB7XG5cbiAgICBsZXQgeCA9IGdldFJhbmRvbSgpXG4gICAgbGV0IHkgPSBnZXRSYW5kb20oKVxuXG4gICAgbGV0IGF0dGFjayA9IGJvYXJkLmF0dGFjayh4LCB5KVxuICAgIGlmIChhdHRhY2sgPT0gJ3Rha2VuJykge1xuICAgICAgbWFrZVBsYWNlbWVudCgpXG4gICAgfVxuXG5cbiAgfVxuICBtYWtlUGxhY2VtZW50KClcblxufVxuXG5cblxuZXhwb3J0IHtcbiAgY29tcHV0ZXJQbGF5ZXIsXG5cbn07IiwiY2xhc3MgU2hpcCB7XG4gICAgXG4gIFxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgICAgIFxuICAgICAgdGhpcy5oaXRzID0gW11cbiAgICB9XG4gIFxuICAgaGl0KHBvc2l0aW9uKSB7XG4gICAgdGhpcy5oaXRzLnB1c2gocG9zaXRpb24pXG4gICAgICAgIHJldHVyblxuICAgICAgXG4gICAgfVxuICBcbiAgICBzdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5oaXRzLmxlbmd0aCA9PSB0aGlzLmxlbmd0aClcbiAgICAgIHJldHVybiAnc3VuaydcbiAgICBlbHNlIHtcbiAgICAgICByZXR1cm4gJ25vdCBzdW5rJ1xuICAgIH1cbiAgICB9XG4gIH1cblxuIFxuXG4gIGV4cG9ydCB7XG4gICBTaGlwLFxuICAgIFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL2NoYW5nZSBsYXRlciB3aGVuIHdhbnQgdG8gdXNlIGNzcyAqKioqKipcblxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5pbXBvcnQge1xuICBTaGlwLFxufSBmcm9tIFwiLi9zaGlwXCI7XG5cbmltcG9ydCB7XG4gIEJvYXJkLFxufSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuaW1wb3J0IHtcbiAgY3JlYXRlUGxheWVyR3JpZCxcbiAgY3JlYXRlQ29tcHV0ZXJHcmlkLFxuICByZW1vdmVCb2FyZCxcbiAgd2lubmVyLFxuICBidXR0b25zLFxuICByZW1vdmVXaW5uZXIsXG4gIHJlbW92ZUJ1dHRvbnMsXG59IGZyb20gXCIuL2RvbVwiO1xuXG5pbXBvcnQge1xuICBjb21wdXRlclBsYXllcixcblxufSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuXG5cbi8vIGNyZWF0ZSBwbGF5ZXIgZmxlZXRcblxubGV0IGRlc3Ryb3llciA9IG5ldyBTaGlwKDMpXG5sZXQgY2FycmllciA9IG5ldyBTaGlwKDUpXG5sZXQgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpXG5sZXQgc3ViID0gbmV3IFNoaXAoMylcbmxldCBwYXRyb2wgPSBuZXcgU2hpcCgyKVxuXG5cbi8vIGNyZWF0ZSBjb21wdXRlciBmbGVldFxuXG5sZXQgY0Rlc3Ryb3llciA9IG5ldyBTaGlwKDMpXG5sZXQgY0NhcnJpZXIgPSBuZXcgU2hpcCg1KVxubGV0IGNCYXR0bGVzaGlwID0gbmV3IFNoaXAoNClcbmxldCBjU3ViID0gbmV3IFNoaXAoMylcbmxldCBjUGF0cm9sID0gbmV3IFNoaXAoMilcblxuXG4vLyBjcmVhdGUgY29tcHV0ZXIgQm9hcmRcbmxldCBjb21wdXRlckJvYXJkID0gbmV3IEJvYXJkXG5cbi8vIHBsYWNlIGNvbXB1dGVyIHNoaXBzXG5cbmZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seShzaGlwLCBib2FyZCkge1xuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbUNvb3IoKSB7XG4gICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cblxuICAgIHJldHVybiAoeClcbiAgfVxuICBmdW5jdGlvbiBnZXRSYW5kb21PcnIoKSB7XG4gICAgbGV0IG9yciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gICAgaWYgKG9yciA9PSAwKSB7XG5cbiAgICAgIHJldHVybiAndidcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gJ2gnXG4gICAgfVxuXG4gIH1cblxuXG4gIGZ1bmN0aW9uIGNoZWNrU2hpcChzaGlwKSB7XG4gICAgbGV0IGNvb3JBcnIgPSBbXVxuICAgIGxldCB4ID0gZ2V0UmFuZG9tQ29vcigpXG4gICAgbGV0IHkgPSBnZXRSYW5kb21Db29yKClcbiAgICBsZXQgY09yciA9IGdldFJhbmRvbU9ycigpXG5cblxuXG4gICAgbGV0IGNoZWNrID0gYm9hcmQuY2hlY2tQbGFjZW1lbnQoeCwgeSwgc2hpcCwgY09ycilcblxuICAgIGlmIChjaGVjayA9PSAneWVzJykge1xuICAgICAgY29vckFyci5wdXNoKHgpXG4gICAgICBjb29yQXJyLnB1c2goeSlcblxuICAgICAgYm9hcmQucGxhY2VTaGlwKHgsIHksIHNoaXAsIGNPcnIpXG5cbiAgICAgIHJldHVybiBjb29yQXJyXG4gICAgfVxuICAgIGlmIChjaGVjayA9PSAnbm8nKSB7XG4gICAgICBjaGVja1NoaXAoc2hpcClcblxuICAgIH1cbiAgfVxuXG4gIGNoZWNrU2hpcChzaGlwKVxuXG59XG4vL3BsYWNlIGNvbXB1dGVyIHNoaXBzXG5cbmZ1bmN0aW9uIHBsYWNlQ29tcHV0ZXJTaGlwcygpIHtcbiAgcGxhY2VTaGlwc1JhbmRvbWx5KGNTdWIsIGNvbXB1dGVyQm9hcmQpXG4gIHBsYWNlU2hpcHNSYW5kb21seShjUGF0cm9sLCBjb21wdXRlckJvYXJkKVxuICBwbGFjZVNoaXBzUmFuZG9tbHkoY0Rlc3Ryb3llciwgY29tcHV0ZXJCb2FyZClcbiAgcGxhY2VTaGlwc1JhbmRvbWx5KGNDYXJyaWVyLCBjb21wdXRlckJvYXJkKVxuICBwbGFjZVNoaXBzUmFuZG9tbHkoY0JhdHRsZXNoaXAsIGNvbXB1dGVyQm9hcmQpXG59XG5cbnBsYWNlQ29tcHV0ZXJTaGlwcygpXG4vLyBwbGFjZSBwbGF5ZXIgc2hpcHNcblxuZnVuY3Rpb24gcGxhY2VQbGF5ZXJTaGlwcygpIHtcblxuICBwbGFjZVNoaXBzUmFuZG9tbHkoc3ViLCBwbGF5ZXJCb2FyZClcbiAgcGxhY2VTaGlwc1JhbmRvbWx5KHBhdHJvbCwgcGxheWVyQm9hcmQpXG4gIHBsYWNlU2hpcHNSYW5kb21seShkZXN0cm95ZXIsIHBsYXllckJvYXJkKVxuICBwbGFjZVNoaXBzUmFuZG9tbHkoY2FycmllciwgcGxheWVyQm9hcmQpXG4gIHBsYWNlU2hpcHNSYW5kb21seShiYXR0bGVzaGlwLCBwbGF5ZXJCb2FyZClcblxufVxuXG5jcmVhdGVDb21wdXRlckdyaWQoY29tcHV0ZXJCb2FyZClcblxuLy9jcmVhdGUgcGxheWVyIGJvYXJkXG5sZXQgcGxheWVyQm9hcmQgPSBuZXcgQm9hcmRcbmNyZWF0ZVBsYXllckdyaWQocGxheWVyQm9hcmQpXG5cbi8vYWRkIHBsYXllciByb3VuZCBmdW5jdGlvblxuXG5mdW5jdGlvbiBwbGF5Um91bmQoYm9hcmQpIHtcblxuICBjb25zdCBzcG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkXCIpO1xuXG4gIHNwb3QuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXllclBsYWNlbWVudCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgIGNvbnN0IHNwb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyaWRcIik7XG4gICAgc3BvdC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5ZXJQbGFjZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheWVyUGxhY2VtZW50KGUpIHtcblxuICAgIGxldCBjb29yID0gZS50YXJnZXQudmFsdWVcbiAgICBsZXQgYXJyID0gY29vci5zcGxpdChcIixcIilcbiAgICBsZXQgeSA9IGFyclswXVxuICAgIGxldCB4ID0gYXJyWzFdXG5cblxuICAgIFxuICAgIGlmIChib2FyZC5ib2FyZFt5XVt4XSA9PSAneCcgfHwgYm9hcmQuYm9hcmRbeV1beF0gPT0gJyonKSB7XG4gICAgICBcbiAgICAgIHJlbW92ZUJvYXJkKClcbiAgICAgIGNyZWF0ZUNvbXB1dGVyR3JpZChjb21wdXRlckJvYXJkKVxuICAgICAgY3JlYXRlUGxheWVyR3JpZChwbGF5ZXJCb2FyZClcblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJvYXJkLmF0dGFjayh4LCB5KVxuICAgICAgY29tcHV0ZXJQbGF5ZXIocGxheWVyQm9hcmQpXG4gICAgICByZW1vdmVCb2FyZCgpXG4gICAgICBjcmVhdGVDb21wdXRlckdyaWQoY29tcHV0ZXJCb2FyZClcbiAgICAgIGNyZWF0ZVBsYXllckdyaWQocGxheWVyQm9hcmQpXG4gICAgfVxuXG4gICAgaWYgKGRlc3Ryb3llci5zdW5rKCkgPT0gJ3N1bmsnICYmIGNhcnJpZXIuc3VuaygpID09ICdzdW5rJyAmJiBiYXR0bGVzaGlwLnN1bmsoKSA9PSAnc3VuaydcbiAgICAgICYmIHN1Yi5zdW5rKCkgPT0gJ3N1bmsnICYmIHBhdHJvbC5zdW5rKCkgPT0gJ3N1bmsnKSB7XG5cbiAgICAgIHdpbm5lcignQ29tcHV0ZXIgV2lucycpXG4gICAgICByZW1vdmVMaXN0ZW5lcigpXG4gICAgICBuZXdHYW1lKClcbiAgICB9XG5cbiAgICBlbHNlIGlmIChjRGVzdHJveWVyLnN1bmsoKSA9PSAnc3VuaycgJiYgY0NhcnJpZXIuc3VuaygpID09ICdzdW5rJyAmJiBjQmF0dGxlc2hpcC5zdW5rKCkgPT0gJ3N1bmsnXG4gICAgICAmJiBjU3ViLnN1bmsoKSA9PSAnc3VuaycgJiYgY1BhdHJvbC5zdW5rKCkgPT0gJ3N1bmsnKSB7XG5cbiAgICAgIHdpbm5lcignWW91IFdpbicpXG4gICAgICByZW1vdmVMaXN0ZW5lcigpXG4gICAgICBuZXdHYW1lKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwbGF5Um91bmQoY29tcHV0ZXJCb2FyZClcbiAgICB9XG5cbiAgfVxuXG5cbn1cblxuLy8gY2hhbmdlIGJvYXJkIGxpc3RlbmVyIGFuZCBmdW5jdGlvblxuXG5mdW5jdGlvbiBjaGFuZ2VCb2FyZCgpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2VCb2FyZFwiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuXG4gICAgcGxheWVyQm9hcmQgPSBuZXcgQm9hcmRcbiAgICBwbGFjZVBsYXllclNoaXBzKClcbiAgICByZW1vdmVCb2FyZCgpXG4gICAgY3JlYXRlQ29tcHV0ZXJHcmlkKGNvbXB1dGVyQm9hcmQpXG4gICAgY3JlYXRlUGxheWVyR3JpZChwbGF5ZXJCb2FyZClcbiAgICBidXR0b25zKClcbiAgICBzdGFydEdhbWUoKVxuICAgIGNoYW5nZUJvYXJkKClcblxuICB9KTtcbn1cblxuLy9zdGFydCBnYW1lIGxpc3RlbmVyIGFuZCBmdW5jdGlvblxuXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRHYW1lXCIpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZUJ1dHRvbnMoKVxuICAgIHBsYXlSb3VuZChjb21wdXRlckJvYXJkKVxuXG5cbiAgfSk7XG59XG5cbi8vIG5ldyBnYW1lIGxpc3RlbmVyIGFuZCBmdW5jdGlvblxuXG5mdW5jdGlvbiBuZXdHYW1lKCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dhbWVcIik7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cblxuICAgIHJlbW92ZUJvYXJkKClcbiAgICByZW1vdmVXaW5uZXIoKVxuICAgIGRlc3Ryb3llciA9IG5ldyBTaGlwKDMpXG4gICAgY2FycmllciA9IG5ldyBTaGlwKDUpXG4gICAgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpXG4gICAgc3ViID0gbmV3IFNoaXAoMylcbiAgICBwYXRyb2wgPSBuZXcgU2hpcCgyKVxuICAgIGNEZXN0cm95ZXIgPSBuZXcgU2hpcCgzKVxuICAgIGNDYXJyaWVyID0gbmV3IFNoaXAoNSlcbiAgICBjQmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpXG4gICAgY1N1YiA9IG5ldyBTaGlwKDMpXG4gICAgY1BhdHJvbCA9IG5ldyBTaGlwKDIpXG4gICAgY29tcHV0ZXJCb2FyZCA9IG5ldyBCb2FyZFxuICAgIHBsYWNlQ29tcHV0ZXJTaGlwcygpXG4gICAgY3JlYXRlQ29tcHV0ZXJHcmlkKGNvbXB1dGVyQm9hcmQpXG4gICAgcGxheWVyQm9hcmQgPSBuZXcgQm9hcmRcbiAgICBjcmVhdGVQbGF5ZXJHcmlkKHBsYXllckJvYXJkKVxuICAgIGJ1dHRvbnMoKVxuICAgIGNoYW5nZUJvYXJkKClcbiAgfSk7XG59XG5cblxuLy9jYWxsIGJ1dHRvbiBhbmQgY2hhbmdlIGJvYXJkIGZ1bmN0c1xuYnV0dG9ucygpXG5jaGFuZ2VCb2FyZCgpXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9