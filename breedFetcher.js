const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const abreviation = breedName.toLowerCase().split('').slice(0, 4).join('');
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${abreviation}`;

  request(URL, (error, statusbar, body) => {
    const data = JSON.parse(body);
    if (error) {
      return callback(error, null);
    } else {
      if (data.length === 0) {
        return callback(null, '');
      } else {
        return callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };