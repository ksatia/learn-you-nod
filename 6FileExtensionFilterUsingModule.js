//write a file that uses the FileExtensionFilterModule function to obtain an array of filenames filtered by extension.
//Obtain the directory and extension from command line arguments and pass them to module function
//Define a callback to print the filenames to the console.


var myModule = require('./6FileExtensionFilterModule');
var dir = process.argv[2];
var filterExtension = process.argv[3];


//we define a callback here that will actually get called by our module function - we have a filtered function
//that is being passed as "item" here because we filter it in our module. When we pass this callback, our module function
//uses it to simply return our filtered array. all we need to do is print the contents of the array one by one here.

var callback = function (err, item) {
    if (err) return console.log(err);
    item.forEach(function(file){
        console.log(file);
    })
}

myModule(dir, filterExtension, callback);
