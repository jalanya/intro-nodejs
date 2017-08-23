const request = require('request');
const fs = require('fs');
const zlib = require('zlib');
//Pipe HTML through a gzip stream to a compressed file
request('http://www.pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));
