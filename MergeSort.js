/* 
  Stable sort

  Visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

  Time Complexity
    - Best case:    O(n log(n)) linearithmic
    - Average case: O(n log(n)) linearithmic
    - Worst case:   O(n log(n)) linearithmic

  Space: O(n) linear

  steps:
    1. create a merge function to merge two already sorted arrays into a single sorted array
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the previously created merge function
      - splitting of arrays stops when array can no longer be split
      - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Merges two already sorted arrays into a new sorted array
 * @param   {Array<number>} left
 * @param   {Array<number>} right
 *          @left and @right are sorted
 * @return  {Array<number>}
 *          A new sorted array containing all the elements of @left and @right
 * Time:    O(...)
 * Space:   O(...)
 */


// function mergeArr(left, right, newArr=[]) {
//   // while left[i] < right[j] we push arr[i] into the array and increment i but not j
//   let i = 0
//   let j = 0
//   if (right.length == 0){
//     while (i < left.length){
//       console.log('left is', left)
//       console.log('right is', right)
//       console.log('i=', i)
//       newArr.push(left[i])
//       i++
//     }
//     return newArr
//   }
//   if (left.length == 0){
//     while (j < right.length){
//       console.log('left is', left)
//       console.log('right is', right)
//       console.log('j=', j)
//       newArr.push(right[j])
//       j++
//     }
//     return newArr
//   }
//   if (left[i] < right[j]){
//     while (i < left.length && left[i] < right [j]){
//       console.log('i=', i)
//       newArr.push(left[i]);
//       i++
//     }
//     return(mergeArr(left.slice(i, left.length), right.slice(0, right.length), newArr))
//   }
//   if (left[i] > right[j]){
//     while (j < left.length && left[i] > right [j]){
//       console.log('j=', j)
//       newArr.push(right[j]);
//       j++
//     }
//     return(mergeArr(left.slice(0, left.length), right.slice(j, right.length), newArr))
//   }
// }


console.log(mergeArr(sortedA4, sortedB4));

function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  // in case one of the arrays has remaining items due to unequal lengths, all of those can be added
  while (indexLeft < left.length) {
    result.push(left[indexLeft]);
    indexLeft++;
  }

  while (indexRight < right.length) {
    result.push(right[indexRight]);
    indexRight++;
  }

  return result;
}

  // need to return function recursively but keep track of i and j so they do not reset to 0
  // runs into issues when the arrays are empty in either left or right

//Donna's solution that was assisted by online references
//   function merge(left, right) {
//     let i=0
//     let j=0
//     let k=0
//     newArr = []
//     while (i<left.length && j<right.length){
//         if (left[i]<right[j]){
//             newArr[k]=left[i];
//             i++; k++;
//         }
//         else {
//             newArr[k]=right[j];
//             j++; k++;
//         }
//     }
//     while (i<left.length)
//         newArr[k++] = left[i++];
//     while (j<right.length)
//         newArr[k++] = right [j++];
//     return newArr
// }
// console.log(merge(sortedA4, sortedB4))

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split and merged
 * @param   {Array<number>} nums
 *          In any order
 * @return  {Array<number>}
 *          New sorted array
 * Best:    O(n log(n)) linearithmic
 * Avg:     O(n log(n)) linearithmic
 * Worst:   O(n log(n)) linearithmic
 */
function mergeSort(nums) {
  if (nums.length === 1) {
    // return once we hit an array with a single item
    return nums;
  }

  const middle = Math.floor(nums.length / 2); // get the middle item of the array rounded down
  const left = nums.slice(0, middle); // items on the left side
  const right = nums.slice(middle); // items on the right side

  return merge(mergeSort(left), mergeSort(right));
}

module.exports = { merge, mergeSort };
