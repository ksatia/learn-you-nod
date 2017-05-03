//Perform GET request using 3 command line provided arguments (URLS)
//Perform a serial async request - we're using a queue here along with recursion.
//The base case is that our url array is empty.
//Print to console in order the responses were received.

var http = require('http');
var URLS = process.argv.slice(2);

var dataReturn = [];

synchAPICalls(URLS);

function synchAPICalls(urls) {
    //pop off the first element from our url array
    var url = urls.shift();
    //execute a get request for the url and set encoding so we don't need to convert to a string
    http.get(url, function(res) {
        res.setEncoding('utf8');
        //initialize empty string to hold response data
        var chunks = '';
        //add to data storage as streams come in. 
        res.on('data', function(d) {
            chunks += d;
        });
        //push data storage to array
        res.on('end', function() {
            dataReturn.push(chunks);
            //if we have anything left in the array call recursively else return dataReturn
            if (urls.length > 0) {
                synchAPICalls(urls);
            }
            else {
                dataReturn.forEach(function(element){
                    console.log(element);
                })
            }
        });
    });
}