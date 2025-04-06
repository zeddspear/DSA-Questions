// * Time Complexity: O(n * m log m) - where n is number of strings, m is average string length
//  * Space Complexity: O(n * m) - to store all strings in the output

let strs: string[] = ["eat", "tea", "tan", "ate", "nat", "bat"];

// Groups anagrams using a map with sorted strings as keys
function groupAnagrams(strs: string[]) {
  let map = new Map<string, string[]>(); // Maps sorted strings to anagram groups

  for (let str of strs) {
    const sorted = str.split("").sort().join(""); // Normalize string by sorting chars
    if (!map.has(sorted)) {
      map.set(sorted, []);
    } // Initialize group if new anagram
    map.get(sorted)!.push(str); // Add original string to its group
  }

  return Array.from(map.values()); // Convert map values to array of groups
}

console.log(groupAnagrams(strs)); // [["eat","tea","ate"],["tan","nat"],["bat"]]
