const fetchMyIP = require('./iss.promised');
fetchMyIP()
.then(fetchCoordsByIP)
.then(body => console.log(body));