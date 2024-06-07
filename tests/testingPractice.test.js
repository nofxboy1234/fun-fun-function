import { capitalize, reverseString, calculator, caesarCipher } from '../src/testingPractice';

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
