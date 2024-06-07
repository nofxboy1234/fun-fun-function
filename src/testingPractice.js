function capitalize(str) {
  const firstLetter = str.charAt(0);
  const remainingString = str.substring(1);
  return `${firstLetter.toUpperCase()}${remainingString}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },
  subtract(num1, num2) {
    return num1 - num2;
  },
  divide(num1, num2) {
    return num1 / num2;
  },
  multiply(num1, num2) {
    return num1 * num2;
  },
};

function caesarCipher(str) {
  return 'abc';
}

export { capitalize, reverseString, calculator, caesarCipher };
