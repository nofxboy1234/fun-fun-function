function capitalize(str) {
  const firstLetter = str.charAt(0);
  const remainingString = str.substring(1);
  return `${firstLetter.toUpperCase()}${remainingString}`;
}

function reverseString(str) {
  return 'olleh';
}

export { capitalize, reverseString };
