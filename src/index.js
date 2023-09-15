//change later when want to use css ******

//import './styles.css';

import {
    Ship,
  } from "./ship";
  

/*
//capitalize string
function capitalize(string) {

    return string[0].toUpperCase() + string.slice(1)

}


//reverse string
function reverse(string) {

    let arr = []

    for (let i = string.length; i >= 0; i--) {
        arr.push(string[i])
    }
    return arr.join("")
}

export {
    capitalize,
    reverse,
    
};

*/

//ship class
/*
class Ship {

    constructor(length) {
      this.length = length;
      this.hits = [];
      this.sunk = sunk;
    }


  
  }
*/


  let destroyer = new Ship(4)
destroyer.hit(1)
destroyer.hit(2)
destroyer.hit(3)
destroyer.hit(4)

  console.log(destroyer)
  console.log(destroyer.sunk())

let carrier = new Ship(6)
console.log(carrier)