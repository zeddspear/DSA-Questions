// Time Complexity: O(n log n)
// Space Complexity: O(n)

let intervals: Array<Array<number>> = [
  [1, 4],
  [4, 5],
];

function mergeIntervals(intervals: Array<Array<number>>) {
  if (intervals.length === 0) return []; // Handle empty input

  // Sort intervals based on the start value
  intervals.sort((a, b) => a[0] - b[0]);

  let ansArr = []; // Array to store the merged intervals
  let currentInterval = intervals[0]; // Initialize with the first interval
  ansArr.push(currentInterval); // Add the first interval to the result

  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = currentInterval;
    const [nextStart, nextEnd] = intervals[i];

    if (currentEnd >= nextStart) {
      // If the current interval overlaps with the next interval, merge them
      currentInterval[1] = Math.max(currentEnd, nextEnd); // Update the end of the current interval
    } else {
      // If there is no overlap, add the next interval to the result
      currentInterval = intervals[i];
      ansArr.push(currentInterval);
    }
  }

  return ansArr; // Return the merged intervals
}

console.log(mergeIntervals(intervals));
