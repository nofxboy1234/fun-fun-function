import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from '../src/testingPractice';

test('capitalize: takes a string and returns it with the first character capitalized', () => {
  expect(capitalize('hello')).toEqual('Hello');
  expect(capitalize('cat')).toEqual('Cat');
});

test('reverseString: takes a string and returns it reversed', () => {
  expect(reverseString('hello')).toEqual('olleh');
  expect(reverseString('cat')).toEqual('tac');
});

test('calculator.add: Add 2 numbers', () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

test('calculator.subtract: Subtract num2 from num1', () => {
  expect(calculator.subtract(5, 3)).toEqual(2);
});

test('calculator.divide: Divide num1 by num2', () => {
  expect(calculator.divide(19, 2)).toEqual(9.5);
});

test('calculator.multiply: Multiply num1 by num2', () => {
  expect(calculator.multiply(4, 3)).toEqual(12);
});

test('caesarCipher: takes a string and a shift factor and returns it with each character "shifted"', () => {
  expect(caesarCipher('abc', 3)).toEqual('def');
  expect(caesarCipher('xyz', 3)).toEqual('abc');
  expect(caesarCipher('HeLLo', 3)).toEqual('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!');
});

test('analyzeArray: takes an array of numbers and returns an object with the following properties: average, min, max, and length.', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('average');
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toEqual(4);

  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('min');
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toEqual(1);

  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('max');
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toEqual(8);

  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('length');
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toEqual(6);

  expect(analyzeArray([2, 4, 6, 8, 10, 12])).toHaveProperty('average');
  expect(analyzeArray([2, 4, 6, 8, 10, 12]).average).toEqual(7);

  expect(analyzeArray([2, 4, 6, 8, 10, 12])).toHaveProperty('min');
  expect(analyzeArray([2, 4, 6, 8, 10, 12]).min).toEqual(2);

  expect(analyzeArray([2, 4, 6, 8, 10, 12])).toHaveProperty('max');
  expect(analyzeArray([2, 4, 6, 8, 10, 12]).max).toEqual(12);

  expect(analyzeArray([2, 4, 6, 8, 10, 12])).toHaveProperty('length');
  expect(analyzeArray([2, 4, 6, 8, 10, 12]).length).toEqual(6);
});
