// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
function sumArray(array) {
    var sum = 0;
    for (var a_1 = 0; a_1 < array.length; a_1++) {
        var num = array[a_1];
        sum += num;
    }
    return sum;
}
var a = sumArray([1, 2, 3, 4, 5]);
console.log(a);
