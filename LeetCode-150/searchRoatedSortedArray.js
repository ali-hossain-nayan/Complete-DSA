/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (target === nums[middle]) return middle;

        //if right side sorted 
        if (nums[right] > nums[middle]) {
            if (nums[middle] < target && target <= nums[right]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        } else {
            if (nums[middle] > target && target >= nums[left]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
    }
    return -1;


};