const request = require('request');
const breed = process.argv.splice(2);
const abreviation = breed.join('').toLowerCase().split('').slice(0, 4).join('');
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${abreviation}`;
// console.log(abreviation);

const breedFetcher = () => {
  request(URL, (error, statusbar, body) => {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log(`Breed not found`);
      process.exit();
    }
    if (error) {
      console.log(`Request failed`);
      process.exit();
    }
    console.log(data[0].description);
  });
};

breedFetcher();