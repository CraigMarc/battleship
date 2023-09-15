
  import {
    Ship,
  } from "./ship";

  

//check if ship is built
let testShip = new Ship(3)

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
