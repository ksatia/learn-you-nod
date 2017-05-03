//test to check that arrays are pass by reference

var sampleArray = [3, 4, 5, 6, 7, 8, 9];

function shiftEmOut(array) {
    //slicing returns a copy
    //var copyArray = array.slice();
    console.log(array);
    array.shift();
    console.log(array + '\n');
}

console.log('original array: ' + sampleArray + '\n');
console.log("Preparing operations...");
shiftEmOut(sampleArray)
console.log('original array argument: ' + sampleArray);
