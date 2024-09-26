/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    let mergedIntervals = [sortedIntervals[0]];

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