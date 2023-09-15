
import {
    capitalize,
    reverse,
  } from "./index";
  
  
  //capitalize string test
  
  test('check if first letter is capital', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  
  //reverse string test
  
  test('check if string is reversed', () => {
    expect(reverse('real')).toBe('laer');
  });

  