/* 
  Given a string, containing letters, single digit ints, and question marks
  return whether or not there are exactly 3 question marks between EVERY two ints that add up to 10
    - if there are no two ints that add up to 10, return false

  Helpful functions:
    parseInt(char) => NaN or the string parsed to an int
    isNaN(x) => true or false
      - need to use isNaN if you want to know if something is NaN
      - the number 0 is falsy
      - NaN is falsy
*/

const str1 = "aa6?9";
const expected1 = false;

const str2 = "acc?7??sss?3rr1??????5";
const expected2 = true;

const str3 = "?3?d?dad?7??????3";
const expected3 = true;

const str4 = "7??????3";
const expected4 = false;
// Explanation: too many question marks

/**
 * Determines if there are exactly 3 "?" chars between
 * EVERY two ints that add up to 10.
 * @param   {string} str
 * @return  {boolean}
 * - Time:    O()
 * - Space:   O()
 */
function questionMarks(str) {}
