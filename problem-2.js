// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
function removeDuplicates(numOfArray) {
    var newArray = [];
    for (var a = 0; a < numOfArray.length; a++) {
        var element = numOfArray[a];
        if (!newArray.includes(element)) {
            newArray.push(element);
        }
    }
    return newArray;
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 4]));
