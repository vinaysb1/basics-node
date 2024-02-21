var http = require('http');

// Use dynamic import instead of require
import('upper-case').then(uc => {
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc.upperCase("Hello World!"));
    res.end();
  }).listen(8080);
}).catch(err => {
  console.error('Failed to import upper-case module:', err);
});
