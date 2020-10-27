/*
  Recursively sum an arr of ints
*/

// const nums1 = [1, 2, 3]
// const expected1 = 6

// add params if needed for recursion

// function sumArr(nums) {
  
// }

var sum = 0
function sumArr(nums) {
    if (nums.length == 0){
        return sum
    }
    else{
        sum += nums[nums.length-1]
        nums.pop()
        return sumArr(nums)
    }
}

console.log(sumArr(nums1))

/* ******************************************************************************** */

/*
  Recursive Sigma

  Input: integer
  Output: sum of integers from 1 to Input integer

*/

const num1 = 5
// const expected1 = 15
// // Explanation: (1+2+3+4+5)

const num2 = 2.5
// const expected2 = 3
// // Explanation: (1+2)

const num3 = -1
// const expected3 = 0

var sum1 = 0
function recursiveSigma(n) {
    n = Math.floor(n)
    if (n < 1){
        return sum1
    }
    else{
        sum1 += n
        n--
        return recursiveSigma(n)
    }
}