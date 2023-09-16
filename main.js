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


  
  


let destroyer = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(4)

//
//destroyer.hit(3)
//destroyer.hit(4)

console.log(destroyer)
  //console.log(destroyer.sunk())

//let carrier = new Ship(6)



let board1 = new _gameboard__WEBPACK_IMPORTED_MODULE_1__.Board
board1.placeShip(0, 0, destroyer, 'v')
console.log(board1.checkPlacement(1, 0, destroyer, 'h'))


board1.attack(5,6)
board1.attack(0,1)
board1.attack(0,0)

console.log(destroyer)

console.log(board1)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFa0I7OztBQUdsQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDRCQUE0QixZQUFZO0FBQ3hDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7OztVQzFCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBOztBQUlrQjtBQUNsQjtBQUNBLEFBRXVCOzs7QUFHdkIsb0JBQW9CLHVDQUFJOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLGlCQUFpQiw2Q0FBSztBQUN0QjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBTaGlwLFxuICB9IGZyb20gXCIuL3NoaXBcIjtcblxuXG5jbGFzcyBCb2FyZCB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvYXJkID1cbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl1cbiAgICAgICAgICAgIF1cblxuICAgIH1cblxuICAgIGNoZWNrUGxhY2VtZW50KHgsIHksIHNoaXAsIHBvc2l0aW9uKSB7XG5cbiAgICAgICAgbGV0IGxlbmd0aCA9IHNoaXAubGVuZ3RoXG5cblxuICAgICAgICBpZiAocG9zaXRpb24gPT0gJ2gnICYmIHggKyBsZW5ndGggPiAxMCkge1xuICAgICAgICAgICAgcmV0dXJuICdubydcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPT0gJ3YnICYmIHkgKyBsZW5ndGggPiAxMCkge1xuICAgICAgICAgICAgcmV0dXJuICdubydcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPT0gJ2gnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbeV1beCArIGldICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdubydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uID09ICd2Jykge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbeSArIGldW3hdICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdubydcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAneWVzJ1xuICAgIH1cblxuXG4gICAgcGxhY2VTaGlwKHgsIHksIHNoaXAsIHBvc2l0aW9uKSB7XG5cbiAgICAgICAgbGV0IGxlbmd0aCA9IHNoaXAubGVuZ3RoXG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09ICdoJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1beCArIGldID0gc2hpcFxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAndicpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeSArIGldW3hdID0gc2hpcFxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFxuXG4gICAgfVxuXG4gICAgYXR0YWNrKHgsIHkpIHtcblxuICAgICAgIGlmICh0aGlzLmJvYXJkW3ldW3hdID09IFwiXCIgJiYgdGhpcy5ib2FyZFt5XVt4XSAhPSAneCcgJiYgdGhpcy5ib2FyZFt5XVt4XSAhPSAnKicpIHtcblxuICAgICAgICB0aGlzLmJvYXJkW3ldW3hdID0gJ3gnXG4gICAgICAgIHJldHVybiAnbm90IGhpdCdcbiAgICAgICB9XG4gICAgICAgaWYgKHRoaXMuYm9hcmRbeV1beF0gPT0gJ3gnIHx8IHRoaXMuYm9hcmRbeV1beF0gPT0gJyonKSB7XG5cbiAgICAgICAgcmV0dXJuICd0YWtlbidcbiAgICAgICB9XG5cbiAgICAgICBlbHNlIHtcblxuICAgICAgICBcbiAgICAgICAgdGhpcy5ib2FyZFt5XVt4XS5oaXQoMSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYm9hcmRbeV1beF0gPSAnKidcblxuICAgICAgICByZXR1cm4gJ2hpdCdcbiAgICAgICAgXG4gICAgICAgfVxuICAgICAgIFxuICAgICAgXG5cblxuICAgIH1cblxufVxuXG5cblxuZXhwb3J0IHtcbiAgICBCb2FyZCxcblxufTsiLCJjbGFzcyBTaGlwIHtcbiAgICBcbiAgXG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxuICAgICAgXG4gICAgICB0aGlzLmhpdHMgPSBbXVxuICAgIH1cbiAgXG4gICBoaXQocG9zaXRpb24pIHtcbiAgICB0aGlzLmhpdHMucHVzaChwb3NpdGlvbilcbiAgICAgICAgcmV0dXJuXG4gICAgICBcbiAgICB9XG4gIFxuICAgIHN1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdHMubGVuZ3RoID09IHRoaXMubGVuZ3RoKVxuICAgICAgcmV0dXJuICdzdW5rJ1xuICAgIGVsc2Uge1xuICAgICAgIHJldHVybiAnbm90IHN1bmsnXG4gICAgfVxuICAgIH1cbiAgfVxuXG4gXG5cbiAgZXhwb3J0IHtcbiAgIFNoaXAsXG4gICAgXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9jaGFuZ2UgbGF0ZXIgd2hlbiB3YW50IHRvIHVzZSBjc3MgKioqKioqXG5cbi8vaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5pbXBvcnQge1xuICAgIFNoaXAsXG4gIH0gZnJvbSBcIi4vc2hpcFwiO1xuICBcbiAgaW1wb3J0IHtcbiAgICBCb2FyZCxcbiAgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuXG5sZXQgZGVzdHJveWVyID0gbmV3IFNoaXAoNClcblxuLy9cbi8vZGVzdHJveWVyLmhpdCgzKVxuLy9kZXN0cm95ZXIuaGl0KDQpXG5cbmNvbnNvbGUubG9nKGRlc3Ryb3llcilcbiAgLy9jb25zb2xlLmxvZyhkZXN0cm95ZXIuc3VuaygpKVxuXG4vL2xldCBjYXJyaWVyID0gbmV3IFNoaXAoNilcblxuXG5cbmxldCBib2FyZDEgPSBuZXcgQm9hcmRcbmJvYXJkMS5wbGFjZVNoaXAoMCwgMCwgZGVzdHJveWVyLCAndicpXG5jb25zb2xlLmxvZyhib2FyZDEuY2hlY2tQbGFjZW1lbnQoMSwgMCwgZGVzdHJveWVyLCAnaCcpKVxuXG5cbmJvYXJkMS5hdHRhY2soNSw2KVxuYm9hcmQxLmF0dGFjaygwLDEpXG5ib2FyZDEuYXR0YWNrKDAsMClcblxuY29uc29sZS5sb2coZGVzdHJveWVyKVxuXG5jb25zb2xlLmxvZyhib2FyZDEpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9