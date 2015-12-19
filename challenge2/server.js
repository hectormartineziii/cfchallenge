var http = require('http');
var fs = require('fs');
var path = require('path');

var site = fs.readFileSync(path.join(__dirname,'/index.html'));


http.createServer(function(req,res){
	if ('/' == req.url || '/index.html' == req.url){
		res.writeHead(200, {
			'content-type': 'text/html',
			'hello': 'headers'
		});
		res.end(site.toString());
	} else {
		res.writeHead(404);
		res.end('Not Found')
	}
}).listen(3000)

//create a public directory serve any file in that directory.