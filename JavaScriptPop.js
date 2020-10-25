/**
 *  @param {array} arr an array of elements
 *  @returns {any} the removed element
 */

function pop(arr) {
    console.log("pop:" + arr[arr.length-1]);
    arr.length -= 1;
    console.log("array values:" + arr);
    }
  
pop([1,2]);

    var arrayToPop = [1, 2];
    var popResult = pop(arr);
  
    console.log(popResult); // should log 2
    console.log(arrayToPop); // should log [1]
  
  
  /**
   * @param {array} arr an array of elements
   * @returns {any} the removed element
   */
  
    function popFront(arr) {
        console.log("pop:" + arr[0]);
        for (var i=0; i < arr.length; i++){
            arr[i]=arr[i + 1];
        }
        arr.length -= 1;
        console.log("array values:" + arr);
    }
    popFront([1,2,3,4]);

    var arrayToPopFront = [1, 2, 3, 4];
    var popFrontResult = popFront(arrayToPopFront);
  
    console.log(popFrontResult); // should log 1
    console.log(arrayToPopFront); // should log [2, 3, 4]
  