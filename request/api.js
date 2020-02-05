const rp = require('request-promise')

const options = {
    method: 'GET',
  uri: 'https://risingstack.com',
  headers: {
    'User-Agent': 'Request-Promise',
    'Authorization': 'Basic QWxhZGRpbjpPcGVuU2VzYW1l'
  },
    json: true // Automatically parses the JSON string in the response
};
 
rp(options)
    .then(function (repos) {
        console.log('User has %d repos', repos.length);
    })
    .catch(function (err) {
        // API call failed...
    });