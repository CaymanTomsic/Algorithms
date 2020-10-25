/**
 * @param {[]} arr an array of elements
 * @param {number|string} elem an element to add to the end of the array
 * @return {[]} the original (modified) array
 */

function push(arr, elem) {
    return arr[arr.length] = elem;
}

var originalArray = [1];

var result = push(originalArray, 2);

console.log(result === originalArray); // should log true
console.log(result); // should log [1, 2]

    /**
   * @param {[]} arr an array of elements
   * @param {number|string} elem an element to add to the front of the array
   * @return {[]} the original (modified) array
   */

function pushFront(arr, elem) {
    for(var i=arr.length-1; i>=0; i--){
        arr[i+1]=arr[i];
    }
    arr[0]=elem;
    console.log(arr);
}

var secondArray = [4];
var result2 = pushFront(secondArray, 3);

console.log(result2 === secondArray); // should log true
console.log(result2); // should log [3, 4]
    
    
    /**
   * ** BONUS **
   * @param {number[]} intArray an array of integers
   * @return {number[]} a new array with all the numbers EXCEPT the first increased by 7
   */
    
function addSevenToMost(intArray) {
    for (var i=1; i < intArray.length; i++){
        intArray[i] += 7;
    }
    return intArray;
}

console.log(addSevenToMost([1, 2, 3, 4]));
  // should log [1, 9, 10, 11]

console.log(addSevenToMost([2, 5, 7]));
  // should log [2, 12, 14]