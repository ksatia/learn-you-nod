//Read file asynchronously using path provided by command line argument (using async operations here)


var fs = require('fs');

//specify encoding and we can avoid casting to a string type in our callback

fs.readFile(process.argv[2], 'utf8', function(error, content) {
  if (error) return error;
  //we can either GREP or we can split the string based on \n chars and count the length (minus 1)
	console.log(content.match(/\n/g).length);
});


