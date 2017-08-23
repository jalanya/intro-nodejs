let b = new Buffer('Hello');

console.log(b.toString());
console.log(b.toString('base64'));

let v = new Buffer('World').toString('base64');

console.log(b.toString('utf-8',0,2));
console.log(v);
