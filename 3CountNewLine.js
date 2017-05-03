//Synchronously read a file provided as command line argument
//Print number of newline characters to the console (either count in a loop or use grep)

//use the filesystem module
var fs = require('fs');
//synchronously read the file and pass utf8 encoding so that we don't need to convert binary to string
var fileContentEncoded = fs.readFileSync(process.argv[2], 'utf8');


//GREP for a newline character (puts matches into an array) and count length of array
//we could alternatively loop through entire string and match element to a newline char
console.log(fileContentEncoded.match(/\n/g).length);

