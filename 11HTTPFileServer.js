//user provides a port number
//write an HTTP server that listens to the port and serves the same text file for each request received.
//filepath will be provided as second command line argument

var http = require("http");
var fs = require('fs');

var port = process.argv[2];
var filePath = process.argv[3];

//a buffer is an area of physical memory that temporarily stores data when it's being transported from one place to another
//a stream is just a sequence of data made available over time. Data is processed piece by piece vs in batches.

//HTTP responses are streams that we can write to (TCP is both readable and writeable).
//If we want to write to our response object in the callback, we must convert our data to a stream.
//We must read from the file path, turn that data into a stream, and pipe it into the response we're sending.

var server = http.createServer(function(req, res){
    /*
    //if we wanted to specify data about our response for the client, we could write as such -
    res.writeHead(200, {'content-type': 'text/plain'});
    */
    
    var readStream = fs.createReadStream(filePath);
    
    //for each chunk of data we convert to a stream packet, pipe it into a response object
    readStream.on('open', function(){
        fs.createReadStream(filePath).pipe(res);
    })
    readStream.on('error', function(err){
        res.end(err);
    })
    readStream.on('end', function(){
        console.log("finished creating stream from file");
    })

}).listen(port);

