// Time complexcity: BigO(N logN)
// Space complexcity: BigO(N)

let t = "anagram";
let s = "nagaram";

function validAnagram(t: string, s: string) {
  if (t.length !== s.length) return false;

  let s1 = t.split("").sort().join("");
  let s2 = s.split("").sort().join("");

  return s1 === s2 ? true : false;
}

console.log(validAnagram(t, s));
