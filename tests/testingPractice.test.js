import { capitalize, reverseString } from '../src/testingPractice';

test('capitalize: takes a string and returns it with the first character capitalized', () => {
  expect(capitalize('hello')).toEqual('Hello');
  expect(capitalize('cat')).toEqual('Cat');
});

test('reverseString: takes a string and returns it reversed', () => {
  expect(reverseString('hello')).toEqual('olleh');
  expect(reverseString('cat')).toEqual('tac');
});
