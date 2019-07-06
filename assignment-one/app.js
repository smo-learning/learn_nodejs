const http = require("http");

http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  let responseStatus = 200;
  res.setHeader('Content-Type', 'text/html')

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    })
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });
    responseStatus = 302;
    res.setHeader('Location', '/');
  }
  if (url === "/") {
    res.write('Hello World!');
    res.write("<form action='/create-user' method='POST'>");
    res.write("<input type='text' name='message' />");
    res.write("<button type='submit'>Click</button>");
    res.write("</form>");
  }
  if (url === "/users") {
    let users = [1, 2, 3].map(i => "<li>User " + i + "</li>");
    res.write("<ul>" + users + "</ul>");
  }
  res.statusCode = responseStatus;
  res.end();
}).listen(3000);