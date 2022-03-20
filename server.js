const net = require("net");
const fs = require("fs");
const server = net.createServer();

server.listen(3000, () => {
  console.log("Server listening to port 3000!");
});

server.on("connection", (client) => {
  console.log("New client connected!");
  client.write("Hello there! Please enter the filename");
  client.setEncoding("utf8");
  client.on("data", (message) => {
    message = message.trim();
    fs.readFile(message, (err, data) => {
      if (err) return console.log(`Error reading the filename ${err}`);
      client.write(data);
      console.log("The file data has been sent to client");
    });
  });
});
