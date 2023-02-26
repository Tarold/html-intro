const { readFile } = require('fs/promises');
const http = require('http');

const httpServer = http.createServer((request, response) => {
  console.log('request :>> ', request.url);
  console.log('response :>> ', response.method);

  readFile('./index.html', { encoding: 'utf-8' })
    .then(data => {
      response.statusCode = 200;
      response.setHeader('Context-Type', 'plain/text');
      response.end(data);
    })
    .catch(err => {
      response.statusCode = 500;
      response.setHeader('Context-Type', 'plain/text');
      response.end('File was not read');
    });
});

httpServer.listen(5000, 'localhost', () => {
  console.log('Server is listening port 5000, host "localhost"');
});
