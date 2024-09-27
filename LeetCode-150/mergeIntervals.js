/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const start = 0, end = 1;
    let sortedIntervals = intervals.sort((a, b) => a[start] - b[start]);//sorting with the start time
    let mergedIntervals = [sortedIntervals[start]];//initialize merged array with the first intervals

    for (let i = 1; i < sortedIntervals.length; i++) {
        let lastInterval = mergedIntervals[mergedIntervals.length - 1];

        if (sortedIntervals[i][start] <= lastInterval[end]) {
            lastInterval[end] = Math.max(sortedIntervals[i][end], lastInterval[end])
        }
        else {
            mergedIntervals.push(sortedIntervals[i])
        }
    }
    return mergedIntervals;

};


// Two intervals overlap if the start of the current interval is less than or equal to the end of the previous one.
// If they overlap, merge them into a single interval by taking the minimum start time and the maximum end time.
// If they don't overlap, add the previous interval to the result list, and move to the next one.