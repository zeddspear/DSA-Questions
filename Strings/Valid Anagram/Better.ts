// Time complexity: BigO(N)
// Space complexity: BigO(N)

let t = "anagram";
let s = "nagaram";

function validAnagram(t: string, s: string) {
  // If the lengths of the two strings are different, they cannot be anagrams.
  if (t.length !== s.length) return false;

  // Create a hash map (object) to store the frequency of each character in string `t`.
  const hashMap = {};

  // Iterate through each character in string `t`.
  for (let ch of t) {
    // For each character, increment its count in the hash map.
    // If the character doesn't exist in the hash map, initialize it with 0 and then add 1.
    hashMap[ch] = (hashMap[ch] || 0) + 1;
  }

  // Iterate through each character in string `s`.
  for (let ch of s) {
    // For each character, decrement its count in the hash map.
    // If the character doesn't exist in the hash map, initialize it with 0 and then subtract 1.
    hashMap[ch] = (hashMap[ch] || 0) - 1;
  }

  // Iterate through the hash map to check if all character counts are zero.
  for (let key in hashMap) {
    // If any character count is not zero, the strings are not anagrams.
    if (hashMap[key] !== 0) {
      return false;
    }
  }

  // If all character counts are zero, the strings are anagrams.
  return true;
}

console.log(validAnagram(t, s)); // Output: true
