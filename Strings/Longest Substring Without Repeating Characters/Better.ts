// Time Complexity: O(n)
// Auxiliary Space: O(1), vis array has size 26 which is constant.

let str = "geeksforgeeks";

function findLongestSubString(str: string) {
  let n = str.length;

  let isVisited = new Array(26).fill(false);

  let maxLen = 0;
  let requiredString = "";

  let left = 0;
  let right = 0;

  while (right < n) {
    while (isVisited[str[right].charCodeAt(0) - "a".charCodeAt(0)] === true) {
      isVisited[str[left].charCodeAt(0) - "a".charCodeAt(0)] = false;
      left++;
    }

    isVisited[str[right].charCodeAt(0) - "a".charCodeAt(0)] = true;
    let stringLength = Math.max(maxLen, right - left + 1);

    if (stringLength > maxLen) {
      maxLen = stringLength;
      requiredString = str.slice(left, right + 1);
    }
    right++;
  }

  return {
    lengthOfLongestSubstring: maxLen,
    string: requiredString,
  };
}

console.log(findLongestSubString(str));
