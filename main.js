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
placeShipsRandomly(cSub, computerBoard)
placeShipsRandomly(cPatrol, computerBoard)
placeShipsRandomly(cDestroyer, computerBoard)
placeShipsRandomly(cCarrier, computerBoard)
placeShipsRandomly(cBattleship, computerBoard)

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


//computerPlayer(playerBoard)
//playerBoard.attack(0, 0)
;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createPlayerGrid)(playerBoard)

//add eventlistener for player

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
    playRound(computerBoard)
    console.log('start')
   
  });
}

// new game listener and function

function newGame() {
  const btn = document.getElementById("newGame");

  btn.addEventListener("click", () => {
   
    console.log('new')
   
  });
}




//******* get rid of later */
(0,_dom__WEBPACK_IMPORTED_MODULE_3__.buttons)()

changeBoard()

//playRound(computerBoard)


// play round 
/*
function playRound() {

  player(computerBoard)
  computerPlayer(playerBoard)
  removeBoard()
  createComputerGrid(computerBoard)
  createPlayerGrid(playerBoard)

}

playRound()
//

/*
//destroyer.hit(3)
//destroyer.hit(4)

console.log(destroyer)
  //console.log(destroyer.sunk())

//let carrier = new Ship(6)



let board1 = new Board
board1.placeShip(0, 0, destroyer, 'v')
//board1.placeShip(3, 2, patrol, 'h')

//console.log(board1.checkPlacement(1, 0, patrol, 'h'))


//board1.attack(5,6)
//board1.attack(0,1)
//board1.attack(0,0)
board1.attack(3,2)

console.log(destroyer)
//console.log(patrol)

console.log(board1)*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLDZDQUFLO0FBQzNCO0FBQ0EsSUFBSSxrREFBVztBQUNmLElBQUkseURBQWtCO0FBQ3RCLElBQUksdURBQWdCO0FBQ3BCLElBQUksOENBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7OztBQUtBO0FBQ0EsNkNBQU87O0FBRVA7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNjb21wdXRlckNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjkwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbn1cblxuI3BsYXllckNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjkwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbn1cblxuXG4uZ3JpZCwgLmdyaWQyIHtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMC44cHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHdpZHRoOiAyN3B4O1xuICAgIGhlaWdodDogMjdweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTs7QUFFbkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjb21wdXRlckNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyOTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcblxcbn1cXG5cXG4jcGxheWVyQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDI5MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxufVxcblxcblxcbi5ncmlkLCAuZ3JpZDIge1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDAuOHB4O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIHdpZHRoOiAyN3B4O1xcbiAgICBoZWlnaHQ6IDI3cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXJHcmlkKGFycmF5KSB7XG4gICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgY29uc3QgY29udGFpbmVyQ3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyQ3JlYXRlLmlkID0gJ3BsYXllckNvbnRhaW5lcidcbiAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJDcmVhdGUpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5ib2FyZC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgYXJyYXkuYm9hcmRbaV0ubGVuZ3RoOyB5KyspIHtcblxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckNvbnRhaW5lcicpO1xuICAgICAgICAgICAgY29uc3QgZ3JpZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgZ3JpZDIuY2xhc3NMaXN0LmFkZCgnZ3JpZDInKTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHR5cGVvZiBhcnJheS5ib2FyZFtpXVt5XSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGdyaWQyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmV5JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGFycmF5LmJvYXJkW2ldW3ldID09PSAnKidcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGdyaWQyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYXJyYXkuYm9hcmRbaV1beV0gPT0gJ3gnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBncmlkMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWQyKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVyR3JpZChhcnJheSkge1xuXG4gICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgY29uc3QgY29udGFpbmVyQ3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyQ3JlYXRlLmlkID0gJ2NvbXB1dGVyQ29udGFpbmVyJ1xuICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckNyZWF0ZSk7XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkuYm9hcmQubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGFycmF5LmJvYXJkW2ldLmxlbmd0aDsgeSsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wdXRlckNvbnRhaW5lcicpO1xuICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICAgICAgICAgIGdyaWQudmFsdWUgPSAoaSArIFwiLFwiICsgeSlcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHR5cGVvZiBhcnJheS5ib2FyZFtpXVt5XSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGdyaWQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYXJyYXkuYm9hcmRbaV1beV0gPT09ICcqJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZ3JpZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGFycmF5LmJvYXJkW2ldW3ldID09ICd4J1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZ3JpZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5mdW5jdGlvbiByZW1vdmVCb2FyZCgpIHtcbiAgICBjb25zdCByZW1vdmVQbGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllckNvbnRhaW5lclwiKTtcbiAgICBjb25zdCByZW1vdmVDb21wdXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcHV0ZXJDb250YWluZXJcIik7XG4gICAgcmVtb3ZlQ29tcHV0ZXIucmVtb3ZlKClcbiAgICByZW1vdmVQbGF5ZXIucmVtb3ZlKClcbn1cblxuZnVuY3Rpb24gd2lubmVyKG1lc3NhZ2UpIHtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy5pZCA9ICdoZWFkaW5nJ1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIGNvbnN0IG5ld0dhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdHYW1lLmlkID0gJ25ld0dhbWUnXG4gICAgbmV3R2FtZS50ZXh0Q29udGVudCA9ICdQbGF5IEFub3RoZXIgR2FtZSdcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0dhbWUpO1xuXG59XG5cbmZ1bmN0aW9uIGJ1dHRvbnMoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5pZCA9ICdidXR0b25Db250YWluZXInXG4gICAgY29uc3QgY2hhbmdlQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjaGFuZ2VCb2FyZC5pZCA9ICdjaGFuZ2VCb2FyZCdcbiAgICBjaGFuZ2VCb2FyZC50ZXh0Q29udGVudCA9ICdDaGFuZ2UgQm9hcmQnXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3RhcnRHYW1lLmlkID0gJ3N0YXJ0R2FtZSdcbiAgICBzdGFydEdhbWUudGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSdcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hhbmdlQm9hcmQpXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0R2FtZSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKVxuXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlUGxheWVyR3JpZCxcbiAgICBjcmVhdGVDb21wdXRlckdyaWQsXG4gICAgcmVtb3ZlQm9hcmQsXG4gICAgd2lubmVyLFxuICAgIGJ1dHRvbnMsXG59O1xuXG4iLCJpbXBvcnQge1xuICAgIFNoaXAsXG59IGZyb20gXCIuL3NoaXBcIjtcblxuXG5jbGFzcyBCb2FyZCB7XG5cblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPVxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXVxuICAgICAgICAgICAgXVxuXG4gICAgfVxuXG4gICAgY2hlY2tQbGFjZW1lbnQoeCwgeSwgc2hpcCwgcG9zaXRpb24pIHtcblxuICAgICAgICBsZXQgbGVuZ3RoID0gc2hpcC5sZW5ndGhcblxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAnaCcgJiYgeCArIGxlbmd0aCA+PSAxMCkge1xuICAgICAgICAgICAgcmV0dXJuICdubydcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPT0gJ3YnICYmIHkgKyBsZW5ndGggPj0gMTApIHtcbiAgICAgICAgICAgIHJldHVybiAnbm8nXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uID09ICdoJykge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVtpXSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnbm8nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAndicpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW3hdICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdubydcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAneWVzJ1xuICAgIH1cblxuXG4gICAgcGxhY2VTaGlwKHgsIHksIHNoaXAsIHBvc2l0aW9uKSB7XG5cbiAgICAgICAgbGV0IGxlbmd0aCA9IHNoaXAubGVuZ3RoXG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09ICdoJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beCArIGldID0gc2hpcFxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAndicpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeSArIGldW3hdID0gc2hpcFxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFxuXG4gICAgfVxuXG4gICAgYXR0YWNrKHgsIHkpIHtcblxuICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PSBcIlwiICYmIHRoaXMuYm9hcmRbeV1beF0gIT0gJ3gnICYmIHRoaXMuYm9hcmRbeV1beF0gIT0gJyonKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beF0gPSAneCdcbiAgICAgICAgICAgIHJldHVybiAnbm90IGhpdCdcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PSAneCcgfHwgdGhpcy5ib2FyZFt5XVt4XSA9PSAnKicpIHtcblxuICAgICAgICAgICAgcmV0dXJuICd0YWtlbidcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuXG5cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beF0uaGl0KDEpXG5cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beF0gPSAnKidcblxuICAgICAgICAgICAgcmV0dXJuICdoaXQnXG5cbiAgICAgICAgfVxuXG5cblxuXG4gICAgfVxuXG59XG5cblxuXG5leHBvcnQge1xuICAgIEJvYXJkLFxuXG59OyIsIlxuXG5mdW5jdGlvbiBjb21wdXRlclBsYXllcihib2FyZCkge1xuXG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tKCkge1xuICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG5cbiAgICByZXR1cm4gKHJhbmQpXG4gIH1cblxuXG4gIGZ1bmN0aW9uIG1ha2VQbGFjZW1lbnQoKSB7XG5cbiAgICBsZXQgeCA9IGdldFJhbmRvbSgpXG4gICAgbGV0IHkgPSBnZXRSYW5kb20oKVxuXG4gICAgbGV0IGF0dGFjayA9IGJvYXJkLmF0dGFjayh4LCB5KVxuICAgIGlmIChhdHRhY2sgPT0gJ3Rha2VuJykge1xuICAgICAgbWFrZVBsYWNlbWVudCgpXG4gICAgfVxuXG5cbiAgfVxuICBtYWtlUGxhY2VtZW50KClcblxufVxuXG5cblxuZXhwb3J0IHtcbiAgY29tcHV0ZXJQbGF5ZXIsXG5cbn07IiwiY2xhc3MgU2hpcCB7XG4gICAgXG4gIFxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgICAgIFxuICAgICAgdGhpcy5oaXRzID0gW11cbiAgICB9XG4gIFxuICAgaGl0KHBvc2l0aW9uKSB7XG4gICAgdGhpcy5oaXRzLnB1c2gocG9zaXRpb24pXG4gICAgICAgIHJldHVyblxuICAgICAgXG4gICAgfVxuICBcbiAgICBzdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5oaXRzLmxlbmd0aCA9PSB0aGlzLmxlbmd0aClcbiAgICAgIHJldHVybiAnc3VuaydcbiAgICBlbHNlIHtcbiAgICAgICByZXR1cm4gJ25vdCBzdW5rJ1xuICAgIH1cbiAgICB9XG4gIH1cblxuIFxuXG4gIGV4cG9ydCB7XG4gICBTaGlwLFxuICAgIFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL2NoYW5nZSBsYXRlciB3aGVuIHdhbnQgdG8gdXNlIGNzcyAqKioqKipcblxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5pbXBvcnQge1xuICBTaGlwLFxufSBmcm9tIFwiLi9zaGlwXCI7XG5cbmltcG9ydCB7XG4gIEJvYXJkLFxufSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuaW1wb3J0IHtcbiAgY3JlYXRlUGxheWVyR3JpZCxcbiAgY3JlYXRlQ29tcHV0ZXJHcmlkLFxuICByZW1vdmVCb2FyZCxcbiAgd2lubmVyLFxuICBidXR0b25zLFxufSBmcm9tIFwiLi9kb21cIjtcblxuaW1wb3J0IHtcbiAgY29tcHV0ZXJQbGF5ZXIsXG5cbn0gZnJvbSBcIi4vcGxheWVyXCI7XG5cblxuXG4vLyBjcmVhdGUgcGxheWVyIGZsZWV0XG5sZXQgZGVzdHJveWVyID0gbmV3IFNoaXAoMylcbmxldCBjYXJyaWVyID0gbmV3IFNoaXAoNSlcbmxldCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoNClcbmxldCBzdWIgPSBuZXcgU2hpcCgzKVxubGV0IHBhdHJvbCA9IG5ldyBTaGlwKDIpXG5cbi8vIGNyZWF0ZSBjb21wdXRlciBmbGVldFxuXG5sZXQgY0Rlc3Ryb3llciA9IG5ldyBTaGlwKDMpXG5sZXQgY0NhcnJpZXIgPSBuZXcgU2hpcCg1KVxubGV0IGNCYXR0bGVzaGlwID0gbmV3IFNoaXAoNClcbmxldCBjU3ViID0gbmV3IFNoaXAoMylcbmxldCBjUGF0cm9sID0gbmV3IFNoaXAoMilcblxuLy8gY3JlYXRlIGNvbXB1dGVyIEJvYXJkXG5sZXQgY29tcHV0ZXJCb2FyZCA9IG5ldyBCb2FyZFxuXG4vLyBwbGFjZSBjb21wdXRlciBzaGlwc1xuXG5mdW5jdGlvbiBwbGFjZVNoaXBzUmFuZG9tbHkoc2hpcCwgYm9hcmQpIHtcblxuICBmdW5jdGlvbiBnZXRSYW5kb21Db29yKCkge1xuICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG5cbiAgICByZXR1cm4gKHgpXG4gIH1cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tT3JyKCkge1xuICAgIGxldCBvcnIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxKTtcbiAgICBpZiAob3JyID09IDApIHtcbiAgICAgIHJldHVybiAndidcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gJ2gnXG4gICAgfVxuXG4gIH1cblxuXG4gIGZ1bmN0aW9uIGNoZWNrU2hpcChzaGlwKSB7XG4gICAgbGV0IGNvb3JBcnIgPSBbXVxuICAgIGxldCB4ID0gZ2V0UmFuZG9tQ29vcigpXG4gICAgbGV0IHkgPSBnZXRSYW5kb21Db29yKClcbiAgICBsZXQgY09yciA9IGdldFJhbmRvbU9ycigpXG5cblxuXG4gICAgbGV0IGNoZWNrID0gYm9hcmQuY2hlY2tQbGFjZW1lbnQoeCwgeSwgc2hpcCwgY09ycilcblxuICAgIGlmIChjaGVjayA9PSAneWVzJykge1xuICAgICAgY29vckFyci5wdXNoKHgpXG4gICAgICBjb29yQXJyLnB1c2goeSlcblxuICAgICAgYm9hcmQucGxhY2VTaGlwKHgsIHksIHNoaXAsIGNPcnIpXG4gICAgICByZXR1cm4gY29vckFyclxuICAgIH1cbiAgICBpZiAoY2hlY2sgPT0gJ25vJykge1xuICAgICAgY2hlY2tTaGlwKHNoaXApXG5cbiAgICB9XG4gIH1cblxuICBjaGVja1NoaXAoc2hpcClcblxufVxuLy9wbGFjZSBjb21wdXRlciBzaGlwc1xucGxhY2VTaGlwc1JhbmRvbWx5KGNTdWIsIGNvbXB1dGVyQm9hcmQpXG5wbGFjZVNoaXBzUmFuZG9tbHkoY1BhdHJvbCwgY29tcHV0ZXJCb2FyZClcbnBsYWNlU2hpcHNSYW5kb21seShjRGVzdHJveWVyLCBjb21wdXRlckJvYXJkKVxucGxhY2VTaGlwc1JhbmRvbWx5KGNDYXJyaWVyLCBjb21wdXRlckJvYXJkKVxucGxhY2VTaGlwc1JhbmRvbWx5KGNCYXR0bGVzaGlwLCBjb21wdXRlckJvYXJkKVxuXG4vLyBwbGFjZSBwbGF5ZXIgc2hpcHNcblxuZnVuY3Rpb24gcGxhY2VQbGF5ZXJTaGlwcygpIHtcblxuICBwbGFjZVNoaXBzUmFuZG9tbHkoc3ViLCBwbGF5ZXJCb2FyZClcbiAgcGxhY2VTaGlwc1JhbmRvbWx5KHBhdHJvbCwgcGxheWVyQm9hcmQpXG4gIHBsYWNlU2hpcHNSYW5kb21seShkZXN0cm95ZXIsIHBsYXllckJvYXJkKVxuICBwbGFjZVNoaXBzUmFuZG9tbHkoY2FycmllciwgcGxheWVyQm9hcmQpXG4gIHBsYWNlU2hpcHNSYW5kb21seShiYXR0bGVzaGlwLCBwbGF5ZXJCb2FyZClcblxufVxuXG5cblxuXG5jcmVhdGVDb21wdXRlckdyaWQoY29tcHV0ZXJCb2FyZClcblxuLy9jcmVhdGUgcGxheWVyIGJvYXJkXG5sZXQgcGxheWVyQm9hcmQgPSBuZXcgQm9hcmRcblxuXG4vL2NvbXB1dGVyUGxheWVyKHBsYXllckJvYXJkKVxuLy9wbGF5ZXJCb2FyZC5hdHRhY2soMCwgMClcbmNyZWF0ZVBsYXllckdyaWQocGxheWVyQm9hcmQpXG5cbi8vYWRkIGV2ZW50bGlzdGVuZXIgZm9yIHBsYXllclxuXG5mdW5jdGlvbiBwbGF5Um91bmQoYm9hcmQpIHtcblxuICBjb25zdCBzcG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkXCIpO1xuXG4gIHNwb3QuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXllclBsYWNlbWVudCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgIGNvbnN0IHNwb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyaWRcIik7XG4gICAgc3BvdC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5ZXJQbGFjZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheWVyUGxhY2VtZW50KGUpIHtcblxuICAgIGxldCBjb29yID0gZS50YXJnZXQudmFsdWVcbiAgICBsZXQgYXJyID0gY29vci5zcGxpdChcIixcIilcbiAgICBsZXQgeSA9IGFyclswXVxuICAgIGxldCB4ID0gYXJyWzFdXG5cbiAgICBib2FyZC5hdHRhY2soeCwgeSlcbiAgICBjb21wdXRlclBsYXllcihwbGF5ZXJCb2FyZClcbiAgICByZW1vdmVCb2FyZCgpXG4gICAgY3JlYXRlQ29tcHV0ZXJHcmlkKGNvbXB1dGVyQm9hcmQpXG4gICAgY3JlYXRlUGxheWVyR3JpZChwbGF5ZXJCb2FyZClcblxuXG4gICAgaWYgKGRlc3Ryb3llci5zdW5rKCkgPT0gJ3N1bmsnICYmIGNhcnJpZXIuc3VuaygpID09ICdzdW5rJyAmJiBiYXR0bGVzaGlwLnN1bmsoKSA9PSAnc3VuaydcbiAgICAgICYmIHN1Yi5zdW5rKCkgPT0gJ3N1bmsnICYmIHBhdHJvbC5zdW5rKCkgPT0gJ3N1bmsnKSB7XG5cbiAgICAgIHdpbm5lcignQ29tcHV0ZXIgV2lucycpXG4gICAgICByZW1vdmVMaXN0ZW5lcigpXG4gICAgICBuZXdHYW1lKClcbiAgICB9XG5cbiAgICBlbHNlIGlmIChjRGVzdHJveWVyLnN1bmsoKSA9PSAnc3VuaycgJiYgY0NhcnJpZXIuc3VuaygpID09ICdzdW5rJyAmJiBjQmF0dGxlc2hpcC5zdW5rKCkgPT0gJ3N1bmsnXG4gICAgICAmJiBjU3ViLnN1bmsoKSA9PSAnc3VuaycgJiYgY1BhdHJvbC5zdW5rKCkgPT0gJ3N1bmsnKSB7XG5cbiAgICAgIHdpbm5lcignWW91IFdpbicpXG4gICAgICByZW1vdmVMaXN0ZW5lcigpXG4gICAgICBuZXdHYW1lKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwbGF5Um91bmQoY29tcHV0ZXJCb2FyZClcbiAgICB9XG5cbiAgfVxuXG5cbn1cblxuLy8gY2hhbmdlIGJvYXJkIGxpc3RlbmVyIGFuZCBmdW5jdGlvblxuXG5mdW5jdGlvbiBjaGFuZ2VCb2FyZCgpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2VCb2FyZFwiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuICAgIFxuICAgIHBsYXllckJvYXJkID0gbmV3IEJvYXJkXG4gICAgcGxhY2VQbGF5ZXJTaGlwcygpXG4gICAgcmVtb3ZlQm9hcmQoKVxuICAgIGNyZWF0ZUNvbXB1dGVyR3JpZChjb21wdXRlckJvYXJkKVxuICAgIGNyZWF0ZVBsYXllckdyaWQocGxheWVyQm9hcmQpXG4gICAgYnV0dG9ucygpXG4gICAgc3RhcnRHYW1lKClcbiAgICBjaGFuZ2VCb2FyZCgpXG4gICAgXG4gIH0pO1xufVxuXG4vL3N0YXJ0IGdhbWUgbGlzdGVuZXIgYW5kIGZ1bmN0aW9uXG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEdhbWVcIik7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcGxheVJvdW5kKGNvbXB1dGVyQm9hcmQpXG4gICAgY29uc29sZS5sb2coJ3N0YXJ0JylcbiAgIFxuICB9KTtcbn1cblxuLy8gbmV3IGdhbWUgbGlzdGVuZXIgYW5kIGZ1bmN0aW9uXG5cbmZ1bmN0aW9uIG5ld0dhbWUoKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3R2FtZVwiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgIFxuICAgIGNvbnNvbGUubG9nKCduZXcnKVxuICAgXG4gIH0pO1xufVxuXG5cblxuXG4vLyoqKioqKiogZ2V0IHJpZCBvZiBsYXRlciAqL1xuYnV0dG9ucygpXG5cbmNoYW5nZUJvYXJkKClcblxuLy9wbGF5Um91bmQoY29tcHV0ZXJCb2FyZClcblxuXG4vLyBwbGF5IHJvdW5kIFxuLypcbmZ1bmN0aW9uIHBsYXlSb3VuZCgpIHtcblxuICBwbGF5ZXIoY29tcHV0ZXJCb2FyZClcbiAgY29tcHV0ZXJQbGF5ZXIocGxheWVyQm9hcmQpXG4gIHJlbW92ZUJvYXJkKClcbiAgY3JlYXRlQ29tcHV0ZXJHcmlkKGNvbXB1dGVyQm9hcmQpXG4gIGNyZWF0ZVBsYXllckdyaWQocGxheWVyQm9hcmQpXG5cbn1cblxucGxheVJvdW5kKClcbi8vXG5cbi8qXG4vL2Rlc3Ryb3llci5oaXQoMylcbi8vZGVzdHJveWVyLmhpdCg0KVxuXG5jb25zb2xlLmxvZyhkZXN0cm95ZXIpXG4gIC8vY29uc29sZS5sb2coZGVzdHJveWVyLnN1bmsoKSlcblxuLy9sZXQgY2FycmllciA9IG5ldyBTaGlwKDYpXG5cblxuXG5sZXQgYm9hcmQxID0gbmV3IEJvYXJkXG5ib2FyZDEucGxhY2VTaGlwKDAsIDAsIGRlc3Ryb3llciwgJ3YnKVxuLy9ib2FyZDEucGxhY2VTaGlwKDMsIDIsIHBhdHJvbCwgJ2gnKVxuXG4vL2NvbnNvbGUubG9nKGJvYXJkMS5jaGVja1BsYWNlbWVudCgxLCAwLCBwYXRyb2wsICdoJykpXG5cblxuLy9ib2FyZDEuYXR0YWNrKDUsNilcbi8vYm9hcmQxLmF0dGFjaygwLDEpXG4vL2JvYXJkMS5hdHRhY2soMCwwKVxuYm9hcmQxLmF0dGFjaygzLDIpXG5cbmNvbnNvbGUubG9nKGRlc3Ryb3llcilcbi8vY29uc29sZS5sb2cocGF0cm9sKVxuXG5jb25zb2xlLmxvZyhib2FyZDEpKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=