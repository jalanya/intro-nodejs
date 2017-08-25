const cluster = require('cluster');
const http = require('http');
const numWorkers = 2;

if (cluster.isMaster) {
  // Fork workers.
  for(var i = 0; i < numWorkers; i++) {
    console.log('master: about to fork a worker');
    cluster.fork();
  }

  cluster.on('fork', function(worker) {
    console.log(`master: fork event (worker ${worker.id})`);
  });

  cluster.on('online', function(worker) {
    console.log(`master: online event (worker ${worker.id})`);
  });

  cluster.on('listening', function(worker, address) {
    console.log(`master: listening event (worker ${worker.id}, pid ${worker.process.id}, ${address.address}: ${address.port})`);
  });

  cluster.on('exit', function(worker, code, signal) {
    console.log(`master: exit event (worker ${worker.id})`);
  });

} else {
  console.log(`worker: worker #${cluster.worker.id} ready!`);

  let count = 0;
  // Workers can share my TCP connection
  // In this case its a HTTP server
  http.createServer(function(req, res) {
    res.writeHead(200);
    count++;
    console.log(`Worker #${cluster.worker.id} is incremeting count to ${count}`);
    res.end(`hello world from worker #${cluster.worker.id} (pid ${cluster.worker.process.id}) with count = ${count}\n`);
    if (count === 3) {
      cluster.worker.destroy();
    }
  }).listen(9089, 'localhost');
}
