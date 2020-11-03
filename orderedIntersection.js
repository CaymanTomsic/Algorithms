/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (deduped).

  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

/**
 * Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * @param   {Array<number>} sortedA
 * @param   {Array<number>} sortedB
 *          @sortedA and @sortedB are both sorted multisets
 *          (multi in that it can contain multiple dupes)
 * @return  {Array<number>}
 *          The sorted set intersection: a new array that
 *          is sorted and contains only the shared values
 *          between the two arrays deduped
 * Time:    O(...)
 * Space:   O(...)
 */

function orderedIntersection(sortedA, sortedB) {
  let idxA = 0,
    idxB = 0;

  const intersection = [];

  while (idxA < sortedA.length && idxB < sortedB.length) {
    if (sortedA[idxA] === sortedB[idxB]) {
      if (intersection[intersection.length - 1] !== sortedA[idxA]) {
        // add it only if the last num added isn't the same num
        intersection.push(sortedA[idxA]);
      }

      idxA++;
      idxB++;
    } else if (sortedA[idxA] < sortedB[idxB]) {
      idxA++;
    } else {
      idxB++;
    }
  }
  return intersection;
}

// longer but also works:
function orderedIntersection(sortedA, sortedB) {
  let newArr = [];
  for(let i=0; i < sortedA.length; i++){
    for(let j=0; j < sortedB.length; j++){
      if (sortedA[i] == sortedB[j]){
        newArr.push(sortedA[i]);
      }
    }
  }
  console.log(newArr);
  let finalArr = [...new Set(newArr)];
  return finalArr;
}

console.log(orderedIntersection(numsA1, numsB1));

module.exports = { orderedIntersection };
