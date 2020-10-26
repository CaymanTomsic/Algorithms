/* ******************************************************************************** */
/*
  String: ionIs Rotat (Is Rotation)

  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD"
const strB1 = "CDAB"
// const expected1 = true
// // Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

// const strA2 = "ABCD"
// const strB2 = "CDBA"
// const expected2 = false
// // Explanation: all same letters in 2nd string, but out of order

function isRotation(s1, s2) {
    var temp1 = [];
    for (var i = s1.length-1; i >= 0; i--){
        var temp2 = []
        temp1.push(s1[i])
        for( var j = 0; j < i; j++){
            temp2.push(s1[j]);
        }
        console.log(String(temp1.push)
        // console.log(String(temp1))
        if (String(temp2 + temp1) == s2){
            console.log(true)
            return true;
        }
    }
    return false
}

isRotation(strA1, strB1);