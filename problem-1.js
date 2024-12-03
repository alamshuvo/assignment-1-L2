// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
function sumArray(array) {
    var sum = 0;
    for (var a = 0; a < array.length; a++) {
        var num = array[a];
        sum += num;
    }
    return sum;
}
