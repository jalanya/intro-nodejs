const fs = require('fs');

if (fs.existsSync('temp')) {
  console.log('Directory exists, removing...');
  if (fs.existsSync('temp/new.txt')) {
    fs.unlinkSync('temp/new.txt');
  }
}
//This is a real case about Christmas tree problem callback or callback hell.
fs.mkdir('temp', (err) => {
  fs.exists('temp', (exists) => {
    if (exists) {
      process.chdir('temp');
      fs.writeFile('test.txt', 'This is some test text for the file', (err) => {
        fs.rename('test.txt', 'new.txt', (err) => {
          fs.stat('new.txt', (err, stats) => {
            console.log(`File has size: ${stats.size} bytes`);
            fs.readFile('new.txt', (err, data) => {
              console.log(`File contents: ${data.toString()}`);
            });
          });
        });
      });
    }
  })
});
