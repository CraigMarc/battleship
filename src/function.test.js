
import {
  Ship,
} from "./ship";

import {
  Board,
} from "./gameboard";

  

//check if ship is built
let testShip = new Ship(3)
let testShip2 = new Ship(5)

test('check if ship is built', () => {
  expect(testShip).toEqual({
    "length": 3,
    "hits": []
});
});

//check is ship if hit

test('check if ship is hit', () => {
  testShip.hit(1)
  expect(testShip).toEqual({
    "length": 3,
    "hits": [1]
});
});

//check if ship is not sunk

test('check if ship is not sunk', () => {
  
  expect(testShip.sunk()).toBe('not sunk');
});


// check if ship is sunk

test('check if ship is sunk', () => {
  testShip.hit(2)
  testShip.hit(3)
  expect(testShip.sunk()).toBe('sunk');
});



// gameboard tests
let testBoard = new Board
testBoard.placeShip(0, 0, testShip, 'v')
//check if shot misses

test('check if shot misses', () => {
  
  expect(testBoard.attack(3,2)).toBe('not hit');
  expect(testBoard.board[2][3]).toBe('x');
});

//check if shot hits
test('check if shot hits', () => {
  
  expect(testBoard.attack(0, 0)).toBe('hit');
  expect(testBoard.board[0][0]).toBe('*');

});

//make sure shot not placed twice

test('make sure shot not placed twice', () => {
  
  expect(testBoard.attack(3, 2)).toBe('taken');
  
});


// test if placement allowed board

test('test if placement allowed board', () => {
  
  expect(testBoard.checkPlacement(0, 5, testShip2, 'v')).toBe('yes');
  
});

// test if placement not allowed 

test('test if placement not allowed ', () => {
  
  expect(testBoard.checkPlacement(0, 8, testShip2, 'v')).toBe('no');
  
});

// test to see if gameboard increases hits on ship

test('test to see if gameboard increases hits on ship ', () => {
  testBoard.placeShip(0, 3, testShip2, 'v')
  testBoard.attack(0, 3)
  expect(testShip2.hits).toEqual([1]);
  
});

