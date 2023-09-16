import {
    Ship,
  } from "./ship";


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

        let type = this.board[y][x].type
        
        this.board[y][x] = '*'

        return type
        
       }
       
      


    }

}



export {
    Board,

};