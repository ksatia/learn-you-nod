/*command line arguemnts passed in will be (directory, file extension to filer by).
write program that uses async I/O to filter out file names and print them, one per line, based on 
file extension specified as argument. Note that the file extension won't be prefaced with a '.' */


var fs = require("fs");
var path = require("path");

var directoryPath = process.argv[2];
var fileExtension = "." + process.argv[3];

//recursively reads the filenames in a directory and stores in an array
fs.readdir(directoryPath, function(err, list) {
    if (err) {
        return console.log(err)
    }

    for (var i = 0; i < list.length; i++) {
        if (list[i].endsWith(fileExtension)){
            console.log(list[i]);
        }
    }
    });
