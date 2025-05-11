// Time Complexity: O(n*26), the outer loop runs O(n) time, and the inner loop runs in O(26) in the worst case (considering all unique characters), resulting in a total time complexity of O(n*26).
// Auxiliary Space: O(1), vis array has size 26 which is constant.

let str = "geeksforgeeks";

function findLongestSubString(str: string) {
  const n = str.length;
  let maxLen = 0;
  let requiredString = "";

  for (let i = 0; i < n; i++) {
    const isVisited = new Array(26).fill(false);
    for (let j = i; j < n; j++) {
      const index = str[j].charCodeAt(0) - "a".charCodeAt(0);
      if (isVisited[index]) {
        // Found a duplicate, break inner loop
        break;
      } else {
        isVisited[index] = true;
        // Update maxLen and requiredString if longer substring found
        const currentLength = j - i + 1;
        if (currentLength > maxLen) {
          maxLen = currentLength;
          requiredString = str.slice(i, j + 1);
        }
      }
    }
  }

  return {
    lengthOfLongestSubstring: maxLen,
    string: requiredString,
  };
}

console.log(findLongestSubString(str));
