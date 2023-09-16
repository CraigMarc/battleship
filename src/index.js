//change later when want to use css ******

//import './styles.css';

import {
  Ship,
} from "./ship";

import {
  Board,
} from "./gameboard";

// create player fleet
let destroyer = new Ship(3)
let carrier = new Ship(5)
let battleship = new Ship(4)
let sub = new Ship(3)
let patrol = new Ship(2)

// create computer fleet

let cDestroyer = new Ship(3)
let cCarrier = new Ship(5)
let cBattleship = new Ship(4)
let cSub = new Ship(3)
let cPatrol = new Ship(2)

// create computer Board
let computerBoard = new Board

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