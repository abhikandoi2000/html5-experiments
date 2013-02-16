/*
  serving html webpages to avoid media errors while gaining user media access
  node-static backend
*/
var static = require('node-static');
var http = require('http')

var server = new (static.Server)('.');

var httpServer = http.createServer(function(req, res){
	req.addListener('end', function(){
		server.serve(req, res);
	} );
});

httpServer.listen(8668);
console.log("Serving at localhost:8668.");
