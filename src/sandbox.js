const result = fetch('https://vatapi.com/v1/country-code-check?code=DE')
  .then((response) => {
    return response.text();
  })
  .then((text) => {
    console.log(text);
  })
  .catch((err) => {
    console.error(err);
  });

console.log('end');
