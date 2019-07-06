const http = require("http");

http.createServer((req, res) => {
  const url = req.url;

  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (url === "/") {
    res.write('Hello World!');
  }
  if (url === "/users") {
    let users = [1, 2, 3].map(i => "<li>User " + i + "</li>");
    res.write("<ul>"+users+"</ul>");
  }

  res.end();
}).listen(3000);