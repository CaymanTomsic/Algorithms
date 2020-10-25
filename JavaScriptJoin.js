/**
 * @param {array} arr an array of elements
 * @param {string} separator string to separate the elements with
 * @returns {string} a string with all the elements "glued" by the separator
 */

function join(arr, separator = ', ') {
    var output = "";
    for (var i = 1; i < arr.length; i++){
        output = arr[0] + separator + arr[i];
    }
    return output;
    }
  
  console.log(join(['this', 'that']));
  // should log 'this, that'
  
  console.log(join(['something', 'else'], '||'));
  // should log 'something||else'
  
  
  /**
   * @param {number[]} arr an array of numbers
   * @returns {number|null} the second largest number
   */
  
    function secondLargest(arr) {
        var max1 = arr[0];
        var max2 = arr[0];
        var temp = 0;
        if (arr.length > 1) {
            for (var i = 1; i < arr.length; i++) {
                if (max1 < arr[i]) {
                temp = max1;
                max1 = arr[i];
                }
                if (max2 < arr[i] && max2 < max1) {
                max2 = temp;
                }
            }
        }
        else {
            return null;
        }
        if (max1 == max2){
            return null;
        }
        return max2;
        }  
  console.log(secondLargest([3, 5, 1, 7, 10])); // should log 7

  console.log(secondLargest([4, 4, 4])); // should log null