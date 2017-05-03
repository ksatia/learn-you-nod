//Create a TCP server and write to the client side
//We'll be writing the data to the client
//Formatting should be as follows - "YYYY-MM-DD hh:mm" + ''\n'
//Ended up writing client server at the end but not necessary for passing learnyounode test suite

var net = require('net');
var date = new Date();
//no need to format year
var year = date.getFullYear();

var month = formatDate(date.getMonth() + 1);
var day = formatDate(date.getDate());
var hour = formatDate(date.getHours());
var minutes = formatDate(date.getMinutes());

var fullDate = year +"-"+ month +"-" + day + " "+ hour + ":" + minutes + '\n';
console.log(fullDate);


function formatDate(unit) {
    return unit > 10 ? unit : "0" + unit;
}


// listen to TCP connections 
var port = process.argv[2];
//a socket is like a holding area for data that is being communicated between a client and server (application layer here)
//we're communicating with a local server here, so it's a browser/OS<->localhost server connection.
//TCP and UDP are used to wrap around HTTP requests and specify a port number to open a socket on.

//we need to specify a host and port for the server to connect to and listen in on
//WE ARE CREATING A TCP SERVER INSTANCE HERE
var server = net.createServer(function(socket) {
    //console.log(socket.remoteAddress);
    //console.log(socket.remotePort);
    
    socket.write(fullDate);
    socket.end();
    //event handler on receiving request/data from the client
    // socket.on('data', function(data) {
    //     //console.log(data);
    //     //we're writing to the client here (it is receiving this data from the TCP server we've created)
    //     socket.write(fullDate);
    // });
    //event handler for when connection closes
    // socket.on('close', function(data) {
    //     console.log('CLOSED: ' + socket.remoteAddress + ' ' + socket.remotePort);
    // });
}).listen(port);






//we need to specify a port and host to connect to and send data through
//WE ARE CREATING A TCP CLIENT HERE
// var net = require('net');

// var client = new net.Socket();
// client.connect(1337, '127.0.0.1', function() {
// 	console.log('Connected');
// 	client.write('Hello, server! Love, Client.');
// });

// client.on('data', function(data) {
// 	console.log('Received: ' + data);
// 	client.destroy(); // kill client after server's response
// });

// client.on('close', function() {
// 	console.log('Connection closed');
// });
