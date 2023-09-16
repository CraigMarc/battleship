//change later when want to use css ******

//import './styles.css';

import {
    Ship,
  } from "./ship";
  
  import {
    Board,
  } from "./gameboard";


/*
  let destroyer = new Ship(4)
destroyer.hit(1)
destroyer.hit(2)
destroyer.hit(3)
destroyer.hit(4)

  console.log(destroyer)
  console.log(destroyer.sunk())

let carrier = new Ship(6)
console.log(carrier)
*/

let board1 = new Board
board1.placeShip(0, 0, 6, 'v')

console.log(board1)