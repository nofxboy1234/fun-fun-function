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
  const charCodes = mapCharCodes(str);
  const charCodesShifted = shiftCharCodes(charCodes, shift);
  const newCharacters = mapNewCharacters(charCodesShifted);
  const newString = newCharacters.join('');

  return newString;
}

function mapNewCharacters(charCodesShifted) {
  return charCodesShifted.map((charCodeShifted) => {
    if (!isNumber(charCodeShifted)) {
      return charCodeShifted;
    }

    return String.fromCharCode(charCodeShifted);
  });
}

function shiftCharCodes(charCodes, shift) {
  const startCharCode = 'a'.charCodeAt(0) - 1;
  const endCharCode = 'z'.charCodeAt(0);
  const simplifiedShift = shift % 26;

  return charCodes.map((charCode) => {
    if (!isNumber(charCode)) {
      return charCode;
    }

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
}

function mapCharCodes(str) {
  return str.split('').map((char) => {
    if (char.match(/^[a-zA-Z]$/)) {
      return char.charCodeAt(0);
    } else {
      return char;
    }
  });
}

function isNumber(value) {
  return typeof value === 'number';
}

export { capitalize, reverseString, calculator, caesarCipher };
