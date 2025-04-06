// Time Complexity: O(n² * m log m) - where n is number of strings, m is average string length
// Space Complexity: O(n * m) - to store all strings in the output

let strs: string[] = ["eat", "tea", "tan", "ate", "nat", "bat"];

/**
 * Checks if two strings are anagrams and adds to group if they are
 * @param str1 First string to compare
 * @param str2 Second string to compare
 * @param intervalArr Array to store matching anagrams
 * @returns Boolean indicating if strings are anagrams
 */
function isAnagram(str1: string, str2: string, intervalArr: string[]) {
  // Sort both strings to compare their character composition
  let sortStr1 = str1.split("").sort().join("");
  let sortStr2 = str2.split("").sort().join("");

  if (sortStr1 === sortStr2) {
    // If anagram, add to current group
    intervalArr.push(str2);
    return true;
  }
  return false;
}

/**
 * Groups anagrams together in the input array
 * @param strs Array of strings to group
 * @returns Array of grouped anagrams
 */
function groupAnagrams(strs: string[]) {
  let ansArr = []; // Final array to hold grouped anagrams
  // Tracks which strings have already been grouped
  let checkIfItsPartOfAGroup = Array(strs.length).fill(false);

  // Handle edge case of single string input
  if (strs.length === 1) {
    ansArr.push([strs[0]]);
    return ansArr;
  }

  // Outer loop: process each string as potential group starter
  for (let i = 0; i < strs.length; i++) {
    let intervalArr = []; // Temporary array for current anagram group

    // Skip if this string was already grouped
    if (checkIfItsPartOfAGroup[i] === true) {
      continue;
    }

    // Start new group with current string
    intervalArr.push(strs[i]);

    // Inner loop: compare with all subsequent strings
    for (let j = i + 1; j < strs.length; j++) {
      const isAnagramBool = isAnagram(strs[i], strs[j], intervalArr);

      if (isAnagramBool) {
        // Mark both strings as grouped
        checkIfItsPartOfAGroup[i] = true;
        checkIfItsPartOfAGroup[j] = true;
      }
    }

    // Add completed group to final array
    ansArr.push(intervalArr);
  }

  return ansArr;
}

console.log(groupAnagrams(strs));
