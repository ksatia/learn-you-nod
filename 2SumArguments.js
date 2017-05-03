//Accept one or more numbers as command line arg and print the sum to console

var sum = 0

for (var i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
}


console.log(sum);