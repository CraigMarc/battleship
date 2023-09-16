/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
//check ship placement
    checkPlacement(x, y, ship, position) {

        let length = ship.length


        if (position == 'h' && x + length > 10) {
            return 'no'
        }
        if (position == 'v' && y + length > 10) {
            return 'no'
        }
        if (position == 'h') {
            for (let i = 0; i < length; i++) {
                if (this.board[y][x + i] != "") {
                    return 'no'
                }
            }
        }
        if (position == 'v') {

            for (let i = 0; i < length; i++) {
                if (this.board[y + i][x] != "") {
                    return 'no'
                }

            }

        }
        return 'yes'
    }

//place ship
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
//attack
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
//change later when want to use css ******

//import './styles.css';





// create player fleet
let destroyer = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3)
let carrier = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(5)
let battleship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(4)
let sub = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3)
let patrol = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(2)

// create computer fleet

let cDestroyer = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3)
let cCarrier = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(5)
let cBattleship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(4)
let cSub = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3)
let cPatrol = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(2)

// create computer Board
let computerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__.Board

// place computer ships

function placeShipsRandomly(ship) {

  function getRandomCoor() {
    let x = Math.floor(Math.random() * 11);


    return (x)
  }



  function checkShip(ship) {
    let x = getRandomCoor()
    let y = getRandomCoor()
    let coorArr = []
    console.log(x)
    console.log(y)
    let check = computerBoard.checkPlacement(x, y, ship, 'h')

    if (check == 'yes') {
      coorArr.push(x)
      coorArr.push(y)
      return coorArr
    }
    else checkShip(ship)
  }

  let goodCoord = checkShip(ship)
 
  
  computerBoard.placeShip(goodCoord[0], goodCoord[1], ship, 'v')
}

placeShipsRandomly(cSub)
placeShipsRandomly(cPatrol)
placeShipsRandomly(cDestroyer)
//placeShipsRandomly(cCarrier)
//placeShipsRandomly(cBattleship)


console.log(computerBoard)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFa0I7OztBQUdsQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsNEJBQTRCLFlBQVk7QUFDeEM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7O0FBSWdCOztBQUlLOztBQUVyQjtBQUNBLG9CQUFvQix1Q0FBSTtBQUN4QixrQkFBa0IsdUNBQUk7QUFDdEIscUJBQXFCLHVDQUFJO0FBQ3pCLGNBQWMsdUNBQUk7QUFDbEIsaUJBQWlCLHVDQUFJOztBQUVyQjs7QUFFQSxxQkFBcUIsdUNBQUk7QUFDekIsbUJBQW1CLHVDQUFJO0FBQ3ZCLHNCQUFzQix1Q0FBSTtBQUMxQixlQUFlLHVDQUFJO0FBQ25CLGtCQUFrQix1Q0FBSTs7QUFFdEI7QUFDQSx3QkFBd0IsNkNBQUs7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgU2hpcCxcbiAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cblxuY2xhc3MgQm9hcmQge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdXG4gICAgICAgICAgICBdXG5cbiAgICB9XG4vL2NoZWNrIHNoaXAgcGxhY2VtZW50XG4gICAgY2hlY2tQbGFjZW1lbnQoeCwgeSwgc2hpcCwgcG9zaXRpb24pIHtcblxuICAgICAgICBsZXQgbGVuZ3RoID0gc2hpcC5sZW5ndGhcblxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAnaCcgJiYgeCArIGxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ25vJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAndicgJiYgeSArIGxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ25vJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAnaCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVt4ICsgaV0gIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ25vJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPT0gJ3YnKSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt5ICsgaV1beF0gIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ25vJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICd5ZXMnXG4gICAgfVxuXG4vL3BsYWNlIHNoaXBcbiAgICBwbGFjZVNoaXAoeCwgeSwgc2hpcCwgcG9zaXRpb24pIHtcblxuICAgICAgICBsZXQgbGVuZ3RoID0gc2hpcC5sZW5ndGhcblxuICAgICAgICBpZiAocG9zaXRpb24gPT0gJ2gnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVt4ICsgaV0gPSBzaGlwXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09ICd2Jykge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5ICsgaV1beF0gPSBzaGlwXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkXG5cbiAgICB9XG4vL2F0dGFja1xuICAgIGF0dGFjayh4LCB5KSB7XG5cbiAgICAgICBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PSBcIlwiICYmIHRoaXMuYm9hcmRbeV1beF0gIT0gJ3gnICYmIHRoaXMuYm9hcmRbeV1beF0gIT0gJyonKSB7XG5cbiAgICAgICAgdGhpcy5ib2FyZFt5XVt4XSA9ICd4J1xuICAgICAgICByZXR1cm4gJ25vdCBoaXQnXG4gICAgICAgfVxuICAgICAgIGlmICh0aGlzLmJvYXJkW3ldW3hdID09ICd4JyB8fCB0aGlzLmJvYXJkW3ldW3hdID09ICcqJykge1xuXG4gICAgICAgIHJldHVybiAndGFrZW4nXG4gICAgICAgfVxuXG4gICAgICAgZWxzZSB7XG5cbiAgICAgICAgXG4gICAgICAgIHRoaXMuYm9hcmRbeV1beF0uaGl0KDEpXG4gICAgICAgIFxuICAgICAgICB0aGlzLmJvYXJkW3ldW3hdID0gJyonXG5cbiAgICAgICAgcmV0dXJuICdoaXQnXG4gICAgICAgIFxuICAgICAgIH1cbiAgICAgICBcbiAgICB9XG5cbn1cblxuXG4gXG5cblxuXG5cblxuZXhwb3J0IHtcbiAgICBCb2FyZCxcblxufTsiLCJjbGFzcyBTaGlwIHtcbiAgICBcbiAgXG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxuICAgICAgXG4gICAgICB0aGlzLmhpdHMgPSBbXVxuICAgIH1cbiAgXG4gICBoaXQocG9zaXRpb24pIHtcbiAgICB0aGlzLmhpdHMucHVzaChwb3NpdGlvbilcbiAgICAgICAgcmV0dXJuXG4gICAgICBcbiAgICB9XG4gIFxuICAgIHN1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdHMubGVuZ3RoID09IHRoaXMubGVuZ3RoKVxuICAgICAgcmV0dXJuICdzdW5rJ1xuICAgIGVsc2Uge1xuICAgICAgIHJldHVybiAnbm90IHN1bmsnXG4gICAgfVxuICAgIH1cbiAgfVxuXG4gXG5cbiAgZXhwb3J0IHtcbiAgIFNoaXAsXG4gICAgXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9jaGFuZ2UgbGF0ZXIgd2hlbiB3YW50IHRvIHVzZSBjc3MgKioqKioqXG5cbi8vaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5pbXBvcnQge1xuICBTaGlwLFxufSBmcm9tIFwiLi9zaGlwXCI7XG5cbmltcG9ydCB7XG4gIEJvYXJkLFxufSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuLy8gY3JlYXRlIHBsYXllciBmbGVldFxubGV0IGRlc3Ryb3llciA9IG5ldyBTaGlwKDMpXG5sZXQgY2FycmllciA9IG5ldyBTaGlwKDUpXG5sZXQgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpXG5sZXQgc3ViID0gbmV3IFNoaXAoMylcbmxldCBwYXRyb2wgPSBuZXcgU2hpcCgyKVxuXG4vLyBjcmVhdGUgY29tcHV0ZXIgZmxlZXRcblxubGV0IGNEZXN0cm95ZXIgPSBuZXcgU2hpcCgzKVxubGV0IGNDYXJyaWVyID0gbmV3IFNoaXAoNSlcbmxldCBjQmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpXG5sZXQgY1N1YiA9IG5ldyBTaGlwKDMpXG5sZXQgY1BhdHJvbCA9IG5ldyBTaGlwKDIpXG5cbi8vIGNyZWF0ZSBjb21wdXRlciBCb2FyZFxubGV0IGNvbXB1dGVyQm9hcmQgPSBuZXcgQm9hcmRcblxuLy8gcGxhY2UgY29tcHV0ZXIgc2hpcHNcblxuZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbWx5KHNoaXApIHtcblxuICBmdW5jdGlvbiBnZXRSYW5kb21Db29yKCkge1xuICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuXG5cbiAgICByZXR1cm4gKHgpXG4gIH1cblxuXG5cbiAgZnVuY3Rpb24gY2hlY2tTaGlwKHNoaXApIHtcbiAgICBsZXQgeCA9IGdldFJhbmRvbUNvb3IoKVxuICAgIGxldCB5ID0gZ2V0UmFuZG9tQ29vcigpXG4gICAgbGV0IGNvb3JBcnIgPSBbXVxuICAgIGNvbnNvbGUubG9nKHgpXG4gICAgY29uc29sZS5sb2coeSlcbiAgICBsZXQgY2hlY2sgPSBjb21wdXRlckJvYXJkLmNoZWNrUGxhY2VtZW50KHgsIHksIHNoaXAsICdoJylcblxuICAgIGlmIChjaGVjayA9PSAneWVzJykge1xuICAgICAgY29vckFyci5wdXNoKHgpXG4gICAgICBjb29yQXJyLnB1c2goeSlcbiAgICAgIHJldHVybiBjb29yQXJyXG4gICAgfVxuICAgIGVsc2UgY2hlY2tTaGlwKHNoaXApXG4gIH1cblxuICBsZXQgZ29vZENvb3JkID0gY2hlY2tTaGlwKHNoaXApXG4gXG4gIFxuICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChnb29kQ29vcmRbMF0sIGdvb2RDb29yZFsxXSwgc2hpcCwgJ3YnKVxufVxuXG5wbGFjZVNoaXBzUmFuZG9tbHkoY1N1YilcbnBsYWNlU2hpcHNSYW5kb21seShjUGF0cm9sKVxucGxhY2VTaGlwc1JhbmRvbWx5KGNEZXN0cm95ZXIpXG4vL3BsYWNlU2hpcHNSYW5kb21seShjQ2Fycmllcilcbi8vcGxhY2VTaGlwc1JhbmRvbWx5KGNCYXR0bGVzaGlwKVxuXG5cbmNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmQpXG5cbi8qXG4vL2Rlc3Ryb3llci5oaXQoMylcbi8vZGVzdHJveWVyLmhpdCg0KVxuXG5jb25zb2xlLmxvZyhkZXN0cm95ZXIpXG4gIC8vY29uc29sZS5sb2coZGVzdHJveWVyLnN1bmsoKSlcblxuLy9sZXQgY2FycmllciA9IG5ldyBTaGlwKDYpXG5cblxuXG5sZXQgYm9hcmQxID0gbmV3IEJvYXJkXG5ib2FyZDEucGxhY2VTaGlwKDAsIDAsIGRlc3Ryb3llciwgJ3YnKVxuLy9ib2FyZDEucGxhY2VTaGlwKDMsIDIsIHBhdHJvbCwgJ2gnKVxuXG4vL2NvbnNvbGUubG9nKGJvYXJkMS5jaGVja1BsYWNlbWVudCgxLCAwLCBwYXRyb2wsICdoJykpXG5cblxuLy9ib2FyZDEuYXR0YWNrKDUsNilcbi8vYm9hcmQxLmF0dGFjaygwLDEpXG4vL2JvYXJkMS5hdHRhY2soMCwwKVxuYm9hcmQxLmF0dGFjaygzLDIpXG5cbmNvbnNvbGUubG9nKGRlc3Ryb3llcilcbi8vY29uc29sZS5sb2cocGF0cm9sKVxuXG5jb25zb2xlLmxvZyhib2FyZDEpKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=