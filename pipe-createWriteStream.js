const request = require('request');
const fs = require('fs');
//Pipe HTML to a file instead of standard out
request('http://www.pluralsight.com/').pipe(fs.createWriteStream('pluralsight.html'))
