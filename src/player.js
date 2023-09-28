import {
    Ship,
  } from "./ship";
  
  import {
    Board,
  } from "./gameboard";






function computerPlayer(board) {
  console.log(board)

  function getRandom() {
    let rand = Math.floor(Math.random() * 10);


    return (rand)
  }


  function makePlacement() {

    let x = getRandom()
    let y = getRandom()

    let attack = board.attack(x,y)
    if (attack == 'taken') {
      makePlacement()
    }


  }
  makePlacement()

}

export {
  computerPlayer,

};