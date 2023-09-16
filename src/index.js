//change later when want to use css ******

//import './styles.css';

import {
    Ship,
  } from "./ship";
  
  import {
    Board,
  } from "./gameboard";


let destroyer = new Ship(4)

//
//destroyer.hit(3)
//destroyer.hit(4)

console.log(destroyer)
  //console.log(destroyer.sunk())

//let carrier = new Ship(6)



let board1 = new Board
board1.placeShip(0, 0, destroyer, 'v')
console.log(board1.checkPlacement(1, 0, destroyer, 'h'))


board1.attack(5,6)
board1.attack(0,1)
board1.attack(0,0)

console.log(destroyer)

console.log(board1)