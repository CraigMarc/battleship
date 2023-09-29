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
  winner,
  buttons,
  removeWinner,
  removeButtons,
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

createComputerGrid(computerBoard)

//create player board
let playerBoard = new Board
createPlayerGrid(playerBoard)

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
    computerPlayer(playerBoard)
    removeBoard()
    createComputerGrid(computerBoard)
    createPlayerGrid(playerBoard)


    if (destroyer.sunk() == 'sunk' && carrier.sunk() == 'sunk' && battleship.sunk() == 'sunk'
      && sub.sunk() == 'sunk' && patrol.sunk() == 'sunk') {

      winner('Computer Wins')
      removeListener()
      newGame()
    }

    else if (cDestroyer.sunk() == 'sunk' && cCarrier.sunk() == 'sunk' && cBattleship.sunk() == 'sunk'
      && cSub.sunk() == 'sunk' && cPatrol.sunk() == 'sunk') {

      winner('You Win')
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


    playerBoard = new Board
    placePlayerShips()
    removeBoard()
    createComputerGrid(computerBoard)
    createPlayerGrid(playerBoard)
    buttons()
    startGame()
    changeBoard()

  });
}

//start game listener and function

function startGame() {
  const btn = document.getElementById("startGame");

  btn.addEventListener("click", () => {
    removeButtons()
    playRound(computerBoard)
    

  });
}

// new game listener and function

function newGame() {
  const btn = document.getElementById("newGame");

  btn.addEventListener("click", () => {

    
    removeBoard()
    removeWinner()
    destroyer = new Ship(3)
    carrier = new Ship(5)
    battleship = new Ship(4)
    sub = new Ship(3)
    patrol = new Ship(2)
    cDestroyer = new Ship(3)
    cCarrier = new Ship(5)
    cBattleship = new Ship(4)
    cSub = new Ship(3)
    cPatrol = new Ship(2)
    computerBoard = new Board
    placeComputerShips()
    createComputerGrid(computerBoard)
    playerBoard = new Board
    createPlayerGrid(playerBoard)
    buttons()
    changeBoard()
  });
}


//call button and change board functs
buttons()
changeBoard()





