import { capitalize } from '../src/testingPractice';

test('capitalize: takes a string and returns it with the first character capitalized', () => {
  expect(capitalize('hello')).toEqual('Hello');
});
