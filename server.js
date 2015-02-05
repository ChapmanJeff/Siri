var http = require('http');
var port = 8887;


var messages = ["Hello there.", "Jeff is Awesome", "You are the Best!","You should go ask Jeff","Can I ask you a question?","I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."]

var onRequest = function(req, res) {
	if(req.method === 'GET') {
		res.writeHead(200, {
		'Connection': 'close',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
		})
		res.end(JSON.stringify({message: randomMessage(messages)}))
	}
	if(req.method === 'OPTIONS') {
		res.writeHead(200, {
			'Connection': 'close',
	  	'Content-Type': 'application/json',
	  	'Access-Control-Allow-Origin': '*',
	  	'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
	  	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		})
		res.end(JSON.stringify({message: randomMessage(messages)}))
	}
}

var randomMessage = function(array) {
	var num = Math.floor(Math.random()*(array.length));
	return array[num];
}
http.createServer(onRequest).listen(port);
console.log('Listening on port ' + port);