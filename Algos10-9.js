/*
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionarys to represent current inventory,
  update the quantities of the current inventory

  if the item doesn't exist in current inventory, add it to the inventory

  return the current inventory after updating it.
*/

// const newInv1 = [
//   { name: "Grain of Rice", quantity: 9000 },
//   { name: "Peanut Butter", quantity: 50 },
//   { name: "Royal Jelly", quantity: 20 },
// ]
// const currInv1 = [
//   { name: "Peanut Butter", quantity: 20 },
//   { name: "Grain of Rice", quantity: 1 },
// ]
// const expected1 = [
//   { name: "Peanut Butter", quantity: 70 },
//   { name: "Grain of Rice", quantity: 9001 },
//   { name: "Royal Jelly", quantity: 20 },
// ]

// const newInv2 = []
// const currInv2 = [{ name: "Peanut Butter", quantity: 20 }]
// const expected2 = [{ name: "Peanut Butter", quantity: 20 }]

// const newInv3 = [{ name: "Peanut Butter", quantity: 20 }]
// const currInv3 = []
// const expected3 = [{ name: "Peanut Butter", quantity: 20 }]

function updateInventory(newInv, currInv) {
    let i, result, inventoryDictionary, inventoryItem;
    inventoryDictionary = {};
    // build a dictionary of the current inventory mapping names to quantities
    for (i = 0; i < currInv.length; i++){
      inventoryItem = currInv[i];
      inventoryDictionary[inventoryItem["name"]] = inventoryItem["quantity"]; 
    }
    // Add the new inventory items to the dictionary
    for (i = 0; i < newInv.length; i++){
      inventoryItem = newInv[i];
      if (!(inventoryItem["name"] in inventoryDictionary)){
        inventoryDictionary[inventoryItem["name"]] = 0;
      }
      inventoryDictionary[inventoryItem["name"]] += inventoryItem["quantity"];
    }
    result = [];
    // Enumerate through the inventory dictionary converting the data back into the expected format
    for (const name in inventoryDictionary){
      result.push({
        "name" : name,
        "quantity" : inventoryDictionary[name] 
      });
    }
    return result;
  }
  
  // const test = updateInventory(newInv3, currInv3)
  // console.log(test)
  
  /* ******************************************************************************** */
  
  /*
    An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
    typically using all the original letters exactly once.
  
    Is there a quick way to determine if they aren't an anagram before spending more time?
  
    Given two strings
    return whether or not they are anagrams
  */
  
  // const strA1 = "yes"
  // const strB1 = "eys"
  // const expected1 = true
  
  // const strA2 = "yes"
  // const strB2 = "eYs"
  // const expected2 = true
  
  // const strA3 = "no"
  // const strB3 = "noo"
  // const expected3 = false
  
  // const strA4 = "silent"
  // const strB4 = "listen"
  // const expected4 = true
  
  function isAnagram(s1, s2) {
    // if the strings are not the same length, return false
    if (s1.length != s2.length){
      return false
    }
    let i, frequencyTable;
    frequencyTable = {};
    // build a frequency table of the characters in s1
    for (i = 0; i < s1.length; i++){
      if (s1[i] in frequencyTable){
        frequencyTable[s1[i]]++;
      }
      else {
        frequencyTable[s1[i]] = 1;
      }
    }
    // go through s2 and find that all of the characters and counts are the same
    for (i = 0; i < s2.length; i++){
      if (s2[i] in frequencyTable && frequencyTable[s2[i]] > 0){
        frequencyTable[s2[i]]--;
      }
      else {
        return false;
      }
    }
    return true;
  }
  
  // var test1 = isAnagram(strA4, strB4)
  // console.log(test1)
  
  /* ******************************************************************************** */
  /*
    Given a string that may have extra spaces at the start and the end,
    return a new string that has the extra spaces at the start and the end trimmed (removed)
    do not remove any other spaces.
  */
  
  // const str1 = "   hello world     "
  // const expected1 = "hello world"
  
  function trim(str) {
    let i, leftBound, rightBound;
    // iterative left-to-right to find the position of the first non-space character
    for (i = 0; i < str.length; i++){
      if (str[i] != " "){
        leftBound = i;
        break;
      }
    }
    // iterate right-to-left to find the position of the last non-space character
    for (i = str.length - 1; i > leftBound; i--){
      if (str[i] != " "){
        rightBound = i + 1;
        break;
      }
    }
    // output a substring from the leftBound inclusive to the rightBound exclusive
    return str.substring(leftBound, rightBound);
  }
  
  // var test = trim(str1)
  // console.log(test)