// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
function removeDuplicates(numOfArray: number[]) {
    let newArray:number[]=[];
    for (let a = 0; a < numOfArray.length; a++) {
        const element = numOfArray[a];
        if (!newArray.includes(element)) {
            newArray.push(element);
            
        }
    }
  return  newArray
    
}

