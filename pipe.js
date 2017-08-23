const request = require('request');

let s = request('http://www.pluralsight/');
//Pipe HTML to standard out
s.pipe(process.stdout);

//Chain request and pipe together
request('http://www.pluralsight.com').pipe(process.stdout);
