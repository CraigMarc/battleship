

function computerPlayer(board) {
  

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