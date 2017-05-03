//write an HTTP server that only receives POST requsts and converts POST body characters to upper-case and returns to client
//port will be provided by first command line argument

var port = process.argv[2];
var http = require('http');
//use map to transform the stream data as it comes through
var map = require('through2-map');

//an input stream would be considered an iterator in swift! 
//we get data streams in pieces instead of batch data - we could either add the stream packets one by one as they come in OR
//we could use the map method to "collect" all of the stream data that comes in, treat it as a single object and perform 
//an operation/transformation on it and chain piping functions to one another.


var server = http.createServer(function(req, res){
    if (req.method==='POST') {
        req.pipe(map(function(chunk){
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
});
server.listen(port);


//WITHOUT USING THE MAP NPM MODULE
//     if (req.method == 'POST'){
//         var dataBody = '';
//         req.setEncoding('utf8');
//         req.on('data', function(chunk){
//             dataBody+=chunk;
//         })
//         req.on('end', function(){
//             res.end(dataBody.toUpperCase());
//         })
//     }
// }).listen(port);