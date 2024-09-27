/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let result = [];
    let index = 0;
    const start = 0, end = 1;


    while (index < intervals.length && intervals[index][end] < newInterval[start]) {
        result.push(intervals[index]);
        index++;
    }

    while (index < intervals.length && intervals[index][start] <= newInterval[end]) {
        newInterval[start] = Math.min(newInterval[start], intervals[index][start]);
        newInterval[end] = Math.max(newInterval[end], intervals[index][end]);
        index++;
    }
    result.push(newInterval);

    while (index < intervals.length) {
        result.push(intervals[index])
        index++;
    }
    return result;
};