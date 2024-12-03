// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
function sumArray(array: number[]) : number {
    let sum=0;
    for (let a = 0; a < array.length; a++) {
        const num = array[a];
        sum+=num;
    }
    return sum
}
