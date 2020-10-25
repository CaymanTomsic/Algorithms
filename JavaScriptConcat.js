/**
 * @param {array} arr1
 * @param {array} arr2
 * @returns {array} a new array with the elements from both concatenated
 * NOTE: You can use push.
 */

function concat(arr1, arr2) {
    arrNew= [];
    for (var i = 0; i < arr1.length; i++){
        arrNew.push(arr1[i]);
    }
    for (var i = 0; i < arr2.length; i++){
        arrNew.push(arr2[i]);
    }
    return arrNew;
    }
    console.log(concat([1, 2, 3], [4, 5, 6]));
  // should log [1, 2, 3, 4, 5, 6]

  /**
   * @param {array} arr
   * @returns {array} the same (modified) array
   */
  
  function reverseInPlace(arr) {
    for (var i = 0; i < arr.length/2; i++){
        var index = arr.length - 1 - i;
        var temp = arr[i];
        arr[i]=arr[index];
        arr[index] = temp;
    }
    return arr;
  }
  
  var originalArray = [1, 2, 3, 4, 5];
  var result = reverseInPlace(originalArray);
  
  console.log(originalArray === result); // should log true
  console.log(originalArray);
  // should log [5, 4, 3, 2, 1]