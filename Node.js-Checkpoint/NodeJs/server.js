const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<h1>Hello Node!</h1>");
  res.end();
});

server.listen(3000, (err, data) => {
  if (err) {
    console.log("something went wrong", err);
  } else {
    console.log("server is listening on port 3000");
  }
});