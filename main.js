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
    width: 300px;
    height: 290px;
    display: flex;
    flex-wrap: wrap;

}

#playerContainer {
    width: 300px;
    height: 290px;
    display: flex;
    flex-wrap: wrap;

}


.grid, .grid2 {
    border: solid;
    border-width: 0.8px;
    font-size: 22px;
    width: 27px;
    height: 27px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,aAAa;IACb,eAAe;IACf,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,eAAe;;AAEnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,eAAe;;AAEnB;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,WAAW;IACX,YAAY;AAChB","sourcesContent":["body {\n    text-align: center;\n}\n\n#container {\n    height: 300px;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    justify-content: center;\n}\n\n#computerContainer {\n    width: 300px;\n    height: 290px;\n    display: flex;\n    flex-wrap: wrap;\n\n}\n\n#playerContainer {\n    width: 300px;\n    height: 290px;\n    display: flex;\n    flex-wrap: wrap;\n\n}\n\n\n.grid, .grid2 {\n    border: solid;\n    border-width: 0.8px;\n    font-size: 22px;\n    width: 27px;\n    height: 27px;\n}\n"],"sourceRoot":""}]);
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

            for (let i = 0; i < length; i++) {

                if (this.board[y][i] != "") {
                    return 'no'
                }
            }
        }
        if (position == 'v') {

            for (let i = 0; i < length; i++) {
                if (this.board[i][x] != "") {
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
    let orr = Math.floor(Math.random() * 1);
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

    board.attack(x, y)
    ;(0,_player__WEBPACK_IMPORTED_MODULE_4__.computerPlayer)(playerBoard)
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.removeBoard)()
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createComputerGrid)(computerBoard)
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createPlayerGrid)(playerBoard)


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUEsTUFBTSw0Q0FBTTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0Esc0JBQXNCLDZDQUFLO0FBQzNCO0FBQ0EsSUFBSSxrREFBVztBQUNmLElBQUkseURBQWtCO0FBQ3RCLElBQUksdURBQWdCO0FBQ3BCLElBQUksOENBQU87QUFDWDtBQUNBOztBQUVBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBYTtBQUNqQjtBQUNBOztBQUVBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxpREFBVztBQUNmLElBQUksbURBQVk7QUFDaEIsb0JBQW9CLHVDQUFJO0FBQ3hCLGtCQUFrQix1Q0FBSTtBQUN0QixxQkFBcUIsdUNBQUk7QUFDekIsY0FBYyx1Q0FBSTtBQUNsQixpQkFBaUIsdUNBQUk7QUFDckIscUJBQXFCLHVDQUFJO0FBQ3pCLG1CQUFtQix1Q0FBSTtBQUN2QixzQkFBc0IsdUNBQUk7QUFDMUIsZUFBZSx1Q0FBSTtBQUNuQixrQkFBa0IsdUNBQUk7QUFDdEIsd0JBQXdCLDZDQUFLO0FBQzdCO0FBQ0EsSUFBSSx5REFBa0I7QUFDdEIsc0JBQXNCLDZDQUFLO0FBQzNCLElBQUksdURBQWdCO0FBQ3BCLElBQUksOENBQU87QUFDWDtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQSw2Q0FBTztBQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250YWluZXIge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jY29tcHV0ZXJDb250YWluZXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG59XG5cbiNwbGF5ZXJDb250YWluZXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG59XG5cblxuLmdyaWQsIC5ncmlkMiB7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDAuOHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB3aWR0aDogMjdweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7O0FBRW5COzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29tcHV0ZXJDb250YWluZXIge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjkwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG59XFxuXFxuI3BsYXllckNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyOTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcblxcbn1cXG5cXG5cXG4uZ3JpZCwgLmdyaWQyIHtcXG4gICAgYm9yZGVyOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwLjhweDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICB3aWR0aDogMjdweDtcXG4gICAgaGVpZ2h0OiAyN3B4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyR3JpZChhcnJheSkge1xuICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNvbnRhaW5lckNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lckNyZWF0ZS5pZCA9ICdwbGF5ZXJDb250YWluZXInXG4gICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyQ3JlYXRlKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkuYm9hcmQubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGFycmF5LmJvYXJkW2ldLmxlbmd0aDsgeSsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJDb250YWluZXInKTtcbiAgICAgICAgICAgIGNvbnN0IGdyaWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIGdyaWQyLmNsYXNzTGlzdC5hZGQoJ2dyaWQyJyk7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0eXBlb2YgYXJyYXkuYm9hcmRbaV1beV0gPT09ICdvYmplY3QnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBncmlkMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBhcnJheS5ib2FyZFtpXVt5XSA9PT0gJyonXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBncmlkMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGFycmF5LmJvYXJkW2ldW3ldID09ICd4J1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZ3JpZDIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkMik7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wdXRlckdyaWQoYXJyYXkpIHtcblxuICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNvbnRhaW5lckNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lckNyZWF0ZS5pZCA9ICdjb21wdXRlckNvbnRhaW5lcidcbiAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJDcmVhdGUpO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5LmJvYXJkLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBhcnJheS5ib2FyZFtpXS5sZW5ndGg7IHkrKykge1xuXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcHV0ZXJDb250YWluZXInKTtcbiAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XG4gICAgICAgICAgICBncmlkLnZhbHVlID0gKGkgKyBcIixcIiArIHkpXG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0eXBlb2YgYXJyYXkuYm9hcmRbaV1beV0gPT09ICdvYmplY3QnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBncmlkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmV5JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGFycmF5LmJvYXJkW2ldW3ldID09PSAnKidcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGdyaWQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBhcnJheS5ib2FyZFtpXVt5XSA9PSAneCdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGdyaWQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWQpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQm9hcmQoKSB7XG4gICAgY29uc3QgcmVtb3ZlUGxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJDb250YWluZXJcIik7XG4gICAgY29uc3QgcmVtb3ZlQ29tcHV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXB1dGVyQ29udGFpbmVyXCIpO1xuICAgIHJlbW92ZUNvbXB1dGVyLnJlbW92ZSgpXG4gICAgcmVtb3ZlUGxheWVyLnJlbW92ZSgpXG59XG5cbmZ1bmN0aW9uIHdpbm5lcihtZXNzYWdlKSB7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcuaWQgPSAnaGVhZGluZydcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICBjb25zdCBuZXdHYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3R2FtZS5pZCA9ICduZXdHYW1lJ1xuICAgIG5ld0dhbWUudGV4dENvbnRlbnQgPSAnUGxheSBBbm90aGVyIEdhbWUnXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdHYW1lKTtcblxufVxuXG5mdW5jdGlvbiByZW1vdmVXaW5uZXIgKCkge1xuICAgIGNvbnN0IHJlbW92ZVdpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGluZ1wiKTtcbiAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dhbWVcIik7XG4gICAgcmVtb3ZlV2lubmVyLnJlbW92ZSgpXG4gICAgcmVtb3ZlQnV0dG9uLnJlbW92ZSgpXG59XG5cbmZ1bmN0aW9uIGJ1dHRvbnMoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5pZCA9ICdidXR0b25Db250YWluZXInXG4gICAgY29uc3QgY2hhbmdlQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjaGFuZ2VCb2FyZC5pZCA9ICdjaGFuZ2VCb2FyZCdcbiAgICBjaGFuZ2VCb2FyZC50ZXh0Q29udGVudCA9ICdDaGFuZ2UgQm9hcmQnXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3RhcnRHYW1lLmlkID0gJ3N0YXJ0R2FtZSdcbiAgICBzdGFydEdhbWUudGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSdcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hhbmdlQm9hcmQpXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0R2FtZSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKVxuXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUJ1dHRvbnMgKCkge1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uQ29udGFpbmVyXCIpO1xuICAgIFxuICAgIGJ1dHRvbkNvbnRhaW5lci5yZW1vdmUoKVxuXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlUGxheWVyR3JpZCxcbiAgICBjcmVhdGVDb21wdXRlckdyaWQsXG4gICAgcmVtb3ZlQm9hcmQsXG4gICAgd2lubmVyLFxuICAgIGJ1dHRvbnMsXG4gICAgcmVtb3ZlV2lubmVyLFxuICAgIHJlbW92ZUJ1dHRvbnMsXG59O1xuXG4iLCJpbXBvcnQge1xuICAgIFNoaXAsXG59IGZyb20gXCIuL3NoaXBcIjtcblxuXG5jbGFzcyBCb2FyZCB7XG5cblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPVxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXVxuICAgICAgICAgICAgXVxuXG4gICAgfVxuXG4gICAgY2hlY2tQbGFjZW1lbnQoeCwgeSwgc2hpcCwgcG9zaXRpb24pIHtcblxuICAgICAgICBsZXQgbGVuZ3RoID0gc2hpcC5sZW5ndGhcblxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAnaCcgJiYgeCArIGxlbmd0aCA+PSAxMCkge1xuICAgICAgICAgICAgcmV0dXJuICdubydcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPT0gJ3YnICYmIHkgKyBsZW5ndGggPj0gMTApIHtcbiAgICAgICAgICAgIHJldHVybiAnbm8nXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uID09ICdoJykge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVtpXSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnbm8nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAndicpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW3hdICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdubydcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAneWVzJ1xuICAgIH1cblxuXG4gICAgcGxhY2VTaGlwKHgsIHksIHNoaXAsIHBvc2l0aW9uKSB7XG5cbiAgICAgICAgbGV0IGxlbmd0aCA9IHNoaXAubGVuZ3RoXG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09ICdoJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beCArIGldID0gc2hpcFxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAndicpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeSArIGldW3hdID0gc2hpcFxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFxuXG4gICAgfVxuXG4gICAgYXR0YWNrKHgsIHkpIHtcblxuICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PSBcIlwiICYmIHRoaXMuYm9hcmRbeV1beF0gIT0gJ3gnICYmIHRoaXMuYm9hcmRbeV1beF0gIT0gJyonKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beF0gPSAneCdcbiAgICAgICAgICAgIHJldHVybiAnbm90IGhpdCdcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PSAneCcgfHwgdGhpcy5ib2FyZFt5XVt4XSA9PSAnKicpIHtcblxuICAgICAgICAgICAgcmV0dXJuICd0YWtlbidcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuXG5cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beF0uaGl0KDEpXG5cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beF0gPSAnKidcblxuICAgICAgICAgICAgcmV0dXJuICdoaXQnXG5cbiAgICAgICAgfVxuXG5cblxuXG4gICAgfVxuXG59XG5cblxuXG5leHBvcnQge1xuICAgIEJvYXJkLFxuXG59OyIsIlxuXG5mdW5jdGlvbiBjb21wdXRlclBsYXllcihib2FyZCkge1xuXG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tKCkge1xuICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG5cbiAgICByZXR1cm4gKHJhbmQpXG4gIH1cblxuXG4gIGZ1bmN0aW9uIG1ha2VQbGFjZW1lbnQoKSB7XG5cbiAgICBsZXQgeCA9IGdldFJhbmRvbSgpXG4gICAgbGV0IHkgPSBnZXRSYW5kb20oKVxuXG4gICAgbGV0IGF0dGFjayA9IGJvYXJkLmF0dGFjayh4LCB5KVxuICAgIGlmIChhdHRhY2sgPT0gJ3Rha2VuJykge1xuICAgICAgbWFrZVBsYWNlbWVudCgpXG4gICAgfVxuXG5cbiAgfVxuICBtYWtlUGxhY2VtZW50KClcblxufVxuXG5cblxuZXhwb3J0IHtcbiAgY29tcHV0ZXJQbGF5ZXIsXG5cbn07IiwiY2xhc3MgU2hpcCB7XG4gICAgXG4gIFxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgICAgIFxuICAgICAgdGhpcy5oaXRzID0gW11cbiAgICB9XG4gIFxuICAgaGl0KHBvc2l0aW9uKSB7XG4gICAgdGhpcy5oaXRzLnB1c2gocG9zaXRpb24pXG4gICAgICAgIHJldHVyblxuICAgICAgXG4gICAgfVxuICBcbiAgICBzdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5oaXRzLmxlbmd0aCA9PSB0aGlzLmxlbmd0aClcbiAgICAgIHJldHVybiAnc3VuaydcbiAgICBlbHNlIHtcbiAgICAgICByZXR1cm4gJ25vdCBzdW5rJ1xuICAgIH1cbiAgICB9XG4gIH1cblxuIFxuXG4gIGV4cG9ydCB7XG4gICBTaGlwLFxuICAgIFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL2NoYW5nZSBsYXRlciB3aGVuIHdhbnQgdG8gdXNlIGNzcyAqKioqKipcblxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5pbXBvcnQge1xuICBTaGlwLFxufSBmcm9tIFwiLi9zaGlwXCI7XG5cbmltcG9ydCB7XG4gIEJvYXJkLFxufSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuaW1wb3J0IHtcbiAgY3JlYXRlUGxheWVyR3JpZCxcbiAgY3JlYXRlQ29tcHV0ZXJHcmlkLFxuICByZW1vdmVCb2FyZCxcbiAgd2lubmVyLFxuICBidXR0b25zLFxuICByZW1vdmVXaW5uZXIsXG4gIHJlbW92ZUJ1dHRvbnMsXG59IGZyb20gXCIuL2RvbVwiO1xuXG5pbXBvcnQge1xuICBjb21wdXRlclBsYXllcixcblxufSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuXG5cbi8vIGNyZWF0ZSBwbGF5ZXIgZmxlZXRcblxubGV0IGRlc3Ryb3llciA9IG5ldyBTaGlwKDMpXG5sZXQgY2FycmllciA9IG5ldyBTaGlwKDUpXG5sZXQgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpXG5sZXQgc3ViID0gbmV3IFNoaXAoMylcbmxldCBwYXRyb2wgPSBuZXcgU2hpcCgyKVxuXG5cbi8vIGNyZWF0ZSBjb21wdXRlciBmbGVldFxuXG5sZXQgY0Rlc3Ryb3llciA9IG5ldyBTaGlwKDMpXG5sZXQgY0NhcnJpZXIgPSBuZXcgU2hpcCg1KVxubGV0IGNCYXR0bGVzaGlwID0gbmV3IFNoaXAoNClcbmxldCBjU3ViID0gbmV3IFNoaXAoMylcbmxldCBjUGF0cm9sID0gbmV3IFNoaXAoMilcblxuXG4vLyBjcmVhdGUgY29tcHV0ZXIgQm9hcmRcbmxldCBjb21wdXRlckJvYXJkID0gbmV3IEJvYXJkXG5cbi8vIHBsYWNlIGNvbXB1dGVyIHNoaXBzXG5cbmZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seShzaGlwLCBib2FyZCkge1xuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbUNvb3IoKSB7XG4gICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cblxuICAgIHJldHVybiAoeClcbiAgfVxuICBmdW5jdGlvbiBnZXRSYW5kb21PcnIoKSB7XG4gICAgbGV0IG9yciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEpO1xuICAgIGlmIChvcnIgPT0gMCkge1xuICAgICAgcmV0dXJuICd2J1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAnaCdcbiAgICB9XG5cbiAgfVxuXG5cbiAgZnVuY3Rpb24gY2hlY2tTaGlwKHNoaXApIHtcbiAgICBsZXQgY29vckFyciA9IFtdXG4gICAgbGV0IHggPSBnZXRSYW5kb21Db29yKClcbiAgICBsZXQgeSA9IGdldFJhbmRvbUNvb3IoKVxuICAgIGxldCBjT3JyID0gZ2V0UmFuZG9tT3JyKClcblxuXG5cbiAgICBsZXQgY2hlY2sgPSBib2FyZC5jaGVja1BsYWNlbWVudCh4LCB5LCBzaGlwLCBjT3JyKVxuXG4gICAgaWYgKGNoZWNrID09ICd5ZXMnKSB7XG4gICAgICBjb29yQXJyLnB1c2goeClcbiAgICAgIGNvb3JBcnIucHVzaCh5KVxuXG4gICAgICBib2FyZC5wbGFjZVNoaXAoeCwgeSwgc2hpcCwgY09ycilcbiAgICAgIHJldHVybiBjb29yQXJyXG4gICAgfVxuICAgIGlmIChjaGVjayA9PSAnbm8nKSB7XG4gICAgICBjaGVja1NoaXAoc2hpcClcblxuICAgIH1cbiAgfVxuXG4gIGNoZWNrU2hpcChzaGlwKVxuXG59XG4vL3BsYWNlIGNvbXB1dGVyIHNoaXBzXG5cbmZ1bmN0aW9uIHBsYWNlQ29tcHV0ZXJTaGlwcygpIHtcbiAgcGxhY2VTaGlwc1JhbmRvbWx5KGNTdWIsIGNvbXB1dGVyQm9hcmQpXG4gIHBsYWNlU2hpcHNSYW5kb21seShjUGF0cm9sLCBjb21wdXRlckJvYXJkKVxuICBwbGFjZVNoaXBzUmFuZG9tbHkoY0Rlc3Ryb3llciwgY29tcHV0ZXJCb2FyZClcbiAgcGxhY2VTaGlwc1JhbmRvbWx5KGNDYXJyaWVyLCBjb21wdXRlckJvYXJkKVxuICBwbGFjZVNoaXBzUmFuZG9tbHkoY0JhdHRsZXNoaXAsIGNvbXB1dGVyQm9hcmQpXG59XG5cbnBsYWNlQ29tcHV0ZXJTaGlwcygpXG4vLyBwbGFjZSBwbGF5ZXIgc2hpcHNcblxuZnVuY3Rpb24gcGxhY2VQbGF5ZXJTaGlwcygpIHtcblxuICBwbGFjZVNoaXBzUmFuZG9tbHkoc3ViLCBwbGF5ZXJCb2FyZClcbiAgcGxhY2VTaGlwc1JhbmRvbWx5KHBhdHJvbCwgcGxheWVyQm9hcmQpXG4gIHBsYWNlU2hpcHNSYW5kb21seShkZXN0cm95ZXIsIHBsYXllckJvYXJkKVxuICBwbGFjZVNoaXBzUmFuZG9tbHkoY2FycmllciwgcGxheWVyQm9hcmQpXG4gIHBsYWNlU2hpcHNSYW5kb21seShiYXR0bGVzaGlwLCBwbGF5ZXJCb2FyZClcblxufVxuXG5jcmVhdGVDb21wdXRlckdyaWQoY29tcHV0ZXJCb2FyZClcblxuLy9jcmVhdGUgcGxheWVyIGJvYXJkXG5sZXQgcGxheWVyQm9hcmQgPSBuZXcgQm9hcmRcbmNyZWF0ZVBsYXllckdyaWQocGxheWVyQm9hcmQpXG5cbi8vYWRkIHBsYXllciByb3VuZCBmdW5jdGlvblxuXG5mdW5jdGlvbiBwbGF5Um91bmQoYm9hcmQpIHtcblxuICBjb25zdCBzcG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkXCIpO1xuXG4gIHNwb3QuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXllclBsYWNlbWVudCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgIGNvbnN0IHNwb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyaWRcIik7XG4gICAgc3BvdC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5ZXJQbGFjZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheWVyUGxhY2VtZW50KGUpIHtcblxuICAgIGxldCBjb29yID0gZS50YXJnZXQudmFsdWVcbiAgICBsZXQgYXJyID0gY29vci5zcGxpdChcIixcIilcbiAgICBsZXQgeSA9IGFyclswXVxuICAgIGxldCB4ID0gYXJyWzFdXG5cbiAgICBib2FyZC5hdHRhY2soeCwgeSlcbiAgICBjb21wdXRlclBsYXllcihwbGF5ZXJCb2FyZClcbiAgICByZW1vdmVCb2FyZCgpXG4gICAgY3JlYXRlQ29tcHV0ZXJHcmlkKGNvbXB1dGVyQm9hcmQpXG4gICAgY3JlYXRlUGxheWVyR3JpZChwbGF5ZXJCb2FyZClcblxuXG4gICAgaWYgKGRlc3Ryb3llci5zdW5rKCkgPT0gJ3N1bmsnICYmIGNhcnJpZXIuc3VuaygpID09ICdzdW5rJyAmJiBiYXR0bGVzaGlwLnN1bmsoKSA9PSAnc3VuaydcbiAgICAgICYmIHN1Yi5zdW5rKCkgPT0gJ3N1bmsnICYmIHBhdHJvbC5zdW5rKCkgPT0gJ3N1bmsnKSB7XG5cbiAgICAgIHdpbm5lcignQ29tcHV0ZXIgV2lucycpXG4gICAgICByZW1vdmVMaXN0ZW5lcigpXG4gICAgICBuZXdHYW1lKClcbiAgICB9XG5cbiAgICBlbHNlIGlmIChjRGVzdHJveWVyLnN1bmsoKSA9PSAnc3VuaycgJiYgY0NhcnJpZXIuc3VuaygpID09ICdzdW5rJyAmJiBjQmF0dGxlc2hpcC5zdW5rKCkgPT0gJ3N1bmsnXG4gICAgICAmJiBjU3ViLnN1bmsoKSA9PSAnc3VuaycgJiYgY1BhdHJvbC5zdW5rKCkgPT0gJ3N1bmsnKSB7XG5cbiAgICAgIHdpbm5lcignWW91IFdpbicpXG4gICAgICByZW1vdmVMaXN0ZW5lcigpXG4gICAgICBuZXdHYW1lKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwbGF5Um91bmQoY29tcHV0ZXJCb2FyZClcbiAgICB9XG5cbiAgfVxuXG5cbn1cblxuLy8gY2hhbmdlIGJvYXJkIGxpc3RlbmVyIGFuZCBmdW5jdGlvblxuXG5mdW5jdGlvbiBjaGFuZ2VCb2FyZCgpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2VCb2FyZFwiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuXG4gICAgcGxheWVyQm9hcmQgPSBuZXcgQm9hcmRcbiAgICBwbGFjZVBsYXllclNoaXBzKClcbiAgICByZW1vdmVCb2FyZCgpXG4gICAgY3JlYXRlQ29tcHV0ZXJHcmlkKGNvbXB1dGVyQm9hcmQpXG4gICAgY3JlYXRlUGxheWVyR3JpZChwbGF5ZXJCb2FyZClcbiAgICBidXR0b25zKClcbiAgICBzdGFydEdhbWUoKVxuICAgIGNoYW5nZUJvYXJkKClcblxuICB9KTtcbn1cblxuLy9zdGFydCBnYW1lIGxpc3RlbmVyIGFuZCBmdW5jdGlvblxuXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRHYW1lXCIpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZUJ1dHRvbnMoKVxuICAgIHBsYXlSb3VuZChjb21wdXRlckJvYXJkKVxuICAgIFxuXG4gIH0pO1xufVxuXG4vLyBuZXcgZ2FtZSBsaXN0ZW5lciBhbmQgZnVuY3Rpb25cblxuZnVuY3Rpb24gbmV3R2FtZSgpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdHYW1lXCIpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgXG4gICAgcmVtb3ZlQm9hcmQoKVxuICAgIHJlbW92ZVdpbm5lcigpXG4gICAgZGVzdHJveWVyID0gbmV3IFNoaXAoMylcbiAgICBjYXJyaWVyID0gbmV3IFNoaXAoNSlcbiAgICBiYXR0bGVzaGlwID0gbmV3IFNoaXAoNClcbiAgICBzdWIgPSBuZXcgU2hpcCgzKVxuICAgIHBhdHJvbCA9IG5ldyBTaGlwKDIpXG4gICAgY0Rlc3Ryb3llciA9IG5ldyBTaGlwKDMpXG4gICAgY0NhcnJpZXIgPSBuZXcgU2hpcCg1KVxuICAgIGNCYXR0bGVzaGlwID0gbmV3IFNoaXAoNClcbiAgICBjU3ViID0gbmV3IFNoaXAoMylcbiAgICBjUGF0cm9sID0gbmV3IFNoaXAoMilcbiAgICBjb21wdXRlckJvYXJkID0gbmV3IEJvYXJkXG4gICAgcGxhY2VDb21wdXRlclNoaXBzKClcbiAgICBjcmVhdGVDb21wdXRlckdyaWQoY29tcHV0ZXJCb2FyZClcbiAgICBwbGF5ZXJCb2FyZCA9IG5ldyBCb2FyZFxuICAgIGNyZWF0ZVBsYXllckdyaWQocGxheWVyQm9hcmQpXG4gICAgYnV0dG9ucygpXG4gICAgY2hhbmdlQm9hcmQoKVxuICB9KTtcbn1cblxuXG4vL2NhbGwgYnV0dG9uIGFuZCBjaGFuZ2UgYm9hcmQgZnVuY3RzXG5idXR0b25zKClcbmNoYW5nZUJvYXJkKClcblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=