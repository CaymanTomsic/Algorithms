/**
 * @param {number[]} arr
 * @returns {number[]} the original array
 */

function minToFront(arr) {
    var min= arr[0];
    var index = 0;
    for (var i=1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
            index = i;
        }
    }
    for(var i=index-1; i>=0; i--){
      arr[i+1]=arr[i];
    }
    arr[0] = min;


  return arr;
}
  
  var originalArray = [4, 6, 2, 8, 9];
  var result = minToFront(originalArray);
  
  console.log(originalArray === result);
  console.log(originalArray); // should log [2, 4, 6, 8, 9]
  
  
  /**
   * @param {array} arr an array of elements
   * @param {number} idx the index of the element to remove
   * @returns {any} the removed element
   */
  
  function removeAt(arr, idx) {
    var temp = arr[idx];
    for(var i = idx; i < arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr.pop()
    return temp
  }
  
  var secondArray = [1, 2, 3, 4];
  console.log(removeAt(secondArray, 1)); // should log 2
  
  console.log(secondArray); // should log [1, 3, 4]