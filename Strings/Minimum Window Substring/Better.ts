// Time complexcity : BigO(n)
// Space complexcity : BigO(1)

function smallestWindow(s, p) {
  let len1 = s.length;
  let len2 = p.length;

  if (len1 < len2) {
    return "-1";
  }

  let countP = new Array(256).fill(0);
  let countS = new Array(256).fill(0);

  // Store occurrence of characters of P
  for (let char of p) {
    countP[char.charCodeAt(0)]++;
  }

  let start = 0;
  let startIdx = -1;
  let minLen = Infinity;
  let count = 0;

  for (let j = 0; j < len1; j++) {
    // Count occurrence of characters of string S
    countS[s.charCodeAt(j)]++;

    // If S's char matches with P's char, increment count
    if (
      countP[s.charCodeAt(j)] !== 0 &&
      countS[s.charCodeAt(j)] <= countP[s.charCodeAt(j)]
    ) {
      count++;
    }

    // If all characters are matched
    if (count === len2) {
      // Try to minimize the window
      while (
        countS[s.charCodeAt(start)] > countP[s.charCodeAt(start)] ||
        countP[s.charCodeAt(start)] === 0
      ) {
        if (countS[s.charCodeAt(start)] > countP[s.charCodeAt(start)]) {
          countS[s.charCodeAt(start)]--;
        }
        start++;
      }

      // Update window size
      let length = j - start + 1;
      if (minLen > length) {
        minLen = length;
        startIdx = start;
      }
    }
  }

  if (startIdx === -1) {
    return "-1";
  }

  return s.substring(startIdx, startIdx + minLen);
}

let s = "timetopractice";
let p = "toc";
let result = smallestWindow(s, p);
console.log(result);
