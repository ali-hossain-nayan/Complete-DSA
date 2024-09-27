/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);//sorting with the start time
    let mergedIntervals = [sortedIntervals[0]];//initialize merged array with the first intervals

    for (let i = 1; i < sortedIntervals.length; i++) {
        let lastInterval = mergedIntervals[mergedIntervals.length - 1];

        if (sortedIntervals[i][0] <= lastInterval[1]) {
            lastInterval[1] = Math.max(sortedIntervals[i][1], lastInterval[1])
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