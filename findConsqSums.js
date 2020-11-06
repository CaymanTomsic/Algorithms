// Interview Algo given to alumni

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

// Bonus:
const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

/**
 * Finds all the sets of consecutive numbers that add up to the @targetSum
 * @param {Array<number>} nums Any order.
 * @param {number} targetSum
 * @return {Array<Array<number>>} 2d array where each nested array
 *  is a set of consecutive numbers that add up to the @targetSum
 *  Consecutive in this context means the numbers whose indexes are one after the other only.
 * Time:   O(...)
 * Space:  O(...)
 */
function findConsqSums(nums, targetSum) {
  let validArr =[]
  for (let i=0; i < nums.length; i++){
    let sum = nums[i];
    let sumArr = [nums[i]];
    let j= i + 1;
    while(sum <= targetSum && j < nums.length){
      if (sum == targetSum){
        let sumArrCopy = [...sumArr];
        validArr.push(sumArrCopy);
      }
      sumArr.push(nums[j]);
      sum += nums[j];
      j++;
    }
  }
  return validArr;
}

console.log(findConsqSums(nums2, sum2));

module.exports = { findConsqSums };
