// iss_promised.js
const request = require('request-promise-native');
const fetchMyIP = function()
return request('https://api.ipify.org?format=json');
const fetchCoordsByIP = function() {}

  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);
};
};
module.exports = { fetchMyIP, fetchCoordsByIP };