// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;

// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected1 = [0, 2];

/**
 * Finds the numbers that add up to @targetSum
 * @param  {Array<number>} nums - Any order
 * @param  {number} targetSum
 * @return {Array<number>}
 *         The two indexes of the numbers in @nums that add up to @targetSum
 * Time:   O(...)
 * Space:  O(...)
 */

function twoSum(nums, targetSum) {
  let exp = [];
  let i = 0
  let j = 1
  let sum = nums[i] + nums[j];
  while(i < nums.length){
    if (j > nums.length-1){
      i++
      j= i + 1
      sum = nums[i] + nums[j]
    }
    else if (sum == targetSum){
      exp = [nums[i], nums[j]];
      return exp
    }
    else {
      j++
      sum = nums[i] + nums[j]
    }
  }    
}

console.log(twoSum(nums1, targetSum1))

module.exports = { twoSum };
