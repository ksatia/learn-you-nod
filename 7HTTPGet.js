//write a program that performs a get request to a command line provided URL. Write to the console.
//will need to stringify the response data before printing (or just encode the response before event listening logic).

//WE'RE WRITING THE CLIENT CODE HERE
var http = require('http');
var URL = process.argv[2];

http.get(URL, function(response) {
    response.setEncoding('utf8');
    response.on("data", console.log);
    response.on("erro", console.log);
})

