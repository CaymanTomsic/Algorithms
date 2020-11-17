/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if @S and @T are equal after the backspace
 * characters "#" are processed.
 * @param   {string} S
 * @param   {string} T
 *          @S and @T contain "#" chars which represent
 *          a backspace that needs to be processed.
 * @return  {boolean}
 * - Time:    O()
 * - Space:   O()
 */
function backspaceStringCompare(S, T) {
  newS=[];
  newT=[];
  for (i=0; i < S.length; i++){
    if (S[i] == '#' && T[i] == '#'){
      newS.pop();
      newT.pop();
    }
    else if (S[i] == '#'){
      newS.pop();
      newT.push(T[i]);
    }
    else if (T[i] == '#'){
      newT.pop();
      newS.push(S[i]);
    }
    else{
      newT.push(T[i]);
      newS.push(S[i]);
    }
  };
  console.log(newS, newT);
  return (newS.toString() == newT.toString());
}

console.log(backspaceStringCompare(S3, T3));