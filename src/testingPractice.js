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

function caesarCipher(str, shift) {
  const startCharCode = 'a'.charCodeAt(0) - 1;
  const endCharCode = 'z'.charCodeAt(0);
  const charCodes = str.split('').map((char) => char.charCodeAt(0));

  const simplifiedShift = shift % 26;

  const charCodesShifted = charCodes.map((charCode) => {
    const newCharCode = charCode + simplifiedShift;

    let finalCharCode;
    if (newCharCode > endCharCode) {
      const offset = simplifiedShift - (endCharCode - charCode);
      finalCharCode = startCharCode + offset;
    } else {
      finalCharCode = newCharCode;
    }

    return finalCharCode;
  });

  const charsShifted = charCodesShifted.map((charCodeShifted) =>
    String.fromCharCode(charCodeShifted),
  );
  const strShifted = charsShifted.join('');
  return strShifted;
}

export { capitalize, reverseString, calculator, caesarCipher };
