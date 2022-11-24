//request pull from library via require method
const request = require("request");

const fetchBreedDescription = (breedname, callback) => {
  URL request(`https://api.thecatapi.com/v1/breeds/search?q=${breedname}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    //ERROR handling try/catch method
    try {
      callback(null, data[0].description);
    } catch (error) {
      let errorMsg = "Breed not found or no description available for it.";
      callback(errorMsg, null);
    }

  });
};

module.exports = { fetchBreedDescription };