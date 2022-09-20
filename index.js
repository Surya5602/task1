const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello from the task completed jenkins server");
});
server.listen(5000);