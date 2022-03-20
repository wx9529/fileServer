const net = require('net');
stdin = process.stdin;

const conn = net.createConnection({
  host: 'localhost',
  port: 3000
});

conn.setEncoding('utf8');
conn.on('data', (data) => {
  console.log('Server says: ', data);
});

stdin.on("data", (data) => {
  conn.write(data);
})