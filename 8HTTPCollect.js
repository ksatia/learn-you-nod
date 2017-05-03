//Perform a GET request to command line provided URL.
//Collect all data and write to lines to console - 1. character count and 2. complete server response (stringified)

var http = require('http');
var URL = process.argv[2];
var dataTotal=[];
http.get(URL, function(response) {
    //entire response should be in utf8 to avoid having to convert to string
    response.setEncoding('utf8');
    //upon receiving data packets, add to an array
    response.on("data", function(data){
        dataTotal.push(data);
    });
    //upon ending the receipt of data, join the array, log number of chars and then log actual stringified data
    response.on("end", function(){
        dataTotal=dataTotal.join('');
        console.log(dataTotal.length);
        console.log(dataTotal);
    });
    //upon receiving an error during the request, just log it
    response.on("error", console.log);
})