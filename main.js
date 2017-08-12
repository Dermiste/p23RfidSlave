var socket = require('socket.io-client')('http://p23RfidMaster:3000');
socket.on('connect', function(){
	console.log("Connected! ");
});
socket.on('event', function(data){
	console.log("Data received");
});
socket.on('disconnect', function(){
	console.log("Disconnected");
});
