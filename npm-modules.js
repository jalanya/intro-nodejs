let request = require('request');

request('http://www.pluralsight.com', (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body);
    // console.dir(response);
  }
});
