/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {


    const findPosition = (isStart) => {
        let left = 0, right = nums.length - 1, posiIndex = -1;

        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            if (nums[middle] === target) {
                posiIndex = middle;
                if (isStart) {
                    right = middle - 1;
                } else {
                    left = middle + 1;
                }
            } else if (nums[middle] < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }

        }
        return posiIndex;

    }

    const startPosition = findPosition(true)
    const endPosition = findPosition(false);
    return [startPosition, endPosition]
}

