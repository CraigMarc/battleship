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


}



export {
    Board,

};