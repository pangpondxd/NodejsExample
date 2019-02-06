var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var n = 0;
let answer = Math.floor(Math.random()*21)

net.createServer(function(sock) {
	console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
	sock.on('data', function(data) {
		var num = data;
		console.log('DATA ' + sock.remoteAddress + ': ' + data);
		if(n == 0){
			sock.write('OK')
			n++
		}
		else{
			if(n < 6){
				if(data == answer){
                    console.log('answer : ' + answer)
				sock.write('BINGO')
				//process.exit();
				}else{
                    sock.write('WRONG')
                    console.log('answer : '+ answer)
					n++
				}
			}
		};
	});
	sock.on('close', function(data) {
		console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
	});
}).listen(PORT, HOST);
console.log('Server listening on ' + HOST +':'+ PORT);