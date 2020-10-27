// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given[10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

var arr1 = [10, 15, 3, 7]
var k1 = 17

function addToK(arr, k){
    var targetNum = k
    for (var i = 0; i < arr.length; i++){
        var numTest = arr[i];
        for (var j = i + 1; j < arr.length; j++){
            if (numTest + arr[j] == targetNum){
                return true;
            }
        }
    }
    return false;
}

console.log(addToK(arr1, k1));


const numList = [10, 7, 15, 3,]
const k = 17

function sumNum(numList,k) {
    let i = 0
    let j = numList.length - 1
    while (numList[i] + numList[j] != k) {
        if (i = numList.length - 1) {
            return (false);
        } else {
            if (numList[i] + numList[j] != k) {
                j--;
            } else if (j == i) {
                i++;
            }
        }
    }
    return (true)
}

console.log(sumNum(numList,k))


// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was[1, 2, 3, 4, 5], the expected output would be[120, 60, 40, 30, 24]. If our input was[3, 2, 1], the expected output would be[2, 3, 6].

// Follow-up: what if you can't use division?

arr2 = [1, 2, 3, 4, 5];
arr3 = [3, 2, 1];

function arrProduct(arr){
    newArr= []
    for (var i = 0; i < arr.length; i++){
        newNum = 1;
        for (var j = 0; j < arr.length; j++){
            if (j != i){
                newNum = newNum * arr[j];
            }
        }
        newArr.push(newNum);
    }
    return newArr;
}

console.log(arrProduct(arr2));
console.log(arrProduct(arr3));