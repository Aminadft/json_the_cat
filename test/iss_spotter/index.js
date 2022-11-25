// index.js
//Fetch our IP Address,  fetch geo coodinates IP, Fetch nextISSI flyovers for geo coorindates
// index.js
const { fetchMyIP, fetchCoordinatesByIP, fetchISSFlyOverTimes, nextISSTimesForLocation } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});
fetchCoordinatessByIP('173.34.168.54');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  //success print details!

  console.log(passTimes);
})
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    "response": [
      {"risetime": TIMESTAMP, "duration": DURATION},
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    //Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);const fetchCoordsByIP = function(ip, callback) {
      request(`http://ipwho.is/${ip}`, (error, response, body) => {
    
        if (error) {
          callback(error, null);
          return;
        }
    
        const parsedBody = JSON.parse(body);
    
        if (!parsedBody.success) {
          const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
          callback(Error(message), null);
          return;
        } 
    
        const { latitude, longitude } = parsedBody;
    
        callback(null, {latitude, longitude});
      });
    };
    
    // Don't need to export the other function since we are not testing it right now.
    module.exports = { fetchCoordsByIP };
    const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);

  const nextISSTimesForMyLocation = function(callback) {
    const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});
});