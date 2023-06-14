const http = require('http');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const server = http.createServer(async (req, res) => {
  const { url, method } = req;
  let logContent = `${new Date()}: ${method} ${url}\n`;

  fs.writeFileSync('request.log', logContent, { flag: 'a+' });

  let content = ``;

  if(url === '/' && method === 'GET') {
    content = `<h1>Hi Hi Ayo!</h1>`;
  } else if(url === '/about' && method === 'GET') {
    content = `<a href="https://github.com/lebrancconvas" target="_blank">Follow Me</a>`
  }

  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
  res.statusCode = 200;
  res.end(content);
});

server.listen(8082, () => {
  console.log(`Server running at http://localhost:8082/`);
});
