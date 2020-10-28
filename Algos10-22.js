/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6]
const searchNum1 = 4
const expected1 = false

const nums2 = [4, 5, 6, 8, 12]
const searchNum2 = 5
const expected2 = true

const nums3 = [3, 4, 6, 8, 12]
const searchNum3 = 3
const expected3 = true

// add params if needed for recursion
function binarySearch(sortedNums, searchNum) {
  if (sortedNums.length<=1 && numCheck != searchNum){
    return false
  }
  console.log(sortedNums.length)
  const half = Math.ceil(sortedNums.length/2)
  console.log(half)
  var numCheck = sortedNums[half-1];
  console.log(numCheck)
  const firstHalf = sortedNums.splice(0, half)
  const secondHalf = sortedNums.splice(-half)
  console.log(firstHalf)
  console.log(secondHalf)
  if (numCheck == searchNum){
    return true
  }else if (searchNum<numCheck){
    return binarySearch(firstHalf, searchNum)
  }else{
    return binarySearch(secondHalf, searchNum)
  }
}

console.log(binarySearch(nums3, searchNum3))

/* ******************************************************************************** */
/*
  Recursively reverse a string
  helpful methods:

  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc"
// const expected1 = "cba";

// const str2 = "";
// const expected2 = "";

function reverseStr(str) {
    console.log(str)
    if (str == ""){
        return ""
    }
    else{
        strArr = str.split('');
        console.log(strArr);
        arrNew=[]
        arrNew.push(strArr[strArr.length-1]);
        console.log(arrNew)
        strNew = arrNew.toString();
        console.log(strNew)
        strArr.pop();
        console.log(strArr)
        if (strArr.length < 1){
          return strNew
        }
        else{
          strUpdate = strArr.join("");
          console.log(strUpdate)
          return strNew + reverseStr(strUpdate);
        }
}
}

console.log(reverseStr(str1))