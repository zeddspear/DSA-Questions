// Time Complexity: O(n log n)
// Space Complexity: O(1) // if we include sorting then O(log n)

let intervals: Array<Array<number>> = [
  [1, 3],
  [2, 6],
  [8, 10],
  [11, 18],
  [19, 22],
  [21, 26],
];

function mergeIntervals(intervals: Array<Array<number>>) {
  if (intervals.length === 0) return []; // Handle empty input

  // Sort intervals based on the start value
  intervals.sort((a, b) => a[0] - b[0]);

  let index = 0; // Pointer to track the last merged interval in the array

  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[index];
    const [nextStart, nextEnd] = intervals[i];

    if (currentEnd >= nextStart) {
      // If the current interval overlaps with the next interval, merge them
      intervals[index][1] = Math.max(currentEnd, nextEnd); // Update the end of the current interval
    } else {
      // If there is no overlap, move the pointer to the next interval
      index++;
      intervals[index] = intervals[i]; // Update the current interval
    }
  }

  // Return the merged intervals (only the first `index + 1` intervals are valid)
  return intervals.slice(0, index + 1);
}

console.log(mergeIntervals(intervals));
