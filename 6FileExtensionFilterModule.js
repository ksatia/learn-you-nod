//write a module using module.exports to create a function
//the program should asynchronously read the contents of a directory and filter out the filenames that match a given file extension
//necessary info (extension to filter by, directory) will be passed as command line arguments

//module function must accept a callback that will be defined in a different file. The callback will define printing to the console.
//the module function will simply call the callback and pass in the filtered list. 


var fs = require("fs");
var path = require("path");
//we will be creating the actual arguments to pass this function so don't worry about directoryPath and fileExtension

module.exports = function(directory, fileExtension, callback) {
    fs.readdir(directory, function(err, list) {
        if (err) return callback(err, null)
        list = list.filter(function(file) {
            if (path.extname(file) === '.' + fileExtension) return true;
        })
        return callback(null, list);
    })
}