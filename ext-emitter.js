const Resource = require('./resource');

let r = new Resource(7);

r.on('start', () => {
  console.log("I've started!");
});

r.on('data', (d) => {
  console.log(`   I received data -> ${d}`);
});

r.on('end', (t) => {
  console.log(`I'm done, with ${t} data events`);
});
