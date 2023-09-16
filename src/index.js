//change later when want to use css ******

//import './styles.css';

import {
    Ship,
  } from "./ship";
  
  import {
    Board,
  } from "./gameboard";

// create fleet
let destroyer = new Ship(3)
let carrier = new Ship(5)
let battleship = new Ship(4)
let sub = new Ship(3)
let patrol = new Ship(2)

//
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

console.log(board1)