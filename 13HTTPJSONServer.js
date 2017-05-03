//write an HTTP server that serves JSON when it receives a get request to the path '/api/parsetime'
//the request will contain a query string with a key 'iso' and an ISO-format time as the value
// /api/parsetime?iso=2013-08-10T12:10:15.474Z
//JSON should be formatted as either { "hour": 13, "minute":13, "second":13} or {"unixtime":83458452348}

//add a second endpoint for '/api/unixtime' which accepts the same query but returns UNIX epoch time in milliseconds
//(number of milliseconds since 1 Jan 1970 00:00:00 UTC) under JSON property 'unixtime'

var http = require("http");
var url = require('url');
var port = process.argv[2];

http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'application/json' });
    //call our helper function that deals with routing
    var returnDate = jsonTimeFormatter(req);
    res.write(returnDate);
    res.end();
}).listen(port);



function jsonTimeFormatter(req) {
    //get parsed metadata about the HTTP request
    var parsedURL = url.parse(req.url);
    //get the query property of the HTTP request and slice it to get the time
    var APIEndpointDate = parsedURL.query.slice(4);
    //create a date object based on the sliced query property
    var date = new Date(APIEndpointDate);
    //handle routing here based on the pathname property
    if (parsedURL.pathname === '/api/parsetime') {
        var resData = {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        }
    }
    else if (parsedURL.pathname === '/api/unixtime') {
        var resData = {
            'unixtime': date.getTime()
        }
    }
    //convert the javascript object we created (resData) to a JSON string and return it
    return JSON.stringify(resData);
}
