/* 
    - Visualization with playing cards (scroll down): https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization: https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets
    Time Complexity
        - Best:     O(n) linear when array is already sorted
        - Average:  O(n^2) quadratic
        - Worst:    O(n^2) quadratic when the array is reverse sorted
    Space: O(1) constant
        - this sort splits the array into two portions (conceptually, not literally)
        - the left portion will become sorted, the right portion (that hasn't been iterated over yet) is unsorted
  // can shift OR swap target element until it reaches desired position
  // shifting steps:
        1. consider the first item as sorted
        2. move to the next item
        3. store current item in a temp var (to make this position availale to shift items)
        4. if item to the left of current is greater than current item, shift the left item to the right
        5. repeat step 4 as many times as needed
        6. insert current item
        7. move to the next item and repeat
  // swap steps:
        1. consider the first item as sorted
        2. move to the next item
        4. if item to left of current item is less than current, swap
        5. repeat step 4 until item to left is less than current item
        6. move to next item and repeat
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts @nums by mutating the array
 * @param   {Array<number>} nums
 *          In any order
 * @return  {Array<number>}
 *          @nums after being sorted
 * Best:    O(n) linear when array is already sorted
 * Average: O(n^2) quadratic
 * Worst:   O(n^2) quadratic when the array is reverse sorted
 */

module.exports = { insertionSort };

function insertionSort(nums) {
  for(let i=1; i<arr.length;i++)
  {
      if (i > 0){
          let leftVal = arr[i-1]
          let selectVal = arr[i]
      }
      if (leftVal && leftVal > selectVal)
      {
          let j = i-1
          while (arr[i] < arr[j] && j >= 0 ){
              temp = arr[i]
              arr[i] = arr[j]
              arr[j] = temp
              j--
          }
          
      }
      return arr;
  }
}


function insertionSort(arr){
for(let i= 1 ; i< arr.length;i++)
    {
        let index =i;
        while(index > 0 && arr[index] < arr[index-1])
        {
            let temp =arr[index];
            arr[index] = arr[index - 1]
            arr[index-1] = temp;
            index--;
        }
    }
    return arr
}
console.log(insertionSort([3,2,9,6,1]));
