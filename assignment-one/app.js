const http = require("http");

http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Hello World!');
  res.end();
}).listen(3000);