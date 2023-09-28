//change later when want to use css ******

import './styles.css';

import {
  Ship,
} from "./ship";

import {
  Board,
} from "./gameboard";

import {
  createPlayerGrid,
  createComputerGrid,
  removeBoard,
} from "./dom";

import {
  computerPlayer,
  
} from "./player";



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
    
    
   
    let check = computerBoard.checkPlacement(x, y, ship, cOrr)

    if (check == 'yes') {
      coorArr.push(x)
      coorArr.push(y)
     
      computerBoard.placeShip(x, y, ship, cOrr)
      return coorArr
    }
    if (check == 'no')  {checkShip(ship)
    
  }
  }

  checkShip(ship)
  
}

placeShipsRandomly(cSub)
placeShipsRandomly(cPatrol)
placeShipsRandomly(cDestroyer)
placeShipsRandomly(cCarrier)
placeShipsRandomly(cBattleship)




createComputerGrid(computerBoard)

//create player board
let playerBoard = new Board
playerBoard.placeShip(0, 0, destroyer, 'v')
playerBoard.placeShip(4, 5, patrol, 'v' )

computerPlayer(playerBoard)
playerBoard.attack(0,0)
createPlayerGrid(playerBoard)


function player (board) {

  const spot = document.querySelectorAll(".grid");

  spot.forEach((cell) => {
    cell.addEventListener("click", playerPlacement);
  });

  function playerPlacement(e) {

    let coor = e.target.value
    let arr = coor.split(",")
    let y = arr[0]
    let x = arr[1]

    let attack = board.attack(x,y)
    removeBoard()
    createComputerGrid(computerBoard)
    createPlayerGrid(playerBoard)
    console.log(x , y)
    console.log(board)
    return attack
  }
 
}


player(computerBoard)

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