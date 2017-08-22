let maxTime = 1000;

// If input is even, double it
// If input is odd, error
// (call takes random amount of time < 1s)
const evenDoubler = (v, callback) => {
  let waitTime = Math.floor(Math.random()*(maxTime+1));
  if (v%2) {
    setTimeout(() => {
      callback(new Error("Odd input"));
    }, waitTime);
  } else {
    setTimeout( () => {
      callback(null, v*2, waitTime);
    }, waitTime)
  }
};

module.exports.evenDoubler = evenDoubler;
module.exports.foo = "bar";
