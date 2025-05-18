// Time complexcity : BigO(n^3)
// Space complexcity: BigO(n)

let str1 = "timetopractice";
let str2 = "toc";

function containsAllCharacters(t: string, currentStr: string) {
  const count = new Array(266).fill(0);
  for (const ch of t) {
    count[ch.charCodeAt(0)]++;
  }

  for (const ch of currentStr) {
    if (count[ch.charCodeAt(0)]) {
      count[ch.charCodeAt(0)]--;
    }
  }

  return count.every((c) => c === 0);
}

function minWindow(s: string, t: string) {
  let minLength = Infinity;

  let minString = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const currentStr = s.slice(i, j + 1);

      if (containsAllCharacters(t, currentStr)) {
        if (minLength > currentStr.length) {
          minLength = currentStr.length;
          minString = currentStr;
        }
      }
    }
  }

  return { minString, minLength };
}

console.log(minWindow(str1, str2));
