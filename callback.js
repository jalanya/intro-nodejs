const maxTime = 1000;

// If input is even, double it
// If input odd, error
// (call takes random amount of time < 1s)
const evenDoubler = (v, callback) => {
  let waitTime = Math.floor(Math.random() * (maxTime + 1));
  if (v%2) {
    setTimeout(() => {
      callback(new Error("Odd input"));
    }, waitTime);
  } else {
    setTimeout(() => {
      callback(null, v*2, waitTime);
    }, waitTime);
  }
};

var count = 0;

for (let i = 0; i < 10; i ++) {
  console.log(`Calling evenDoubler for value: ${i}`);
  evenDoubler(i, function(err, results, time) {
    if (err) {
      console.log(`ERROR ${err.message}`);
    } else {
      console.log(`The results are: ${results} (${time} ms)`);
    }
    if(++count === 10) {
      console.log("Done!");
    }
  });
};

console.log("------");
