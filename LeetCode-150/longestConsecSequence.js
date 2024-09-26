/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let numToSet = new Set(nums);
    let longestConsecutiveStreak = 0;

    for (let i of nums) {
        if (!numToSet.has(i - 1)) {
            let currentNum = i;
            let currentStreak = 1;

            while (numToSet.has(currentNum + 1)) {
                currentNum = currentNum + 1;
                currentStreak = currentStreak + 1;
            }
            longestConsecutiveStreak = Math.max(longestConsecutiveStreak, currentStreak);
        }
    }

    return longestConsecutiveStreak;




















};